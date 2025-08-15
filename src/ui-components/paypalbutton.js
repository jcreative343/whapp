// components/PayPalButton.js
import { useEffect, useRef, useState } from "react";

const PAYPAL_CLIENT_ID = "ATuJ4tRAoRQahAlb6Wlsg4alE8ihFOP46xNOD-rIPne9C55rRq1TI7oaqiBNDYUpaJJiZ6hYgNjyhrTv"; // 👈 replace this with your actual client ID

const PayPalButton = ({ paymentMode }) => {
  const [sdkReady, setSdkReady] = useState(false);
  const buttonContainerRef = useRef(null);
  const paypalButtonRenderedRef = useRef(false);

  useEffect(() => {
    // Clear existing buttons
    if (buttonContainerRef.current) {
      buttonContainerRef.current.innerHTML = "";
    }

    // Remove old PayPal script
    const oldScript = document.getElementById("paypal-sdk");
    if (oldScript) {
      oldScript.remove();
    }

    // Clean global PayPal instance
    delete window.paypal;
    paypalButtonRenderedRef.current = false;

    // Load PayPal script dynamically based on mode
    const script = document.createElement("script");
    script.id = "paypal-sdk";

    const isSub = paymentMode === "subscription";
    const vaultParam = isSub ? "&vault=true" : "";
    const intentParam = isSub ? "subscription" : "capture";

    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&intent=${intentParam}${vaultParam}`;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
  }, [paymentMode]);

  useEffect(() => {
    if (sdkReady && window.paypal && !paypalButtonRenderedRef.current) {
      window.paypal.Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "rect",
        },
        createSubscription: paymentMode === "subscription"
          ? (data, actions) => actions.subscription.create({
              plan_id: "YOUR_PLAN_ID", // 👈 Replace with your actual PayPal plan ID
            })
          : undefined,
        createOrder: paymentMode === "one-time"
          ? (data, actions) => actions.order.create({
              purchase_units: [{ amount: { value: "10.00" } }], // 👈 change price as needed
            })
          : undefined,
        onApprove: (data, actions) => {
          console.log("Payment approved:", data);
        },
      }).render(buttonContainerRef.current);

      paypalButtonRenderedRef.current = true;
    }
  }, [sdkReady, paymentMode]);

  return <div ref={buttonContainerRef} />;
};

export default PayPalButton;
