import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes, signOut, updateUserAttribute } from "aws-amplify/auth";
import { useEffect, useState } from 'react';
import { listGeneralInformations, listOrganizationCPs, listOrganizationInformations } from "../graphql/queries";
import Assessment from "../ui-components/Assessment";
import ClientCreatePlan from "../ui-components/ClientCreatePlan";
import ClientTrackProgress from "../ui-components/ClientTrackProgress";
import ConnectedClientBar from "../ui-components/ConnectedClientBar"; // ✅
import { useConnectedClient } from "../ui-components/ConnectedClientContext";
import CreatePlan from "../ui-components/CreatePlan";
import Dashboard from "../ui-components/Dashboard";
import DashboardOrganization from "../ui-components/DashboardOrganization";
import DashboardProfessional from "../ui-components/DashboardProfessional";
import GeneralInformation from "../ui-components/GeneralInformation";
import ManageConnections from "../ui-components/ManageConnections";
import NotificationsPopup from "../ui-components/NotificationsPopup";
import OrganizationInformation from "../ui-components/OrganizationInfomation";
import TrackProgress from "../ui-components/TrackProgress";
import ViewReports from "../ui-components/ViewReports";
import ClientViewReports from "./ClientViewReports";
import ManageEmployees from "./ManageEmployees";
import OverallDashboard from "./OverallDashboard";
import PaymentInformation from "./PaymentInformation";
import Resources from "./Resources";
import SentRecommendations from "./SentRecommendations";
const client = generateClient();
const COMPONENTS_MAP = {
  Dashboard,
  DashboardProfessional,
  GeneralInformation,
  Assessment,
  CreatePlan,
  TrackProgress,
  ViewReports,
  ManageConnections,
  OrganizationInformation,
  ManageEmployees,
  ClientCreatePlan,
  ClientTrackProgress,
  PaymentInformation,
  DashboardOrganization,
  SentRecommendations,
  ClientViewReports,
  Resources,
  OverallDashboard,
};



export default function SidebarWithContent() {
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [open, setOpen] = useState(window.innerWidth >= 768);
  const [currentView, setCurrentView] = useState(() => {
    const startOn = localStorage.getItem("startOn") || "Dashboard";
    localStorage.removeItem("startOn");
    return startOn;
  });
  const { connectedClient, setConnectedClient } = useConnectedClient();
  const [accountType, setAccountType] = useState('');
  const [signedInAs, setSignedInAs] = useState(null);
  const [userId, setUserId] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(true); // ⬅️ Add this
  const [organizationName, setOrganizationName] = useState("");
  const [isInOrganization, setIsInOrganization] = useState(false);


  const fullHeight = () =>
    typeof window !== "undefined" && window.innerWidth < 768 ? "100dvh" : "100vh";
  useEffect(() => {
    if (!connectedClient && (currentView === "ClientViewReports" || currentView === "ClientTrackProgress")) {
      setCurrentView("DashboardProfessional");
    }
  }, [connectedClient, currentView]);
  useEffect(() => {
    const handleResize = () => setOpen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isOrgAdmin, setIsOrgAdmin] = useState(false);
  const [isOrgPrimaryAdmin, setIsOrgPrimaryAdmin] = useState(false);
  useEffect(() => {
    const loadUserAttributes = async () => {
      try {
        const attrs = await fetchUserAttributes();
        const acctType = attrs["custom:accountType"];
        const signedIn = attrs["custom:SignedInAs"];
        const userSub = attrs.sub;
        const email = attrs.email?.toLowerCase();

        setAccountType(acctType);
        setUserId(userSub);
        setSignedInAs(signedIn || acctType);

        let defaultView = "Dashboard"; // fallback

if (acctType === "Organization") {
  try {
    const orgRes = await client.graphql({
      query: listOrganizationInformations,
      variables: {
        filter: { userId: { eq: userSub } }
      }
    });
    const orgItem = orgRes?.data?.listOrganizationInformations?.items?.[0];

    if (orgItem?.BusinessName) {
      setOrganizationName(orgItem.BusinessName);
    }

    defaultView = orgItem ? "DashboardOrganization" : "OrganizationInformation";
  } catch (err) {
    console.error("Error loading org info:", err);
    defaultView = "OrganizationInformation";
  }

} else if (acctType === "Professional") {
  try {
    const infoRes = await client.graphql({
      query: listGeneralInformations,
      variables: {
        filter: { userId: { eq: userSub } }
      }
    });
    const infoItem = infoRes?.data?.listGeneralInformations?.items?.[0];

    const hasGeneralInfo = !!infoItem;

    if (signedIn === "Professional") {
      defaultView = hasGeneralInfo ? "DashboardProfessional" : "GeneralInformation";
    } else {
      defaultView = hasGeneralInfo ? "Dashboard" : "GeneralInformation";
    }
  } catch (err) {
    console.error("Error loading general info:", err);
    defaultView = "GeneralInformation";
  }

} else {
  defaultView = "Dashboard";
}

setCurrentView(defaultView);



        // ✅ Fetch org BusinessName if Organization
        if (acctType === "Organization") {
          try {
            const orgRes = await client.graphql({
              query: listOrganizationInformations,
              variables: {
                filter: {
                  userId: { eq: userSub },
                },
              },
            });
            const orgItem = orgRes?.data?.listOrganizationInformations?.items?.[0];
            if (orgItem?.BusinessName) {
              setOrganizationName(orgItem.BusinessName);
            }
          } catch (err) {
            console.error("Error loading org info:", err);
          }
        }


        // ✅ Check if user is also an Organization Administrator
        if (acctType === "Professional" && email) {
          try {
            const result = await client.graphql({
              query: listOrganizationCPs,
              variables: {
                filter: {
                  OrganizationCPEmail: { eq: email },
                },
              },
            });

            const matches = result?.data?.listOrganizationCPs?.items || [];

            for (const match of matches) {
              const orgId = match?.OrganizationId;

              if (match.OrganizationAdministrator) {
                setIsOrgAdmin(true);
              }

              if (match.PrimaryOrganizationAdministrator) {
                setIsOrgPrimaryAdmin(true);
              }

              // ✅ Fetch org name if we haven't already
              if (orgId && !organizationName) {
                try {
                  const orgRes = await client.graphql({
                    query: listOrganizationInformations,
                    variables: {
                      filter: {
                        userId: { eq: orgId },
                      },
                    },
                  });
                  const orgItem = orgRes?.data?.listOrganizationInformations?.items?.[0];
                  if (orgItem?.BusinessName) {
                    setOrganizationName(orgItem.BusinessName);
                    console.log("✅ org name set to:", orgItem.BusinessName);
                  }
                } catch (err) {
                  console.error("Error loading organization info by ID:", err);
                }
              }
            }
            const isInOrganization = matches.length > 0;
            setIsInOrganization(isInOrganization); // you will need to add this state
          } catch (err) {
            console.error("Error checking OrganizationCPs:", err);
          }
        }


      } catch (err) {
        console.error("Error fetching attributes:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUserAttributes();
  }, []);



  const handleToggleSignedInAs = async () => {
  const newRole = signedInAs === "Professional" ? "Individual" : "Professional";
  try {
    await updateUserAttribute({
      userAttribute: { attributeKey: "custom:SignedInAs", value: newRole },
    });

    // Disconnect any connected client if switching away from Professional
    if (newRole === "Individual") {
      setConnectedClient(null);
    }

    setSignedInAs(newRole);

    // 🔄 Dynamically check for GeneralInformation before routing
    try {
      const infoRes = await client.graphql({
        query: listGeneralInformations,
        variables: {
          filter: { userId: { eq: userId } }
        }
      });

      const infoItem = infoRes?.data?.listGeneralInformations?.items?.[0];
      const hasGeneralInfo = !!infoItem;

      const newView = newRole === "Professional"
        ? (hasGeneralInfo ? "DashboardProfessional" : "GeneralInformation")
        : (hasGeneralInfo ? "Dashboard" : "GeneralInformation");

      setCurrentView(newView);
    } catch (err) {
      console.error("Error checking general info on switch:", err);
      setCurrentView("GeneralInformation"); // fallback just in case
    }

  } catch (err) {
    console.error("Error updating SignedInAs:", err);
  }
};



  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navItems = [];

  if (accountType === "Organization") {
    // ✅ Only show these for Organization accounts
    navItems.push(
      { label: "Dashboard", view: "DashboardOrganization" },
      { label: "Organization Information", view: "OrganizationInformation" },
      { label: "Manage Employees", view: "ManageEmployees" },
      { label: "Payment Information", view: "PaymentInformation" },
      { label: "Overall Dashboard", view: "OverallDashboard" },
      { label: "Resource", view: "Resources"}
    );
  } else {
    if (accountType === "Professional") {
      navItems.push({
        label: signedInAs === "Professional" ? "Switch to Individual" : "Switch to Professional",
        action: () => {
          setShowNotifications(false); // ✅ Close the popup
          handleToggleSignedInAs();   // ✅ Then switch
        }
      }
      );
    }
    // ✅ Show switch button for Individuals or Professionals


    if (signedInAs === "Professional") {
      navItems.push(
        { label: "Professional Dashboard", view: "DashboardProfessional" },
        { label: "General Information", view: "GeneralInformation" },
        { label: "Manage Connections", view: "ManageConnections" },
        { label: "Sent Recommendations", view: "SentRecommendations" },
        
      );
      if (!isInOrganization) {
        navItems.push({ label: "Payment Information", view: "PaymentInformation" });
      }
      if (connectedClient) {
        navItems.push(
          { label: "View Client Progress", view: "ClientTrackProgress" }
        );
      }
      if (connectedClient) {
        navItems.push(
          { label: "View Client Report", view: "ClientViewReports" }
        );
      }
      navItems.push(
        { label: "Resource", view: "Resources"}
      )
      
      if (isOrgAdmin || isOrgPrimaryAdmin) {
        navItems.push(
          { divider: true },
          { label: "Organization Information", view: "OrganizationInformation" },
          { label: "Manage Employees", view: "ManageEmployees" }
        );
      }

      // Add Payment Information for Professionals NOT in an org

    } else {
      navItems.push(
        { label: "Dashboard", view: "Dashboard" },
        { label: "General Information", view: "GeneralInformation" },
        { label: "Assessment", view: "Assessment" },
        { label: "Create Plan", view: "CreatePlan" },
        { label: "Track Progress", view: "TrackProgress" },
        { label: "View Reports", view: "ViewReports" },
        { label: "Manage Connections", view: "ManageConnections" },
        { label: "Resource", view: "Resources"}
      );
    }
  }

  const handleClick = (view) => {
    setCurrentView(view);
    if (window.innerWidth < 768) setOpen(false);
  };

  const SelectedComponent = COMPONENTS_MAP[currentView];
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: fullHeight(),
      }}>
        <div style={{
          width: 48,
          height: 48,
          border: '6px solid #ccc',
          borderTop: '6px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
        <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      </div>
    );
  }

  return (
    <>
      <ConnectedClientBar /> {/* ✅ Only renders if a client is connected */}
      {/* Hamburger Toggle */}
      <div
  onClick={() => setOpen(!open)}
  style={{
    position: "fixed",
    top: open ? 56 : 16,
    left: open ? 105 : 16, // ← when open, move it to the right edge of sidebar, else more to the left
    zIndex: 1001,
    backgroundColor: "#4da6ff",
    color: "white",
    padding: "6px 12px",
    borderRadius: 30,
    cursor: "pointer",
    fontSize: 20,
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    userSelect: "none",
    transition: "left 0.3s ease", // ← smooth slide
  }}
>
  ☰
</div>

      {/* Sidebar */}
      <nav
        aria-label="Sidebar"
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : "-260px",
          height: fullHeight(),
          width: 240,
          backgroundColor: "#0077cc",
          color: "white",
          transition: "left 0.3s ease",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", padding: "16px 16px 0" }}>
          <img
            src="/Outcomes-Excellence-Logo-Badge-Grow-White.png"
            alt="Logo"
            style={{ width: 100, height: "auto", marginBottom: 16 }}
          />
        </div>

        {/* Scrollable nav items */}
        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            padding: "0 16px",
            scrollbarWidth: "none",
          }}
        >
          <style>{`nav::-webkit-scrollbar { display: none; }`}</style>
          {navItems.map((item, i) => {
            if (item.divider) {
              return (
                <div key={`divider-${i}`}>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "#ccc",
                      margin: "16px 0 8px",
                      opacity: 0.5,
                    }}
                  />
                  {organizationName && (
                    <div style={{ fontWeight: "bold", fontSize: 14, color: "white", marginBottom: 8 }}>
                      {organizationName}
                    </div>
                  )}
                </div>
              );
            }

            const isSwitchButton = item.label.includes("Switch to");

            return (
              <button
                key={item.label}
                onClick={() => (item.action ? item.action() : handleClick(item.view))}
                style={{
                  backgroundColor: currentView === item.view ? "#e0f0ff" : "white",
                  color: "#0077cc",
                  border: isSwitchButton ? "3px dotted #0077cc" : "none",
                  borderRadius: 8,
                  padding: "12px",
                  marginBottom: 12,
                  fontWeight: "bold",
                  fontSize: 15,
                  width: "100%",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            );
          })}



        </div>

        {/* Bottom section */}
        <div style={{ padding: 16, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          {/* Info Toggle */}
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginBottom: 8,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => setShowInfo(!showInfo)}
            >
              <span>Information</span>
              <span
                style={{
                  transform: showInfo ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                ▼
              </span>
            </div>

            <div
              style={{
                maxHeight: showInfo ? 500 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              {[
                { label: "info@OutcomesExcellence.org", href: "mailto:info@OutcomesExcellence.org" },
                { label: "Provide Feedback", href: "https://forms.microsoft.com/r/s0uDENAjzW" },
                {
                  label: "Privacy Policy",
                  href: "https://outcomesexcellence.org/images/Documents/OE%20Privacy%20Policy.pdf",
                },
                {
                  label: "Terms and Conditions",
                  href: "https://outcomesexcellence.org/images/Documents/OE%20Terms%20and%20Conditions.pdf",
                },
                { label: "© Outcomes Excellence, Inc.", href: "https://outcomesexcellence.org/" },
                { label: `Account Type: ${accountType || "Loading..."}`, href: null },
                { label: `User ID: ${userId || "Loading..."}`, href: null },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 6 }}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white", textDecoration: "underline", fontSize: 12 }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ color: "white", fontSize: 13 }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Button */}
          <button
            onClick={() => setShowNotifications(true)}
            style={{
              backgroundColor: "#fff",
              color: "#0077cc",
              borderRadius: 8,
              padding: 10,
              width: "100%",
              fontWeight: "bold",
              fontSize: 14,
              marginBottom: 10,
              cursor: "pointer",
            }}
          >
            🔔 Notifications
          </button>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            style={{
              backgroundColor: "#fff",
              color: "#0077cc",
              borderRadius: 8,
              padding: 10,
              width: "100%",
              fontWeight: "bold",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main content area */}
      <main
        style={{
          padding: 24,
          minHeight: "100vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // ✅ horizontally center
          justifyContent: "flex-start", // or 'center' if you want vertical center too
        }}
      >
        {SelectedComponent ? (
          <SelectedComponent setCurrentView={setCurrentView} />
        ) : (
          <div>Component not found</div>
        )}
      </main>

      <NotificationsPopup visible={showNotifications} onClose={() => setShowNotifications(false)} />
    </>
  );
}
