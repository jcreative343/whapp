import { fetchUserAttributes, getCurrentUser } from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { listAssessmentAnswers, listAssessmentScores, listConnectionRequests, listNotifications, listOrganizationCPs, listTrackPlans, listUserLinks, listUserPayments } from "../graphql/queries";
import { useConnectedClient } from "../ui-components/ConnectedClientContext";
const diagnosisFields = [
  "MHDxPTSD", "MHDxDepression", "MHDxSUD",
  "PHDxInfertility", "PHDxCurableSTD", "PHDxIncurableSTD", "PHDxCancer", "PHDxDiabetes",
  "PHDxHighBlood", "PHDxHeartDisease", "PHDxIrritableBowel",
  "PHDxVitA", "PHDxVitB", "PHDxVitC", "PHDxVitD", "PHDxVitE", "PHDxVitK",
  "PHDxAutoimmune", "PHDxOtherPhysical"
];
const diagnosisDisplayNames = {
  MHDxPTSD: "PTSD",
  MHDxDepression: "Depression",
  MHDxSUD: "Substance Use Disorder",
  PHDxInfertility: "Infertility",
  PHDxCurableSTD: "Curable STD",
  PHDxIncurableSTD: "Incurable STD",
  PHDxCancer: "Cancer",
  PHDxDiabetes: "Diabetes",
  PHDxHighBlood: "High Blood Pressure",
  PHDxHeartDisease: "Heart Disease",
  PHDxIrritableBowel: "Irritable Bowel Syndrome",
  PHDxVitA: "Vitamin A Deficiency",
  PHDxVitB: "Vitamin B Deficiency",
  PHDxVitC: "Vitamin C Deficiency",
  PHDxVitD: "Vitamin D Deficiency",
  PHDxVitE: "Vitamin E Deficiency",
  PHDxVitK: "Vitamin K Deficiency",
  PHDxAutoimmune: "Autoimmune Condition",
  PHDxOtherPhysical: "Other Physical Condition",
};
const traumaFields = [
  "TRHurtfulNames",
  "TRNoNurturing",
  "TRHit",
  "TRNeedsNotMet",
  "TRForcedSex",
  "TRResponsible",
  "TRViolence",
  "TRSubstanceAbuse",
  "TRMentalIllness",
  "TRParentDivorce",
  "TRParentIncarcerated",
  "TRHomelessness",
  "TRBodyFunction",
  "TRNaturalDisaster",
  "TRDirectTerrorism",
  "TRIndirectTerrorism",
  "TRLovedOne",
];

const traumaDisplayNames = {
  TRHurtfulNames: "Hurtful Names",
  TRNoNurturing: "No Nurturing",
  TRHit: "Hit",
  TRNeedsNotMet: "Needs Not Met",
  TRForcedSex: "Forced Sex",
  TRResponsible: "Responsible for Others",
  TRViolence: "Witnessed Violence",
  TRSubstanceAbuse: "Substance Abuse in Household",
  TRMentalIllness: "Mental Illness in Household",
  TRParentDivorce: "Parental Divorce",
  TRParentIncarcerated: "Parent Incarcerated",
  TRHomelessness: "Homelessness",
  TRBodyFunction: "Loss of Body Function",
  TRNaturalDisaster: "Natural Disaster",
  TRDirectTerrorism: "Direct Terrorism",
  TRIndirectTerrorism: "Indirect Terrorism",
  TRLovedOne: "Loss of Loved One",
};
const client = generateClient();

export default function DashboardProfessional() {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [search, setSearch] = useState("");
  const [showClientWarning, setShowClientWarning] = useState(false);
  const [improvementStats, setImprovementStats] = useState({
    CM: "--",
    MH: "--",
    PH: "--",
    SH: "--",
    OL: "--",
    OS: "--",
  });
  const [topActions, setTopActions] = useState([]);
  const [topDiagnoses, setTopDiagnoses] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(formatDate(oneYearAgo));
  const [endDate, setEndDate] = useState(formatDate(today));

  const [topTraumas, setTopTraumas] = useState([]);

  const fetchTopTraumas = async (clientsList, client) => {
    try {
      const traumaCount = {};

      for (const user of clientsList) {
        const { data } = await client.graphql({
          query: listAssessmentAnswers,
          variables: {
            filter: {
              userId: { eq: user.clientId },
              isActive: { eq: false },
            },
          },
        });

        const assessments = data?.listAssessmentAnswers?.items || [];
        if (assessments.length === 0) continue;

        // Use the latest completed assessment
        assessments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        const latest = assessments[assessments.length - 1];

        // Count trauma fields that are true
        for (const field of traumaFields) {
          if (latest[field] === true) {
            traumaCount[field] = (traumaCount[field] || 0) + 1;
          }
        }
      }

      const sorted = Object.entries(traumaCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setTopTraumas(sorted);
    } catch (err) {
      console.error("Failed to fetch top traumas:", err);
      setTopTraumas([]);
    }
  };
  useEffect(() => {
    // Recalculate combined stats for filtered clients
    if (filteredClients.length > 0) {
      fetchCombinedStats(filteredClients);
      calculateImprovementStats(filteredClients, client); // pass GraphQL client
    } else {
      setCombinedStats({
        totalAssessments: 0,
        totalInProgress: 0,
        totalDiscontinued: 0,
        totalSuccessful: 0,
      });
      setImprovementStats({
        CM: "--",
        MH: "--",
        PH: "--",
        SH: "--",
        OL: "--",
        OS: "--",
      });
    }
  }, [filteredClients, client]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const containerStyle2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isMobile ? "90%" : "1000px",
    margin: "1px auto",
    padding: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "block",
  };
  const statsContainerResponsive = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: isMobile ? "center" : "flex-start", // center on mobile, align start on desktop
    width: isMobile ? "90%" : "1000px",
    margin: "24px auto",
    gap: isMobile ? 12 : 24,
    flexDirection: isMobile ? "column" : "row",
  };
  const sideBoxStyle = {
    flex: "1",
    padding: 20,
    width: isMobile ? "100%" : "auto",
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minHeight: 350,
  };

  const centerBoxStyle = {
    flex: "1.3",
    padding: 20,
    width: isMobile ? "100%" : "auto",
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    minHeight: 350,
  };


  const [actionStats, setActionStats] = useState({
    inProgress: 0,
    discontinued: 0,
    successful: 0,
  });
  const [combinedStats, setCombinedStats] = useState({
    completedAssessments: 0,
    inProgress: 0,
    discontinued: 0,
    successful: 0,
  });
  const [recommendationStats, setRecommendationStats] = useState({
    sent: 0,
    accepted: 0,
  });
  const fetchTopActions = async (clientsList, client) => {
    try {
      const actionCount = {};

      for (const user of clientsList) {
        const { data } = await client.graphql({
          query: listTrackPlans,
          variables: {
            filter: {
              userId: { eq: user.clientId },
            },
          },
        });

        const plans = data?.listTrackPlans?.items || [];

        for (const plan of plans) {
          const action = plan?.Action?.trim();
          if (action) {
            actionCount[action] = (actionCount[action] || 0) + 1;
          }
        }
      }

      const sorted = Object.entries(actionCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setTopActions(sorted);
    } catch (err) {
      console.error("Failed to fetch top actions:", err);
      setTopActions([]);
    }
  };

  const fetchTopDiagnoses = async (clientsList, client) => {
    try {
      const diagnosisCount = {};

      for (const user of clientsList) {
        const { data } = await client.graphql({
          query: listAssessmentAnswers,
          variables: {
            filter: {
              userId: { eq: user.clientId },
              isActive: { eq: false },
            },
          },
        });

        const assessments = data?.listAssessmentAnswers?.items || [];

        if (assessments.length === 0) continue;

        // Sort assessments by createdAt date
        assessments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        const latest = assessments[assessments.length - 1];

        for (const field of diagnosisFields) {
          if (latest[field]) {
            diagnosisCount[field] = (diagnosisCount[field] || 0) + 1;
          }
        }
      }

      const sorted = Object.entries(diagnosisCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setTopDiagnoses(sorted);
    } catch (err) {
      console.error("Failed to fetch top diagnoses:", err);
      setTopDiagnoses([]);
    }
  };


  const fetchRecommendationStats = async () => {
    try {
      const attrs = await fetchUserAttributes();
      const userId = (await getCurrentUser()).userId;
      const userEmail = attrs.email;

      const { data } = await client.graphql({
        query: listNotifications,
      });

      const notifications = data?.listNotifications?.items || [];

      // If a specific client is selected, filter by their email
      const targetClientEmail = connectedClient?.email;

      const sent = notifications.filter(
        (n) =>
          n.NotificationType === "Recommendation" &&
          n.SenderId === userId &&
          (!targetClientEmail || n.TargetEmail === targetClientEmail)
      ).length;


      const accepted = notifications.filter(
        (n) =>
          n.NotificationType === "RecommendationBack" &&
          n.TargetEmail === userEmail &&
          n.RecommedationNote === "Accepted" &&
          (!targetClientEmail || n.SenderEmail === targetClientEmail)
      ).length;

      setRecommendationStats({ sent, accepted });
    } catch (err) {
      console.error("Failed to load recommendation stats:", err);
      setRecommendationStats({ sent: 0, accepted: 0 });
    }
  };
  const fetchPlansPaidFor = async () => {
    try {
      const attrs = await fetchUserAttributes();
      const userId = (await getCurrentUser()).userId;
      const today = new Date().toISOString();

      // Step 1: Check if user is in an organization
      const orgRes = await client.graphql({
        query: listOrganizationCPs,
        variables: {
          filter: {
            OrganizationCPEmail: { eq: attrs.email },
          },
        },
      });

      const orgLink = orgRes?.data?.listOrganizationCPs?.items?.[0];
      const orgId = orgLink?.OrganizationId;

      // Step 2: Construct full filter using AND
      const filterConditions = [
        { paidUntil: { gt: today } },
        {
          or: [
            { paymentStatus: { eq: "active" } },
            { paymentStatus: { eq: "completed" } },
          ],
        },
        orgId
          ? { organizationId: { eq: orgId } }
          : { userId: { eq: userId } },
      ];

      const { data } = await client.graphql({
        query: listUserPayments,
        variables: {
          filter: {
            and: filterConditions,
          },
        },
      });

      const payments = data?.listUserPayments?.items || [];

      const totalPlans = payments.reduce((sum, payment) => {
        return sum + (Number(payment.clientsProjected) || 0);
      }, 0);

      setPlansPaidFor(totalPlans);
    } catch (err) {
      console.error("Failed to fetch plans paid for:", err);
      setPlansPaidFor(0);
    }
  };

  function parseInputDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // month is 0-based
  }
  // In component
  const { connectedClient, setConnectedClient } = useConnectedClient();
  const [pendingRequests, setPendingRequests] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [completedAssessments, setCompletedAssessments] = useState(0);
  const [activeTab, setActiveTab] = useState("top 5 Diagnosis");
  const [plansPaidFor, setPlansPaidFor] = useState(0);

  useEffect(() => {
    fetchConnectionRequestStats();
  }, []);
  useEffect(() => {
    fetchClients();
    fetchRecommendationStats();
    fetchPlansPaidFor();
  }, []);

  useEffect(() => {
    const filtered = clients
      .filter((client) => {
        // Search filter
        const first = client.firstName?.toLowerCase() || "";
        const last = client.lastName?.toLowerCase() || "";
        const email = client.email?.toLowerCase() || "";
        const fullName = `${first} ${last}`;
        const searchTerms = search.toLowerCase().trim().split(/\s+/);

        return searchTerms.every((term) =>
          first.includes(term) || last.includes(term) || email.includes(term) || fullName.includes(term)
        );
      })
      .filter((client) => {
        // Date filter
        if (!startDate && !endDate) return true;
        const created = new Date(client.createdAt);
        let show = true;
        if (startDate) {
          const start = parseInputDate(startDate);
          show = show && created >= start;
        }
        if (endDate) {
          const end = parseInputDate(endDate);
          end.setHours(23, 59, 59, 999);
          show = show && created <= end;
        }
        return show;
      });

    setFilteredClients(filtered);
  }, [clients, search, startDate, endDate]);
  useEffect(() => {
    fetchRecommendationStats();
  }, [connectedClient]);
  useEffect(() => {
    if (connectedClient) {
      fetchAssessmentStats(connectedClient.clientId);
      fetchActionStats(connectedClient.clientId); // ✅
    }
  }, [connectedClient]);
  const fetchActionStats = async (clientId) => {
    try {
      const { data } = await client.graphql({
        query: listTrackPlans,
        variables: {
          filter: {
            userId: { eq: clientId },
          },
        },
      });

      const items = data?.listTrackPlans?.items || [];

      let inProgress = 0;
      let discontinued = 0;
      let successful = 0;

      for (const item of items) {
        if (item.Discontinued) {
          discontinued++;
        } else if (item.Successful) {
          successful++;
        } else {
          inProgress++;
        }
      }

      setActionStats({ inProgress, discontinued, successful });
    } catch (err) {
      console.error("Failed to fetch action stats:", err);
      setActionStats({ inProgress: 0, discontinued: 0, successful: 0 });
    }
  };
  const fetchConnectionRequestStats = async () => {
    try {
      const attrs = await fetchUserAttributes();
      const userEmail = attrs.email;

      // Fetch only pending
      const pendingRes = await client.graphql({
        query: listConnectionRequests,
        variables: {
          filter: {
            targetEmail: { eq: userEmail },
            status: { eq: "pending" },
          },
        },
      });

      const totalRes = await client.graphql({
        query: listConnectionRequests,
        variables: {
          filter: {
            targetEmail: { eq: userEmail },
          },
        },
      });

      setPendingRequests(pendingRes?.data?.listConnectionRequests?.items?.length || 0);
      setTotalRequests(totalRes?.data?.listConnectionRequests?.items?.length || 0);
    } catch (err) {
      console.error("Error fetching connection requests:", err);
      setPendingRequests(0);
      setTotalRequests(0);
    }
  };

  const fetchClients = async () => {
    try {
      const user = await getCurrentUser();
      const userId = user.userId;
      const { data } = await client.graphql({ query: listUserLinks });
      const links = data?.listUserLinks?.items || [];

      const myLinks = links.filter((link) => link.professionalId === userId);

      const hasHiddenClients = myLinks.some((link) => !link.clientViewable);
      setShowClientWarning(hasHiddenClients);

      const visibleLinks = myLinks.filter((link) => link.clientViewable === true);

      const clientsWithEmail = visibleLinks.map((link) => ({
        id: link.id,
        clientId: link.clientId,
        firstName: link.clientFirstName,
        lastName: link.clientLastName,
        email: link.clientEmail || "Unknown",
        createdAt: link.createdAt, // << add this
      }));

      setClients(clientsWithEmail);
      setFilteredClients(clientsWithEmail);
      fetchCombinedStats(clientsWithEmail);
      await calculateImprovementStats(clientsWithEmail, client);
      await fetchTopDiagnoses(clientsWithEmail, client);
      await fetchTopActions(clientsWithEmail, client);
      await fetchTopTraumas(clientsWithEmail, client);

    } catch (err) {
      console.error("Failed to load client links:", err);
    }
  };

  const calculateImprovementStats = async (clientsList, client) => {
    if (!client || typeof client.graphql !== "function") {
      console.error("🚨 client is not valid!", client);
    }

    try {
      const scoreFields = ["CMScore", "MHScore", "PHScore", "SHScore", "OLScore"];
      const improvedCount = {
        CMScore: 0,
        MHScore: 0,
        PHScore: 0,
        SHScore: 0,
        OLScore: 0,
        OSScore: 0,
      };

      let totalEligibleClients = 0;

      for (const user of clientsList) {
        const { data } = await client.graphql({
          query: listAssessmentScores,
          variables: {
            filter: {
              userId: { eq: user.clientId },
              isActive: { eq: false },
            },
          },
        });

        const assessments = data?.listAssessmentScores?.items || [];

        if (assessments.length >= 2) {
          assessments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          const secondLast = assessments[assessments.length - 2];
          const last = assessments[assessments.length - 1];

          for (const field of scoreFields) {
            const oldScore = Number(secondLast?.[field] || 0);
            const newScore = Number(last?.[field] || 0);
            if (oldScore - newScore >= 2) {
              improvedCount[field]++;
            }
          }

          const improvedCountForClient = scoreFields.filter((field) => {
            const oldScore = Number(secondLast?.[field] || 0);
            const newScore = Number(last?.[field] || 0);
            return oldScore - newScore >= 2;
          }).length;

          if (improvedCountForClient >= 3) {
            improvedCount.OSScore++;
          }

          totalEligibleClients++;
        }
      }

      const calculatePercent = (count) =>
        totalEligibleClients === 0 ? "--" : Math.round((count / totalEligibleClients) * 100) + "%";

      setImprovementStats({
        CM: calculatePercent(improvedCount.CMScore),
        MH: calculatePercent(improvedCount.MHScore),
        PH: calculatePercent(improvedCount.PHScore),
        SH: calculatePercent(improvedCount.SHScore),
        OL: calculatePercent(improvedCount.OLScore),
        OS: calculatePercent(improvedCount.OSScore),
      });
    } catch (err) {
      console.error("Error calculating improvement stats:", err);
      setImprovementStats({
        CM: "--",
        MH: "--",
        PH: "--",
        SH: "--",
        OL: "--",
        OS: "--",
      });
    }
  };


  const fetchCombinedStats = async (clientsList) => {
    try {
      let totalAssessments = 0;
      let totalInProgress = 0;
      let totalDiscontinued = 0;
      let totalSuccessful = 0;

      for (const c of clientsList) {
        const [assessmentsRes, plansRes] = await Promise.all([
          client.graphql({
            query: listAssessmentAnswers,
            variables: {
              filter: {
                userId: { eq: c.clientId },
                isActive: { eq: false },
              },
            },
          }),
          client.graphql({
            query: listTrackPlans,
            variables: {
              filter: {
                userId: { eq: c.clientId },
              },
            },
          }),
        ]);

        const assessments = assessmentsRes?.data?.listAssessmentAnswers?.items || [];
        const plans = plansRes?.data?.listTrackPlans?.items || [];

        totalAssessments += assessments.length;

        for (const plan of plans) {
          if (plan.Discontinued) totalDiscontinued++;
          else if (plan.Successful) totalSuccessful++;
          else totalInProgress++;
        }
      }

      setCombinedStats({
        totalAssessments,
        totalInProgress,
        totalDiscontinued,
        totalSuccessful,
      });
    } catch (err) {
      console.error("Failed to fetch combined client stats:", err);
      setCombinedStats({
        totalAssessments: 0,
        totalInProgress: 0,
        totalDiscontinued: 0,
        totalSuccessful: 0,
      });
    }
  };


  const fetchAssessmentStats = async (clientId) => {
    try {
      const { data } = await client.graphql({
        query: listAssessmentAnswers,
        variables: {
          filter: {
            userId: { eq: clientId },
            isActive: { eq: false },
          },
        },
      });

      const completed = data?.listAssessmentAnswers?.items?.length || 0;
      setCompletedAssessments(completed);
    } catch (err) {
      console.error("Failed to fetch assessments:", err);
      setCompletedAssessments(0);
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>

        {/* LEFT STATS BOX */}
        <div style={containerStyle2}>
          <h3 style={titleStyle}>General</h3>
          <div style={statsRow}>
            <div style={statLine}>
              Plans Paid For
              <div style={highlightNumber}>{plansPaidFor}</div>
            </div>
            <div style={statLine}>
              Active Clients
              <div style={highlightNumber}>{clients.length}</div>
            </div>
            <div style={statLine}>
              Pending Clients
              <div style={highlightNumber}>{pendingRequests}</div>
            </div>
          </div>
        </div>

        {/* TOP 5 BUTTONS */}
        <div style={containerStyle2}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            marginBottom: 22,
          }}>
            {["top 5 Diagnosis", "top 5 Actions", "top 5 Traumas"].map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(activeTab === key ? null : key)}
                style={{
                  marginTop: 12,
                  cursor: "pointer",
                  padding: "10px 24px",
                  borderRadius: 20,
                  border: activeTab === key ? "2px solid #4da6ff" : "1px solid #ccc",
                  backgroundColor: activeTab === key ? "#d9eaff" : "#fff",
                  fontWeight: "bold",
                  width: "100%",
                  fontSize: 16,
                }}
              >
                {key}
              </button>
            ))}

          </div>

          {activeTab === "top 5 Diagnosis" && (
            <div style={statsRow}>
              {topDiagnoses.map(([key, count]) => (
                <div key={key} style={statLine}>
                  {diagnosisDisplayNames[key] || key}
                  <div style={highlightNumber}>{count}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "top 5 Actions" && (
            <div style={statsRow}>
              {topActions.map(([name, count]) => (
                <div key={name} style={statLine}>
                  {name}
                  <div style={highlightNumber}>{count}</div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "top 5 Traumas" && (
            <div style={statsRow}>
              {topTraumas.map(([key, count]) => (
                <div key={key} style={statLine}>
                  {traumaDisplayNames[key] || key}
                  <div style={highlightNumber}>{count}</div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* MIDDLE & RIGHT STATS BOX */}
        <div style={statsContainerResponsive}>
          {/* MIDDLE STATS BOX */}
          <div style={sideBoxStyle}>
            <h3 style={titleStyle}>
              {connectedClient
                ? `Stats for: ${connectedClient.firstName} ${connectedClient.lastName}`
                : "Plan and Progress Stats"}
            </h3>
            <div style={statsRow}>
              <div style={statLine}>
                Actions In Progress
                <div style={highlightNumber}>{connectedClient ? actionStats.inProgress : combinedStats.totalInProgress}</div>
              </div>
              <div style={statLine}>
                Actions Discontinued
                <div style={highlightNumber}>{connectedClient ? actionStats.discontinued : combinedStats.totalDiscontinued}</div>
              </div>
              <div style={statLine}>
                Actions Successfully Completed
                <div style={highlightNumber}>{connectedClient ? actionStats.successful : combinedStats.totalSuccessful}</div>
              </div>
              <div style={statLine}>
                Recommendations Made
                <div style={highlightNumber}>{recommendationStats.sent}</div>
              </div>
              <div style={statLine}>
                Recommendations Accepted
                <div style={highlightNumber}>{recommendationStats.accepted}</div>
              </div>
            </div>
          </div>

          {/* RIGHT STATS BOX */}
          <div style={sideBoxStyle}>
            <h3 style={titleStyle}>
              {connectedClient ? "Clients Improvement Stats" : "Clients Improvement"}
            </h3>
            <div style={statsRow}>
              <div style={statLine}>
                Assessments Completed
                <div style={highlightNumber}>{connectedClient ? completedAssessments : combinedStats.totalAssessments}</div>
              </div>
              <div style={statLine}>
                CM Improvement
                <div style={highlightNumber}>{improvementStats.CM}</div>
              </div>
              <div style={statLine}>
                MH Improvement
                <div style={highlightNumber}>{improvementStats.MH}</div>
              </div>
              <div style={statLine}>
                PH Improvement
                <div style={highlightNumber}>{improvementStats.PH}</div>
              </div>
              <div style={statLine}>
                SH Improvement
                <div style={highlightNumber}>{improvementStats.SH}</div>
              </div>
              <div style={statLine}>
                OL Improvement
                <div style={highlightNumber}>{improvementStats.OL}</div>
              </div>
              <div style={statLine}>
                Overall Score (OS)
                <div style={highlightNumber}>{improvementStats.OS}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENTS LIST */}
        <div style={containerStyle2}>
          {showClientWarning && (
            <div style={{
              backgroundColor: "#fff3cd",
              color: "#856404",
              padding: "10px",
              border: "1px solid #ffeeba",
              borderRadius: "5px",
              marginBottom: "10px"
            }}>
              Some clients are temporarily inactive because the payment for your subscription was not successful.
              Please update your payment method to make all clients active.
            </div>
          )}

          <h3 style={titleStyle}>Your Clients</h3>

          {/* FILTERS */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // stack on mobile
              gap: "10px", // space between inputs
              marginBottom: "20px",
              alignItems: isMobile ? "stretch" : "center", // stretch inputs on mobile
            }}
          >
            {/* Text box filter */}
            <input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ flex: "1", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            {/* Date filters */}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          </div>


          {/* CLIENTS */}
          <div style={linksSectionStyle}>
            {filteredClients.length === 0 ? (
              <p style={emptyStyle}>No clients found.</p>
            ) : (
              filteredClients
                .filter(client => {
                  const created = new Date(client.createdAt);

                  let show = true;

                  if (startDate) {
                    const start = parseInputDate(startDate);
                    show = show && created >= start;
                  }

                  if (endDate) {
                    const end = parseInputDate(endDate);
                    end.setHours(23, 59, 59, 999); // include the whole end date
                    show = show && created <= end;
                  }

                  return show;
                })
                .map((client) => (
                  <div
                    key={client.id}
                    style={{
                      ...linkBoxStyle,
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      gap: "10px",
                      alignItems: isMobile ? "flex-start" : "center", // vertical alignment of items
                    }}
                  >
                    {[["First Name", client.firstName], ["Last Name", client.lastName], ["Email", client.email]].map(([label, value]) => (
                      <div
                        key={label}
                        style={{
                          ...userColumnStyle,
                          textAlign: isMobile ? "left" : "left", // consistent left-align
                          width: isMobile ? "100%" : "auto",     // full width on mobile for consistency
                        }}
                      >
                        <strong>{label}</strong>
                        <div>{value}</div>
                      </div>
                    ))}

                    <div style={{ textAlign: isMobile ? "left" : "left", marginTop: isMobile ? "10px" : "0" }}>
                      <button
                        style={{
                          ...buttonStyle,
                          width: isMobile ? "100%" : "auto",  // stretch button on mobile
                          backgroundColor: connectedClient?.clientId === client.clientId ? "#ccc" : "#0077cc",
                          cursor: connectedClient?.clientId === client.clientId ? "not-allowed" : "pointer",
                        }}
                        onClick={() => connectedClient?.clientId !== client.clientId && setConnectedClient(client)}
                        disabled={connectedClient?.clientId === client.clientId}
                      >
                        View
                      </button>
                    </div>
                  </div>

                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ===== STYLES =====

const topBarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#eaf4ff",
  padding: "10px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1000,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const disconnectBtn = {
  backgroundColor: "#ff5e5e",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold",
};



const titleStyle = {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 16,
  color: "#0077cc",
  alignItems: "center"
};

const inputStyle = {
  width: "100%",
  padding: 10,
  fontSize: 14,
  borderRadius: 8,
  border: "1.5px solid #ccc",
  marginTop: 6,
  marginBottom: 20,
  boxSizing: "border-box",
};

const linksSectionStyle = {
  marginTop: 20,
};

const linkBoxStyle = {
  backgroundColor: "#f9f9f9",
  padding: 16,
  borderRadius: 10,
  marginBottom: 16,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
};

const linkRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const userColumnStyle = {
  flex: 1,
  textAlign: "center",
};

const emptyStyle = {
  fontStyle: "italic",
  color: "#555",
};

const statsBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "1000px",
  margin: "1px auto",
  padding: 24,
  borderRadius: 12,
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  display: "block",
};

const statsRow = {
  display: "flex",
  flexDirection: "row",   // side by side
  justifyContent: "center",
  gap: 24,                // spacing between each stat
  flexWrap: "wrap",       // wrap if screen is too small
};

const statLine = {
  display: "flex",
  flexDirection: "column",  // label on top, number below
  alignItems: "center",
  fontSize: 14,
  color: "#0077cc",
};

const highlightNumber = {
  display: "block",
  textAlign: "center",
  borderRadius: 12,
  color: "#0077cc",
  fontSize: 18,
  fontWeight: 600,
  padding: "6px 12px",
  marginTop: 6,
  marginBottom: 6,
  minWidth: 120,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};
const buttonStyle = {
  backgroundColor: "#0077cc",
  color: "white",
  fontWeight: "bold",
  padding: "8px 16px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  fontSize: 14,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};
const statsContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "1000px",
  margin: "24px auto",
  gap: 24,

};


const miniList = {
  margin: "8px 0 0 16px",
  padding: 0,
  fontSize: 14,
  lineHeight: 1.4,
  listStyleType: "disc",
};
