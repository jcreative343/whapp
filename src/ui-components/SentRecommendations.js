import {
  fetchUserAttributes,
  getCurrentUser,
} from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { listNotifications, listUserLinks } from "../graphql/queries";

export default function ProfessionalClientsRecommendations() {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);
  const [selectedClientEmail, setSelectedClientEmail] = useState("");
  const [professionalEmail, setProfessionalEmail] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Get current authenticated user using your helper
        const attr = await fetchUserAttributes();
        const user = await getCurrentUser();
        const email = attr.email.toLowerCase();
        setProfessionalEmail(email);

        // Create GraphQL client
        const client = generateClient();

        // Query linked clients
        const userLinksRes = await client.graphql({
          query: listUserLinks,
          variables: { filter: { professionalEmail: { eq: email } } },
        });
        const linkedClients = userLinksRes.data.listUserLinks.items;
        setClients(linkedClients);

        // Query recommendations
        const recsRes = await client.graphql({
          query: listNotifications,
          variables: {
            filter: {
              NotificationType: { eq: "Recommendation" },
              SenderEmail: { eq: email },
            },
          },
        });
        const recs = recsRes.data.listNotifications.items;
        setRecommendations(recs);
        setFilteredRecommendations(recs);
      } catch (error) {
        console.error("Error loading data:", error);
        // Optional: you might want to sign out user on auth failure
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
function getClientNameByEmail(email) {
  const client = clients.find(
    (c) => c.clientEmail.toLowerCase() === email.toLowerCase()
  );
  return client
    ? `${client.clientFirstName} ${client.clientLastName}`
    : "(Unknown Client)";
}

  // Filter recommendations by client email
  useEffect(() => {
    if (!selectedClientEmail) {
      setFilteredRecommendations(recommendations);
    } else {
      setFilteredRecommendations(
        recommendations.filter(
          (rec) => rec.TargetEmail.toLowerCase() === selectedClientEmail.toLowerCase()
        )
      );
    }
  }, [selectedClientEmail, recommendations]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Clients & Recommendations</h2>

      <label>
        Filter by client:
        <select
          value={selectedClientEmail}
          onChange={(e) => setSelectedClientEmail(e.target.value)}
          style={{ marginLeft: 10 }}
        >
          <option value="">-- All Clients --</option>
          {clients.map((client) => (
            <option key={client.id} value={client.clientEmail}>
              {client.clientFirstName} {client.clientLastName} ({client.clientEmail})
            </option>
          ))}
        </select>
      </label>

      <h3 style={{ marginTop: 20 }}>
        Showing {filteredRecommendations.length} Recommendation
        {filteredRecommendations.length !== 1 ? "s" : ""}
      </h3>

      {filteredRecommendations.length === 0 && <p>No recommendations found.</p>}

      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {filteredRecommendations.map((rec) => (
          <li
            key={rec.id}
            style={{ marginBottom: 15, borderBottom: "1px solid #ccc", paddingBottom: 10 }}
          >
            <strong>To:</strong> {getClientNameByEmail(rec.TargetEmail)} ({rec.TargetEmail}) <br />

            <strong>Date:</strong> {rec.RecommendationDate || "N/A"} <br />
            <strong>Type:</strong> {rec.RecommedationType || "N/A"} <br />
            <strong>Action:</strong> {rec.RecommedationAction || "N/A"} <br />
            <strong>Frequency:</strong> {rec.RecommedationActionFrequency || "N/A"} <br />
            <strong>Result:</strong> {rec.RecommedationResult || "N/A"} <br />
            <strong>Note:</strong> {rec.RecommedationNote || "N/A"} <br />
            <strong>Status:</strong> {rec.Status} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
