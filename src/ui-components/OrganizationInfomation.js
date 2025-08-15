import { fetchUserAttributes, getCurrentUser } from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import {
  createOrganizationInformation,
  updateOrganizationInformation,
} from "../graphql/mutations";
import { listOrganizationCPs, listOrganizationInformations } from "../graphql/queries";
const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];
const client = generateClient();

export default function OrganizationInformation() {
  const [userId, setUserId] = useState("");
  const [recordId, setRecordId] = useState(null);
  const [statusMessage, setStatusMessage] = useState("Loading...");
  const [notification, setNotification] = useState("");
  const [formData, setFormData] = useState({
    BusinessName: "",
    BusinessEIN: "",
    BusinessCountry: "",
    BusinessAddress: "",
    BusinessCity: "",
    BusinessState: "",
    BusinessZipCode: "",
    BusinessPhoneNumber: "",
    BusinessWebsite: "",
    Departments: [""],
    ProgramsUnits: [""],
    Services: [""],
  });
  const [effectiveUserId, setEffectiveUserId] = useState(""); // the userId or the org's userId if OrgCP

  useEffect(() => {
    async function fetchUserAndData() {
      try {
        const user = await getCurrentUser();
        const uid = user?.userId;
        if (!uid) throw new Error("No user ID found.");
        setUserId(uid); // store actual signed-in user ID
        let usedId = uid;
        const attrs = await fetchUserAttributes();

        // Now attrs.email, attrs.address, etc. exist

        const email = attrs.email?.toLowerCase() || "";
        const Address = attrs.address || "";
        const BusinessName = attrs["custom:BusinessName"] || "";
        const BusinessEIN = attrs["custom:BusinessEIN"] || "";
        const Country = attrs["custom:Country"] || "";
        const City = attrs["custom:City"] || "";
        const State = attrs["custom:State"] || "";
        const ZipCode = attrs["custom:ZipCode"] || "";
        const PhoneNumber = attrs["custom:PhoneNumber"] || "";
        const Website = attrs.website || "";
        // Check if user is OrgCP with admin access
        const cpRes = await client.graphql({
          query: listOrganizationCPs,
          variables: {
            filter: {
              OrganizationCPEmail: { eq: email },
              OrganizationAdministrator: { eq: true },
            },
          },
        });

        const orgCP = cpRes?.data?.listOrganizationCPs?.items?.[0];
        if (orgCP) {
          usedId = orgCP.OrganizationId;
        }

        setEffectiveUserId(usedId); // save the ID we'll use to load/save OrganizationInformation

        // Try to load existing organization info
        const res = await client.graphql({
          query: listOrganizationInformations,
          variables: {
            filter: { userId: { eq: usedId } },
            limit: 1,
          },
        });

        const existing = res.data?.listOrganizationInformations?.items?.[0];
        if (existing) {
          // Use existing record (as before)
          setRecordId(existing.id);
          setFormData({
            BusinessName: existing.BusinessName || "",
            BusinessEIN: existing.BusinessEIN || "",
            BusinessCountry: existing.BusinessCountry || "",
            BusinessAddress: existing.BusinessAddress || Address || "",
            BusinessCity: existing.BusinessCity || City || "",
            BusinessState: existing.BusinessState || State || "",
            BusinessZipCode: existing.BusinessZipCode || ZipCode || "",
            BusinessPhoneNumber: existing.BusinessPhoneNumber || PhoneNumber || "",
            BusinessWebsite: existing.BusinessWebsite || Website || "",
            Departments: existing.Departments?.length ? existing.Departments : [""],
            ProgramsUnits: existing.ProgramsUnits?.length ? existing.ProgramsUnits : [""],
            Services: existing.Services?.length ? existing.Services : [""],
          });
          setStatusMessage("Loaded organization info.");
        } else {
          // No existing record, set form data from Cognito attrs
          setFormData({
            BusinessName: BusinessName || "",
            BusinessEIN: BusinessEIN || "",
            BusinessCountry: Country || "",
            BusinessAddress: Address || "",
            BusinessCity: City || "",
            BusinessState: State || "",
            BusinessZipCode: ZipCode || "",
            BusinessPhoneNumber: PhoneNumber || "",
            BusinessWebsite: Website || "",
            Departments: [""],
            ProgramsUnits: [""],
            Services: [""],
          });
          setStatusMessage("No organization record found, using profile info.");
        }

      } catch (err) {
        console.error("Failed to load organization info:", err);
        setStatusMessage("Failed to load organization info.");
      }
    }


    fetchUserAndData();
  }, []);
  useEffect(() => {
    console.log("formData updated:", formData);
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const fieldLabels = {
    Departments: "Departments",
    ProgramsUnits: "Programs/Units",
    Services: "Services",
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayItem = (field, index) => {
    const updated = [...formData[field]];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, [field]: updated.length ? updated : [""] }));
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 4000);
  };

  const handleSubmit = async () => {
    try {
      const input = { ...formData, userId: effectiveUserId };


      // Clean up empty strings and convert to correct types
      Object.entries(input).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          input[k] = v.map((x) => x.trim()).filter(Boolean);
        } else if (typeof v === "string") {
          input[k] = v.trim() || null;
        }
      });

      input.BusinessEIN = input.BusinessEIN ? parseInt(input.BusinessEIN) : null;
      input.BusinessZipCode = input.BusinessZipCode ? parseInt(input.BusinessZipCode) : null;

      if (recordId) {
        await client.graphql({
          query: updateOrganizationInformation,
          variables: { input: { id: recordId, ...input } },
        });
        showNotification("Organization info updated.");
      } else {
        const res = await client.graphql({
          query: createOrganizationInformation,
          variables: { input },
        });
        setRecordId(res.data?.createOrganizationInformation?.id);
        showNotification("Organization info saved.");
      }
    } catch (err) {
      console.error("Save failed:", err);
      showNotification("Failed to save organization info.");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: 24, color: "#0077cc" }}>Organization Information</h2>
      <p style={{ fontStyle: "italic", color: "gray", marginBottom: 20 }}>{statusMessage}</p>

      {[
        { label: "Business Name", name: "BusinessName" },
        { label: "Business EIN", name: "BusinessEIN", type: "number" },
        { label: "Country", name: "BusinessCountry" },
        { label: "Address", name: "BusinessAddress" },
        { label: "City", name: "BusinessCity" },
        { label: "State", name: "BusinessState", type: "select", options: states },
        { label: "Zip Code", name: "BusinessZipCode", type: "number" },
        { label: "Phone Number", name: "BusinessPhoneNumber", type: "tel" },
        { label: "Website", name: "BusinessWebsite", type: "url" },
      ].map(({ label, name, type = "text", options }) => (
        <div key={name}>
          <label style={labelStyle}>{label}:</label>
          {type === "select" ? (
            <select
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              style={inputStyle}
            />
          )}
        </div>
      ))}


      {["Departments", "ProgramsUnits", "Services"].map((field) => (
        <div key={field} style={{ marginTop: 20 }}>
          <label style={labelStyle}>{fieldLabels[field] || field.replace(/([A-Z])/g, " $1")}</label>
          {formData[field].map((val, idx) => (
            <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <input
                type="text"
                value={val}
                onChange={(e) => handleArrayChange(field, idx, e.target.value)}
                style={inputStyle}
              />
              <button type="button" onClick={() => removeArrayItem(field, idx)} style={removeBtn}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem(field)} style={addBtn}>
            + Add {field.slice(0, -1)}
          </button>
        </div>
      ))}

      <button type="button" onClick={handleSubmit} style={buttonStyle}>
        {recordId ? "Save Changes" : "Save Organization Info"}
      </button>

      {notification && <div style={notificationStyle}>{notification}</div>}
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: 720,
  margin: "0 auto",
  backgroundColor: "white",
  padding: 24,
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  color: "#333",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: 6,
  marginTop: 16,
  fontSize: 14,
  textAlign: "left",
};

const inputStyle = {
  width: "100%",
  padding: 10,
  fontSize: 15,
  borderRadius: 8,
  border: "1.5px solid #ccc",
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
  padding: 12,
  borderRadius: 6,
  backgroundColor: "#e0f0ff",
  color: "#0077cc",
  fontWeight: "600",
  textAlign: "center",
};

const addBtn = {
  marginTop: 8,
  backgroundColor: "#eee",
  border: "1px solid #ccc",
  borderRadius: 6,
  padding: "6px 10px",
  cursor: "pointer",
  fontWeight: 600,
};

const removeBtn = {
  backgroundColor: "#ffcccc",
  border: "1px solid #d33",
  borderRadius: 6,
  padding: "0 10px",
  fontWeight: "700",
  cursor: "pointer",
};

