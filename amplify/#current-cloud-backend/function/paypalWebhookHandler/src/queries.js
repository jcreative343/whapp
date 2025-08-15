const listUserPayments = /* GraphQL */ `
  query ListUserPayments(
    $filter: ModelUserPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        organizationId
        organizationName
        paymentType
        subscriptionId
        paymentStatus
        clientsProjected
        costPerClient
        couponCode
        couponPercent
        paidUntil
        paymentFor
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;

module.exports = { listUserPayments };
