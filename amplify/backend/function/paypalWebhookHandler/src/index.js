const https = require("https");

const appsyncUrl = "https://4rg3kmzmeja4racy6utcmeel6i.appsync-api.us-east-1.amazonaws.com/graphql";
const apiKey = "da2-syktg6ouezgfbo76baqxj766se";

const listUserPayments = `
  query ListUserPayments($filter: ModelUserPaymentsFilterInput) {
  listUserPayments(filter: $filter) {
    items {
      id
      paidUntil
      paymentStatus
      subscriptionId
      clientsProjected
      organizationId
      userId
    }
  }
}

`;

const updateUserPayments = `
  mutation UpdateUserPayments($input: UpdateUserPaymentsInput!) {
    updateUserPayments(input: $input) {
      id
      paidUntil
      paymentStatus
    }
  }
`;

async function sendGraphQLRequest(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);

    const req = https.request(
      new URL(appsyncUrl),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      },
      (res) => {
        let responseBody = "";
        res.on("data", (chunk) => (responseBody += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(responseBody));
          } catch (e) {
            reject(e);
          }
        });
      }
    );

    req.on("error", reject);
    req.write(data);
    req.end();
  });
}
async function updateUserLinks(links, subscriptionId) {
  for (const link of links) {
    const updateLinkMutation = `
      mutation UpdateUserLinks($input: UpdateUserLinksInput!) {
        updateUserLinks(input: $input) {
          id
          clientViewable
          subscriptionId
        }
      }
    `;
    await sendGraphQLRequest({
      query: updateLinkMutation,
      variables: {
        input: {
          id: link.id,
          clientViewable: false,
          subscriptionId
        }
      }
    });
  }
}

// Helper: Get professionals for an organization
async function getOrganizationProfessionals(organizationId) {
  const listOrganizationCPs = `
    query ListOrganizationCPs($filter: ModelOrganizationCPFilterInput) {
      listOrganizationCPs(filter: $filter) {
        items {
          userId
        }
      }
    }
  `;
  const res = await sendGraphQLRequest({
    query: listOrganizationCPs,
    variables: { filter: { OrganizationId: { eq: organizationId } } }
  });
  return res.data?.listOrganizationCPs?.items || [];
}

// Helper: Get user links for a professional
async function getUserLinks(professionalId) {
  const listUserLinks = `
    query ListUserLinks($filter: ModelUserLinksFilterInput) {
      listUserLinks(filter: $filter) {
        items {
          id
          createdAt
        }
      }
    }
  `;
  const res = await sendGraphQLRequest({
    query: listUserLinks,
    variables: { filter: { professionalId: { eq: professionalId } } }
  });
  return (res.data?.listUserLinks?.items || []).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}
async function findPaymentRecord(subscriptionId) {
  const body = {
    query: listUserPayments,
    variables: {
      filter: { subscriptionId: { eq: subscriptionId } },
    },
  };

  const response = await sendGraphQLRequest(body);
  const items = response.data?.listUserPayments?.items || [];

  // 🔍 Prioritize an active record if possible
  const activeOrLatest = items.find((item) => item.paymentStatus !== "cancelled") || items[0];

  return activeOrLatest || null;
}

// Reactivate user links previously hidden due to this subscription pause
async function reactivateUserLinks(subscriptionId) {
  const listUserLinksBySubscription = `
    query ListUserLinksBySubscription($filter: ModelUserLinksFilterInput) {
      listUserLinks(filter: $filter) {
        items {
          id
          clientViewable
          subscriptionId
        }
      }
    }
  `;

  // Find links where subscriptionId matches and clientViewable is false
  const res = await sendGraphQLRequest({
    query: listUserLinksBySubscription,
    variables: {
      filter: {
        subscriptionId: { eq: subscriptionId },
        clientViewable: { eq: false }
      }
    }
  });

  const linksToReactivate = res.data?.listUserLinks?.items || [];
  console.log(`Reactivating ${linksToReactivate.length} user links for subscription ${subscriptionId}`);

  for (const link of linksToReactivate) {
    const updateLinkMutation = `
      mutation UpdateUserLinks($input: UpdateUserLinksInput!) {
        updateUserLinks(input: $input) {
          id
          clientViewable
          subscriptionId
        }
      }
    `;
    await sendGraphQLRequest({
      query: updateLinkMutation,
      variables: {
        input: {
          id: link.id,
          clientViewable: true,
          subscriptionId: null
        }
      }
    });
  }
}


exports.handler = async (event) => {
  try {
    console.log("Webhook event received:", event);
    const body = JSON.parse(event.body);
    const eventType = body.event_type;
    let subscriptionId = null;

    if (eventType === "PAYMENT.SALE.COMPLETED") {
      subscriptionId = body.resource?.billing_agreement_id;
    } else if (
      eventType === "BILLING.SUBSCRIPTION.CANCELLED" ||
      eventType === "BILLING.SUBSCRIPTION.SUSPENDED" ||
      eventType === "BILLING.SUBSCRIPTION.ACTIVATED"
    ) {
      subscriptionId = body.resource?.id;
    }

    if (!subscriptionId) {
      throw new Error("No subscriptionId found in webhook event");
    }

    console.log("Processing subscriptionId:", subscriptionId);
    const existingPayment = await findPaymentRecord(subscriptionId);

    if (!existingPayment) {
      throw new Error("No existing payment record found for subscriptionId: " + subscriptionId);
    }

    const updateInput = { id: existingPayment.id };

    // Handle completed payment
    if (body.event_type === "PAYMENT.SALE.COMPLETED") {
      let paidUntilDate = existingPayment.paidUntil
        ? new Date(existingPayment.paidUntil)
        : new Date();

      paidUntilDate.setMonth(paidUntilDate.getMonth() + 1);
      updateInput.paidUntil = paidUntilDate.toISOString();
      updateInput.paymentStatus = "active";
      await reactivateUserLinks(subscriptionId);
      // Handle subscription cancellation
    } else if (body.event_type === "BILLING.SUBSCRIPTION.CANCELLED") {
      updateInput.paymentStatus = "cancelled";

      // Handle subscription suspension
    } else if (body.event_type === "BILLING.SUBSCRIPTION.SUSPENDED") {
      const reason = body.resource?.status_update_note || "";
      updateInput.paymentStatus = "paused";

      if (reason.toLowerCase().includes("non-payment")) {
        console.log("Processing non-payment suspension logic...");

        const clientsProjected = existingPayment.clientsProjected || 0;
        const organizationId = existingPayment.organizationId || null;
        const subscriptionId = existingPayment.subscriptionId;
        const userId = existingPayment.userId;

        if (!clientsProjected || clientsProjected <= 0) {
          console.log("No clientsProjected set, skipping clientViewable changes.");
        } else if (!organizationId) {
          // Individual professional
          const links = await getUserLinks(userId);
          const keepLinks = links.slice(0, clientsProjected);
          const hideLinks = links.slice(clientsProjected);
          console.log(`Hiding ${hideLinks.length} links for professional ${userId}`);
          await updateUserLinks(hideLinks, subscriptionId);
        } else {
          // Organization
          const professionals = await getOrganizationProfessionals(organizationId);
          if (professionals.length === 0) {
            console.log(`No professionals found for org ${organizationId}`);
          } else {
            const baseShare = Math.floor(clientsProjected / professionals.length);
            let remainder = clientsProjected % professionals.length;

            for (const [index, pro] of professionals.entries()) {
              const allowance = baseShare + (remainder > 0 ? 1 : 0);
              if (remainder > 0) remainder--;

              const links = await getUserLinks(pro.userId);
              const keepLinks = links.slice(0, allowance);
              const hideLinks = links.slice(allowance);
              console.log(
                `Hiding ${hideLinks.length} links for professional ${pro.userId} in org ${organizationId}`
              );
              await updateUserLinks(hideLinks, subscriptionId);
            }
          }
        }
      }


      // Ignore other events
    } else {
      console.log("Ignoring event type:", body.event_type);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Event ignored." }),
      };
    }

    const updateBody = {
      query: updateUserPayments,
      variables: { input: updateInput },
    };

    const updateResponse = await sendGraphQLRequest(updateBody);
    console.log("Updated payment record:", updateResponse);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Payment record updated." }),
    };
  } catch (err) {
    console.error("Error processing webhook:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Internal Server Error" }),
    };
  }
};
