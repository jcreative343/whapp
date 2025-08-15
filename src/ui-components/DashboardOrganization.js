import { getCurrentUser } from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import {
    listAssessmentAnswers,
    listAssessmentScores,
    listNotifications,
    listOrganizationCPs,
    listOrganizationInformations,
    listTrackPlans,
    listUserLinks, listUserPayments
} from "../graphql/queries";

const client = generateClient();
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
export default function DashboardOrganization() {
    const [professionals, setProfessionals] = useState([]);
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");
    const [view, setView] = useState("clients");
    const [filtered, setFiltered] = useState([]);
    const [clientFilterPro, setClientFilterPro] = useState("");
    const [topDiagnoses, setTopDiagnoses] = useState([]);
    const [topActions, setTopActions] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [departments, setDepartments] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [services, setServices] = useState([]);

    const [filterDepartment, setFilterDepartment] = useState("");
    const [filterProgram, setFilterProgram] = useState("");
    const [filterService, setFilterService] = useState("");
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

    const [topTraumas, setTopTraumas] = useState([]);

    const fetchTopTraumas = async (clientsList) => {
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
    const [diagnosisView, setDiagnosisView] = useState("count"); // or whatever toggle you use
    const [actionView, setActionView] = useState("count");

    const [improvementStats, setImprovementStats] = useState({
        CM: "--", MH: "--", PH: "--", SH: "--", OL: "--", OS: "--",
    });
    const [recommendationStats, setRecommendationStats] = useState({
        recommended: 0,
        accepted: 0,
    });
    const fetchTopDiagnosisAndActions = async (clientsList) => {
        try {
            // Maps to count occurrences
            const diagnosisCounts = {};
            const actionCounts = {};

            // Collect all client IDs to fetch their data
            const clientIds = clientsList.map(c => c.clientId);

            // For performance, you might want batch calls or pagination but here's the basic way:

            // Fetch diagnoses - assuming you have a query like listAssessmentAnswers or similar
            // Adjust according to your actual schema and diagnosis field
            for (const clientId of clientIds) {
                const diagnosisRes = await client.graphql({
                    query: listAssessmentAnswers, // or your diagnoses query
                    variables: {
                        filter: {
                            userId: { eq: clientId },
                            isActive: { eq: false },
                        },
                    },
                });

                const diagnoses = diagnosisRes?.data?.listAssessmentAnswers?.items || [];

                if (diagnoses.length > 0) {
                    // Sort descending by creation date (latest first)
                    diagnoses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                    // Take the most recent assessment
                    const mostRecent = diagnoses[0];

                    // Count diagnosis fields from that most recent assessment
                    diagnosisFields.forEach((field) => {
                        if (mostRecent[field]) {
                            diagnosisCounts[field] = (diagnosisCounts[field] || 0) + 1;
                        }
                    });
                }



                // Fetch actions from TrackPlans
                const actionsRes = await client.graphql({
                    query: listTrackPlans,
                    variables: {
                        filter: {
                            userId: { eq: clientId },
                        },
                    },
                });

                const actions = actionsRes?.data?.listTrackPlans?.items || [];

                actions.forEach((plan) => {
                    const actionName = plan.Action || "Unknown";
                    actionCounts[actionName] = (actionCounts[actionName] || 0) + 1;
                });
            }

            // Sort and slice top 5 diagnoses
            const sortedDiagnoses = Object.entries(diagnosisCounts)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([name, count]) => ({ name, count }));

            // Sort and slice top 5 actions
            const sortedActions = Object.entries(actionCounts)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([name, count]) => ({ name, count }));

            setTopDiagnoses(sortedDiagnoses);
            setTopActions(sortedActions);

        } catch (err) {
            console.error("Failed to fetch top diagnoses and actions:", err);
            setTopDiagnoses([]);
            setTopActions([]);
        }
    };

    const fetchRecommendationStats = async (professionalsList) => {
        try {
            // Gather all professional emails
            const professionalEmails = professionalsList.map(p => p.email);

            // Fetch all notifications (you may need pagination if large)
            const { data } = await client.graphql({ query: listNotifications });
            const notifications = data?.listNotifications?.items || [];

            // Filter recommended changes sent by any pro under org
            const recommendedChanges = notifications.filter(n =>
                professionalEmails.includes(n.SenderEmail) &&
                n.NotificationType === "Recommendation" // or "Recommendation" depending on your schema
            );

            // Filter accepted recommendations sent back by clients to pros
            const acceptedRecommendations = notifications.filter(n =>
                professionalEmails.includes(n.TargetEmail) &&
                n.NotificationType === "RecommendationBack" &&
                n.RecommedationNote === "Accepted" // or however you denote acceptance
            );

            setRecommendationStats({
                recommended: recommendedChanges.length,
                accepted: acceptedRecommendations.length,
            });
        } catch (err) {
            console.error("Failed to fetch recommendation stats:", err);
            setRecommendationStats({ recommended: 0, accepted: 0 });
        }
    };

    const [plansPaid, setPlansPaid] = useState(0);
     const fetchPlansPaid = async () => {
        try {
          
          const today = new Date().toISOString();
    
          const user = await getCurrentUser()
    
          
          const orgId = user.userId;
    
          // Step 2: Construct full filter using AND
          const filterConditions = [
            { paidUntil: { gt: today } },
            {
              or: [
                { paymentStatus: { eq: "active" } },
                { paymentStatus: { eq: "completed" } },
              ],
            },
            
            { organizationId: { eq: orgId } }
             
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
    
          setPlansPaid(totalPlans);
        } catch (err) {
          console.error("Failed to fetch plans paid for:", err);
          setPlansPaid(0);
        }
      };

    const [stats, setStats] = useState({

        totalAssessments: 0,
        totalInProgress: 0,
        totalDiscontinued: 0,
        totalSuccessful: 0,
    });

    useEffect(() => {
        fetchProfessionals();
    }, []);

    useEffect(() => {
        const searchTerms = search.toLowerCase().trim().split(/\s+/);
        const list = view === "professionals" ? professionals : clients;

        const filteredList = list.filter(item => {
            // --- SEARCH FILTER ---
            const first = item.firstName?.toLowerCase() || "";
            const last = item.lastName?.toLowerCase() || "";
            const email = item.email?.toLowerCase() || "";
            const fullName = `${first} ${last}`;

            const matchesSearch = searchTerms.every(term =>
                first.includes(term) || last.includes(term) || email.includes(term) || fullName.includes(term)
            );

            // --- PROFESSIONAL FILTER (for clients) ---
            const matchesProFilter = view === "clients"
                ? (!clientFilterPro || item.professionalEmail === clientFilterPro)
                : true;

            // --- DATE FILTER (UserLink's createdAt) ---
            const matchesDateFilter = (() => {
                if (!startDate && !endDate) return true;

                const createdAt = new Date(item.createdAt);

                let start = startDate ? new Date(startDate) : null;
                let end = endDate ? new Date(endDate) : null;

                // Ensure start is at beginning of day
                if (start) start.setHours(0, 0, 0, 0);

                // Ensure end is at end of day
                if (end) end.setHours(23, 59, 59, 999);

                if (start && createdAt < start) return false;
                if (end && createdAt > end) return false;

                return true;
            })();


            // --- DEPARTMENT / PROGRAM / SERVICE FILTERS ---
            const matchesDepartment = !filterDepartment ||
                (item.primaryDepartment && item.primaryDepartment === filterDepartment);
            const matchesProgram = !filterProgram ||
                (item.primaryProgramsUnit && item.primaryProgramsUnit === filterProgram);
            const matchesService = !filterService ||
                (item.primaryService && item.primaryService === filterService);

            return matchesSearch && matchesProFilter && matchesDateFilter &&
                matchesDepartment && matchesProgram && matchesService;
        });

        setFiltered(filteredList);

        // --- UPDATE STATS BASED ON FILTERED CLIENTS ONLY ---
        if (view === "clients") {
            fetchStats(filteredList);
            fetchImprovementStats(filteredList);
            fetchTopDiagnosisAndActions(filteredList);
            fetchTopTraumas(filteredList)
        }
    }, [
        search,
        professionals,
        clients,
        view,
        clientFilterPro,
        startDate,
        endDate,
        filterDepartment,
        filterProgram,
        filterService
    ]);






    const fetchOrganizationInfo = async () => {
        try {
            const user = await getCurrentUser();
            const orgId = user.userId;

            const { data } = await client.graphql({
                query: listOrganizationInformations,
                variables: {
                    filter: { userId: { eq: orgId } },
                },
            });

            const orgInfo = data?.listOrganizationInformations?.items?.[0]; // assuming one per org

            if (orgInfo) {
                setDepartments(orgInfo.Departments || []);
                setPrograms(orgInfo.ProgramsUnits || []);
                setServices(orgInfo.Services || []);
            }
        } catch (err) {
            console.error("Failed to fetch organization info:", err);
            setDepartments([]);
            setPrograms([]);
            setServices([]);
        }
    };

    const fetchProfessionals = async () => {
        try {
            const user = await getCurrentUser();
            const orgId = user.userId;
            const { data } = await client.graphql({ query: listOrganizationCPs });
            const all = data?.listOrganizationCPs?.items || [];
            const orgPros = all.filter((cp) => cp.OrganizationId === orgId);

            const pros = orgPros.map((cp) => ({
                id: cp.id,
                email: cp.OrganizationCPEmail,
                firstName: cp.OrganizationCPFirstName,
                lastName: cp.OrganizationCPLastName,
                userId: cp.userId,
                primaryDepartment: cp.primaryDepartment || "",      // <- add this
                primaryProgramsUnit: cp.primaryProgramsUnit || "",  // <- add this
                primaryService: cp.primaryService || "",            // <- add this
            }));


            setProfessionals(pros);
            await fetchOrganizationInfo(pros);
            fetchAllClients(pros); // not just pros.map(p => p.userId)
        } catch (err) {
            console.error("Failed to load professionals:", err);
        }
    };

    const fetchAllClients = async (professionalsList) => {
        try {
            const { data } = await client.graphql({ query: listUserLinks });
            const links = data?.listUserLinks?.items || [];
            // Collect all professional emails
            const professionalEmails = professionalsList.map((p) => p.email);

            const allClients = links
                .filter((link) => professionalEmails.includes(link.professionalEmail))
                .map((link) => {
                    const pro = professionalsList.find(p => p.email === link.professionalEmail);
                    return {
                        id: link.id,
                        clientId: link.clientId,
                        email: link.clientEmail,
                        firstName: link.clientFirstName,
                        lastName: link.clientLastName,
                        professionalEmail: link.professionalEmail,
                        professionalFirstName: link.professionalFirstName,
                        professionalLastName: link.professionalLastName,
                        createdAt: link.createdAt,   // <- add this
                        primaryDepartment: pro?.primaryDepartment || "",
                        primaryProgramsUnit: pro?.primaryProgramsUnit || "",
                        primaryService: pro?.primaryService || "",
                    };
                });



            setClients(allClients);
            fetchStats(allClients);
            fetchPlansPaid();
            fetchRecommendationStats(professionalsList);

            await fetchTopDiagnosisAndActions(allClients);

            await fetchImprovementStats(allClients);
            await fetchTopDiagnosisAndActions(allClients);  // <-- Add this line
            await fetchTopTraumas(allClients)

        } catch (err) {
            console.error("Failed to load client stats:", err);
        }
    };
    const fetchImprovementStats = async (clientsList) => {
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

            for (const c of clientsList) {
                const { data } = await client.graphql({
                    query: listAssessmentScores,
                    variables: {
                        filter: {
                            userId: { eq: c.clientId },
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
            console.error("Failed to calculate improvement stats:", err);
            setImprovementStats({ CM: "--", MH: "--", PH: "--", SH: "--", OL: "--", OS: "--" });
        }
    };


    const fetchStats = async (clientsList) => {
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

            setStats({ totalAssessments, totalInProgress, totalDiscontinued, totalSuccessful });
        } catch (err) {
            console.error("Failed to fetch stats:", err);
            setStats({ totalAssessments: 0, totalInProgress: 0, totalDiscontinued: 0, totalSuccessful: 0 });
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>

            {/* GENERAL STATS */}
            <div style={containerStyle2}>
                <h3 style={titleStyle}>General</h3>
                <div style={statsRow}>
                    <div style={statLine}>
                        Plans Paid For
                        <div style={highlightNumber}>{plansPaid}</div>
                    </div>
                    <div style={statLine}>
                        Active Professionals
                        <div style={highlightNumber}>{professionals.length}</div>
                    </div>
                    <div style={statLine}>
                        Active Clients
                        <div style={highlightNumber}>{clients.length}</div>
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
                            onClick={() => setActiveTab(prev => (prev === key ? null : key))}
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
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    ))}
                </div>

                {activeTab === "top 5 Diagnosis" && (
                    <div style={statsRow}>
                        {topDiagnoses.length === 0 ? (
                            <div style={statLine}>No diagnoses found.</div>
                        ) : (
                            topDiagnoses.map(({ name, count }) => (
                                <div key={name} style={statLine}>
                                    {diagnosisDisplayNames[name] || name}
                                    <div style={highlightNumber}>{count}</div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === "top 5 Actions" && (
                    <div style={statsRow}>
                        {topActions.length === 0 ? (
                            <div style={statLine}>No actions found.</div>
                        ) : (
                            topActions.map(({ name, count }) => (
                                <div key={name} style={statLine}>
                                    {name}
                                    <div style={highlightNumber}>{count}</div>
                                </div>
                            ))
                        )}
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
                {/* MIDDLE STATS */}
                <div style={sideBoxStyle}>
                    <h3 style={titleStyle}>Plan and Progress Stats</h3>
                    <div style={statsRow}>
                        <div style={statLine}>
                        </div>

                        <div style={statLine}>
                            Actions In Progress
                            <div style={highlightNumber}>{stats.totalInProgress}</div>
                        </div>
                        <div style={statLine}>
                            Actions Discontinued
                            <div style={highlightNumber}>{stats.totalDiscontinued}</div>
                        </div>
                        <div style={statLine}>
                            Actions Successfully Completed
                            <div style={highlightNumber}>{stats.totalSuccessful}</div>
                        </div>
                        <div style={statLine}>
                            Recommendation Made
                            <div style={highlightNumber}>{recommendationStats.recommended}</div>
                        </div>
                        <div style={statLine}>
                            Recommendations Accepted
                            <div style={highlightNumber}>{recommendationStats.accepted}</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT STATS */}
                <div style={sideBoxStyle}>
                    <h3 style={titleStyle}>Client Improvements</h3>
                    <div style={statsRow}>
                        <div style={statLine}>
                            Assessments Completed
                            <div style={highlightNumber}>{stats.totalAssessments}</div>
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

            {/* LIST SECTION */}
            <div style={containerStyle2}>
                <h3 style={titleStyle}>
                    Your {view === "professionals" ? "Professionals" : "Clients"}
                </h3>
                {/* Search input */}
                <input
                    type="text"
                    placeholder="Filter by name or email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ ...inputStyle, flex: 1 }}
                />
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>


                    {/* Start date */}
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={{ ...inputStyle, width: 160 }}
                    />

                    {/* End date */}
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        style={{ ...inputStyle }}
                    />
                    {/* Department filter */}
                    <select
                        value={filterDepartment}
                        onChange={e => setFilterDepartment(e.target.value)}
                        style={{ ...inputStyle }}
                    >
                        <option value="">All Departments</option>
                        {departments.map(dep => (
                            <option key={dep} value={dep}>{dep}</option>
                        ))}
                    </select>

                    {/* Program/Unit filter */}
                    <select
                        value={filterProgram}
                        onChange={e => setFilterProgram(e.target.value)}
                        style={{ ...inputStyle }}
                    >
                        <option value="">All Programs/Units</option>
                        {programs.map(prog => (
                            <option key={prog} value={prog}>{prog}</option>
                        ))}
                    </select>

                    {/* Service filter */}
                    <select
                        value={filterService}
                        onChange={e => setFilterService(e.target.value)}
                        style={{ ...inputStyle, width: 180 }}
                    >
                        <option value="">All Services</option>
                        {services.map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>

                </div>

                {view === "clients" && (
                    <select
                        value={clientFilterPro}
                        onChange={(e) => setClientFilterPro(e.target.value)}
                        style={{ ...inputStyle, maxWidth: "100%", marginBottom: 12 }}
                    >
                        <option value="">All Professionals</option>
                        {professionals
                            .slice()
                            .sort((a, b) => a.firstName.localeCompare(b.firstName))
                            .map((pro) => (
                                <option key={pro.email} value={pro.email}>
                                    {pro.firstName} {pro.lastName}
                                </option>
                            ))}
                    </select>
                )}

                <div style={linksSectionStyle}>
                    {filtered.length === 0 ? (
                        <p style={emptyStyle}>No entries found.</p>
                    ) : (
                        filtered.map((item) => (
                            <div key={item.id} style={linkBoxStyle}>
                                <div style={linkRowStyle}>
                                    <div style={userColumnStyle}>
                                        <strong>First Name</strong>
                                        <div>{item.firstName}</div>
                                    </div>
                                    <div style={userColumnStyle}>
                                        <strong>Last Name</strong>
                                        <div>{item.lastName}</div>
                                    </div>
                                    <div style={userColumnStyle}>
                                        <strong>Email</strong>
                                        <div>{item.email}</div>
                                    </div>
                                    {view === "clients" && (
                                        <div style={userColumnStyle}>
                                            <strong>Professional</strong>
                                            <div>
                                                {item.professionalFirstName} {item.professionalLastName}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}


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
