import {
    fetchUserAttributes,
    getCurrentUser,
} from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { createConnectionRequest, createNotifications, createUserLink, deleteUserLink, updateConnectionRequest } from "../graphql/mutations";
import {
    listConnectionRequests,
    listGeneralInformations,
    listOrganizationCPs, listUserLinks, listUserPayments // ✅ make sure this is imported!
} from "../graphql/queries";
const client = generateClient();
const checkOrgClientLimit = async (professionalEmail) => {
    const today = new Date().toISOString();
    console.log("🔍 Running client limit check for:", professionalEmail);

    // 1. Find the org this pro belongs to
    const orgCPRes = await client.graphql({
        query: listOrganizationCPs,
        variables: {
            filter: { OrganizationCPEmail: { eq: professionalEmail } },
        },
    });

    const proCP = orgCPRes?.data?.listOrganizationCPs?.items?.[0];
    if (!proCP) {
        console.log("⚠️ Professional not in an organization. Skipping check.");
        return true;
    }

    const orgId = proCP.OrganizationId;
    console.log("🏢 Organization ID:", orgId);

    // 2. Get active UserPayments
    const paymentsRes = await client.graphql({
        query: listUserPayments,
        variables: {
            filter: {
                organizationId: { eq: orgId },

                paidUntil: { gt: today },
                or: [
                    { paymentStatus: { eq: "active" } },
                    { paymentStatus: { eq: "completed" } },
                ],
            },

        },
    });

    const payments = paymentsRes?.data?.listUserPayments?.items || [];
    const maxClients = payments.reduce((sum, p) => sum + (p.clientsProjected || 0), 0);
    console.log("💰 Active payments found:", payments.length);
    console.log("🧮 Max allowed clients from payments:", maxClients);

    // 3. Get all professionals under this org
    const allCPs = await client.graphql({ query: listOrganizationCPs });
    const professionalsInOrg = (allCPs?.data?.listOrganizationCPs?.items || [])
        .filter((cp) => cp.OrganizationId === orgId)
        .map((cp) => cp.OrganizationCPEmail);

    console.log("👥 Professionals under org:", professionalsInOrg.length);

    // 4. Count how many client links exist
    const userLinksRes = await client.graphql({ query: listUserLinks });
    const userLinks = userLinksRes?.data?.listUserLinks?.items || [];

    const linkedClients = userLinks
        .filter((l) => professionalsInOrg.includes(l.professionalEmail))
        .map((l) => l.clientEmail);

    const currentClientCount = new Set(linkedClients).size;
    console.log("🔗 Current unique linked clients:", currentClientCount);

    if (currentClientCount >= maxClients) {
        console.warn("🚫 Limit reached! Blocking new connection.");
        throw new Error("The organization you are under has reached the maximum number of clients allowed. Please contact your organization's Administrator to add clients. If you are no longer associated with the organization ask them to remove you from their employee's list.");
    }

    console.log("✅ Client limit check passed.");
    return true;
};

export const getOrgClientStats = async (professionalEmail) => {
    const today = new Date().toISOString();

    // 1. Find org
    const orgCPRes = await client.graphql({
        query: listOrganizationCPs,
        variables: {
            filter: { OrganizationCPEmail: { eq: professionalEmail } },
        },
    });

    const proCP = orgCPRes?.data?.listOrganizationCPs?.items?.[0];
    if (!proCP) return null;

    const orgId = proCP.OrganizationId;

    // 2. Count active payments
    const paymentsRes = await client.graphql({
        query: listUserPayments,
        variables: {
            filter: {
                organizationId: { eq: orgId },

                paidUntil: { gt: today },
                or: [
                    { paymentStatus: { eq: "active" } },
                    { paymentStatus: { eq: "completed" } },
                ],
            },
        },
    });

    const payments = paymentsRes?.data?.listUserPayments?.items || [];
    const maxClients = payments.reduce((sum, p) => sum + (p.clientsProjected || 0), 0);

    // 3. Get all professionals under org
    const allCPs = await client.graphql({ query: listOrganizationCPs });
    const professionalsInOrg = (allCPs?.data?.listOrganizationCPs?.items || [])
        .filter((cp) => cp.OrganizationId === orgId)
        .map((cp) => cp.OrganizationCPEmail);

    // 4. Count unique linked clients
    const userLinksRes = await client.graphql({ query: listUserLinks });
    const userLinks = userLinksRes?.data?.listUserLinks?.items || [];

    const linkedClients = userLinks
        .filter((l) => professionalsInOrg.includes(l.professionalEmail))
        .map((l) => l.clientEmail);

    const currentCount = new Set(linkedClients).size;

    return { current: currentCount, max: maxClients };
};

export default function ManageConnections() {
    const [professionalRoles, setProfessionalRoles] = useState({}); // userId => role

    const [targetEmail, setTargetEmail] = useState("");
    const [direction, setDirection] = useState("");
    const [notification, setNotification] = useState("");
    const [requesterEmail, setRequesterEmail] = useState("");
    const [requesterId, setRequesterId] = useState("");
    const [signedInAs, setSignedInAs] = useState("");
    const [userLinks, setUserLinks] = useState([]);
    const [nameMap, setNameMap] = useState({}); // userId => name
    const [linkToUnlink, setLinkToUnlink] = useState(null);
    const [requests, setRequests] = useState([]);
    const [pastrequests, setPastRequests] = useState([]);
    const [orgClientStats, setOrgClientStats] = useState(null);
    const [accountType, setAccountType] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const containerStyle2 = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? "350px" : "1000px",           // Use string with 'px' to be explicit
        margin: "10px auto",       // Auto left & right = centered
        padding: 24,
        borderRadius: 12,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "block",          // Ensure it behaves like a block element
    };
    const cancelRequest = async (requestId) => {
        try {
            // Update the notification's Status to "Cancelled"
            await client.graphql({
                query: updateConnectionRequest,
                variables: {
                    input: {
                        id: requestId,
                        status: "cancelled", // <-- set the status
                    },
                },
            });

            // Update locally so UI reflects the change
            setRequests(prev => prev.filter(r => r.id !== requestId));


        } catch (err) {
            console.error("Failed to cancel request:", err);

        }
    };
    const fetchConnectionRequests = async (email, role) => {
        try {
            const directionFilter = role === "Professional" ? "toProfessional" : "toIndividual";

            // Fetch incoming requests (to the user)
            const incomingRes = await client.graphql({
                query: listConnectionRequests,
                variables: {
                    filter: {
                        targetEmail: { eq: email },
                        status: { eq: "pending" },
                        direction: { eq: directionFilter },
                    },
                },
            });

            // Fetch outgoing requests (from the user)
            const outgoingRes = await client.graphql({
                query: listConnectionRequests,
                variables: {
                    filter: {
                        requesterEmail: { eq: email },
                        status: { eq: "pending" },
                        // You can omit direction here or add extra filter if needed
                    },
                },
            });
            const outgoingRes2 = await client.graphql({
                query: listConnectionRequests,
                variables: {
                    filter: {
                        requesterEmail: { eq: email },
                        status: { ne: "Pending" },
                        // You can omit direction here or add extra filter if needed
                    },
                },
            });
            const incomingRequests = incomingRes?.data?.listConnectionRequests?.items || [];
            const outgoingRequests = outgoingRes?.data?.listConnectionRequests?.items || [];

            const outgoingRequests2 = outgoingRes2?.data?.listConnectionRequests?.items || [];
            // Combine both lists
            const combinedRequests = [...incomingRequests, ...outgoingRequests];

            setRequests(combinedRequests);
            setPastRequests(outgoingRequests2);
        } catch (err) {
            console.error("Error fetching requests:", err);
        }
    };

    const respondToRequest = async (request, accept) => {
        const isToPro = request.direction === "toProfessional";
        const professionalEmail = isToPro ? request.targetEmail : request.requesterEmail;
        const user = await fetchUserAttributes();
        const userId = user.sub;
        try {
            await checkOrgClientLimit(professionalEmail);
        } catch (err) {
            console.error("❌ Client limit error:", err.message);
            alert(err.message);
            return;
        }

        try {
            // 1. Update connection request status
            await client.graphql({
                query: updateConnectionRequest,
                variables: {
                    input: {
                        id: request.id,
                        status: accept ? "accepted" : "declined",
                    },
                },
            });

            // 2. Create notification for the other party
            const attrs = await fetchUserAttributes();
            const senderFirstName = attrs["given_name"] || "";
            const senderLastName = attrs["family_name"] || "";
            const senderEmail = attrs["email"] || "";
            const senderId = attrs["sub"] || "";

            // Notification target is the other person (not sender)
            const isToPro = request.direction === "toProfessional";

            const senderEmailNormalized = (senderEmail || "").trim().toLowerCase();
            // Determine who the responder is:
            const responderEmail = senderEmailNormalized; // current user (who is responding)

            // The notification should go to the **other** person:
            let notificationTargetEmail = null;

            if (responderEmail === request.requesterEmail.toLowerCase()) {
                // If responder is the requester, notify the target
                notificationTargetEmail = request.targetEmail.toLowerCase();
            } else if (responderEmail === request.targetEmail.toLowerCase()) {
                // If responder is the target, notify the requester
                notificationTargetEmail = request.requesterEmail.toLowerCase();
            } else {
                // fallback, just send to target
                notificationTargetEmail = request.targetEmail.toLowerCase();
            }


            const notificationInput = {
                SenderId: senderId,
                SenderFirstName: senderFirstName,
                SenderLastName: senderLastName,
                SenderEmail: senderEmailNormalized,
                TargetEmail: notificationTargetEmail,
                NotificationType: "ConnectionResponse",
                Status: "pending",
                StatusDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
                RecommedationNote: accept ? "Accepted" : "Declined", // **fix spelling here**
            };
            console.log(notificationInput)

            await client.graphql({
                query: createNotifications,
                variables: { input: notificationInput },
            });

            // 3. If accepted, create user link
            if (accept) {
                const currentAttrs = attrs;

                const isResponderTarget = request.targetEmail.toLowerCase() === user.email.toLowerCase();

                const input = {
                    professionalId: isToPro
                        ? (isResponderTarget ? userId : request.targetId)
                        : request.requesterId,
                    clientId: isToPro
                        ? request.requesterId
                        : (isResponderTarget ? userId : request.targetId),

                    professionalFirstName: isToPro
                        ? (isResponderTarget ? user.given_name : request.targetFirstName)
                        : request.requesterFirstName,
                    professionalLastName: isToPro
                        ? (isResponderTarget ? user.family_name : request.targetLastName)
                        : request.requesterLastName,

                    clientFirstName: isToPro
                        ? request.requesterFirstName
                        : (isResponderTarget ? user.given_name : request.targetFirstName),
                    clientLastName: isToPro
                        ? request.requesterLastName
                        : (isResponderTarget ? user.family_name : request.targetLastName),

                    professionalEmail: isToPro ? request.targetEmail : request.requesterEmail,
                    clientEmail: isToPro ? request.requesterEmail : request.targetEmail,
                    clientViewable: true
                };


                await client.graphql({
                    query: createUserLink,
                    variables: { input },
                });
            }

            // 4. Update state and refresh links
            setRequests((prev) => prev.filter((r) => r.id !== request.id));
            await fetchUserLinks(requesterId, signedInAs, "Professional");
        } catch (err) {
            console.error("Error responding to request:", err);
        }
    };
    const historyRequests = pastrequests.filter(req => req.status !== "pending");


    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const user = await getCurrentUser();
                const uid = user.userId;
                const email = user.signInDetails?.loginId;
                const attributes = await fetchUserAttributes();

                const role = attributes["custom:SignedInAs"] || "";
                const acctType = attributes["custom:accountType"] || "";

                setAccountType(acctType);
                setRequesterId(uid);
                setRequesterEmail(email);
                setSignedInAs(role);

                const dir = role === "Professional" ? "toIndividual" : "toProfessional";
                setDirection(dir);

                // Pass acctType directly here to avoid stale state issue
                await fetchUserLinks(uid, role, acctType);
                await fetchConnectionRequests(email, role);

                if (role === "Professional") {
                    const stats = await getOrgClientStats(email);
                    if (stats) setOrgClientStats(stats);
                }
            } catch (err) {
                console.error("Error loading user:", err);
            }
        }

        fetchUserInfo();
    }, []);
    const fetchUserLinks = async (userId, role, accountType) => {
        try {
            const { data } = await client.graphql({
                query: listUserLinks,
            });

            const links = data?.listUserLinks?.items || [];

            // 🛡️ Filter based on who the current user is
            const filteredLinks = links.filter((link) => {
                if (role === "Professional") {
                    return link.professionalId === userId;
                } else {
                    return link.clientId === userId;
                }
            });

            setUserLinks(filteredLinks);

            const professionalIds = filteredLinks
                .filter((link) => link.professionalId)
                .map((link) => link.professionalId);

            await fetchProfessionalRoles(professionalIds);
        } catch (error) {
            console.error("Caught error in fetchUserLinks:", error);
        }
    };

    const fetchProfessionalRoles = async (professionalIds) => {
        const rolesMap = {};

        await Promise.all(
            professionalIds.map(async (id) => {
                if (!id) return; // 👈 This is the critical line that fixes everything

                try {
                    const res = await client.graphql({
                        query: listGeneralInformations,
                        variables: {
                            filter: { userId: { eq: id } },
                        },
                    });

                    const items = res?.data?.listGeneralInformations?.items || [];
                    rolesMap[id] = items[0]?.ProfessionalRole || "Unknown";
                } catch (error) {
                    console.error(`Error fetching role for userId ${id}:`, error);
                    rolesMap[id] = "Unknown";
                }
            })
        );

        setProfessionalRoles(rolesMap);
    };






    const handleSendRequest = async () => {
        if (!targetEmail || !direction) {
            setNotification("Please fill in all fields.");
            return;
        }

        if (direction === "toProfessional" && signedInAs === "Professional") {
            setNotification("Professionals cannot send requests to other professionals.");
            return;
        }

        if (direction === "toIndividual" && signedInAs !== "Professional") {
            setNotification("Only professionals can send requests to individuals.");
            return;
        }

        try {
            // ✅ Fetch current user's name details
            const attrs = await fetchUserAttributes();
            const firstName = attrs["given_name"] || "";
            const lastName = attrs["family_name"] || "";

            const input = {
                requesterId,
                requesterEmail,
                requesterFirstName: firstName,
                requesterLastName: lastName,
                targetEmail: targetEmail.trim().toLowerCase(),
                status: "pending",
                direction,
            };
            if (accountType === "Professional") {
                try {
                    await checkOrgClientLimit(requesterEmail);
                } catch (err) {
                    console.error("❌ Client limit error:", err.message);
                    setNotification(err.message); // show message to user
                    return; // stop the rest of the send logic
                }
            }


            await client.graphql({
                query: createConnectionRequest,
                variables: { input },
            });


            await fetch("https://3vqzvlkgxiokrm4hkj65oefwdy0ckrdp.lambda-url.us-east-1.on.aws/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: targetEmail,
                    subject: "You have a new connection request on the Wholistic Health App®!",
                    body: `Hi, ${firstName} ${lastName} wants to collaborate with you on the Wholistic Health App®. This app allows individuals to complete an assessment, receive immediate results, create a health plan, track progress, and collaborate with their health team.`,
                    includeButton: true,
                    buttonUrl: "https://wholistichealthapp.com/",
                    buttonText: "Respond to their request"
                }),
            });

            setNotification("Connection request sent!");
            setTargetEmail("");
        } catch (err) {

            console.error("Error sending request:", err);
            setNotification("Failed to send request.");
        }
    };


    const handleUnlink = async (linkId) => {
        try {
            await client.graphql({
                query: deleteUserLink,
                variables: { input: { id: linkId } },
            });

            setUserLinks((prev) => prev.filter((link) => link.id !== linkId));
        } catch (err) {
            console.error("Error unlinking:", err);
            alert("Failed to unlink.");
        }
    };
    const [generalInformation, setListGeneralInformation] = useState([]);

    useEffect(() => {
        const fetchGeneralInformation = async () => {
            try {
                const res = await client.graphql({
                    query: listGeneralInformations,
                });
                const items = res?.data?.listGeneralInformations?.items || [];
                setListGeneralInformation(items);
                console.log("Fetched items:", items);  // This will show the actual data
            } catch (err) {
                console.error("Error fetching general information:", err);
            }
        };

        fetchGeneralInformation();
    }, []);
    const getUserInfoByEmail = (email) => {
        if (!generalInformation || generalInformation.length === 0) return {};
        return generalInformation.find(u => (u.email || u.Email || u.userEmail) === email) || {};
    };
    return (
        <>
            {/* Section 1: Send Request */}
            <div style={containerStyle}>
                {orgClientStats && (
                    <p style={{ marginBottom: 10, fontWeight: "600", color: "#0077cc" }}>
                        Organization Clients: {orgClientStats.current} / {orgClientStats.max}
                    </p>
                )}

                <h2 style={titleStyle}>Send Connection Request</h2>

                <label style={labelStyle}>Email:</label>
                <input
                    type="email"
                    value={targetEmail}
                    onChange={(e) => setTargetEmail(e.target.value)}
                    placeholder="Enter email"
                    style={inputStyle}
                />

                <label style={labelStyle}>Request Type:</label>
                <input
                    type="text"
                    value={
                        direction === "toProfessional"
                            ? "To Professional"
                            : direction === "toIndividual"
                                ? "To Individual"
                                : "Detecting..."
                    }
                    style={{ ...inputStyle, backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
                    disabled
                />

                <button onClick={handleSendRequest} style={buttonStyle}>
                    Send Request
                </button>

                {notification && <div style={notificationStyle}>{notification}</div>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>

                {/* Section 2: Linked Users */}
                <div style={containerStyle2}>
                    <h3 style={titleStyle}>Your Current Connections</h3>
                    {userLinks.length === 0 ? (
                        <p style={emptyStyle}>No Connections.</p>
                    ) : (
                        userLinks.map((link) => {
                            const professionalFirstName = link.professionalFirstName || "Unknown";
                            const professionalLastName = link.professionalLastName || "";
                            const clientFirstName = link.clientFirstName || "Unknown";
                            const clientLastName = link.clientLastName || "";

                            return (
                                <div key={link.id} style={linkBoxStyle}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: isMobile ? "column" : "row",
                                            alignItems: isMobile ? "flex-start" : "center",
                                            gap: "15px",
                                            width: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: isMobile ? "column" : "row",
                                                alignItems: isMobile ? "flex-start" : "center",
                                                flexGrow: 1,
                                                gap: "10px",
                                                whiteSpace: isMobile ? "normal" : "nowrap",
                                            }}
                                        >
                                            <div style={userColumnStyle}>
                                                <strong>Professional Email</strong>
                                                <div style={userColumnTextStyle}>{link.professionalEmail}</div>
                                            </div>

                                            {!isMobile && <div style={verticalDividerStyle}></div>}

                                            <div style={userColumnStyle}>
                                                <strong>Professional Role</strong>
                                                <div style={userColumnTextStyle}>
                                                    {professionalRoles[link.professionalId] || "Loading..."}
                                                </div>
                                            </div>

                                            {!isMobile && <div style={verticalDividerStyle}></div>}

                                            <div style={userColumnStyle}>
                                                <strong>Professional Name</strong>
                                                <div style={userColumnTextStyle}>
                                                    {professionalFirstName} {professionalLastName}
                                                </div>
                                            </div>

                                            {!isMobile && <div style={verticalDividerStyle}></div>}

                                            <div style={userColumnStyle}>
                                                <strong>Client Name</strong>
                                                <div style={userColumnTextStyle}>
                                                    {clientFirstName} {clientLastName}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setLinkToUnlink(link)}
                                            style={unlinkButtonStyle}
                                        >
                                            Unlink
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div style={containerStyle2}>
                    <h3 style={titleStyle}>Pending Connection Requests</h3>
                    {requests.length === 0 ? (
                        <p style={emptyStyle}>No pending requests.</p>
                    ) : (
                        requests.map((req) => {
                            const isOutgoing = req.requesterEmail === requesterEmail;

                            return (
                                <div key={req.id} style={linkBoxStyle}>
                                    <div>
                                        {isOutgoing ? (
                                            <>
                                                <strong>To:</strong> {req.targetEmail}<br />
                                                <strong>Type:</strong>{" "}
                                                {req.direction === "toProfessional"
                                                    ? "You ➜ Professional"
                                                    : "You ➜ Client"}
                                                <br />
                                            </>
                                        ) : (
                                            <>
                                                <strong>From:</strong> {req.requesterFirstName} {req.requesterLastName} ({req.requesterEmail})<br />
                                                <strong>Type:</strong>{" "}
                                                {req.direction === "toProfessional"
                                                    ? "Client ➜ You"
                                                    : "Professional ➜ You"}
                                                <br />
                                            </>
                                        )}
                                    </div>
                                    <div style={{ marginTop: 10 }}>
                                        {!isOutgoing ? (
                                            <>
                                                <button style={acceptBtn} onClick={() => respondToRequest(req, true)}>Accept</button>
                                                <button style={declineBtn} onClick={() => respondToRequest(req, false)}>Decline</button>
                                            </>
                                        ) : (
                                            <>
                                                <em style={{ color: "gray", marginRight: 10 }}>Outgoing request</em>
                                                <button
                                                    style={declineBtn}
                                                    onClick={() => cancelRequest(req.id)}
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div style={containerStyle2}>
                    <h3 style={titleStyle}>Connection Request History</h3>
                    {historyRequests.length === 0 ? (
                        <p style={emptyStyle}>No past requests.</p>
                    ) : (
                        historyRequests.map((req) => {
                            const isOutgoing = req.requesterEmail === requesterEmail;
                            const dateSent = new Date(req.createdAt).toLocaleString(); // adjust field name if needed
                            const professionalInfo = getUserInfoByEmail(req.targetEmail);

                            return (
                                <div key={req.id} style={linkBoxStyle}>
                                    <div>
                                        {isOutgoing ? (
                                            <>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: isMobile ? "column" : "row",
                                                        alignItems: "center",           // vertical alignment
                                                        justifyContent: "center",       // horizontal center
                                                        gap: "20px",                     // space between items
                                                        width: "100%",                   // <- important

                                                        whiteSpace: isMobile ? "normal" : "nowrap",
                                                    }}
                                                >
                                                    <div style={userColumnStyle}>
                                                        <strong>To:</strong> {professionalInfo.FirstName} {professionalInfo.LastName}<br />
                                                    </div>

                                                    {!isMobile && <div style={verticalDividerStyle}></div>}

                                                    <div style={userColumnStyle}>
                                                        <strong>Type:</strong> {
                                                            req.direction === "toProfessional"
                                                                ? `You ➜ ${professionalInfo.ProfessionalRole || "Loading..."}`
                                                                : "You ➜ Individual"
                                                        }
                                                    </div>

                                                    {!isMobile && <div style={verticalDividerStyle}></div>}

                                                    <div style={userColumnStyle}>
                                                        <strong>Date Sent:</strong> {dateSent}<br />
                                                    </div>

                                                    {!isMobile && <div style={verticalDividerStyle}></div>}

                                                    <div style={{ ...userColumnStyle, marginRight: 20, flexGrow: 1 }}>
                                                        <strong>Status:</strong> {req.status}
                                                    </div>
                                                </div>





                                            </>
                                        ) : (
                                            <>
                                                <strong>From:</strong> {req.requesterFirstName} {req.requesterLastName} ({req.requesterEmail})<br />
                                                <strong>Type:</strong> {req.direction === "toProfessional" ? "Client ➜ You" : "Professional ➜ You"}<br />
                                            </>
                                        )}

                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

            </div>


            {linkToUnlink && (
                <div style={modalOverlay}>
                    <div style={modalContent}>
                        <h3>Confirm Unlink</h3>
                        <p>
                            Are you sure you want to unlink{" "}
                            <strong>
                                {linkToUnlink.clientFirstName} {linkToUnlink.clientLastName}
                            </strong>{" "}
                            from{" "}
                            <strong>
                                {linkToUnlink.professionalFirstName} {linkToUnlink.professionalLastName}
                            </strong>
                            ?
                        </p>
                        <div style={modalButtons}>
                            <button
                                style={modalButtonConfirm}
                                onClick={async () => {
                                    await handleUnlink(linkToUnlink.id);
                                    setLinkToUnlink(null);
                                }}
                            >
                                Yes, Unlink
                            </button>
                            <button style={modalButtonCancel} onClick={() => setLinkToUnlink(null)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}

// ===== STYLES =====

const containerStyle = {
    maxWidth: 600,
    margin: "40px auto",
    padding: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};


const titleStyle = {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0077cc",
};

const labelStyle = {
    marginTop: 16,
    fontWeight: "600",
    display: "block",
    fontSize: 14,
    textAlign: "left",
};

const inputStyle = {
    width: "100%",
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    border: "1.5px solid #ccc",
    marginTop: 6,
    boxSizing: "border-box",
};

const buttonStyle = {
    marginTop: 24,
    width: "100%",
    backgroundColor: "#0077cc",
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    borderRadius: 8,
    padding: "12px 0",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
};

const notificationStyle = {
    marginTop: 16,
    backgroundColor: "#e0f0ff",
    padding: 10,
    borderRadius: 8,
    color: "#0077cc",
    textAlign: "center",
    fontWeight: "600",
};

const linksSectionStyle = {
    marginTop: 40,
    borderTop: "2px solid #ddd",
    paddingTop: 20,
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

const unlinkButtonStyle = {
    backgroundColor: "#ff5e5e",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 14,
};

const emptyStyle = {
    fontStyle: "italic",
    color: "#555",
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

const verticalDividerStyle = {
    width: "1px",
    height: "40px",
    backgroundColor: "#ccc",
    margin: "0 16px",
};
const modalOverlay = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalContent = {
    backgroundColor: "#ffffff",
    border: "2px solid #004080",
    borderRadius: "16px",
    padding: "30px 24px",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    animation: "fadeInScale 0.3s ease-in-out",
};

const modalButtons = {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
};

const modalButtonConfirm = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
};

const modalButtonCancel = {
    backgroundColor: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
};
const acceptBtn = {
    backgroundColor: "#3B7D23",
    color: "white",
    border: "none",
    padding: "6px 12px",
    marginRight: 8,
    borderRadius: 6,
    cursor: "pointer",
};

const declineBtn = {
    backgroundColor: "#B00000",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
};
const userColumnTextStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
};
