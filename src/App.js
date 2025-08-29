import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { fetchAuthSession, getCurrentUser, setUpTOTP } from "@aws-amplify/auth";
import awsExports from "./aws-exports";
import Sidebar from "./ui-components/SideBar";

const AUTO_LOGOUT_MS = 10 * 60 * 1000; // 10 minutes inactivity
const POPUP_TIMEOUT_MS = 2 * 60 * 1000; // 2 minutes to respond
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
export function useAutoLogout() {
  const timeoutRef = useRef(null);
  const popupTimeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const [showPopup, setShowPopup] = useState(false);

  const clearAllTimers = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const signOutUser = async () => {
    try {
      console.log(
        "⌛️ Signing out user due to inactivity at",
        new Date().toLocaleTimeString()
      );
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out due to inactivity:", error);
    }
  };

  const onInactivity = () => {
    console.log(
      "⌛️ Inactivity timeout reached — showing popup at",
      new Date().toLocaleTimeString()
    );
    setShowPopup(true);

    popupTimeoutRef.current = setTimeout(() => {
      signOutUser();
    }, POPUP_TIMEOUT_MS);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetTimeout = () => {
    clearAllTimers();
    setShowPopup(false);
    startTimeRef.current = Date.now();
    console.log("⏳ Timeout reset at", new Date().toLocaleTimeString());

    timeoutRef.current = setTimeout(onInactivity, AUTO_LOGOUT_MS);

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(AUTO_LOGOUT_MS - elapsed, 0);
      console.log(
        `⏲️ Remaining time before popup: ${Math.floor(remaining / 1000)}s`
      );
    }, 5000);
  };

  const handleStillHere = () => {
    console.log(
      "✅ User confirmed they are still here at",
      new Date().toLocaleTimeString()
    );
    resetTimeout();
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "keydown",
      "mousedown",
      "scroll",
      "touchstart",
    ];
    events.forEach((e) => window.addEventListener(e, resetTimeout));

    resetTimeout();

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimeout));
      clearAllTimers();
    };
  }, []);

  return { showPopup, handleStillHere };
}

Amplify.configure(awsExports);

export default function App() {
  const { showPopup, handleStillHere } = useAutoLogout();
  const [accountType, setAccountType] = useState("Individual");
  const [secretKey, setSecretKey] = useState(null);

  useEffect(() => {
    const fetchTOTP = async () => {
      try {
        const user = await getCurrentUser(); // current signed in user
        const { secretCode } = await setUpTOTP({ user });
        setSecretKey(secretCode);
      } catch (err) {
        console.error("Error fetching TOTP secret:", err);
      }
    };

    fetchTOTP();
  }, []);
  // Load user attributes when user is set

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 40 }}>
      {/* The inactivity popup modal */}

      <Authenticator
        initialState="signIn"
        components={{
          SetupTOTP: ({ QRCode }) => (
            <div style={{ textAlign: "center" }}>
              <p>Scan this QR code with your authenticator app:</p>
              <img
                src={QRCode}
                alt="MFA QR Code"
                style={{
                  margin: "20px auto",
                  display: "block",
                  width: 200,
                  height: 200,
                }}
              />

              {secretKey && (
                <p style={{ marginTop: 16 }}>
                  Or enter this code manually: <strong>{secretKey}</strong>
                </p>
              )}

              <p style={{ marginTop: 16 }}>
                After scanning, enter the 6-digit code from your authenticator
                app to finish setup.
              </p>
              {/* 🚫 Copy button is gone */}
            </div>
          ),
          SignIn: {
            Header() {
              return (
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <img
                    src="/Wholistic-Depiction-Circle-App.png"
                    alt="Logo"
                    style={{ width: 250, height: "auto" }}
                  />
                </div>
              );
            },
          },
          SignUp: {
            FormFields() {
              return (
                <>
                  <img
                    src="/Wholistic-Depiction-Circle-App.png"
                    alt="Logo"
                    style={{ width: 250, height: "auto" }}
                  />
                  <div className="amplify-field">
                    <label className="amplify-label">Account Type</label>
                    <select
                      name="custom:accountType"
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                      required
                      className="amplify-input"
                    >
                      <option value="Individual">Individual</option>
                      <option value="Professional">Professional</option>
                      <option value="Organization">Organization</option>
                    </select>
                  </div>
                  <Authenticator.SignUp.FormFields />

                  <div className="amplify-field">
                    <label className="amplify-label">First Name</label>
                    <input
                      name="given_name"
                      type="text"
                      required
                      className="amplify-input"
                    />
                  </div>

                  <div className="amplify-field">
                    <label className="amplify-label">Last Name</label>
                    <input
                      name="family_name"
                      type="text"
                      required
                      className="amplify-input"
                    />
                  </div>

                  <div className="amplify-field">
                    <label className="amplify-label">Birthday</label>
                    <input
                      name="birthdate"
                      type="date"
                      required
                      className="amplify-input"
                    />
                  </div>

                  {accountType === "Organization" && (
                    <>
                      <div className="amplify-field">
                        <label className="amplify-label">Business Name</label>
                        <input
                          name="custom:BusinessName"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">Business EIN</label>
                        <input
                          name="custom:BusinessEIN"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">Country</label>
                        <input
                          name="custom:Country"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">City</label>
                        <input
                          name="custom:City"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">State</label>
                        <select
                          type="text"
                          name="custom:State"
                          style={{
                            width: "100%",
                            padding: 10,
                            fontSize: 15,
                            borderRadius: 8,
                            border: "1.5px solid #ccc",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="">Select a State</option>
                          {states.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">Zip Code</label>
                        <input
                          name="custom:ZipCode"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">Phone Number</label>
                        <input
                          name="custom:PhoneNumber"
                          type="text"
                          required
                          className="amplify-input"
                        />
                      </div>
                      <div className="amplify-field">
                        <label className="amplify-label">Website</label>
                        <input
                          name="website"
                          type="url"
                          placeholder="https://example.com"
                          className="amplify-input"
                        />
                      </div>
                    </>
                  )}

                  <p
                    style={{
                      marginTop: "16px",
                      fontSize: "14px",
                      color: "#333",
                    }}
                  >
                    For security of your health information, you must use an
                    authenticator app. Popular options include:{" "}
                    <strong>Duo</strong>, <strong>Google</strong>, and{" "}
                    <strong>Authy</strong>.
                  </p>
                </>
              );
            },
          },
        }}
      >
        {({ signOut, user }) => (
          <main style={{ textAlign: "center" }}>
            <Sidebar />
            {showPopup && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9999,
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    padding: 30,
                    borderRadius: 12,
                    width: 400,
                    maxWidth: "90%",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <h2 style={{ marginBottom: 20 }}>Are you still there?</h2>
                  <p style={{ marginBottom: 30 }}>
                    For security, you will be logged out soon due to inactivity.
                  </p>
                  <button
                    onClick={handleStillHere}
                    style={{
                      padding: "10px 20px",
                      fontSize: 16,
                      borderRadius: 8,
                      border: "none",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Yes, I’m here
                  </button>
                </div>
              </div>
            )}
          </main>
        )}
      </Authenticator>
    </div>
  );
}
