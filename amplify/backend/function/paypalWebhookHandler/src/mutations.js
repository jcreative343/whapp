const createUserPayments = /* GraphQL */ `
  mutation CreateUserPayments(
    $input: CreateUserPaymentsInput!
    $condition: ModelUserPaymentsConditionInput
  ) {
    createUserPayments(input: $input, condition: $condition) {
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
  }
`;

module.exports = { createUserPayments };
