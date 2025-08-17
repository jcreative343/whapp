import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect, useRef, useState } from "react";
import { createUserPayments } from "../graphql/mutations";
import { getCoupon, listOrganizationInformations, listUserPayments } from "../graphql/queries";
const client = generateClient();

const PAYPAL_CLIENT_ID = "ATuJ4tRAoRQahAlb6Wlsg4alE8ihFOP46xNOD-rIPne9C55rRq1TI7oaqiBNDYUpaJJiZ6hYgNjyhrTv";
const MONTHLY_PLAN_ID = "P-38S06349RK742580SNCECRTI";
const COST_PER_CLIENT = 10;
const TAX_PERCENT = 6.75; // Example: 7%

export default function SubscriptionManager() {

  const [userId, setUserId] = useState("");
  const [clientsProjected, setClientsProjected] = useState("");
  const [lockedClientsProjected, setLockedClientsProjected] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [paymentMode, setPaymentMode] = useState("subscription"); // "subscription" or "one-time"

  const [couponCode, setCouponCode] = useState("");
  const [couponPercent, setCouponPercent] = useState(0);
  const [paypalSdkReady, setPaypalSdkReady] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [activePayment, setActivePayment] = useState(null);
  const [payments, setPayments] = useState([]);
  const [hasOrganization, setHasOrganization] = useState(false);
  const [activePayments, setActivePayments] = useState([]);
  const paypalButtonRenderedRef = useRef(false);
  const [viewType, setViewType] = useState("active"); // "active" or "canceled"
  const [accountType, setAccountType] = useState("");
  const resetFormState = () => {
    setClientsProjected(1);
    setLockedClientsProjected(null);
    setIsLocked(false);
    setCouponCode("");
    setCouponPercent(0);
    setPaymentMode("subscription");
    setPaymentStatus("");
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function PayPalButtonsWithLoading(props) {

    const [{ isPending }] = usePayPalScriptReducer();

    if (isPending) {
      return (
        <div style={{ height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
          Loading payment options...
        </div>
      );
    }

    return <PayPalButtons {...props} />;
  }


  const handleOneTimePayment = async () => {
    const paidUntil = new Date();
    paidUntil.setFullYear(paidUntil.getFullYear() + 1);

    const attrs = await fetchUserAttributes();
    const account = attrs["custom:accountType"] || "";

    const baseInput = {
      userId,
      paymentType: "one-time",
      subscriptionId: "N/A",
      paymentStatus: "active",
      clientsProjected: parseInt(lockedClientsProjected),
      costPerClient: COST_PER_CLIENT,
      couponCode: couponCode.trim().toUpperCase(),
      couponPercent,
      paymentFor: account === "Professional" ? "professional" : "organization",
      paidUntil: paidUntil.toISOString(),
    };

    if (account !== "Professional") {
      baseInput.organizationId = userId;
      baseInput.organizationName = "Your Organization";
    }

    try {
      await client.graphql({
        query: createUserPayments,
        variables: { input: baseInput },
      });

      setPaymentStatus("✅ Payment completed! Your plan is active for 1 year.");
      const res = await client.graphql({
        query: listUserPayments,
        variables: {
          filter:
            account === "Professional"
              ? { userId: { eq: userId } }
              : { organizationId: { eq: userId } },
          sortDirection: "DESC",
        },
      });

      const updated = res.data.listUserPayments.items;
      setPayments(updated);
      setActivePayments(updated.filter((p) => ["active", "processing"].includes(p.paymentStatus)));
    } catch (err) {
      console.error("One-time payment error:", err);
      setPaymentStatus("❌ Error processing payment. Please try again.");
    }
  };

  useEffect(() => {
    fetchUserAttributes().then((attrs) => {
      if (attrs?.sub) setUserId(attrs.sub);
      setAccountType(attrs["custom:accountType"] || "");
    });
  }, []);


  useEffect(() => {
    const checkOrganizationExists = async () => {
      if (!userId) return;
      try {
        const res = await client.graphql({
          query: listOrganizationInformations,
          variables: { filter: { userId: { eq: userId } } },
        });
        const orgs = res.data.listOrganizationInformations.items;
        setHasOrganization(orgs.length > 0);
      } catch (err) {
        console.error("Error checking organization info:", err);
      }
    };
    checkOrganizationExists();
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    const loadPayments = async () => {
      try {
        const res = await client.graphql({
          query: listUserPayments,
          variables: {
            filter:
              accountType === "Professional"
                ? { userId: { eq: userId } }
                : { organizationId: { eq: userId } },
            sortDirection: "DESC",
          },
        });

        const all = res.data.listUserPayments.items;
        setPayments(all);

        const active = all.filter((p) =>
          ["active", "processing"].includes(p.paymentStatus)
        );
        setActivePayments(active);
      } catch (err) {
        console.error("Error loading payments:", err);
      }
    };

    loadPayments();
  }, [userId]);

  useEffect(() => {
    // Cleanup PayPal buttons when switching payment mode
    const buttonContainer = document.getElementById("paypal-button-container");
    if (buttonContainer) {
      buttonContainer.innerHTML = "";
    }

    // Remove old PayPal script if it exists
    const existingScript = document.querySelector('script[src*="www.paypal.com/sdk/js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Dynamically reload PayPal script with correct intent
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=${paymentMode === "subscription" ? "subscription" : "capture"
      }`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script) script.remove();
    };
  }, [paymentMode]);





  useEffect(() => {

    const container = document.getElementById("paypal-button-container");
    if (container) container.innerHTML = "";

    paypalButtonRenderedRef.current = false;
  }, [paymentMode, lockedClientsProjected]); // Add `paymentMode` here




  const validateCoupon = async () => {
    const code = couponCode.trim();
    if (!code) return;

    try {
      const res = await client.graphql({
        query: getCoupon,
        variables: { id: code }
      });

      const coupon = res.data.getCoupon;

      const now = new Date();
      const expiresAt = new Date(coupon.expiresAt);

      if (
        coupon &&
        coupon.isActive &&
        coupon.timesUsed < coupon.maxUses &&
        expiresAt > now
      ) {
        if (coupon.type === "percent") {
          setCouponPercent(coupon.value); // Set discount
          setCouponCode(code); // Lock in coupon
          setPaymentStatus(`✅ Coupon "${code}" applied: ${coupon.value}% off`);
        } else {
          setPaymentStatus("❌ Only percentage-type coupons are supported currently.");
        }
      } else {
        setCouponPercent(0);
        setPaymentStatus("❌ Coupon is expired, used up, or inactive.");
      }
    } catch (err) {
      console.error("Coupon fetch error:", err);
      setPaymentStatus("❌ Invalid coupon code.");
      setCouponPercent(0);
    }
  };


  const effectiveClients = isLocked ? lockedClientsProjected : clientsProjected;
  const annualCost = effectiveClients * COST_PER_CLIENT;
  const discount = annualCost * (couponPercent / 100);
  const finalAnnualCost = annualCost - discount;
  const monthlySubtotal = finalAnnualCost / 12;
  const monthlyTax = monthlySubtotal * (TAX_PERCENT / 100);
  const monthlyTotal = monthlySubtotal + monthlyTax;

  return (
    <div style={pageWrapper}>
      <div style={{ ...containerStyle, marginBottom: 0, width: isMobile ? "100%" : 600 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <button
            onClick={() => setPaymentMode("subscription")}
            style={{
              padding: "10px 20px",
              borderRadius: 20,
              border: paymentMode === "subscription" ? "2px solid #0077cc" : "1px solid #ccc",
              backgroundColor: paymentMode === "subscription" ? "#d0eaff" : "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Monthly Subscription
          </button>
          <button
            onClick={() => setPaymentMode("one-time")}
            style={{
              padding: "10px 20px",
              borderRadius: 20,
              border: paymentMode === "one-time" ? "2px solid #0077cc" : "1px solid #ccc",
              backgroundColor: paymentMode === "one-time" ? "#d0eaff" : "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            One-Time Annual Payment
          </button>
        </div>
      </div>

      <div style={containerStyle}>
        <h2 style={titleStyle}>Manage Subscription</h2>

        <label style={labelStyle}>How many clients do you think will need a health plan in one year? You can come back to this page later to increase the amount if needed.</label>
        <input
          type="number"
          min={1}
          value={clientsProjected}
          onChange={(e) => setClientsProjected(e.target.value)}
          placeholder="e.g. 100"
          style={inputStyle}
          disabled={(accountType === "Organization" && !hasOrganization) || isLocked}
        />

        {(hasOrganization || accountType === "Professional") && (

          <div style={{ marginTop: 10 }}>
            {!isLocked ? (
              <button
                onClick={() => {
                  if (parseInt(clientsProjected) > 0) {
                    setLockedClientsProjected(parseInt(clientsProjected));
                    setIsLocked(true);
                  }
                }}
                disabled={!clientsProjected}
                style={buttonStyle}
              >
                Finalize Clients
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLocked(false);
                  setLockedClientsProjected(null);
                }}
                style={buttonStyle}
              >
                Edit Clients
              </button>
            )}
          </div>
        )}

        <label style={labelStyle}>Coupon Code:</label>
        <input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          onBlur={validateCoupon}

          style={inputStyle}
          disabled={(accountType === "Organization" && !hasOrganization) || !isLocked}
        />
        {!isLocked ? (
          <button

            disabled={(accountType === "Organization" && !hasOrganization) || !isLocked}
            style={buttonStyle2}
          >
            Apply Coupon
          </button>
        ) : (
          <button
            disabled={(accountType === "Organization" && !hasOrganization) || !isLocked}
            style={buttonStyle22}
          >
            Apply Coupon
          </button>
        )}
        {couponPercent > 0 && (
          <button
            style={{ ...buttonStyle, backgroundColor: "tomato" }}
            onClick={() => {
              setCouponCode("");
              setCouponPercent(0);
              setPaymentStatus("Coupon removed.");
            }}
          >
            Remove Coupon
          </button>
        )}
        {paymentStatus && <p style={notificationStyle}>{paymentStatus}</p>}
        {lockedClientsProjected && (hasOrganization || accountType === "Professional") && (

          <div>
            <div>
              {paymentMode === "subscription" ? (
                <>
                  <p><b>Monthly Estimate:</b> ${monthlySubtotal.toFixed(2)}</p>
                  <p><b>Tax ({TAX_PERCENT}%):</b> ${monthlyTax.toFixed(2)}</p>
                  <p><b>Monthly Estimate (with Tax):</b> ${monthlyTotal.toFixed(2)}</p>
                </>
              ) : (
                <>
                  <p><b>Annual Cost:</b> ${finalAnnualCost.toFixed(2)} ({couponPercent}% discount)</p>
                  <p><b>Tax ({TAX_PERCENT}%):</b> ${(finalAnnualCost * TAX_PERCENT / 100).toFixed(2)}</p>
                  <p><b>Total with Tax:</b> ${(finalAnnualCost * (1 + TAX_PERCENT / 100)).toFixed(2)}</p>
                </>
              )}
            </div>
            <div style={{ marginTop: 20 }}>
              <PayPalScriptProvider
                key={paymentMode}
                options={{
                  "client-id": PAYPAL_CLIENT_ID,
                  currency: "USD",
                  intent: paymentMode === "subscription" ? "subscription" : "capture",
                  vault: paymentMode === "subscription",
                }}
                deferLoading={false}
              >
                {paymentMode === "one-time" && couponPercent === 100 ? (
                  <button
                    style={{
                      backgroundColor: "#0070ba",
                      color: "white",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: 6,
                      fontWeight: "bold",
                      fontSize: 16,
                      cursor: "pointer",
                      width: "100%",
                    }}
                    onClick={async () => {
                      const paidUntil = new Date();
                      paidUntil.setFullYear(paidUntil.getFullYear() + 1);

                      const attrs = await fetchUserAttributes();
                      const account = attrs["custom:accountType"] || "";

                      const baseInput = {
                        userId,
                        paymentType: "one-time",
                        subscriptionId: `FREE-${Date.now()}`,
                        paymentStatus: "completed",
                        clientsProjected: parseInt(lockedClientsProjected),
                        costPerClient: COST_PER_CLIENT,
                        couponCode: couponCode.trim().toUpperCase(),
                        couponPercent,
                        paymentFor: account === "Professional" ? "professional" : "organization",
                        paidUntil: paidUntil.toISOString(),
                      };

                      if (account !== "Professional") {
                        baseInput.organizationId = userId;
                        baseInput.organizationName = "Your Organization";
                      }

                      try {
                        await client.graphql({
                          query: createUserPayments,
                          variables: { input: baseInput },
                        });

                        setPaymentStatus("✅ 100% Discount Applied — Subscription Activated!");
                        resetFormState();

                        const res = await client.graphql({
                          query: listUserPayments,
                          variables: {
                            filter:
                              accountType === "Professional"
                                ? { userId: { eq: userId } }
                                : { organizationId: { eq: userId } },
                            sortDirection: "DESC",
                          },
                        });

                        const updated = res.data.listUserPayments.items;
                        setPayments(updated);
                        setActivePayments(updated.filter((p) => ["active", "processing"].includes(p.paymentStatus)));
                      } catch (err) {
                        console.error("Free activation error:", err);
                        setPaymentStatus("❌ Error activating free subscription.");
                      }
                    }}
                  >
                    Activate Free Plan
                  </button>
                ) : paymentMode === "one-time" ? (
                  <PayPalButtonsWithLoading
                    style={{
                      layout: "vertical",
                      color: "blue",
                      shape: "rect",
                      label: "pay",
                      height: 40,
                      tagline: false,
                    }}
                    forceReRender={[lockedClientsProjected, couponPercent]}
                    createOrder={(data, actions) => {
                      const effectiveClients = isLocked ? lockedClientsProjected : clientsProjected;
                      const annualCost = effectiveClients * COST_PER_CLIENT;
                      const discount = annualCost * (couponPercent / 100);
                      const finalAnnualCost = annualCost - discount;
                      const tax = finalAnnualCost * (TAX_PERCENT / 100);
                      const finalPrice = (finalAnnualCost + tax).toFixed(2);

                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: { value: finalPrice },
                            description: `One-time annual payment for ${effectiveClients} clients`,
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      const details = await actions.order.capture();
                      await handleOneTimePayment(); // use your own function here
                      resetFormState();
                    }}
                    onError={(err) => {
                      console.error("PayPal one-time error:", err);
                      setPaymentStatus("❌ Payment failed. Please try again.");
                    }}
                  />
                ) : (
                  <PayPalButtonsWithLoading
                    style={{
                      layout: "vertical",
                      color: "blue",
                      shape: "rect",
                      label: "pay",
                      height: 40,
                      tagline: false,
                    }}
                    forceReRender={[lockedClientsProjected, couponPercent]}
                    createSubscription={(data, actions) =>
                      actions.subscription.create({
                        plan_id: MONTHLY_PLAN_ID,
                        quantity: lockedClientsProjected.toString(),
                      })
                    }
                    onApprove={async (data, actions) => {
                      const paidUntil = new Date();
                      paidUntil.setMonth(paidUntil.getMonth() + 1);

                      const attrs = await fetchUserAttributes();
                      const account = attrs["custom:accountType"] || "";

                      const baseInput = {
                        userId,
                        paymentType: "subscription",
                        subscriptionId: data.subscriptionID,
                        paymentStatus: "active",
                        clientsProjected: parseInt(lockedClientsProjected),
                        costPerClient: COST_PER_CLIENT,
                        couponCode: couponCode.trim().toUpperCase(),
                        couponPercent,
                        paymentFor: account === "Professional" ? "professional" : "organization",
                        paidUntil: paidUntil.toISOString(),
                      };

                      if (account !== "Professional") {
                        baseInput.organizationId = userId;
                        baseInput.organizationName = "Your Organization";
                      }

                      try {
                        await client.graphql({
                          query: createUserPayments,
                          variables: { input: baseInput },
                        });

                        setPaymentStatus("✅ Subscription started successfully!");
                        resetFormState();

                        const res = await client.graphql({
                          query: listUserPayments,
                          variables: {
                            filter:
                              accountType === "Professional"
                                ? { userId: { eq: userId } }
                                : { organizationId: { eq: userId } },
                            sortDirection: "DESC",
                          },
                        });

                        const updated = res.data.listUserPayments.items;
                        setPayments(updated);
                        setActivePayments(updated.filter((p) => ["active", "processing"].includes(p.paymentStatus)));
                      } catch (err) {
                        console.error("Subscription approval error:", err);
                        setPaymentStatus("❌ Error starting subscription. Please try again.");
                      }
                    }}
                    onError={(err) => {
                      console.error("PayPal subscription error:", err);
                      setPaymentStatus("❌ Payment failed. Please try again.");
                    }}
                  />
                )}
              </PayPalScriptProvider>

            </div>

          </div>
        )}

        {(accountType === "Organization" && !hasOrganization) && (
          <p style={notificationStyle}>
            ⚠️ Please complete your organization profile before subscribing for clients.
          </p>
        )}

        
      </div>
      <div style={{ ...containerStyle, width: isMobile ? "100%" : 600 }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={titleStyle}>One-Time Payments</h3>
          {payments.filter(p => p.paymentType === "one-time").length === 0 ? (
            <p>No one-time payments found.</p>
          ) : (
            payments
              .filter(p => p.paymentType === "one-time")
              .map((p) => {
                const createdAtDate = new Date(p.createdAt);
                const fullYearEndDate = new Date(p.paidUntil);

                return (
                  <div key={p.id} style={paymentBoxStyle}>
                    <p><strong>Order ID:</strong> {p.subscriptionId}</p>
                    <p><strong>Clients:</strong> {p.clientsProjected}</p>
                    <p><strong>Total Paid:</strong> ${(
                      p.clientsProjected * p.costPerClient * (1 - (p.couponPercent || 0) / 100) *
                      (1 + TAX_PERCENT / 100)
                    ).toFixed(2)}</p>
                    <p><strong>Valid Until:</strong> {fullYearEndDate.toLocaleDateString()}</p>
                    <p><strong>Status:</strong> <span style={{ color: "green", fontWeight: "bold" }}>Completed</span></p>
                  </div>
                );
              })
          )}
        </div>
      </div>

      <div style={{ ...containerStyle, width: isMobile ? "100%" : 600 }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={titleStyle}>Subscriptions</h3>

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <button
              onClick={() => setViewType("active")}
              style={{
                cursor: "pointer",
                padding: "10px 24px",
                borderRadius: 20,
                border: viewType === "active" ? "2px solid #4da6ff" : "1px solid #ccc",
                backgroundColor: viewType === "active" ? "#d9eaff" : "#fff",
                fontWeight: "bold",
                fontSize: 16,
                flex: 1,
              }}
            >
              Active
            </button>
            <button
              onClick={() => setViewType("canceled")}
              style={{
                cursor: "pointer",
                padding: "10px 24px",
                borderRadius: 20,
                border: viewType === "canceled" ? "2px solid #4da6ff" : "1px solid #ccc",
                backgroundColor: viewType === "canceled" ? "#d9eaff" : "#fff",
                fontWeight: "bold",
                fontSize: 16,
                flex: 1,
              }}
            >
              Canceled
            </button>
          </div>
        </div>


        {viewType === "active"
          ? activePayments.filter(p => p.paymentType !== "one-time").length > 0
            ? activePayments
              .filter(p => p.paymentType !== "one-time")
              .map((p) => {

                const paidUntilDate = new Date(p.paidUntil);
                const now = new Date();
                const isPaid = paidUntilDate > now;
                const createdAtDate = new Date(p.createdAt);
                const fullYearEndDate = new Date(createdAtDate);
                fullYearEndDate.setMonth(fullYearEndDate.getMonth() + 12);

                return (
                  <div key={p.id} style={paymentBoxStyle}>
                    <p><strong>Subscription ID:</strong> {p.subscriptionId}</p>
                    <p><strong>Clients:</strong> {p.clientsProjected}</p>
                    <p><strong>Total Cost:</strong> $
                      {(
                        p.clientsProjected * p.costPerClient * (1 - (p.couponPercent || 0) / 100) *
                        (1 + TAX_PERCENT / 100)
                      ).toFixed(2)}
                    </p>
                    <p><strong>Until:</strong> {fullYearEndDate.toLocaleDateString()}</p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        style={{
                          color:
                            p.paymentStatus === "active"
                              ? "green"
                              : p.paymentStatus === "paused"
                                ? "orange"
                                : "gray",
                          fontWeight: "bold",
                        }}
                      >
                        {p.paymentStatus === "active"
                          ? "Active"
                          : p.paymentStatus === "paused"
                            ? "Paused"
                            : "Processing"}
                      </span>
                    </p>
                    <p>
                      <strong>Monthly Payment:</strong>{" "}
                      <span style={{ color: isPaid ? "green" : "red", fontWeight: "bold" }}>
                        {isPaid ? "Paid" : "Unpaid"}
                      </span>
                    </p>
                  </div>
                );
              })
            : <p>No active subscriptions.</p>
          : payments.filter((p) =>
            p.paymentStatus?.toLowerCase() === "cancelled" && p.paymentType !== "one-time"
          ).length > 0

            ? payments
              .filter((p) => p.paymentStatus?.toLowerCase() === "cancelled")
              .map((p) => {
                const createdAtDate = new Date(p.createdAt);
                const fullYearEndDate = new Date(createdAtDate);
                fullYearEndDate.setMonth(fullYearEndDate.getMonth() + 12);

                return (
                  <div key={p.id} style={paymentBoxStyle}>
                    <p><strong>Subscription ID:</strong> {p.subscriptionId}</p>
                    <p><strong>Clients:</strong> {p.clientsProjected}</p>
                    <p><strong>Total Cost:</strong> $
                      {(
                        p.clientsProjected * p.costPerClient * (1 - (p.couponPercent || 0) / 100) *
                        (1 + TAX_PERCENT / 100)
                      ).toFixed(2)}
                    </p>
                    <p><strong>Until:</strong> {fullYearEndDate.toLocaleDateString()}</p>
                    <p><strong>Status:</strong> <span style={{ color: "gray", fontWeight: "bold" }}>Canceled</span></p>
                  </div>
                );
              })
            : <p>No canceled subscriptions.</p>
        }
      </div>



      <div style={{ ...containerStyle, width: isMobile ? "100%" : 600 }}>
        <h4 style={titleStyle}>Payment History</h4>
        {payments.length === 0 ? (
          <p>No past payments.</p>
        ) : (
          payments.map((p) => (
            <div key={p.id} style={paymentBoxStyle}>
              <strong>{p.paymentType === "one-time" ? "One-Time" : "Monthly"} Payment</strong> –{" "}
              {p.clientsProjected} Clients – $
              {(
                (p.clientsProjected *
                  p.costPerClient *
                  (1 - (p.couponPercent || 0) / 100) *
                  (1 + TAX_PERCENT / 100) *
                  (p.paymentType === "one-time" ? 1 : 1 / 12))
              ).toFixed(2)}{" "}
              – until {new Date(p.paidUntil).toLocaleDateString()}
            </div>

          ))
        )}
      </div>

    </div>
  );
}

// ===== Styles =====
const paymentBoxStyle = {
  backgroundColor: "#f9f9f9",
  padding: 16,
  borderRadius: 10,
  marginBottom: 16,
  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  textTransform: "capitalize", // 

};

const pageWrapper = {
  marginTop: -120,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "40px 16px",

};

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
  padding: "10px 16px",
  backgroundColor: "#0077cc",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  marginTop: 10,
  cursor: "pointer",
  fontWeight: "bold",
};
const buttonStyle2 = {
  padding: "10px 16px",
  backgroundColor: "  #d8d8d8",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  marginTop: 10,
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
};
const buttonStyle22 = {
  padding: "10px 16px",
  backgroundColor: "  #d8d8d8",
  color: "#000",
  border: "none",
  borderRadius: 6,
  marginTop: 10,
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
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
