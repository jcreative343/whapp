import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect, useRef, useState } from "react";
import { createNotifications, updateNotifications } from "../graphql/mutations";
import { listNotifications } from "../graphql/queries";

const client = generateClient();

export default function NotificationsPopup({ visible, onClose }) {
  const [userEmail, setUserEmail] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [generalNotifications, setGeneralNotifications] = useState([]);
  const [accountType, setAccountType] = useState("");
  const [activeTab, setActiveTab] = useState("recommendations"); // "recommendations" or "general"
  const [signedInAs, setSignedInAs] = useState("");
  const intervalRef = useRef(null);
  const [loading, setLoading] = useState(false);         // Manual loading spinner
  const [isAutoRefreshing, setIsAutoRefreshing] = useState(false); // Silent background refresh

  async function handleDismiss(note) {
    try {
      await client.graphql({
        query: updateNotifications,
        variables: {
          input: {
            id: note.id,
            Status: "read",
            StatusDate: new Date().toISOString().split("T")[0],
          },
        },
      });

      if (activeTab === "recommendations") {
        setRecommendations((prev) => prev.filter((n) => n.id !== note.id));
      } else if (activeTab === "general") {
        setGeneralNotifications((prev) => prev.filter((n) => n.id !== note.id));
      }
    } catch (err) {
      console.error("Error dismissing notification:", err);
    }
  }

  async function fetchRecommendations(isManual = false) {
    if (isManual) setLoading(true);
    else setIsAutoRefreshing(true);

    try {
      const attrs = await fetchUserAttributes();
      const email = attrs.email;
      const accType = attrs["custom:accountType"] || "";
      const signedIn = attrs["custom:SignedInAs"] || "";

      setUserEmail(email);
      setAccountType(accType);
      setSignedInAs(signedIn);

      // Choose notification type to fetch based on role
      const notificationTypeFilter =
        accType === "Professional" && signedIn !== "Individual"
          ? "RecommendationBack"
          : "Recommendation";

      const { data } = await client.graphql({
        query: listNotifications,
        variables: {
          filter: {
            TargetEmail: { eq: email },
            Status: { eq: "pending" },
            NotificationType: { eq: notificationTypeFilter },
          },
        },
      });

      setRecommendations(data?.listNotifications?.items || []);
    } catch (error) {
      console.error("Failed to fetch recommendations", error);
      setRecommendations([]);
    } finally {
      if (isManual) setLoading(false);
      else setIsAutoRefreshing(false);
    }
  }

  async function fetchGeneralNotifications(isManual = false) {
    if (isManual) setLoading(true);
    else setIsAutoRefreshing(true);

    try {
      const attrs = await fetchUserAttributes();
      const email = attrs.email;

      const { data } = await client.graphql({
        query: listNotifications,
        variables: {
          filter: {
            TargetEmail: { eq: email },
            Status: { eq: "pending" },
            or: [
              { NotificationType: { eq: "ConnectionResponse" } },
              { NotificationType: { eq: "ReviewReady" } },
              { NotificationType: { eq: "Reviewed" } }
            ]
          },
        },
      });

      setGeneralNotifications(data?.listNotifications?.items || []);
    } catch (error) {
      console.error("Failed to fetch general notifications", error);
      setGeneralNotifications([]);
    } finally {
      if (isManual) setLoading(false);
      else setIsAutoRefreshing(false);
    }
  }

  async function handleResponse(note, response) {
    try {
      // Update original notification status
      await client.graphql({
        query: updateNotifications,
        variables: {
          input: {
            id: note.id,
            Status: response,
            StatusDate: new Date().toISOString().split("T")[0],
          },
        },
      });

      const userAttrs = await fetchUserAttributes();
      const responderId = userAttrs.sub;
      const responderFirstName = userAttrs["given_name"] || "";
      const responderLastName = userAttrs["family_name"] || "";

      // Create RecommendationBack notification
      const newNote = {
        RecommendationResult: note.RecommendationResult,
        RecommendationAction: note.RecommendationAction,
        RecommendationActionFrequency: note.RecommendationActionFrequency,
        RecommendationType: note.RecommendationType,
        RecommendationNote: response === "accepted" ? "Accepted" : "Declined",
        RecommendationDate: new Date().toISOString().split("T")[0],
        SenderId: responderId,
        SenderFirstName: responderFirstName,
        SenderLastName: responderLastName,
        SenderEmail: note.TargetEmail,
        TargetEmail: note.SenderEmail,
        NotificationType: "RecommendationBack",
        Status: "pending",
        StatusDate: new Date().toISOString().split("T")[0],

        // New field:
        NotificationMessage: `${responderFirstName} ${responderLastName} ${response === "accepted" ? "accepted" : "declined"} your connection request`,
      };


      await client.graphql({
        query: createNotifications,
        variables: { input: newNote },
      });

      // Remove from UI
      setRecommendations((prev) => prev.filter((n) => n.id !== note.id));
    } catch (err) {
      console.error("Error responding to recommendation:", err);
    }
  }

  // Initial fetch and set interval to refresh every 10 seconds
  useEffect(() => {
    if (!visible) return;

    fetchRecommendations(true);
    fetchGeneralNotifications(true);

    intervalRef.current = setInterval(() => {
      fetchRecommendations(false);
      fetchGeneralNotifications(false);
    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [visible]);

  // Refetch on account type or signedInAs change
  useEffect(() => {
    if (!visible) return;
    fetchRecommendations();
    fetchGeneralNotifications();
  }, [signedInAs, accountType, visible]);

  if (!visible) return null;

  return (
    <div style={popupStyle}>
      <h3 style={{ marginBottom: 12 }}>Notifications</h3>

      <div style={{ display: "flex", marginBottom: 10 }}>
        <button
          style={{
            ...tabBtnStyle,
            ...(activeTab === "recommendations" ? activeTabStyle : {}),
          }}
          onClick={() => setActiveTab("recommendations")}
        >
          Recommendations
        </button>
        <button
          style={{
            ...tabBtnStyle,
            ...(activeTab === "general" ? activeTabStyle : {}),
          }}
          onClick={() => setActiveTab("general")}
        >
          General Notifications
        </button>
      </div>

      <button onClick={() => {
        if (activeTab === "recommendations") fetchRecommendations(true);
        else fetchGeneralNotifications(true);
      }} style={refreshBtnStyle}>
        Refresh
      </button>

      <div style={scrollAreaStyle}>
        {loading ? (
          <div style={{ textAlign: "center", padding: 20 }}>
            <div
              style={{
                width: 32,
                height: 32,
                border: "4px solid #ccc",
                borderTop: "4px solid #0077cc",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
              }}
            />
            <p style={{ marginTop: 10 }}>Loading...</p>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : activeTab === "recommendations" ? (
          recommendations.length === 0 ? (
            <p>No recommendations found.</p>
          ) : (
            recommendations.map((note) => (
              <div key={note.id} style={cardStyle}>
                <div>
                  <strong>From:</strong> {note.SenderFirstName} {note.SenderLastName} ({note.SenderEmail})
                </div>

                {note.NotificationType === "RecommendationBack" ? (
                  <>
                    <div style={{ marginTop: 8 }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          color: note.RecommedationNote === "Accepted" ? "green" : "red",
                          fontSize: 16,
                        }}
                      >
                        {note.RecommedationNote}
                      </span>{" "}
                      — {note.SenderEmail} ({note.SenderFirstName} {note.SenderLastName}){" "}
                      {note.RecommedationNote.toLowerCase()}ed this action.
                    </div>
                    <div style={{ marginTop: 6 }}>
                      <div>
                        <strong>Action:</strong> {note.RecommendationAction}
                      </div>
                      <div>
                        <strong>Under:</strong> {note.RecommendationResult}
                      </div>
                      {note.RecommendationActionFrequency && (
                        <div>
                          <strong>Frequency:</strong> {note.RecommendationActionFrequency}
                        </div>
                      )}
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <button style={closeBtn} onClick={() => handleDismiss(note)}>
                        Dismiss
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ marginTop: 8 }}>
                      {(() => {
                        switch (note.RecommedationType) {
                          case "Recommend Changing Frequency":
                            return (
                              <>
                                Your professional recommends that you change the frequency for "
                                <strong>{note.RecommedationAction}</strong>" to{" "}
                                <strong>{note.RecommedationActionFrequency || "Nothing"}</strong>.
                              </>
                            );
                          case "Recommend Adding New Category":
                            return (
                              <>
                                Your professional recommends you create a new plan section:{" "}
                                <strong>{note.RecommedationResult}</strong> and add{" "}
                                <strong>{note.RecommedationAction}</strong> to it.
                              </>
                            );
                          case "Recommend Discontinuing Action":
                            return (
                              <>
                                Your professional recommends you discontinue "<strong>{note.RecommedationAction}</strong>" under{" "}
                                <strong>{note.RecommedationResult}</strong>.
                              </>
                            );
                          case "Making Good Progress, No Change Recommended":
                            return (
                              <>
                                Your professional says you are making good progress with "<strong>{note.RecommedationAction}</strong>" under{" "}<strong>{note.RecommedationResult}</strong>. No changed recommended
                                .
                              </>
                            );
 case "Having Some Challenges. Reassess Action Later":
                            return (
                              <>
                                Your professional says they will reassess "<strong>{note.RecommedationAction}</strong>" under{" "}<strong>{note.RecommedationResult}</strong> at a later date.
                                .
                              </>
                            );
                          case "Recommendation":
                          default:
                            return (
                              <>
                                Your professional recommends you add "<strong>{note.RecommedationAction}</strong>" to your plan under{" "}
                                <strong>{note.RecommedationResult}</strong>{" "}
                                {note.RecommedationActionFrequency
                                  ? `with a frequency of ${note.RecommedationActionFrequency}`
                                  : "without a frequency"}.
                              </>
                            );
                        }
                      })()}
                    </div>
                    {note.RecommedationNote && (
                      <div style={{ marginTop: 6 }}>
                        <strong>Additional Notes:</strong> {note.RecommedationNote}
                      </div>
                    )}
                    <div style={{ marginTop: 8 }}>
                      <button style={acceptBtn} onClick={() => handleResponse(note, "accepted")}>
                        Accept
                      </button>
                      <button style={declineBtn} onClick={() => handleResponse(note, "declined")}>
                        Decline
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )
        ) : activeTab === "general" ? (
          generalNotifications.length === 0 ? (
            <p>No notifications found.</p>
          ) : (
            generalNotifications.map((note) => {
              // Determine message based on NotificationType
              let message = "";
              switch (note.NotificationType) {
                case "ReviewReady":
                  message = `(${note.SenderEmail}) ${note.RecommedationNote}.`;
                  break;
                case "ConnectionResponse":
                  message = `${note.SenderFirstName} ${note.SenderLastName} (${note.SenderEmail}) ${note.RecommedationNote} your connection request.`;
                  break;
                case "Reviewed":
                  message = `(${note.SenderEmail}) ${note.RecommedationNote}.`;;
                  break;
              }

              return (
                <div key={note.id} style={cardStyle}>
                  <div>
                    {message}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button style={closeBtn} onClick={() => handleDismiss(note)}>
                      Dismiss
                    </button>
                  </div>
                </div>
              );
            })

          )
        ) : null}
      </div>

      <button style={closeBtn} onClick={onClose}>
        Close
      </button>
    </div>
  );
}

// --- Styles ---
const popupStyle = {
  position: "fixed",
  top: 80,
  right: 20,
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  width: 340,
  zIndex: 2000,
  display: "flex",
  flexDirection: "column",
  maxHeight: "70vh",
};

const scrollAreaStyle = {
  overflowY: "auto",
  flex: 1,
  paddingRight: 4,
};

const cardStyle = {
  padding: 12,
  marginBottom: 10,
  border: "1px solid #ddd",
  borderRadius: 8,
  backgroundColor: "#f9f9f9",
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

const closeBtn = {
  marginTop: 12,
  backgroundColor: "#0077cc",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: 6,
  cursor: "pointer",
  width: "100%",
};

const refreshBtnStyle = {
  marginBottom: 10,
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
};

const tabBtnStyle = {
  flex: 1,
  padding: "8px 0",
  cursor: "pointer",
  background: "#eee",
  border: "none",
  borderRadius: "6px 6px 0 0",
  fontWeight: "600",
};

const activeTabStyle = {
  background: "#0077cc",
  color: "white",
};
