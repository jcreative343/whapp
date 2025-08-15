import { useWindowSize } from '@react-hook/window-size';
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { createTrackPlan } from "../graphql/mutations";

const client = generateClient();

const weekLabels = [
  "Update 1",
  "Update 2",
  "Update 3",
  "Update 4",
  "Update 5",
  "Update 6",
  "Update 7",
  "Update 8",
];

const moodOptions = [
  { label: "😊", score: 2 },
  { label: "😐", score: 1 },
  { label: "☹️", score: 0.5 },
];

const frequencyOptions = [
  "1x Per Day",
  "1x Per Week",
  "2x Per Week",
  "3x Per Week",
  "5x Per Week",
  "1x Per Month",
  "2x Per Month",
  "3x Per Month",
  "1x Per Year",
  "2x Per Year",
  "1x Per Quarter",
];
function getFrequencyPeriodLabel(frequency) {
  if (!frequency) return "week";

  const lower = frequency.toLowerCase();
  if (lower.includes("day")) return "day";
  if (lower.includes("week")) return "week";
  if (lower.includes("month")) return "month";
  if (lower.includes("year")) return "year";
  if (lower.includes("quarter")) return "quarter";

  return "week";
}

const updateMutation = `
  mutation UpdateTrackPlan($input: UpdateTrackPlanInput!) {
    updateTrackPlan(input: $input) {
      id
      Frequency
      ActionNote
      Percentage
    }
  }
`;

const bounceAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;



const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function PercentageWheel({ percentage }) {
  const progress = Math.min(Math.max(percentage, 0), 100);
  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  // Determine color based on percentage
  let strokeColor = "#cc4444"; // red default
  if (progress >= 80) {
    strokeColor = "#44cc44"; // green
  } else if (progress >= 70) {
    strokeColor = "#cccc44"; // yellow
  }

  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      aria-label={`Progress: ${progress}%`}
      role="img"
    >
      {/* Background circle */}
      <circle
        cx="60"
        cy="60"
        r={RADIUS}
        stroke="#e6e6e6"
        strokeWidth="12"
        fill="none"
      />
      {/* Progress arc */}
      <circle
        cx="60"
        cy="60"
        r={RADIUS}
        stroke={strokeColor}
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={dashOffset}
        style={{
          transition: "stroke-dashoffset 0.6s ease",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="30"
        fontWeight="600"
        fill="#004080"
        fontFamily="Arial, sans-serif"
      >
        {progress}%
      </text>
    </svg>
  );
}

const fireConfettiBurst = () => {
  confetti({
    particleCount: 400,
    spread: 500,
    origin: { y: 0.6 },
    zIndex: 9999,
  });
};




export default function TrackProgress() {
  const [userId, setUserId] = useState("");
  const [plans, setPlans] = useState([]);
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [localUpdates, setLocalUpdates] = useState({});
  const [bouncingEmoji, setBouncingEmoji] = useState({});

  // For editing frequency and note
  const [editingPlanId, setEditingPlanId] = useState(null);
  const [tempFrequency, setTempFrequency] = useState("");
  const [tempNote, setTempNote] = useState("");
  const [discontinuedPlans, setDiscontinuedPlans] = useState([]);
  const [successfulPlans, setSuccessfulPlans] = useState([]);
  const [viewFilter, setViewFilter] = useState("discontinued"); // default view at bottom
  const [completionModal, setCompletionModal] = useState(null); // { plan, percent }
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();
  const [encouragementModal, setEncouragementModal] = useState(null); // { plan, percent }
  // Discontinue modal
  const [confirmDiscontinuePlanId, setConfirmDiscontinuePlanId] = useState(null);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    minHeight: "100vh",
    width: isMobile ? "100%" : 500, // full width on mobile, fixed width on desktop
    marginTop: -100,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: "center",
    color: "#003366",
  },
  planCard: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 16,
      boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      width: isMobile ? "130%" : 500, // full width on mobile, fixed width on desktop
      boxSizing: "border-box",
    },
    
 
  planTitle: { marginBottom: -6, color: "#004080" },
  planQuestion: { marginBottom: 6, fontSize: 25, fontWeight: 600, color: "#004080" },
  planText: { marginBottom: 16, fontSize: 15, color: "#004080" },
  weeksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
    marginTop: 20,
  },
  weekButton: {
    borderColor: "#ccc",
    height: 60,
    width: "100%",
    border: "2px solid #ccc",
    padding: 10,
    borderRadius: 12,
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  weekButtonActive: {
    borderColor: "#4da6ff",
    background: "#d9eaff",
    boxShadow: "0 0 10px #4da6ffaa",
  },
  weekEmoji: {
    fontSize: 36,
    lineHeight: 1,
  },
  expandedWeek: {
    marginTop: 24,
    padding: 20,
    border: "2px solid #0077cc",
    borderRadius: 14,
    backgroundColor: "#fff",
    color: "#003366",
  },
  expandedWeekTitle: {
    marginBottom: 10,
    color: "#0077cc",
  },
  moodButtons: {
    display: "flex",
    gap: 24,
    marginBottom: 16,
    justifyContent: "center",
  },
  moodButton: {
    fontSize: 48,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    padding: 0,
    transition: "transform 0.3s ease",
  },
  moodButtonSelected: {
    animation: "bounce 0.6s",
  },
  textarea: {
    width: "100%",
    padding: 12,
    fontSize: 15,
    borderRadius: 10,
    border: "1px solid #aaa",
    resize: "vertical",
    fontFamily: "inherit",
  },
  discontinueButton: {
    width: 130,
    marginTop: 12,
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "2px solid #cc4444",
    borderRadius: 12,
    color: "#cc4444",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    alignSelf: "flex-start",
  },
  editButton: {
    width: 130,
    marginTop: 12,
    padding: "8px 16px",
    backgroundColor: "#0077cc",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
    alignSelf: "flex-start",
  },
  frequencySelect: {
    marginTop: 10,
    width: "100%",
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #0077cc",
    fontSize: 14,
    color: "#003366",
  },

  modalOverlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    border: "2px solid #004080",
    borderRadius: "16px",
    padding: "30px 24px",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    animation: "fadeInScale 0.3s ease-in-out",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  modalButtonConfirm: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  modalButtonCancel: {
    backgroundColor: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },


};
  useEffect(() => {
    let didCancel = false;

    async function fetchPlansByStatus(uid, discontinued, successful) {
      const filter = {
        userId: { eq: uid },
        Discontinued: { eq: discontinued },
        Successful: { eq: successful },
      };

      const filterStr = JSON.stringify(filter).replace(/"([^"]+)":/g, '$1:');

      const query = `
      query ListTrackPlans {
        listTrackPlans(filter: ${filterStr}) {
          items {
            id
            Action
            ActionDomain
            ActionQuestion
            Frequency
            ActionNote
            Percentage
            Discontinued
            Successful
            CompletedDate
            CompletedTime
            SuccessfulDate
            DiscontinuedDate
            ${[...Array(8)]
          .map(
            (_, i) =>
              `Update${i + 1}Points\nUpdate${i + 1}Note\nUpdate${i + 1}Date`
          )
          .join("\n")}
          }
        }
      }
    `;

      try {
        const res = await client.graphql({ query });
        return res?.data?.listTrackPlans?.items || [];
      } catch (err) {
        console.error("Failed to fetch plans by status", err);
        return [];
      }
    }

    async function loadAndAutofill() {
      try {
        const user = await getCurrentUser();
        const uid = user?.userId;
        if (!uid || didCancel) return;
        setUserId(uid);

        // Step 1: Fetch active plans (not discontinued, not successful)
        const activePlans = await fetchPlansByStatus(uid, false, false);

        if (didCancel) return;

        // Step 2: Run autofill on active plans
        await autoFillAndFinalizePlans(activePlans);

        if (didCancel) return;

        // Step 3: Refetch active plans to get updated data & set state
        const refreshedActivePlans = await fetchPlansByStatus(uid, false, false);
        if (!didCancel) {
          setPlans(refreshedActivePlans);

          // Initialize localUpdates for active plans
          const initUpdates = {};
          refreshedActivePlans.forEach((plan) => {
            initUpdates[plan.id] = {};
            for (let i = 0; i < 8; i++) {
              initUpdates[plan.id][i] = {
                points: plan[`Update${i + 1}Points`] ?? null,
                note: plan[`Update${i + 1}Note`] ?? "",
              };
            }
          });
          setLocalUpdates(initUpdates);
        }
        // ✅ Check for plan that is finished but not yet marked successful/discontinued
        const planNeedingReview = refreshedActivePlans.find(needsCompletionReview);
        if (planNeedingReview) {
          const isSuccess = planNeedingReview.Percentage >= 80;

          setCompletionModal({
            plan: planNeedingReview,
            percent: planNeedingReview.Percentage,
            success: isSuccess,
          });

          if (isSuccess) {
            fireConfettiBurst();
          }
        }


        // Step 4: Fetch and set discontinued plans
        if (!didCancel) {
          const discontinued = await fetchPlansByStatus(uid, true, false);
          setDiscontinuedPlans(discontinued);
        }

        // Step 5: Fetch and set successful plans
        if (!didCancel) {
          const successful = await fetchPlansByStatus(uid, false, true);
          setSuccessfulPlans(successful);
        }
      } catch (err) {
        if (!didCancel) console.error("Error loading plans", err);
      }
    }

    loadAndAutofill();

    return () => {
      didCancel = true; // prevent state updates if component unmounts
    };
  }, []);

  const handleViewToggle = (filter) => {
    setViewFilter(filter);
  };
  const autoFillAndFinalizePlans = async (plans, onPlansUpdated) => {
    const today = new Date();
    console.log("sdsdd")
    const getIntervalLength = (frequency) => {
      if (!frequency) return 7; // default weekly
      const f = frequency.toLowerCase();
      if (f.includes("day")) return 1;
      if (f.includes("week")) return 7;
      if (f.includes("month")) return 30;
      if (f.includes("quarter")) return 90;
      if (f.includes("year")) return 365;
      return 7;
    };

    const formatDateISO = (date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

    const getPlanByIdQuery = /* GraphQL */ `
    query GetTrackPlan($id: ID!) {
      getTrackPlan(id: $id) {
        id
        Frequency
        Percentage
        Successful
        Discontinued
        CompletedDate
        CompletedTime
        ${[...Array(8)]
        .map(
          (_, i) =>
            `Update${i + 1}Points\nUpdate${i + 1}Note\nUpdate${i + 1}Date`
        )
        .join("\n")}
      }
    }
  `;
    console.log("sdsdd2")
    for (const plan of plans) {
      const start = new Date(`${plan.CompletedDate}T${plan.CompletedTime || "00:00:00"}`);
      const interval = getIntervalLength(plan.Frequency);

      const autofillPromises = [];

      for (let i = 0; i < 8; i++) {
        const dKey = `Update${i + 1}Date`;
        const pKey = `Update${i + 1}Points`;
        const nKey = `Update${i + 1}Note`;

        if (plan[dKey]) continue;

        const intervalStart = new Date(start);
        intervalStart.setDate(intervalStart.getDate() + i * interval);

        const intervalEnd = new Date(intervalStart);
        intervalEnd.setDate(intervalEnd.getDate() + interval - 1);

        if (today > intervalEnd) {
          const input = {
            id: plan.id,
            [dKey]: formatDateISO(today),
            [pKey]: 0,
            [nKey]: "Not Completed",
          };

          autofillPromises.push(
            client.graphql({ query: updateMutation, variables: { input } })
          );
        } else {
          break;
        }
      }

      if (autofillPromises.length > 0) {
        await Promise.all(autofillPromises);
      }

      // NOW: Fetch updated plan (or use local 'plan' if you want) to recalc percentage

      // Option A: fetch updated plan from backend if autofill happened
      let updatedPlan = plan;
      if (autofillPromises.length > 0) {
        const updatedRes = await client.graphql({
          query: getPlanByIdQuery,
          variables: { id: plan.id },
        });
        updatedPlan = updatedRes?.data?.getTrackPlan || plan;
      }

      // Option B: just recalc from local plan if no autofill
      // You could add logic to merge local updates if needed

      // Calculate percentage based on update points:
      let total = 0;
      let count = 0;
      for (let i = 0; i < 8; i++) {
        const pts = updatedPlan[`Update${i + 1}Points`];
        if (pts != null) {
          total += pts;
          count++;
        }
      }
      const percent = count === 0 ? 0 : Math.round((total / (count * 2)) * 100);

      console.log(`Recalculated % for ${plan.id}:`, percent);

      // Save percentage update:
      await saveUpdate(plan.id, { Percentage: percent });

      // Then do your auto-complete logic as you had it:
      const allDone = [...Array(8)].every((_, i) => updatedPlan[`Update${i + 1}Date`]);


    }


    // 🔁 Refresh UI if needed
    if (typeof onPlansUpdated === "function") {
      onPlansUpdated();
    }
  };

  const needsCompletionReview = (plan) => {
    const allDone = [...Array(8)].every((_, i) => plan[`Update${i + 1}Date`]);
    return allDone && !plan.Successful && !plan.Discontinued;
  };

  const calculatePercentageFromPlan = (plan) => {
    let total = 0;
    let count = 0;
    for (let i = 0; i < 8; i++) {
      const points = plan[`Update${i + 1}Points`];
      if (points != null) {
        total += points;
        count++;
      }
    }
    if (count === 0) return 0;
    const percent = Math.round((total / (count * 2)) * 100);
    return isNaN(percent) ? 0 : percent;
  };


  const sanitizePlanInput = (plan) => ({
    userId,
    Action: plan.Action || "nil",
    ActionQuestion: plan.ActionQuestion || "nil",
    Frequency: plan.Frequency || "nil",
    ActionNote: plan.ActionNote || "nil",
    ActionDomain: plan.ActionDomain || "nil",
    Percentage: 0,
    Discontinued: false,
    Successful: false,
  });

  const isWeekFinalized = (plan, weekIndex) => {
    const dateKey = `Update${weekIndex + 1}Date`;
    return Boolean(plan[dateKey]);
  };
  const canEditWeek = (plan, weekIndex) => {
    if (weekIndex === 0) return true; // first week always editable
    return isWeekFinalized(plan, weekIndex - 1);
  };
  const finalizeWeek = async (plan, weekIndex) => {
    const dateKey = `Update${weekIndex + 1}Date`;
    if (plan[dateKey]) return; // already finalized

    const updateData = localUpdates?.[plan.id]?.[weekIndex] || {};
    if (!updateData.points || !updateData.note || updateData.note.trim() === "") return;

    const today = new Date().toISOString().slice(0, 10);

    // Create update input
    const input = {
      id: plan.id,
      [dateKey]: today,
      [`Update${weekIndex + 1}Points`]: updateData.points,
      [`Update${weekIndex + 1}Note`]: updateData.note,
    };

    // Calculate percentage using updated localUpdates
    const updatedPlan = { ...localUpdates[plan.id], [weekIndex]: updateData };
    const percentage = calculatePercentage(updatedPlan);
    input.Percentage = percentage;

    try {
      await client.graphql({
        query: updateMutation,
        variables: { input },
      });

      // Update local plan state to reflect finalization
      setPlans((prev) =>
        prev.map((p) =>
          p.id === plan.id
            ? {
              ...p,
              [dateKey]: today,
              Percentage: percentage,
              [`Update${weekIndex + 1}Points`]: updateData.points,
              [`Update${weekIndex + 1}Note`]: updateData.note,
            }
            : p
        )
      );

      // Collapse this week
      setExpandedWeeks((prev) => ({
        ...prev,
        [`${plan.id}_${weekIndex}`]: false,
      }));

      // Auto-expand next if not finalized
      if (weekIndex + 1 < 8) {
        const nextDateKey = `Update${weekIndex + 2}Date`;
        if (!plan[nextDateKey]) {
          setExpandedWeeks((prev) => ({
            ...prev,
            [`${plan.id}_${weekIndex + 1}`]: true,
          }));
        }
      }
      if (weekIndex === 7) {
        // Week 8 was just finalized
        if (percentage >= 80) {
          // Successful
          setCompletionModal({ plan, percent: percentage, success: true });
          fireConfettiBurst();
        } else {
          // Not successful
          setCompletionModal({ plan, percent: percentage, success: false });
        }

      } else {
        if (updateData.points === 2) {
          setEncouragementModal({ message: "Great job! Keep going." });
        }
        if (updateData.points === 1) {
          setEncouragementModal({ message: "You can do this!" });
        }
        if (updateData.points === 0.5) {
          setEncouragementModal({ message: "No worries, keep trying!" });
        }
      }

    } catch (e) {
      console.error("Finalize failed", e);
    }
  };


  const saveUpdate = async (planId, inputData) => {
    const input = { id: planId, ...inputData };
    try {
      const res = await client.graphql({
        query: updateMutation,
        variables: { input },
      });

      // Update plans state for Frequency, Note, and Percentage if changed
      setPlans((prevPlans) =>
        prevPlans.map((p) => {
          if (p.id !== planId) return p;
          return {
            ...p,
            Frequency: inputData.Frequency ?? p.Frequency,
            ActionNote: inputData.ActionNote ?? p.ActionNote,
            Percentage: inputData.Percentage ?? p.Percentage,
          };
        })
      );
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  const calculatePercentage = (updatesForPlan) => {
    if (!updatesForPlan) return 0;

    // Filter only weeks that have a points value (done weeks)
    const doneWeeks = Object.values(updatesForPlan).filter(
      (w) => w?.points != null
    );

    if (doneWeeks.length === 0) return 0;

    const totalPoints = doneWeeks
      .map((w) => w.points)
      .reduce((sum, val) => sum + val, 0);

    const maxPossible = doneWeeks.length * 2; // max 2 points per done week
    const percent = Math.round((totalPoints / maxPossible) * 100);

    return isNaN(percent) ? 0 : percent;
  };
  const fetchPlansByStatus = async (uid, discontinued, successful) => {
    const filter = {
      userId: { eq: uid },
      Discontinued: { eq: discontinued },
      Successful: { eq: successful },
    };

    const query = `
    query ListTrackPlans {
      listTrackPlans(filter: ${JSON.stringify(filter).replace(/"([^"]+)":/g, '$1:')}) {
        items {
          id
          Action
          ActionDomain
          ActionQuestion
          Frequency
          ActionNote
          Percentage
          Discontinued
          Successful
          CompletedDate
          CompletedTime
          SuccessfulDate
          DiscontinuedDate
          ${[...Array(8)].map((_, i) => `Update${i + 1}Points\nUpdate${i + 1}Note\nUpdate${i + 1}Date`).join('\n')}
        }
      }
    }
  `;

    const res = await client.graphql({ query });
    return res?.data?.listTrackPlans?.items || [];
  };

  const fetchPlans = async () => {
    const activeItems = await fetchPlansByStatus(userId, false, false);
    setPlans(activeItems);

    // Initialize localUpdates etc here same as your code
    const initUpdates = {};
    activeItems.forEach((plan) => {
      initUpdates[plan.id] = {};
      for (let i = 0; i < 8; i++) {
        initUpdates[plan.id][i] = {
          points: plan[`Update${i + 1}Points`] ?? null,
          note: plan[`Update${i + 1}Note`] ?? "",
        };
      }
    });
    setLocalUpdates(initUpdates);
  };

  const fetchDiscontinuedPlans = async (uid) => {
    const discontinuedItems = await fetchPlansByStatus(uid, true, false);
    setDiscontinuedPlans(discontinuedItems);
  };

  const fetchSuccessfulPlans = async (uid) => {
    const successfulItems = await fetchPlansByStatus(uid, false, true);
    setSuccessfulPlans(successfulItems);
  };

  const resetPlan = async (plan) => {
    const clearedUpdates = {};
    for (let i = 0; i < 8; i++) {
      clearedUpdates[`Update${i + 1}Points`] = null;
      clearedUpdates[`Update${i + 1}Note`] = null;
      clearedUpdates[`Update${i + 1}Date`] = null;
    }
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const input = {
      id: plan.id,
      Percentage: 0,
      CompletedDate: date,
      ...clearedUpdates,
    };

    await client.graphql({ query: updateMutation, variables: { input } });

    // Update local state
    setPlans((prev) =>
      prev.map((p) =>
        p.id === plan.id ? { ...p, ...input } : p
      )
    );

    setLocalUpdates((prev) => {
      const updated = { ...prev };
      updated[plan.id] = {};
      for (let i = 0; i < 8; i++) {
        updated[plan.id][i] = { points: null, note: "" };
      }
      return updated;
    });

    // Clear any expanded week UI
    setExpandedWeeks((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        if (key.startsWith(plan.id)) delete updated[key];
      });
      return updated;
    });

    setCompletionModal(null);
  };


  const duplicatePlan = async (plan) => {
    const today = new Date().toISOString().slice(0, 10);
    const original = {
      ...getFinalizedPlanWithWeek8(plan),
      Successful: true,
      SuccessfulDate: today,
    };


    const now = new Date();

    // For CompletedDate (still fine)
    const date = now.toISOString().slice(0, 10); // "2025-07-10"

    // For CompletedTime (AWSTime requires full time with seconds + ms)
    const time = now.toTimeString().split(' ')[0] + ".000"; // e.g., "14:30:00.000"

    const clearedUpdates = {};
    for (let i = 0; i < 8; i++) {
      clearedUpdates[`Update${i + 1}Points`] = null;
      clearedUpdates[`Update${i + 1}Note`] = null;
      clearedUpdates[`Update${i + 1}Date`] = null;
    }

    // Move original to successful
    setPlans((prev) => prev.filter((p) => p.id !== plan.id));
    setSuccessfulPlans((prev) => [...prev, original]);



    const input = {
      ...sanitizePlanInput(plan),
      CompletedDate: date,
      CompletedTime: time,
      ...clearedUpdates,
    };

    try {
      const res = await client.graphql({
        query: createTrackPlan,
        variables: { input },
      });

      const newPlan = res?.data?.createTrackPlan;
      if (newPlan) {
        setPlans((prev) => [...prev, newPlan]);

        // Initialize updates
        setLocalUpdates((prev) => ({
          ...prev,
          [newPlan.id]: Object.fromEntries(
            Array(8)
              .fill(0)
              .map((_, i) => [i, { points: null, note: "nil" }])
          ),
        }));
      }
    } catch (err) {
      console.error("Duplication failed", err);
    }

    setCompletionModal(null);
    setShowConfetti(false);
  };

  const handleUpdate = (planId, weekIndex, field, value) => {
    const weekNum = weekIndex + 1;
    const keyPrefix = `Update${weekNum}`;
    const updateKey = `${keyPrefix}${field}`;
    const updateObj = { [updateKey]: value };

    setLocalUpdates((prev) => {
      const updated = { ...prev };
      if (!updated[planId]) updated[planId] = {};
      if (!updated[planId][weekIndex])
        updated[planId][weekIndex] = { points: null, note: "" };
      updated[planId][weekIndex] = {
        ...updated[planId][weekIndex],
        [field.toLowerCase()]: value,
      };
      return updated;
    });

    if (field === "Points") {
      const key = `${planId}_${weekIndex}`;
      setBouncingEmoji((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setBouncingEmoji((prev) => ({ ...prev, [key]: false }));
      }, 600);
    }
  };

  const getFinalizedPlanWithWeek8 = (plan) => {
    const today = new Date().toISOString().slice(0, 10);
    const weekIndex = 7;
    const updateData = localUpdates?.[plan.id]?.[weekIndex] || {};
    const finalizedDate = plan[`Update8Date`] ?? today;
    const updatedPercentage = calculatePercentage(localUpdates[plan.id]);

    return {
      ...plan,
      Percentage: updatedPercentage,
      [`Update8Points`]: updateData.points ?? null,
      [`Update8Note`]: updateData.note ?? "",
      [`Update8Date`]: finalizedDate,
    };
  };

  const handleDiscontinue = async (planId) => {
    const today = new Date().toISOString().slice(0, 10);
    const input = { id: planId, Discontinued: true, DiscontinuedDate: today };

    try {
      await saveUpdate(planId, input);

      // Find the discontinued plan from current state
      const discontinuedPlan = plans.find((p) => p.id === planId);
      if (discontinuedPlan) {
        const updateData = localUpdates?.[planId]?.[7] || {};
        const finalizedDate = discontinuedPlan[`Update8Date`] ?? today;
        const updatedPercentage = calculatePercentage(localUpdates[planId]);

        const updated = {
          ...discontinuedPlan,
          ...input,
          Percentage: updatedPercentage,
          [`Update8Points`]: updateData.points ?? null,
          [`Update8Note`]: updateData.note ?? "",
          [`Update8Date`]: finalizedDate,
        };

        setDiscontinuedPlans((prev) => [...prev, updated]);
      }

      setPlans((prev) => prev.filter((p) => p.id !== planId));
      setLocalUpdates((prev) => {
        const updated = { ...prev };
        delete updated[planId];
        return updated;
      });

      setExpandedWeeks((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          if (key.startsWith(planId)) delete updated[key];
        });
        return updated;
      });
    } catch (err) {
      console.error("Discontinue failed", err);
    }
  };



  const handleToggleWeek = (planId, weekIndex) => {
    // Find the plan
    const plan = plans.find((p) => p.id === planId);
    if (!plan) return;

    if (!canEditWeek(plan, weekIndex)) {
      // Don't allow expanding if previous week not finalized
      return;
    }

    setExpandedWeeks((prev) => {
      const newExpanded = {};
      // Close all weeks for this plan
      Object.keys(prev).forEach((key) => {
        if (key.startsWith(planId)) newExpanded[key] = false;
      });

      const key = `${planId}_${weekIndex}`;
      newExpanded[key] = !prev[key];

      return { ...prev, ...newExpanded };
    });
  };

  const markAsSuccessfulOnly = async (plan) => {
    const today = new Date().toISOString().slice(0, 10);
    const weekIndex = 7;

    const updateData = localUpdates?.[plan.id]?.[weekIndex] || {};
    const finalizedDate = plan[`Update8Date`] ?? today;

    const updatedPercentage = calculatePercentage(localUpdates[plan.id]);

    const updatedPlan = {
      ...plan,
      Successful: true,
      SuccessfulDate: today,
      Percentage: updatedPercentage,
      [`Update8Points`]: updateData.points ?? null,
      [`Update8Note`]: updateData.note ?? "",
      [`Update8Date`]: finalizedDate,
    };

    // Persist to backend
    await saveUpdate(plan.id, {
      Successful: true,
      SuccessfulDate: today,
      Percentage: updatedPercentage,
      [`Update8Points`]: updateData.points ?? null,
      [`Update8Note`]: updateData.note ?? "",
      [`Update8Date`]: finalizedDate,
    });

    // Update frontend state
    setPlans((prev) => prev.filter((p) => p.id !== plan.id));
    setSuccessfulPlans((prev) => [...prev, updatedPlan]);

    setCompletionModal(null);
    setShowConfetti(false);
  };




  // Start editing Frequency and Note
  const startEdit = (plan) => {
    setEditingPlanId(plan.id);
    setTempFrequency(plan.Frequency || "");
    setTempNote(plan.ActionNote || "");
  };

  // Handlers for editing fields
  const handleFrequencyChange = (e) => setTempFrequency(e.target.value);
  const handleNoteChange = (e) => setTempNote(e.target.value);

  // Save edited Frequency and Note
  const saveEdits = () => {
    saveUpdate(editingPlanId, {
      Frequency: tempFrequency,
      ActionNote: tempNote,
    });
    setEditingPlanId(null);
  };

  const cancelEdits = () => {
    setEditingPlanId(null);
  };

  // Confirm discontinue modal
  const confirmDiscontinue = (planId) => setConfirmDiscontinuePlanId(planId);
  const doDiscontinue = () => {
    if (confirmDiscontinuePlanId) {
      handleDiscontinue(confirmDiscontinuePlanId);
      setConfirmDiscontinuePlanId(null);
    }
  };
  const cancelDiscontinue = () => setConfirmDiscontinuePlanId(null);

  return (
    <>
      <style>{bounceAnimation}</style>


      <div style={styles.container}>
        <h1 style={styles.title}>Track Progress</h1>
        <p style={{ fontSize: 16, marginBottom: 24 }}>
          <FaLightbulb style={{ color: "#6E5518", marginRight: 8 }} />
          Track your progress once per week unless you chose a monthly, quarterly, or yearly frequency. Be sure to track on time or a missed update is logged for zero points.
        </p>
        <h2 style={{ textAlign: "center", color: "#004080", marginBottom: 16 }}>
          Actions In Progress
        </h2>
        <div
  style={{
    display: "flex",
    flexWrap: "wrap",        // allow multiple rows
    justifyContent: "center",
    
    gap: 20,
    width: "100%",
  }}
></div>{plans.map((plan) => {
          // Check if either Frequency or Note is NOT "N/A" to allow editing
          const canEdit =
            plan.Frequency !== "N/A" || (plan.ActionNote && plan.ActionNote !== "N/A");

          const currentPercentage = plan.Percentage || 0;

          return (
            <div key={plan.id} style={styles.planCard}>
              <h2 style={styles.planTitle}>{plan.Action}</h2>
              {/* Question */}
              <p style={styles.planText}>
                <strong>Question:</strong> {plan.ActionQuestion || "Unknown"}
              </p>
              <p style={styles.planText}>
                <strong>Start Date:</strong> {plan.CompletedDate || "Unknown"}
              </p>

              {/* Frequency display or edit */}
              <p style={styles.planText}>
                <strong>Frequency:</strong>{" "}
                {editingPlanId === plan.id ? (
                  <select
                    style={styles.frequencySelect}
                    value={tempFrequency}
                    onChange={handleFrequencyChange}
                  >
                    {frequencyOptions.map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                ) : (
                  plan.Frequency
                )}
              </p>

              {/* Note display or edit */}
              <p style={styles.planText}>
                <strong>Note:</strong>{" "}
                {editingPlanId === plan.id ? (
                  <textarea
                    rows={2}
                    value={tempNote}
                    onChange={handleNoteChange}
                    style={styles.textarea}
                  />
                ) : (
                  plan.ActionNote
                )}
              </p>

              {/* Edit button */}
              {canEdit && editingPlanId !== plan.id && (
                <div style={{ marginBottom: 8 }}>
                  <button
                    type="button"
                    onClick={() => startEdit(plan)}
                    style={styles.editButton}
                  >
                    Edit
                  </button>
                </div>
              )}
              {/* Save and Cancel buttons shown only when editing */}
              {editingPlanId === plan.id && (
                <div style={{ marginTop: 8 }}>
                  <button
                    onClick={saveEdits}
                    style={{
                      ...styles.editButton,
                      marginRight: 8,
                      backgroundColor: "#007700",
                    }}
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdits}
                    style={{ ...styles.editButton, backgroundColor: "#cc4444" }}
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {/* Discontinue button */}
              <div>
                <button
                  style={styles.discontinueButton}
                  onClick={() => confirmDiscontinue(plan.id)}
                  type="button"
                  title="Discontinue this action"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#cc4444";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#cc4444";
                  }}
                >
                  Discontinue
                </button>
              </div>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PercentageWheel percentage={currentPercentage} />
              </div>


              {/* Stepper Line Progress UI */}
              <div style={{ marginTop: 30, marginBottom: 10 }}>
                <h3 style={{ textAlign: "center", color: "#004080", marginBottom: 10 }}>
                  Updates
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    padding: "0 8px",
                    gap: 6,
                  }}
                >
                  {/* Circles */}
                  {weekLabels.map((label, weekIndex) => {
                    const isActive = expandedWeeks[`${plan.id}_${weekIndex}`];
                    const selectedPoints =
                      localUpdates?.[plan.id]?.[weekIndex]?.points ?? null;
                    const emojiLabel = moodOptions.find((m) => m.score === selectedPoints)?.label;
                    const bounceKey = `${plan.id}_${weekIndex}`;
                    const isCompleted = selectedPoints != null;
                    const isLocked = !canEditWeek(plan, weekIndex);
                    return (
                      <div
                        key={weekIndex}
                        onClick={() => handleToggleWeek(plan.id, weekIndex)}
                        title={label}
                        style={{
                          zIndex: 1,
                          cursor: isLocked ? "not-allowed" : "pointer",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: isCompleted ? "#4da6ff" : "#fff",
                          border: `3px solid ${isCompleted ? "#4da6ff" : "#ccc"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: emojiLabel ? 26 : 14,
                          transition: "transform 0.2s ease, background-color 0.3s",
                          transform: bouncingEmoji[bounceKey] ? "scale(1.2)" : "scale(1)",
                          boxShadow: isActive
                            ? "0 0 12px rgba(0, 119, 204, 0.5)"
                            : "0 2px 4px rgba(0, 0, 0, 0.1)",
                          opacity: isLocked ? 0.4 : 1,
                          pointerEvents: isLocked ? "none" : "auto",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = bouncingEmoji[bounceKey]
                            ? "scale(1.2)"
                            : "scale(1)";
                        }}
                      >
                        {emojiLabel || weekIndex + 1}
                      </div>
                    );
                  })}

                  {/* Connector lines (background and progress) */}
                  <div
                    style={{
                      position: "absolute",
                      top: 19,
                      left: 28,
                      right: 28,
                      height: 4,
                      backgroundColor: "#ccc",
                      zIndex: 0,
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    {/* Blue progress bar */}
                    <div
                      style={{
                        height: "100%",
                        backgroundColor: "#4da6ff",
                        width: `${(weekLabels.filter((_, i) => Boolean(plan[`Update${i + 1}Date`])).length /
                          (weekLabels.length - 1)) *
                          100
                          }%`,
                        transition: "width 0.4s ease-in-out",
                      }}
                    />

                  </div>
                </div>
              </div>
              <p style={{ color: "#4da6ff", marginTop: 8 }}>
                Finalize your update to move on to the next update.
              </p>
              {/* Expanded Week Editors */}
              {weekLabels.map(
                (_, weekIndex) =>
                  expandedWeeks[`${plan.id}_${weekIndex}`] && (
                    <div key={`expanded_${weekIndex}`} style={styles.expandedWeek}>
                      <h3 style={styles.expandedWeekTitle}>
                        {isWeekFinalized(plan, weekIndex) ? "Reviewing" : "Editing"} {weekLabels[weekIndex]}
                      </h3>

                      <p>How did you do this {getFrequencyPeriodLabel(plan.Frequency)}?</p>
                      <div style={styles.moodButtons}>
                        {moodOptions.map((option) => {
                          const selectedPoints =
                            localUpdates?.[plan.id]?.[weekIndex]?.points ?? 0;
                          const isSelected = selectedPoints === option.score;
                          const bounceKey = `${plan.id}_${weekIndex}`;
                          return (
                            <button
                              key={option.label}
                              onClick={() => {
                                if (isWeekFinalized(plan, weekIndex)) return; // prevent change if finalized
                                handleUpdate(plan.id, weekIndex, "Points", option.score);
                              }}
                              style={{
                                ...styles.moodButton,
                                fontSize: 48,
                                ...(isSelected && bouncingEmoji[bounceKey] ? { animation: "bounce 0.6s" } : {}),
                                cursor: isWeekFinalized(plan, weekIndex) ? "not-allowed" : "pointer",
                                opacity: isWeekFinalized(plan, weekIndex) ? 0.5 : 1,
                              }}
                              aria-pressed={isSelected}
                              type="button"
                              title={`Select mood ${option.label}`}
                              disabled={isWeekFinalized(plan, weekIndex)}
                            >
                              {option.label}
                            </button>

                          );
                        })}
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Add a note..."
                        value={localUpdates?.[plan.id]?.[weekIndex]?.note ?? ""}
                        onChange={(e) => {
                          if (isWeekFinalized(plan, weekIndex)) return; // prevent change if finalized
                          handleUpdate(plan.id, weekIndex, "Note", e.target.value);
                        }}
                        style={{
                          ...styles.textarea,
                          opacity: isWeekFinalized(plan, weekIndex) ? 0.5 : 1,
                          pointerEvents: isWeekFinalized(plan, weekIndex) ? "none" : "auto",
                        }}
                        disabled={isWeekFinalized(plan, weekIndex)}
                      />
                      {/* Finalize Validation */}
                      {(() => {
                        const update = localUpdates?.[plan.id]?.[weekIndex] || {};
                        const hasPoints = update.points != null;
                        const hasNote = update.note && update.note.trim().length > 0;
                        const canFinalize = hasPoints && hasNote;
                        const alreadyFinalized = isWeekFinalized(plan, weekIndex);

                        return (
                          <>
                            <button
                              type="button"
                              onClick={() => finalizeWeek(plan, weekIndex)}
                              disabled={!canFinalize || alreadyFinalized}
                              style={{
                                marginTop: 12,
                                padding: "8px 20px",
                                fontWeight: "600",
                                cursor:
                                  !canFinalize || alreadyFinalized ? "not-allowed" : "pointer",
                                borderRadius: 12,
                                border: "none",
                                backgroundColor:
                                  alreadyFinalized || !canFinalize ? "#ccc" : "#0077cc",
                                color: alreadyFinalized || !canFinalize ? "#666" : "#fff",
                              }}
                              aria-disabled={!canFinalize || alreadyFinalized}
                              aria-label={
                                alreadyFinalized
                                  ? "Week finalized"
                                  : "Finalize this week"
                              }
                            >
                              {alreadyFinalized ? "Finalized" : "Finalize"}
                            </button>

                            {/* Warning Message */}
                            {!alreadyFinalized && !canFinalize && (
                              <p style={{ color: "#cc4444", marginTop: 8 }}>
                                Select an emoji and enter a note to finalize.
                              </p>
                            )}
                          </>
                        );
                      })()}

                    </div>

                  )
              )}


            </div>
          );
        })}
        <style>
{`
  @media (max-width: 768px) {
    .plan-card {
      max-width: 100% !important;
    }
  }
`}
</style>
        {/* Bottom section: toggle between Discontinued and Successful plans */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "2px solid #004080",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: 600, width: "100%" }}>
            <h2 style={{ textAlign: "center", color: "#004080", marginBottom: 16 }}>
              Discontinued Actions
            </h2>

            {/* Toggle buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <button
                onClick={() => handleViewToggle("discontinued")}
                type="button"
                style={{
                  padding: "10px 24px",
                  borderRadius: 12,
                  border:
                    viewFilter === "discontinued"
                      ? "2px solid #0077cc"
                      : "2px solid #ccc",
                  backgroundColor:
                    viewFilter === "discontinued" ? "#d9eaff" : "#fff",
                  color: viewFilter === "discontinued" ? "#004080" : "#666",
                  fontWeight: "600",
                  cursor: "pointer",
                  minWidth: 140,
                  transition: "all 0.3s ease",
                }}
                aria-pressed={viewFilter === "discontinued"}
              >
                Discontinued
              </button>
              <button
                onClick={() => handleViewToggle("successful")}
                type="button"
                style={{
                  padding: "10px 24px",
                  borderRadius: 12,
                  border:
                    viewFilter === "successful"
                      ? "2px solid #0077cc"
                      : "2px solid #ccc",
                  backgroundColor: viewFilter === "successful" ? "#d9eaff" : "#fff",
                  color: viewFilter === "successful" ? "#004080" : "#666",
                  fontWeight: "600",
                  cursor: "pointer",
                  minWidth: 140,
                  transition: "all 0.3s ease",
                }}
                aria-pressed={viewFilter === "successful"}
              >
                Successful
              </button>
            </div>

            {/* Centered cards container */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20,}}>
              {(viewFilter === "discontinued" ? discontinuedPlans : successfulPlans).map(
                (plan) => (
                  <div key={plan.id} style={{ ...styles.planCard,  width: isMobile ? "130%" : 500, }}>
                    <h2 style={styles.planTitle}>{plan.Action}</h2>
                    <p style={styles.planText}>
                      <strong>Question:</strong> {plan.ActionQuestion}
                    </p>
                    {/* Question */}

                    <p style={styles.planText}>
                      <strong>Start Date:</strong> {plan.CompletedDate || "Unknown"}
                    </p>

                    <p style={styles.planText}>
                      <strong>Frequency:</strong> {plan.Frequency}
                    </p>
                    <p style={styles.planText}>
                      <strong>Note:</strong> {plan.ActionNote}
                    </p>
                    {/* ✅ Add these conditional tags below */}
                    {viewFilter === "discontinued" && plan.DiscontinuedDate && (
                      <p style={{ color: "#cc4444", fontWeight: "600", marginTop: 4 }}>
                        Discontinued: {plan.DiscontinuedDate}
                      </p>
                    )}
                    {viewFilter === "successful" && plan.SuccessfulDate && (
                      <p style={{ color: "#228B22", fontWeight: "600", marginTop: 4 }}>
                        Successful: {plan.SuccessfulDate}
                      </p>
                    )}
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <PercentageWheel percentage={plan.Percentage || 0} />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>


        {/* 🔹 Discontinue Modal */}
        {confirmDiscontinuePlanId && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <h2>Confirm Discontinue</h2>
              <p>Are you sure you want to discontinue this action?</p>
              <div style={styles.modalButtons}>
                <button onClick={doDiscontinue} style={styles.modalButtonConfirm}>
                  Yes, Discontinue
                </button>
                <button onClick={cancelDiscontinue} style={styles.modalButtonCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 🔹 Encouragement Modal */}
        {encouragementModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎉</div>
              <div style={{ fontSize: "18px", fontWeight: "600", color: "#004085" }}>
                {encouragementModal.message}
              </div>
              <div style={styles.modalButtons}>
                <button
                  onClick={() => setEncouragementModal(null)}
                  style={styles.modalButtonConfirm}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 🔹 Completion Modal */}
        {completionModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              {completionModal.success ? (
                <>
                  <h2 style={{ color: "#28a745" }}>🎉 Congratulations!</h2>
                  <p>You completed this action with {completionModal.percent}% success!</p>
                  <p>Would you like to continue and do this again?</p>
                  <div style={styles.modalButtons}>
                    <button
                      onClick={() => {
                        saveUpdate(completionModal.plan.id, { Successful: true });
                        duplicatePlan(completionModal.plan);
                      }}
                      style={styles.modalButtonConfirm}
                    >
                      Yes, Do it Again
                    </button>
                    <button
                      onClick={() => markAsSuccessfulOnly(completionModal.plan)}
                      style={styles.modalButtonCancel}
                    >
                      No, Just Mark Complete
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 style={{ color: "#cc4444" }}>Action Not Effective</h2>
                  <p>This action had {completionModal.percent}% success.</p>
                  <p>Would you like to discontinue and try a different action?</p>
                  <div style={styles.modalButtons}>
                    <button
                      onClick={() => {
                        handleDiscontinue(completionModal.plan.id);
                        setCompletionModal(null);
                      }}
                      style={styles.modalButtonConfirm}
                    >
                      Yes, Discontinue
                    </button>
                    <button
                      onClick={() => resetPlan(completionModal.plan)}
                      style={styles.modalButtonCancel}
                    >
                      No, Try Again
                    </button>
                  </div>
                </>
              )}

            </div>
            {showConfetti && (
              <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background:
                  "url('https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif') center/cover no-repeat",
                opacity: 0.3,
                pointerEvents: "none",
                zIndex: 1,
              }} />
            )}
          </div>
        )}

      </div>


    </>
  );
}
