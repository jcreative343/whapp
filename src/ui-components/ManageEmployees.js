import { fetchUserAttributes, getCurrentUser } from "@aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { useEffect, useRef, useState } from "react";
import {
  createOrganizationCPs,
  deleteOrganizationCPs,
  updateOrganizationCPs,
} from "../graphql/mutations";
import { listGeneralInformations, listOrganizationCPs } from "../graphql/queries";

const client = generateClient();

export default function OrganizationEmployeesTable() {
  const [rows, setRows] = useState([]);
  const [organizationId, setOrganizationId] = useState("");
  const pasteTargetIndex = useRef(0);
  const [saveMessage, setSaveMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCurrentUserPrimaryAdmin, setIsCurrentUserPrimaryAdmin] = useState(false);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const containerStyle = {
  padding: 24,
  background: "#fff",
  borderRadius: 10,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  overflowX: "auto",
  width: isMobile? "100%": 1000,
};
useEffect(() => {
  const load = async () => {
    try {
      const user = await getCurrentUser();
      const attrs = await fetchUserAttributes();
      const accountType = attrs["custom:accountType"];
      const userEmail = attrs.email?.toLowerCase();
      const userSub = attrs.sub;

      let orgId = "";

      if (accountType === "Professional" && userEmail) {
        const cpRes = await client.graphql({
          query: listOrganizationCPs,
          variables: {
            filter: {
              OrganizationCPEmail: { eq: userEmail },
            },
          },
        });

        const cpItems = cpRes.data?.listOrganizationCPs?.items || [];

const matchingRecord = cpItems.find(
  (item) => item.OrganizationCPEmail?.toLowerCase() === userEmail
);

if (matchingRecord) {
  orgId = matchingRecord.OrganizationId;
  setIsCurrentUserPrimaryAdmin(!!matchingRecord.PrimaryOrganizationAdministrator);
}


        if (!orgId) {
          setSaveMessage("❌ Could not find organization for this user.");
          return;
        }
      } else {
  // For organization accounts, just use the sub as OrganizationId (your original working logic)
  orgId = userSub;
  setIsCurrentUserPrimaryAdmin(true); // ✅ Org accounts should always have full admin access
}
      setOrganizationId(orgId);

      // Load CPs for this organization
      const res = await client.graphql({
        query: listOrganizationCPs,
        variables: {
          filter: {
            OrganizationId: { eq: orgId },
          },
        },
      });

      const existingRows = res.data.listOrganizationCPs.items.map((item) => ({
        email: item.OrganizationCPEmail || "",
        firstName: item.OrganizationCPFirstName || "",
        lastName: item.OrganizationCPLastName || "",
        role: item.OrganizationCPRole || "",
        department: item.primaryDepartment || "",
        program: item.primaryProgramsUnit || "",
        service: item.primaryService || "",
        admin: item.OrganizationAdministrator || false,
        primaryAdmin: item.PrimaryOrganizationAdministrator || false,
        id: item.id,
      }));

      const blankRows = Array(3).fill().map(() => ({
        email: "",
        firstName: "",
        lastName: "",
        role: "",
        department: "",
        program: "",
        service: "",
        admin: false,
        primaryAdmin: false,
      }));

      setRows(existingRows.length > 0 ? existingRows : blankRows);
    } catch (err) {
      console.error("Error loading employees:", err);
      setSaveMessage("❌ Failed to load employees.");
    }
  };

  load();
}, []);


  const handleDeleteRow = async (index) => {
    const rowToDelete = rows[index];

    if (rowToDelete.id) {
      try {
        await client.graphql({
          query: deleteOrganizationCPs,
          variables: { input: { id: rowToDelete.id } },
        });
      } catch (err) {
        console.error("Delete failed:", err);
        alert("❌ Failed to delete record.");
        return;
      }
    }

    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] =
      field === "admin" || field === "primaryAdmin"
        ? value.target.checked
        : value.target.value;
    setRows(updated);
  };

  const handlePaste = async (e) => {
    const clipboard = e.clipboardData.getData("text");
    const lines = clipboard.trim().split("\n").map((line) => line.split("\t"));

    const pastedRows = await Promise.all(
      lines.map(async (cols) => {
        const email = cols[0] || "";
        let generalInfo = null;

        try {
          const res = await client.graphql({
            query: listGeneralInformations,
            variables: {
              filter: { Email: { eq: email } },
            },
          });
          generalInfo = res.data.listGeneralInformations.items[0];
        } catch (err) {
          console.warn("Lookup failed for", email, err);
        }

        return {
          email,
          firstName: generalInfo?.FirstName || cols[1] || "",
          lastName: generalInfo?.LastName || cols[4] || "",
          role: generalInfo?.ProfessionalRole || cols[5] || "",
          department: generalInfo?.Department || cols[6] || "",
          program: generalInfo?.ProgramsUnit || cols[7] || "",
          service: generalInfo?.Service || cols[8] || "",
          admin: cols[2]?.toLowerCase() === "true",
          primaryAdmin: cols[3]?.toLowerCase() === "true",
        };
      })
    );

    setRows((prev) => {
      const updated = [...prev];
      pastedRows.forEach((row, i) => {
        const idx = pasteTargetIndex.current + i;
        if (idx < updated.length) {
          updated[idx] = { ...updated[idx], ...row };
        } else {
          updated.push(row);
        }
      });
      return updated;
    });

    e.preventDefault();
  };

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        email: "",
        firstName: "",
        lastName: "",
        role: "",
        department: "",
        program: "",
        service: "",
        admin: false,
        primaryAdmin: false,
      },
    ]);
  };

  const saveAll = async () => {
  if (!organizationId) return alert("Missing organization ID.");
  setLoading(true);
  setSaveMessage("");

  // ✅ Enforce only one primary admin
  

  try {
    const existing = await client.graphql({
      query: listOrganizationCPs,
      variables: { filter: { OrganizationId: { eq: organizationId } } },
    });

    const existingByEmail = {};
    existing.data.listOrganizationCPs.items.forEach((item) => {
      const normalizedEmail = item.OrganizationCPEmail?.trim().toLowerCase();
      if (normalizedEmail) {
        existingByEmail[normalizedEmail] = item;
      }
    });

    for (const row of rows) {
      try {
        const email = row.email?.trim().toLowerCase();
        if (!email) continue; // skip empty emails

        const generalInfoRes = await client.graphql({
          query: listGeneralInformations,
          variables: { filter: { Email: { eq: email } } },
        });

        const generalInfo = generalInfoRes.data.listGeneralInformations.items[0];

        const input = {
          OrganizationId: organizationId,
          OrganizationCPEmail: email,
          OrganizationCPFirstName: generalInfo?.FirstName || row.firstName,
          OrganizationCPLastName: generalInfo?.LastName || row.lastName,
          OrganizationCPRole: generalInfo?.ProfessionalRole || row.role,
          primaryDepartment: generalInfo?.Department || row.department,
          primaryProgramsUnit: generalInfo?.ProgramsUnit || row.program,
          primaryService: generalInfo?.Service || row.service,
          OrganizationAdministrator: row.admin,
          PrimaryOrganizationAdministrator: row.primaryAdmin,
        };

        const existingRecord = row.id
          ? { id: row.id }
          : existingByEmail[email];

        if (existingRecord?.id) {
          await client.graphql({
            query: updateOrganizationCPs,
            variables: {
              input: { id: existingRecord.id, ...input },
            },
          });
        } else {
          await client.graphql({
            query: createOrganizationCPs,
            variables: { input },
          });
        }
      } catch (err) {
        console.error("Error saving row:", row.email, err);
      }
    }

    // ✅ Reload the latest saved data
    const refreshed = await client.graphql({
      query: listOrganizationCPs,
      variables: {
        filter: {
          OrganizationId: { eq: organizationId },
        },
      },
    });

    const updatedRows = refreshed.data.listOrganizationCPs.items.map((item) => ({
      email: item.OrganizationCPEmail || "",
      firstName: item.OrganizationCPFirstName || "",
      lastName: item.OrganizationCPLastName || "",
      role: item.OrganizationCPRole || "",
      department: item.primaryDepartment || "",
      program: item.primaryProgramsUnit || "",
      service: item.primaryService || "",
      admin: item.OrganizationAdministrator || false,
      primaryAdmin: item.PrimaryOrganizationAdministrator || false,
      id: item.id,
    }));

    setRows(updatedRows);
    setSaveMessage("✅ Employees saved successfully.");
  } catch (error) {
    console.error("Save failed:", error);
    setSaveMessage("❌ An error occurred while saving employees.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div style={containerStyle}>
      <h2>Organization Employees</h2>

      <div onPaste={handlePaste} style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th></th> {/* delete column */}
              <th>Email</th>
              <th>Administrator</th>
              <th>Primary Admin</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Program</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td>
                  <button
                    onClick={() => handleDeleteRow(i)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "red",
                      fontWeight: "bold",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                    title="Delete row"
                  >
                    ❌
                  </button>
                </td>
                <td>
                  <input
                    type="email"
                    value={row.email}
                    onChange={(e) => handleChange(i, "email", e)}
                    onFocus={() => (pasteTargetIndex.current = i)}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <input
  type="checkbox"
  checked={row.admin}
  onChange={(e) => handleChange(i, "admin", e)}
  disabled={!isCurrentUserPrimaryAdmin}
/>

                </td>
                <td>
                  <input
  type="checkbox"
  checked={row.primaryAdmin}
  onChange={(e) => handleChange(i, "primaryAdmin", e)}
  disabled={!isCurrentUserPrimaryAdmin}
/>

                </td>
                <td>
                  <input
                    value={row.firstName}
                    onChange={(e) => handleChange(i, "firstName", e)}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <input
                    value={row.lastName}
                    onChange={(e) => handleChange(i, "lastName", e)}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <input
                    value={row.role}
                    onChange={(e) => handleChange(i, "role", e)}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <input
                    value={row.department}
                    onChange={(e) => handleChange(i, "department", e)}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <input
                    value={row.program}
                    onChange={(e) => handleChange(i, "program", e)}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <input
                    value={row.service}
                    onChange={(e) => handleChange(i, "service", e)}
                    style={inputStyle}
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={addRow} style={buttonStyle}>
        + Add Row
      </button>
      <button
        onClick={saveAll}
        style={{ ...buttonStyle, backgroundColor: "#28a745" }}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Employees"}
      </button>

      {saveMessage && (
        <div style={{ marginTop: 10, color: saveMessage.startsWith("✅") ? "green" : "red" }}>
          {saveMessage}
        </div>
      )}

    </div>
  );
}



const tableWrapperStyle = {
  overflowX: "auto",
  width: "100%",
};

const tableStyle = {
  minWidth: "1800px",
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: 20,
};

const inputStyle = {
  width: "100%",
  minWidth: 140,
  padding: 6,
  border: "1px solid #ccc",
  borderRadius: 4,
  fontSize: 14,
  boxSizing: "border-box",
};

const buttonStyle = {
  marginRight: 10,
  padding: "10px 16px",
  fontSize: 14,
  border: "none",
  borderRadius: 5,
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};