// This script includes all score cards in one file without importing external components

import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const client = generateClient();

// --- Score fetching hooks ---
function useFetchMultipleScores(scoreKeys = []) {
  const [score, setScore] = useState(null);
  const [previousScore, setPreviousScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        setLoading(true);
        const user = await getCurrentUser();
        if (!user?.userId) throw new Error("User not authenticated");

        const query = `
          query ListScores {
            listAssessmentScores(limit: 50, filter: {
              userId: { eq: "${user.userId}" }
              isActive: { eq: false }
            }) {
              items {
                id
                ${scoreKeys.join("\n")}
                updatedAt
              }
            }
          }
        `;

        const res = await client.graphql({ query });
        const items = res?.data?.listAssessmentScores?.items || [];
        const sorted = items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        const calculateTotal = (entry) =>
          scoreKeys.reduce((sum, key) => sum + (Number(entry?.[key]) || 0), 0);

        if (sorted.length === 0) {
          setScore(null);
          setPreviousScore(null);
        } else if (sorted.length === 1) {
          setScore(calculateTotal(sorted[0]));
          setPreviousScore(null);
        } else {
          setScore(calculateTotal(sorted[0]));
          setPreviousScore(calculateTotal(sorted[1]));
        }
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchScores();
  }, [scoreKeys.join(",")]);

  return {
    score: score !== null ? Math.round(score) : null,
    previousScore: previousScore !== null ? Math.round(previousScore) : null,
    loading,
    error,
  };
}

function useFetchScore(scoreKey) {
  const [score, setScore] = useState(null);
  const [previousScore, setPreviousScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScore() {
      try {
        setLoading(true);
        const user = await getCurrentUser();
        if (!user?.userId) throw new Error("User not authenticated");

        const query = `
          query ListScores {
            listAssessmentScores(limit: 50, filter: {
              userId: { eq: "${user.userId}" }
              isActive: { eq: false }
            }) {
              items {
                id
                ${scoreKey}
                updatedAt
              }
            }
          }
        `;

        const res = await client.graphql({ query });
        const items = res?.data?.listAssessmentScores?.items || [];
        const sorted = items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        if (sorted.length === 0) {
          setScore(null);
          setPreviousScore(null);
        } else if (sorted.length === 1) {
          setScore(sorted[0][scoreKey]);
          setPreviousScore(null);
        } else {
          setScore(sorted[0][scoreKey]);
          setPreviousScore(sorted[1][scoreKey]);
        }
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchScore();
  }, [scoreKey]);

  return {
    score: score !== null ? Math.round(Number(score)) : null,
    previousScore: previousScore !== null ? Math.round(Number(previousScore)) : null,
    loading,
    error,
  };
}

function getBarColorCustom(score, thresholds) {
  if (typeof score !== "number") return "#ccc";
  for (let i = 0; i < thresholds.length; i++) {
    if (score >= thresholds[i].min && score <= thresholds[i].max) {
      return thresholds[i].color;
    }
  }
  return "#ccc";
}

function CircleGauge({ size, strokeWidth, percentage, label }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Updated color logic here:
  const getColor = (p) => {
    if (p >= 80) return "#44cc44";   // green
    if (p >= 70) return "#cccc44";   // yellow
    return "#cc4444";                // red
  };

  const strokeColor = getColor(percentage);

  return (
    <svg
      width={size}
      height={size}
      style={{ overflow: "visible", display: "block", margin: "0 auto" }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#eee"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size / 4}
        fill="#333"
        fontWeight="bold"
        style={{ userSelect: "none" }}
      >
        {label}
      </text>
    </svg>
  );
}

// --- ScoreCard component ---
function ScoreCard({
  domainName,
  scoreKey,
  maxScore,
  thresholds,
  customScoreHook,
  customScoreHookArgs,
  noTabs = false,
  triplePills = false,
  summaryLines = [],
  navigationButtons = [], // ✅ NEW
}) {
  const multipleScores = customScoreHook?.(...(customScoreHookArgs || []));
  const singleScore = useFetchScore(scoreKey);
  const scoreData = customScoreHook ? multipleScores : singleScore;
  const { score, previousScore } = scoreData;

  // NEW: State for track plan actions for this domain
  const [actions, setActions] = useState([]);
  const [loadingActions, setLoadingActions] = useState(true);
  const [errorActions, setErrorActions] = useState(null);

  useEffect(() => {
    async function fetchActions() {
      setLoadingActions(true);
      setErrorActions(null);
      try {
        const user = await getCurrentUser();
        if (!user?.userId) throw new Error("User not authenticated");

        const query = `
          query ListTrackPlans {
            listTrackPlans(filter: {
              userId: { eq: "${user.userId}" },
              Discontinued: { eq: false },
              Successful: { eq: false },
              ActionDomain: { eq: "${domainName}" }
            }) {
              items {
                id
                Action
                Percentage
              }
            }
          }
        `;

        const res = await client.graphql({ query });
        const items = res?.data?.listTrackPlans?.items || [];

        if (items.length === 0) {
          setActions([]);
        } else {
          // Map items to shape used in rendering below
          const mapped = items.map(({ id, Action, Percentage }) => ({
            id,
            name: Action,
            completion: Percentage ?? 0,
          }));
          setActions(mapped);
        }
      } catch (err) {
        setErrorActions(err.message || "Unknown error");
        setActions([]);
      } finally {
        setLoadingActions(false);
      }
    }

    fetchActions();
  }, [domainName]);

  const percent = score !== null ? (score / maxScore) * 100 : 100;
  const [markerLeft, setMarkerLeft] = useState("100%");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMarkerLeft(`calc(${percent}% - 4px)`);
    }, 50);
    return () => clearTimeout(timeout);
  }, [percent]);

  const [activeTab, setActiveTab] = useState("summary");
  const [selectedAction, setSelectedAction] = useState(null);

  return (
    <>
      <div
        style={{
          padding: 24,
          border: "1px solid #ccc",
          borderRadius: 12,
          backgroundColor: "#fff",
          boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
          userSelect: "none",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          marginBottom: 20,
          marginTop: -20,
        }}
      >
        {navigationButtons && navigationButtons.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center", // center horizontally
              marginBottom: 24,
              gap: 12,
            }}
          >
            {navigationButtons.map((btn, i) => (
              <button
                key={i}
                onClick={btn.disabled ? undefined : btn.onClick}
                disabled={btn.disabled}
                style={{
                  padding: "10px 24px",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: btn.disabled ? "#888" : "#0077cc",
                  border: `2px solid ${btn.disabled ? "#888" : "#0077cc"}`,
                  borderRadius: 12,
                  backgroundColor: btn.disabled ? "#f0f0f0" : "white",
                  cursor: btn.disabled ? "not-allowed" : "pointer",
                  transition: "background-color 0.3s, color 0.3s",
                  minWidth: 180,
                  userSelect: "none",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}


        <h2 style={{ textAlign: "center", marginBottom: 20 }}>{domainName}</h2>

        <div
          style={{
            height: 28,
            width: "100%",
            borderRadius: 16,
            backgroundColor: getBarColorCustom(score, thresholds),
            overflow: "hidden",
            marginBottom: 8,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -4,
              left: markerLeft,
              width: 8,
              height: 36,
              backgroundColor: "#fff",
              borderRadius: 4,
              animation: "pulseGlow 1s ease-out infinite",
              pointerEvents: "none",
              transition: "left 0.8s ease-out",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, marginBottom: 24 }}>
          <span style={{ fontWeight: "bold", color: "#0077cc" }}>0</span>
          <span style={{ fontWeight: "bold", color: "#0077cc" }}>{maxScore}</span>
        </div>

        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 18, fontWeight: "bold", color: "#0077cc" }}>
            Score: {score ?? "No score yet"}
          </div>
          <div style={{ fontSize: 16, color: "#555", marginTop: 4, minHeight: 50 }}>
            Previous Score: {previousScore ?? "No previous score yet"}
          </div>
        </div>

        {!noTabs && (
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 22 }}>
            {["summary", "actions"].map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  cursor: "pointer",
                  padding: "10px 24px",
                  borderRadius: 20,
                  border: activeTab === key ? "2px solid #4da6ff" : "1px solid #ccc",
                  backgroundColor: activeTab === key ? "#d9eaff" : "#fff",
                  fontWeight: "bold",
                  minWidth: 100,
                  fontSize: 16,
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        )}

        {(activeTab === "summary" || noTabs) && (
          <>
            {summaryLines.length > 0 &&
              (triplePills ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8, alignItems: "center" }}>
                  {summaryLines.slice(0, 3).map(({ label, value }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>{label}</span>
                      <span
                        style={{
                          backgroundColor: "#0077cc",
                          color: "white",
                          borderRadius: 10,
                          padding: "2px 16px",
                          fontWeight: "bold",
                          fontSize: 10,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", fontSize: 16 }}>
                  {summaryLines.map(({ label, value }, i) => (
                    <span key={i} style={{ marginRight: 12 }}>
                      {label}
                      <span
                        style={{
                          backgroundColor: "#0077cc",
                          color: "white",
                          borderRadius: 20,
                          padding: "6px 16px",
                          fontWeight: "bold",
                          fontSize: 16,
                          marginLeft: 6,
                        }}
                      >
                        {value}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
          </>
        )}

        {!noTabs && activeTab === "actions" && (
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            {loadingActions && <div>Loading actions...</div>}
            {errorActions && <div style={{ color: "red" }}>Error: {errorActions}</div>}
            {!loadingActions && actions.length === 0 && (
              <div style={{ fontStyle: "italic", color: "#777", textAlign: "center" }}>
                No actions in progress for this domain.
              </div>
            )}
            {!loadingActions &&
              actions.map(({ id, name, completion }) => (
                <div
                  key={id}
                  onClick={() => setSelectedAction({ id, name, completion })}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    padding: 12,
                    border: "1px solid #ccc",
                    borderRadius: 12,
                    backgroundColor: "#f9f9f9",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ flexGrow: 1, fontWeight: "bold", fontSize: 16 }}>{name}</div>
                  <CircleGauge size={50} strokeWidth={6} percentage={completion} label={`${completion}%`} />
                </div>
              ))}
          </div>
        )}
      </div>

      {selectedAction &&
        ReactDOM.createPortal(
          <>
            <div
              onClick={() => setSelectedAction(null)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 999,
              }}
            />
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                backgroundColor: "#fff",
                padding: 32,
                borderRadius: 16,
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                width: 400,
                maxWidth: "90vw",
                textAlign: "center",
              }}
            >
              <h3>{selectedAction.name}</h3>
              <CircleGauge size={120} strokeWidth={10} percentage={selectedAction.completion} label={`${selectedAction.completion}%`} />
              <button
                onClick={() => setSelectedAction(null)}
                style={{
                  backgroundColor: "#4da6ff",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 24px",
                  fontWeight: "bold",
                  fontSize: 16,
                  cursor: "pointer",
                  marginTop: 20,
                }}
              >
                Close
              </button>
            </div>
          </>,
          document.body
        )}
    </>
  );
}

// --- All Score Cards Grid ---
export default function AllScoreCards({ setCurrentView }) {
  const [columns, setColumns] = useState(1);
  const [copingButtonEnabled, setCopingButtonEnabled] = useState(false);
  const [copingButtonLabel, setCopingButtonLabel] = useState("Loading...");
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const [actionsByDomain, setActionsByDomain] = useState({
  coping: 0,
  mental: 0,
  physical: 0,
  spiritual: 0,
  outlook: 0,
  overall: 0,
});
// Example: fetch actions for each domain when component mounts
useEffect(() => {
  async function fetchActions() {
    try {
      const user = await getCurrentUser();
      if (!user?.userId) return;

      const allActions = await client.graphql({
        query: `
          query ListTrackPlans {
            listTrackPlans(filter: { userId: { eq: "${user.userId}" }, Discontinued: { eq: false } }) {
              items {
                id
                ActionDomain
                Successful
                Discontinued
              }
            }
          }
        `,
      });

      const items = allActions?.data?.listTrackPlans?.items || [];

      // Map human-readable domain names to keys in actionsByDomain
      const domainMap = {
        "Coping Mechanisms": "coping",
        "Mental Health": "mental",
        "Physical Health": "physical",
        "Spiritual Health": "spiritual",
        "Outlook": "outlook",
      };

      const counts = items.reduce((acc, action) => {
        if (!action.Discontinued && !action.Successful && action.ActionDomain) {
          const key = domainMap[action.ActionDomain];
          if (key) {
            acc[key] = (acc[key] || 0) + 1;
          }
        }
        return acc;
      }, {});

      // Ensure all domains exist even if 0
      const finalCounts = Object.fromEntries(
        Object.values(domainMap).map((key) => [key, counts[key] || 0])
      );

      finalCounts.overall = Object.values(finalCounts).reduce((a, b) => a + b, 0);
      console.log(finalCounts)
      setActionsByDomain(finalCounts);
    } catch (err) {
      console.error("Error fetching actions:", err);
      setActionsByDomain({
        coping: 0,
        mental: 0,
        physical: 0,
        spiritual: 0,
        outlook: 0,
        overall: 0,
      });
    }
  }

  fetchActions();
}, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1200) setColumns(3);
      else if (width >= 768) setColumns(2);
      else setColumns(1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Fetch latest AssessmentAnswers and check isActive
  useEffect(() => {
    async function fetchLatestAssessment() {
      try {
        const user = await getCurrentUser();
        if (!user?.userId) throw new Error("User not authenticated");

        const query = `
          query ListAssessments {
            listAssessmentAnswers(
              limit: 1,
              sortDirection: DESC,
              filter: { userId: { eq: "${user.userId}" } }
            ) {
              items {
                id
                isActive
                updatedAt
              }
            }
          }
        `;

        const res = await client.graphql({ query });
        const items = res?.data?.listAssessmentAnswers?.items || [];

        if (items.length === 0) {
          // No assessment found, disable button
          setCopingButtonEnabled(false);
          setCopingButtonLabel("Coping completed");
        } else {
          const latest = items[0];
          if (latest.isActive === true) {
            setCopingButtonEnabled(true);
            setCopingButtonLabel("Complete Coping");
          } else {
            setCopingButtonEnabled(false);
            setCopingButtonLabel("Coping completed");
          }
        }
      } catch (err) {
        console.error("Error fetching assessment answers:", err);
        // On error, disable button for safety
        setCopingButtonEnabled(false);
        setCopingButtonLabel("Coping completed");
      }
    }

    fetchLatestAssessment();
  }, []);

  async function handleNavigationButtonClick(total ,sectionName) {
    try {
      const user = await getCurrentUser();
      if (!user?.userId) throw new Error("User not authenticated");

      const userId = user.userId;

      // Step 1: Fetch up to 100 records to find latest
      const checkAnswersQuery = `
      query {
        listAssessmentAnswers(
          filter: { userId: { eq: "${userId}" } }
          limit: 100
        ) {
          items { id isActive createdAt }
        }
      }
    `;

      const checkScoresQuery = `
      query {
        listAssessmentScores(
          filter: { userId: { eq: "${userId}" } }
          limit: 100
        ) {
          items { id isActive createdAt }
        }
      }
    `;

      const [answersRes, scoresRes] = await Promise.all([
        client.graphql({ query: checkAnswersQuery }),
        client.graphql({ query: checkScoresQuery }),
      ]);

      const answersList = answersRes?.data?.listAssessmentAnswers?.items || [];
      const scoresList = scoresRes?.data?.listAssessmentScores?.items || [];

      const latestAnswers = answersList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
      const latestScores = scoresList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

      const shouldCreateAnswers = !latestAnswers || latestAnswers.isActive === false;
      const shouldCreateScores = !latestScores || latestScores.isActive === false;

      // Step 2: Create AssessmentAnswers if needed
      if (shouldCreateAnswers) {
        const dummyAnswers = {
          userId,
          CompletedDate: new Date().toISOString().slice(0, 10),
          CompletedTime: new Date().toLocaleTimeString(),
          TRHurtfulNames: false,
          TRNoNurturing: false,
          TRHit: false,
          TRNeedsNotMet: false,
          TRForcedSex: false,
          TRResponsible: false,
          TRViolence: false,
          TRSubstanceAbuse: false,
          TRMentalIllness: false,
          TRParentDivorce: false,
          TRParentIncarcerated: false,
          TRHomelessness: false,
          TRBodyFunction: false,
          TRNaturalDisaster: false,
          TRDirectTerrorism: false,
          TRIndirectTerrorism: false,
          TRLovedOne: false,
          TRBelief: false,
          TRResponseProfessional: false,
          TRResponseFamilyFriend: false,
          TRResponseGod: false,
          TRResponseNoOne: false,
          TRNoTrauma: false,
          CMAlcohol: "No Answer",
          CMDrugs: "No Answer",
          CMOvereating: "No Answer",
          CMSmoking: "No Answer",
          CMGaming: "No Answer",
          CMShopping: "No Answer",
          CMGambling: "No Answer",
          CMSex: "No Answer",
          CMPorn: "No Answer",
          CMBlaming: "No Answer",
          CMHurting: "No Answer",
          CMDisengage: "No Answer",
          CMArt: "No Answer",
          CMMusic: "No Answer",
          CMPoetry: "No Answer",
          CMReading: "No Answer",
          CMGroups: "No Answer",
          CMCounseling: "No Answer",
          CMVenting: "No Answer",
          CMWriting: "No Answer",
          CMSensory: "No Answer",
          CMDancing: "No Answer",
          CMExercising: "No Answer",
          CMWalking: "No Answer",
          CMChange: "No Answer",
          CMAnalyze: "No Answer",
          CMDaydream: "No Answer",
          CMPositive: "No Answer",
          MHDxPTSD: false,
          MHDxDepression: false,
          MHDxSUD: false,
          MHDxOtherMental: false,
          MHSleeplessness: "No Answer",
          MHAlcoholUse: "No Answer",
          MHAnxiety: "No Answer",
          MHDepression: "No Answer",
          MHDrugUse: "No Answer",
          MHGrief: "No Answer",
          MHGuilt: "No Answer",
          MHIrritability: "No Answer",
          MHStress: "No Answer",
          MHRegret: "No Answer",
          MHSuicidalThoughts: "No Answer",
          MHLoneliness: "No Answer",
          MHWorry: "No Answer",
          PHDxInfertility: false,
          PHDxCurableSTD: false,
          PHDxIncurableSTD: false,
          PHDxCancer: false,
          PHDxDiabetes: false,
          PHDxHighBlood: false,
          PHDxHeartDisease: false,
          PHDxIrritableBowel: false,
          PHDxVitA: false,
          PHDxVitB: false,
          PHDxVitC: false,
          PHDxVitD: false,
          PHDxVitE: false,
          PHDxVitK: false,
          PHDxAutoimmune: false,
          PHDxOtherPhysical: false,
          PHVegeFruits: "No Answer",
          PHBeanLentils: "No Answer",
          PHGrainBreads: "No Answer",
          PHDairy: "No Answer",
          PHMeat: "No Answer",
          PHFishSeafood: "No Answer",
          PHSweets: "No Answer",
          PHWater: "No Answer",
          PHPhysicalActivity: "No Answer",
          SHSpiritualDefine: null,
          SHSpiritualIntegrate: null,
          SHPrayer: null,
          SHSpiritualActivity: null,
          SHReadText: null,
          SHAlignText: null,
          SHCommunity: null,
          OLHope: "No Answer",
          OLPeace: "No Answer",
          OLLearning: "No Answer",
          OLJoy: "No Answer",
          OLStable: "No Answer",
          OLSafety: "No Answer",
          OLKindness: "No Answer",
          OLForgiveness: "No Answer",
          OLPatience: "No Answer",
          OLRelationships: "No Answer",
          OLBoundaries: "No Answer",
          OLEUnpleasant: "No Answer",
          OLEPleasant: "No Answer",
          OLEControl: "No Answer",
          OLENumber: "No Answer",
          SDoHAgeRange: null,
          SDoHRace: null,
          SDoHGeographicRegion: null,
          SDoHEthnicity: null,
          SDoHState: null,
          SDoHZipCode: null,
          SDoHMaritalStatus: null,
          SDoHMilitaryStatus: null,
          SDoHGender: null,
          SDoHEducation: null,
          SDoHJobStatus: null,
          SDoHIncome: null,
          SDoHHousingStatus: null,
          SDoHHomeAsChild: null,
          SDoHReligion: null,
          SDoHDenomination: null,
          isActive: true,
        };

        await client.graphql({
          query: `
          mutation CreateAssessmentAnswers($input: CreateAssessmentAnswersInput!) {
            createAssessmentAnswers(input: $input) { id }
          }
        `,
          variables: { input: dummyAnswers },
        });
      }

      // Step 3: Create AssessmentScores if needed
      if (shouldCreateScores) {
        const dummyScores = {
          userId,
          isActive: true,
          TRScore: "0",
          CMScore: "0",
          MHScore: "0",
          PHScore: "0",
          SHScore: "0",
          OLScore: "0",
          CompletedDate: new Date().toISOString().slice(0, 10),
          CompletedTime: new Date().toLocaleTimeString(),
          // Fill rest of the score keys with 0 or null
          TRHurtfulNames: 0,
          TRNoNurturing: 0,
          TRHit: 0,
          TRNeedsNotMet: 0,
          TRForcedSex: 0,
          TRResponsible: 0,
          TRViolence: 0,
          TRSubstanceAbuse: 0,
          TRMentalIllness: 0,
          TRParentDivorce: 0,
          TRParentIncarcerated: 0,
          TRHomelessness: 0,
          TRBodyFunction: 0,
          TRNaturalDisaster: 0,
          TRDirectTerrorism: 0,
          TRIndirectTerrorism: 0,
          TRLovedOne: 0,
          TRBelief: 0,
          TRResponseProfessional: 0,
          TRResponseFamilyFriend: 0,
          TRResponseGod: 0,
          TRResponseNoOne: 0,
          TRNoTrauma: 0,
          CMAlcohol: 0,
          CMDrugs: 0,
          CMOvereating: 0,
          CMSmoking: 0,
          CMGaming: 0,
          CMShopping: 0,
          CMGambling: 0,
          CMSex: 0,
          CMPorn: 0,
          CMBlaming: 0,
          CMHurting: 0,
          CMDisengage: 0,
          CMArt: 0,
          CMMusic: 0,
          CMPoetry: 0,
          CMReading: 0,
          CMGroups: 0,
          CMCounseling: 0,
          CMVenting: 0,
          CMWriting: 0,
          CMSensory: 0,
          CMDancing: 0,
          CMExercising: 0,
          CMWalking: 0,
          CMChange: 0,
          CMAnalyze: 0,
          CMDaydream: 0,
          CMPositive: 0,
          MHDxPTSD: 0,
          MHDxDepression: 0,
          MHDxSUD: 0,
          MHDxOtherMental: 0,
          MHSleeplessness: 0,
          MHAlcoholUse: 0,
          MHAnxiety: 0,
          MHDepression: 0,
          MHDrugUse: 0,
          MHGrief: 0,
          MHGuilt: 0,
          MHIrritability: 0,
          MHStress: 0,
          MHRegret: 0,
          MHSuicidalThoughts: 0,
          MHLoneliness: 0,
          MHWorry: 0,
          PHDxInfertility: 0,
          PHDxCurableSTD: 0,
          PHDxIncurableSTD: 0,
          PHDxCancer: 0,
          PHDxDiabetes: 0,
          PHDxHighBlood: 0,
          PHDxHeartDisease: 0,
          PHDxIrritableBowel: 0,
          PHDxVitA: 0,
          PHDxVitB: 0,
          PHDxVitC: 0,
          PHDxVitD: 0,
          PHDxVitE: 0,
          PHDxVitK: 0,
          PHDxAutoimmune: 0,
          PHDxOtherPhysical: 0,
          PHVegeFruits: 0,
          PHBeanLentils: 0,
          PHGrainBreads: 0,
          PHDairy: 0,
          PHMeat: 0,
          PHFishSeafood: 0,
          PHSweets: 0,
          PHWater: 0,
          PHPhysicalActivity: 0,
          SHSpiritualDefine: 0,
          SHSpiritualIntegrate: 0,
          SHPrayer: 0,
          SHSpiritualActivity: 0,
          SHReadText: 0,
          SHAlignText: 0,
          SHCommunity: 0,
          OLHope: 0,
          OLPeace: 0,
          OLLearning: 0,
          OLJoy: 0,
          OLStable: 0,
          OLSafety: 0,
          OLKindness: 0,
          OLForgiveness: 0,
          OLPatience: 0,
          OLRelationships: 0,
          OLBoundaries: 0,
          OLEUnpleasant: 0,
          OLEPleasant: 0,
          OLEControl: 0,
          OLENumber: 0,
          SDoHAgeRange: "",
          SDoHRace: "",
          SDoHGeographicRegion: "",
          SDoHEthnicity: "",
          SDoHState: "",
          SDoHZipCode: "",
          SDoHMaritalStatus: "",
          SDoHMilitaryStatus: "",
          SDoHGender: "",
          SDoHEducation: "",
          SDoHJobStatus: "",
          SDoHIncome: "",
          SDoHHousingStatus: "",
          SDoHHomeAsChild: "",
          SDoHReligion: "",
          SDoHDenomination: "",
        };

        await client.graphql({
          query: `
          mutation CreateAssessmentScores($input: CreateAssessmentScoresInput!) {
            createAssessmentScores(input: $input) { id }
          }
        `,
          variables: { input: dummyScores },
        });
      }

      // Step 4: Navigate
      localStorage.setItem("assessmentSection", sectionName);
      if (total === true) {
setCurrentView("ViewReports");
      } else {
        setCurrentView("Assessment");
      }
      
    } catch (error) {
      console.error("Error in navigation setup:", error);
      alert("Something went wrong. Please try again.");
    }
  }


  const [visibleCards, setVisibleCards] = useState(() => {
  const saved = localStorage.getItem("visibleCards");
  return saved
    ? JSON.parse(saved)
    : {
        coping: true,
        mental: true,
        physical: true,
        spiritual: true,
        outlook: true,
        overall: true,
      };
});


 const toggleCardVisibility = (key) => {
  setVisibleCards((prev) => {
    const updated = {
      ...prev,
      [key]: !prev[key],
    };
    localStorage.setItem("visibleCards", JSON.stringify(updated));
    return updated;
  });
};


  const toggleStyles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      margin: "20px auto 30px",
      maxWidth: "90%",
    },
    button: (active) => ({
      padding: "10px 18px",
      borderRadius: "20px",
      border: "2px solid black",
      backgroundColor: active ? "#000" : "#fff",
      color: active ? "#fff" : "#000",
      fontWeight: 600,
      cursor: "pointer",
      transition: "0.3s",
      userSelect: "none",
    }),
  };




  return (
  <>
  {/* Toggle Bar Container with Label */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
  }}
>
  <div
    style={{
      marginTop: -20,
      fontSize: "16px",
      fontWeight: "600",
      color: "#004080",
      marginBottom: "12px",
      textAlign: "center",
      letterSpacing: "0.5px",
    }}
  >
    Card Visibility
  </div>

  {/* Actual Toggle Bar */}
  <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: isMobile ? "wrap" : "nowrap", // changes based on screen size
        overflowX: isMobile ? "auto" : "visible",
        padding: "12px 24px",
        gap: "12px",
        
        background: "#f5faff",
        borderBottom: "2px solid #d0e4f2",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",

        width: "100%",
        maxWidth: "800px",
        whiteSpace: isMobile ? "normal" : "nowrap",
        marginBottom: "32px",
      }}
    >
      {[
        ["Coping", "coping"],
        ["Mental", "mental"],
        ["Physical", "physical"],
        ["Spiritual", "spiritual"],
        ["Outlook", "outlook"],
        ["Overall", "overall"],
    ].map(([label, key]) => (
      <button
        key={key}
        onClick={() => toggleCardVisibility(key)}
        style={{
          cursor: "pointer",
                  padding: "10px 24px",
                  borderRadius: 20,
                  border: visibleCards[key] ? "2px solid #4da6ff" : "1px solid #ccc",
                  backgroundColor: visibleCards[key] ? "#d9eaff" : "#fff",
                  fontWeight: "bold",
                  minWidth: 120,
                  fontSize: 14,
        }}
      >
        {label}
      </button>
    ))}
  </div>
</div>
<style>
{`
  @media (max-width: 368px) {
    .toggle-bar {
      flex-wrap: wrap; /* allow wrapping only on small screens */
      white-space: normal;
    }
  }
`}
</style>

    {/* Score Cards Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(320px, 1fr))`,
        gap: 24,
        maxWidth: 1200,
        
        padding: "0 16px",
        justifyContent: "center",
      }}
    >
      {visibleCards.coping && (
        <ScoreCard
          domainName="Coping Mechanisms"
          scoreKey="CMScore"
          maxScore={48}
          thresholds={[
            { min: 0, max: 1, color: "#28a745" },
            { min: 2, max: 3, color: "#ffc107" },
            { min: 4, max: 48, color: "#B00000" },
          ]}
         
          summaryLines={[{ label: "Actions in Progress:",value: actionsByDomain.coping }]}
          navigationButtons={[
            {
              label: "Complete Coping",
              onClick: () => handleNavigationButtonClick(false, "trauma"),
              disabled: false,
            },
          ]}
        />
      )}

      {visibleCards.mental && (
        <ScoreCard
          domainName="Mental Health"
          scoreKey="MHScore"
          maxScore={54}
          thresholds={[
            { min: 0, max: 13, color: "#28a745" },
            { min: 14, max: 26, color: "#ffc107" },
            { min: 27, max: 54, color: "#B00000" },
          ]}
          summaryLines={[{ label: "Actions in Progress:", value: actionsByDomain.mental }]}
          navigationButtons={[
            {
              label: "Complete Mental",
              onClick: () => handleNavigationButtonClick(false,"mental"),
              disabled: false,
            },
          ]}
        />
      )}

      {visibleCards.physical && (
        <ScoreCard
          domainName="Physical Health"
          scoreKey="PHScore"
          maxScore={30}
          thresholds={[
            { min: 0, max: 5, color: "#28a745" },
            { min: 6, max: 10, color: "#ffc107" },
            { min: 11, max: 30, color: "#B00000" },
          ]}
          summaryLines={[{ label: "Actions in Progress:", value: actionsByDomain.physical }]}
          navigationButtons={[
            {
              label: "Complete Physical",
              onClick: () => handleNavigationButtonClick(false,"physical"),
              disabled: false,
            },
          ]}
        />
      )}

      {visibleCards.spiritual && (
        <ScoreCard
          domainName="Spiritual Health"
          scoreKey="SHScore"
          maxScore={28}
          thresholds={[
            { min: 0, max: 7, color: "#28a745" },
            { min: 8, max: 14, color: "#ffc107" },
            { min: 15, max: 28, color: "#B00000" },
          ]}
          summaryLines={[{ label: "Actions in Progress:", value: actionsByDomain.spiritual }]}
          navigationButtons={[
            {
              label: "Complete Spiritual",
              onClick: () => handleNavigationButtonClick(false,"spiritual"),
              disabled: false,
            },
          ]}
        />
      )}

      {visibleCards.outlook && (
        <ScoreCard
          domainName="Outlook On Life"
          scoreKey="OLScore"
          maxScore={60}
          thresholds={[
            { min: 0, max: 15, color: "#28a745" },
            { min: 16, max: 30, color: "#ffc107" },
            { min: 31, max: 60, color: "#B00000" },
          ]}
          summaryLines={[{ label: "Actions in Progress:", value: actionsByDomain.outlook }]}
          navigationButtons={[
            {
              label: "Complete Outlook",
              onClick: () => handleNavigationButtonClick(false,"outlook"),
              disabled: false,
            },
          ]}
        />
      )}

      {visibleCards.overall && (
        <ScoreCard
          domainName="Overall Score"
          scoreKey={null}
          maxScore={241}
          thresholds={[
            { min: 0, max: 42, color: "#28a745" },
            { min: 43, max: 87, color: "#ffc107" },
            { min: 88, max: 241, color: "#B00000" },
          ]}
          
          customScoreHook={useFetchMultipleScores}
          customScoreHookArgs={[
            ["TRScore", "CMScore", "MHScore", "PHScore", "SHScore", "OLScore"],
          ]}
           navigationButtons={[
            {
              label: "View Reports",
              onClick: () => handleNavigationButtonClick(true,""),
              disabled: false,
            },
          ]}
          noTabs={true}
          triplePills={true}
        />
      )}
    </div>
  </>
);

}