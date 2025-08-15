import { useState } from "react";

export default function ThreeButtons() {
  const [showPopup, setShowPopup] = useState(false);

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    width: "100%",
    backgroundColor: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  };

  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 999
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Buttons */}
      <button
        style={buttonStyle}
        onClick={() => window.open("https://www.youtube.com/playlist?list=PLPUoai1c7t6cMlOlEaEUUOTRWH1VSS8au", "_blank")}
      >
        How To Videos/User Manual
      </button>

      <button
        style={buttonStyle}
        onClick={() => window.open("https://a.co/d/cec9Xd7", "_blank")}
      >
        Wholistic Health Program
      </button>

      <button
        style={buttonStyle}
        onClick={() => setShowPopup(true)}
      >
        Explore Relationships
      </button>

      {/* Popup */}
      {showPopup && (
        <>
          <div style={overlayStyle} onClick={() => setShowPopup(false)}></div>
          <div style={popupStyle}>
            <h3>Coming Soon</h3>
            <p>This feature will be available soon!</p>
            <button style={buttonStyle} onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}
