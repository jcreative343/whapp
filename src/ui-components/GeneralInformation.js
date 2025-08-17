import {
  confirmUserAttribute,
  fetchUserAttributes,
  getCurrentUser,
  signOut,
  updateUserAttribute,
} from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import {
  createGeneralInformation,
  updateGeneralInformation, updateOrganizationCPs
} from "../graphql/mutations";
import { listGeneralInformations, listOrganizationCPs } from "../graphql/queries";

const client = generateClient();

export default function GeneralInformation() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    ProfileType: "",
    ProfessionalRole: "",
    BusinessName: "",
    BusinessEIN: "",
    BusinessAddress: "",
    BusinessCountry: "",
    BusinessCity: "",
    BusinessState: "",
    BusinessZipCode: "",
    BusinessPhoneNumber: "",
    BusinessWebsite: "",
    OrganizationAdministrator: false,
    OrganizationEmployee: false,

    // NEW: Added new fields
    Department: "",
    ProgramsUnit: "",
    Service: "",
  });
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];
  const [userId, setUserId] = useState("");
  const [cognitoEmail, setCognitoEmail] = useState("");
  const [recordId, setRecordId] = useState(null);
  const [awaitingVerification, setAwaitingVerification] = useState(false);
  const [confirmCode, setConfirmCode] = useState("");
  const [notification, setNotification] = useState("");
  const [statusMessage, setStatusMessage] = useState("Loading user information...");
  const [BusinessVerified, setBusinessVerified] = useState(false);
  const [BusinessStatus, setBusinessStatus] = useState("");
  const [orgOptions, setOrgOptions] = useState({
    Departments: [],
    ProgramsUnits: [],
    Services: [],
  });
  const [orgEmployeeError, setOrgEmployeeError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const user = await getCurrentUser();
        const uid = user?.userId || "";
        const email = user?.signInDetails?.loginId || "";

        setUserId(uid);
        setCognitoEmail(email);

        // Fetch user attributes from Cognito
        const attrs = await fetchUserAttributes();
        const firstName = attrs["given_name"] || "";
        const lastName = attrs["family_name"] || "";
        const profileType = attrs["custom:accountType"] || "";

        const res = await client.graphql({
          query: listGeneralInformations,
          variables: {
            filter: { userId: { eq: uid } },
            limit: 1,
          },
        });

        const existing = res.data?.listGeneralInformations?.items?.[0];
        if (existing) {
          setRecordId(existing.id);
          setFormData({
            FirstName: existing.FirstName || firstName,
            LastName: existing.LastName || lastName,
            Email: existing.Email || email,
            ProfileType: existing.ProfileType || profileType,
            ProfessionalRole: existing.ProfessionalRole || "",
            BusinessName: existing.BusinessName || "",
            BusinessEIN: existing.BusinessEIN || "",
            BusinessAddress: existing.BusinessAddress || "",
            BusinessCountry: existing.BusinessCountry || "",
            BusinessCity: existing.BusinessCity || "",
            BusinessState: existing.BusinessState || "",
            BusinessZipCode: existing.BusinessZipCode || "",
            BusinessPhoneNumber: existing.BusinessPhoneNumber || "",
            BusinessWebsite: existing.BusinessWebsite || "",
            OrganizationAdministrator: existing.OrganizationAdministrator || false,
            OrganizationEmployee: existing.OrganizationEmployee || false,
            Department: existing.Department || "",
            ProgramsUnit: existing.ProgramsUnit || "",
            Service: existing.Service || "",
          });

          // ✅ Add this:
          if (existing.OrganizationEmployee && existing.BusinessName?.trim()) {
            verifyBusiness(existing.BusinessName.trim())
              .then(ok => setBusinessVerified(ok))
              .catch(console.error);
          }

          setStatusMessage("Loaded your information.");

        } else {
          setFormData((prev) => ({
            ...prev,
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            ProfileType: profileType,
          }));
          setStatusMessage("No existing information found.");
        }

      } catch (err) {
        console.error("Error loading data:", err);
        setStatusMessage("Error loading information.");
      }
    }


    loadData();
  }, []);
  async function updateOrgCPIfEmployee() {
    try {
      if (!formData.Email) return;
      const res = await client.graphql({
        query: listOrganizationCPs,
        variables: {
          filter: { OrganizationCPEmail: { eq: formData.Email } }, // <-- use variable
        },
      });
      // 1️⃣ Get all OrganizationCP records matching this email



      const cpRecords = res.data?.listOrganizationCPs?.items || [];
      if (!cpRecords.length) return; // Not an employee anywhere

      // 2️⃣ Update each matched OrganizationCP
      for (const cp of cpRecords) {
        await client.graphql({
          query: updateOrganizationCPs,
          variables: {
            input: {
              id: cp.id,
              OrganizationCPFirstName: formData.FirstName,
              OrganizationCPLastName: formData.LastName,
              OrganizationCPEmail: formData.Email,
              OrganizationCPRole: formData.ProfessionalRole,
              primaryDepartment: formData.Department || null,
              primaryProgramsUnit: formData.ProgramsUnit || null,
              primaryService: formData.Service || null,
            },
          },
        });
       
      }

      console.log("OrganizationCP records updated successfully.");
    } catch (err) {
      console.error("Error updating OrganizationCP records:", err);
    }
  }

  useEffect(() => {
    const name = formData.BusinessName ?? "";
    if (formData.OrganizationEmployee && name.trim()) {
      verifyBusiness(name.trim())
        .then(ok => setBusinessVerified(ok))
        .catch(console.error);
    } else {
      setBusinessVerified(false);
    }
  }, [formData.OrganizationEmployee, formData.BusinessName]);



  const verifyBusiness = async (BusinessName) => {
    try {
      const result = await client.graphql({
        query: /* GraphQL */ `
        query ListOrganizationInformations($filter: ModelOrganizationInformationFilterInput) {
          listOrganizationInformations(filter: $filter) {
            items {
              id
              BusinessName
              BusinessEIN
              BusinessCountry
              BusinessAddress
              BusinessCity
              BusinessState
              BusinessZipCode
              BusinessPhoneNumber
              BusinessWebsite
              Departments
              ProgramsUnits
              Services
            }
          }
        }
      `,
        variables: {
          filter: { BusinessName: { eq: BusinessName } }
        }
      });


      const item = result?.data?.listOrganizationInformations?.items?.[0];

      if (item) {
        // ✅ Auto-fill form data with organization details
        setFormData((prev) => ({
          ...prev,
          BusinessEIN: item.BusinessEIN?.toString() || "",
          BusinessCountry: item.BusinessCountry || "",
          BusinessAddress: item.BusinessAddress || "",
          BusinessCity: item.BusinessCity || "",
          BusinessState: item.BusinessState || "",
          BusinessZipCode: item.BusinessZipCode?.toString() || "",
          BusinessPhoneNumber: item.BusinessPhoneNumber?.toString() || "",
          BusinessWebsite: item.BusinessWebsite || "",
        }));

        // ✅ Update dropdown options
        setOrgOptions({
          Departments: item.Departments || [],
          ProgramsUnits: item.ProgramsUnits || [],
          Services: item.Services || [],
        });

        setBusinessStatus("Business found ✅");
        return true;
      } else {
        setBusinessStatus("Business not found ❌");
        return false;
      }
    } catch (error) {
      console.error("Error verifying Business:", error);
      setBusinessStatus("Error checking Business ❌");
      return false;
    }
  };



  const validateOrganizationEmployee = async () => {
    try {
      if (!formData.BusinessName || !cognitoEmail) return false;

      // Step 1: Get matching organization
      const orgInfoRes = await client.graphql({
        query: /* GraphQL */ `
        query ListOrganizationInformations($filter: ModelOrganizationInformationFilterInput) {
          listOrganizationInformations(filter: $filter) {
            items {
              id
              userId
            }
          }
        }
      `,
        variables: {
          filter: { BusinessName: { eq: formData.BusinessName.trim() } },
        },
      });

      const org = orgInfoRes.data?.listOrganizationInformations?.items?.[0];
      if (!org) return false;

      const orgId = org.userId;

      // Step 2: Check for matching CP record
      const cpRes = await client.graphql({
        query: /* GraphQL */ `
        query ListOrganizationCPs($filter: ModelOrganizationCPsFilterInput) {
          listOrganizationCPs(filter: $filter) {
            items {
              id
            }
          }
        }
      `,
        variables: {
          filter: {
            OrganizationCPEmail: { eq: cognitoEmail },
            OrganizationId: { eq: orgId },
          },
        },
      });

      return cpRes.data?.listOrganizationCPs?.items?.length > 0;
    } catch (error) {
      console.error("Error validating org employee:", error);
      return false;
    }
  };


  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function saveDynamoFields(includeEmail = false) {
    if (formData.OrganizationEmployee) {
      if (!formData.BusinessName?.trim()) {
        showNotification("Please enter a valid Business Name before proceeding.");
        return;
      }

      // TODO: Validate BusinessName exists in OrganizationInformation
    }
    try {
      const cleaned = { ...formData };

      // Remove Email field from Dynamo update if not explicitly saving email
      if (!includeEmail && recordId) delete cleaned.Email;

      // Clean blank strings and trim
      Object.entries(cleaned).forEach(([k, v]) => {
        if (typeof v === "string") {
          cleaned[k] = v.trim();
          if (cleaned[k] === "") cleaned[k] = null;
        }
      });

      // Always include userId
      cleaned.userId = userId;

      // Clear out Professional-only fields if not selected
      const professionalFields = [
        "ProfessionalRole",
        "BusinessName",
        "BusinessEIN",
        "BusinessAddress",
        "BusinessCountry",
        "BusinessCity",
        "BusinessState",
        "BusinessZipCode",
        "BusinessPhoneNumber",
        "BusinessWebsite",
        "OrganizationAdministrator",
        "OrganizationEmployee",
      ];

      if (cleaned.ProfileType !== "Professional") {
        for (const field of professionalFields) {
          cleaned[field] = null; // Explicitly clear
        }
      }

      if (recordId) {
        await client.graphql({
          query: updateGeneralInformation,
          variables: { input: { id: recordId, ...cleaned } },
        });
        showNotification("Information updated.");
      } else {
        const res = await client.graphql({
          query: createGeneralInformation,
          variables: { input: cleaned },
        });
        const newId = res.data?.createGeneralInformation?.id;
        if (newId) setRecordId(newId);
        showNotification("Information saved.");
      }
    } catch (err) {
      console.error("Error saving data:", err);
      showNotification("Error saving information.");
    }
  }


  async function updateCognitoEmail(newEmail) {
    try {
      await updateUserAttribute({
        userAttribute: { attributeKey: "email", value: newEmail },
      });
      setAwaitingVerification(true);
      showNotification("Verification code sent to your new email.");
    } catch (err) {
      console.error("Failed to update email:", err);
      showNotification("Failed to update email.");
    }
  }

  async function confirmEmailCode(code) {
    try {
      await confirmUserAttribute({
        userAttributeKey: "email",
        confirmationCode: code,
      });

      setAwaitingVerification(false);
      setConfirmCode("");
      showNotification("Email verified successfully! Please sign in again.");

      await saveDynamoFields(true);

      setTimeout(async () => {
        await signOut();
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.error("Verification failed:", err);
      showNotification("Incorrect code, please try again.");
    }
  }

  const handleSubmit = async () => {
    setOrgEmployeeError(""); // Clear previous errors

    if (formData.ProfileType === "Professional") {
      const requiredFields = [
        "ProfessionalRole",
        "BusinessName",
        "BusinessEIN",
        "BusinessAddress",
        "BusinessCountry",
        "BusinessCity",
        "BusinessState",
        "BusinessZipCode",
        "BusinessPhoneNumber",
        "BusinessWebsite",
      ];

      for (const field of requiredFields) {
        if (!formData[field] || formData[field].toString().trim() === "") {
          showNotification(`Please fill in: ${field}`);
          return;
        }
      }

      if (formData.OrganizationEmployee) {
        const isValid = await validateOrganizationEmployee();
        if (!isValid) {
          setOrgEmployeeError("❌ You are not a registered employee for this organization.");
          return;
        }
      }
    }

    if (awaitingVerification) {
      if (!confirmCode.trim()) {
        showNotification("Please enter the verification code.");
        return;
      }
      await confirmEmailCode(confirmCode.trim());
    } else {
      await saveDynamoFields();
      await updateOrgCPIfEmployee(); // <--- add this line
      if (formData.Email !== cognitoEmail) {
        await updateCognitoEmail(formData.Email);
      } else {
        showNotification("Information updated.");
      }
    }
  };


  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: 24, color: "#0077cc" }}>General Information</h2>
      <p style={{ fontStyle: "italic", color: "gray", marginBottom: 12 }}>{statusMessage}</p>
      <p style={{ fontSize: 13, marginBottom: 20 }}>
        <strong>Your Cognito Email:</strong> {cognitoEmail}
      </p>

      {["FirstName", "LastName"].map((field) => (
        <div key={field}>
          <label style={labelStyle}>{field.replace(/([A-Z])/g, " $1")}:</label>
          <input
            type={field === "Height" || field === "Weight" ? "number" : "text"}
            name={field}
            value={formData[field] || ""}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      ))}

      <div>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="Email"
          value={formData.Email || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Profile Type:</label>
        <select
          name="ProfileType"
          value={formData.ProfileType || ""}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select type</option>
          <option value="Individual">Individual</option>
          <option value="Professional">Professional</option>
          <option value="Organization">Organization</option>
        </select>
      </div>
      {formData.ProfileType === "Professional" && (
        <>
          <div>
            <label style={labelStyle}>Organization Employee?</label>
            <label>
              <input
                type="radio"
                name="OrganizationEmployee"
                checked={formData.OrganizationEmployee}
                onChange={() => {
                  setFormData((prev) => ({
                    ...prev,
                    OrganizationEmployee: true,
                    Department: "",
                    ProgramsUnit: "",
                    Service: "",
                  }));
                  setOrgOptions({
                    Departments: [],
                    ProgramsUnits: [],
                    Services: [],
                  });
                }}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="OrganizationEmployee"
                checked={!formData.OrganizationEmployee}
                onChange={() => {
                  setFormData((prev) => ({
                    ...prev,
                    OrganizationEmployee: false,
                    Department: "",
                    ProgramsUnit: "",
                    Service: "",
                  }));
                  setOrgOptions({
                    Departments: [],
                    ProgramsUnits: [],
                    Services: [],
                  });
                }}
              />
              No
            </label>



          </div>



          <div>
            <label style={labelStyle}>Business Name:</label>
            <input
              type="text"
              name="BusinessName"
              value={formData.BusinessName}
              onChange={handleChange}
              style={inputStyle}
            />
            {formData.OrganizationEmployee && (
              <p style={{ fontSize: 13, marginTop: 4, color: BusinessVerified ? "green" : "red" }}>
                {BusinessStatus}
              </p>
            )}
          </div>

          <div>
            <label style={labelStyle}>Professional Role:</label>
            <select
              name="ProfessionalRole"
              value={formData.ProfessionalRole}
              onChange={handleChange}
              disabled={formData.OrganizationEmployee && !BusinessVerified}
              style={inputStyle}
            >
              <option value="">Select a role</option>
              <option value="Admin">Admin</option>
              <option value="Allergist">Allergist</option>
              <option value="Audiologist">Audiologist</option>
              <option value="Dentist">Dentist</option>
              <option value="Fitness Trainer">Fitness Trainer</option>
              <option value="Health/Lifestyle Coach">Health/Lifestyle Coach</option>
              <option value="Leadership">Leadership</option>
              <option value="Mental Health Therapist">Mental Health Therapist</option>
              <option value="Nurse">Nurse</option>
              <option value="Nurse Practitioner">Nurse Practitioner</option>
              <option value="Optometrist">Optometrist</option>
              <option value="Pastoral Care">Pastoral Care</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Physician – MD">Physician – MD</option>
              <option value="Physician – Naturopathy">Physician – Naturopathy</option>
              <option value="Physician – OD">Physician – OD</option>
              <option value="Social Worker">Social Worker</option>
              
            </select>
          </div>

          <div>
            <label style={labelStyle}>Business EIN:</label>
            <input
              type="text"
              name="BusinessEIN"
              disabled={formData.OrganizationEmployee}
              value={formData.BusinessEIN}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Business Country:</label>
            <input
              type="text"
              name="BusinessCountry"
              value={formData.BusinessCountry}
              disabled={formData.OrganizationEmployee}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Business Address:</label>
            <input
              type="text"
              name="BusinessAddress"
              disabled={formData.OrganizationEmployee}
              value={formData.BusinessAddress}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>



          <div>
            <label style={labelStyle}>Business City:</label>
            <input
              type="text"
              name="BusinessCity"
              value={formData.BusinessCity}
              disabled={formData.OrganizationEmployee}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Business State:</label>
            <select
              type="text"
              name="BusinessState"
              value={formData.BusinessState}
              disabled={formData.OrganizationEmployee}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select a State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Business Zip Code:</label>
            <input
              type="number"
              name="BusinessZipCode"
              value={formData.BusinessZipCode}
              disabled={formData.OrganizationEmployee}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Business Phone Number:</label>
            <input
              type="text"
              name="BusinessPhoneNumber"
              value={formData.BusinessPhoneNumber}
              disabled={formData.OrganizationEmployee}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Business Website:</label>
            <input
              type="text"
              name="BusinessWebsite"
              value={formData.BusinessWebsite}
              disabled={formData.OrganizationEmployee}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          {["Department", "ProgramsUnit", "Service"].map((fieldKey) => (
            <div key={fieldKey}>
              <label style={labelStyle}>
                {fieldKey === "ProgramsUnit"
                  ? "Program/Unit"
                  : fieldKey.replace(/([A-Z])/g, " $1")}
                :
              </label>
              {formData.OrganizationEmployee ? (
                <select
                  name={fieldKey}
                  value={formData[fieldKey]}
                  disabled={formData.OrganizationEmployee && !BusinessVerified}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select one</option>
                  {(fieldKey === "Department"
                    ? orgOptions.Departments
                    : fieldKey === "ProgramsUnit"
                      ? orgOptions.ProgramsUnits
                      : orgOptions.Services
                  ).map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                  <option value="None">None</option>
                  <option value="Not listed">Not listed</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={fieldKey}
                  value={formData[fieldKey]}
                  disabled={formData.OrganizationEmployee && !BusinessVerified}
                  onChange={handleChange}
                  style={inputStyle}
                />
              )}
            </div>
          ))}


          {formData.OrganizationEmployee && (
            <div>
              <label style={labelStyle}>
                <input
                  type="checkbox"
                  name="OrganizationAdministrator"
                  checked={formData.OrganizationAdministrator}
                  disabled={true}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      OrganizationAdministrator: e.target.checked,
                    }))
                  }
                />
                {" "}Organization Administrator
              </label>
            </div>
          )}



        </>
      )}

      {awaitingVerification && (
        <div style={{ marginTop: 30 }}>
          <hr style={{ marginBottom: 20, borderColor: "#ccc" }} />
          <label style={labelStyle}>Enter Verification Code:</label>
          <input
            type="text"
            value={confirmCode}
            onChange={(e) => setConfirmCode(e.target.value)}
            style={inputStyle}
          />
          <button
            type="button"
            onClick={() => updateCognitoEmail(formData.Email)}
            style={{
              ...buttonStyle,
              backgroundColor: "#555",
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            Resend Code
          </button>
        </div>
      )}

      <button type="button" onClick={handleSubmit} style={buttonStyle}>
        {awaitingVerification ? "Confirm Email Change" : recordId ? "Save Changes" : "Save Information"}
      </button>
      {orgEmployeeError && (
        <div style={{ marginTop: 12, color: "red", fontWeight: 600 }}>
          {orgEmployeeError}
        </div>
      )}

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
  marginTop: 16,
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
