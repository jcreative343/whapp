/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUserPayments } from "../graphql/mutations";
const client = generateClient();
export default function UserPaymentsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    organizationId: "",
    organizationName: "",
    paymentType: "",
    subscriptionId: "",
    paymentStatus: "",
    clientsProjected: "",
    costPerClient: "",
    couponCode: "",
    couponPercent: "",
    paidUntil: "",
    paymentFor: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [organizationId, setOrganizationId] = React.useState(
    initialValues.organizationId
  );
  const [organizationName, setOrganizationName] = React.useState(
    initialValues.organizationName
  );
  const [paymentType, setPaymentType] = React.useState(
    initialValues.paymentType
  );
  const [subscriptionId, setSubscriptionId] = React.useState(
    initialValues.subscriptionId
  );
  const [paymentStatus, setPaymentStatus] = React.useState(
    initialValues.paymentStatus
  );
  const [clientsProjected, setClientsProjected] = React.useState(
    initialValues.clientsProjected
  );
  const [costPerClient, setCostPerClient] = React.useState(
    initialValues.costPerClient
  );
  const [couponCode, setCouponCode] = React.useState(initialValues.couponCode);
  const [couponPercent, setCouponPercent] = React.useState(
    initialValues.couponPercent
  );
  const [paidUntil, setPaidUntil] = React.useState(initialValues.paidUntil);
  const [paymentFor, setPaymentFor] = React.useState(initialValues.paymentFor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setOrganizationId(initialValues.organizationId);
    setOrganizationName(initialValues.organizationName);
    setPaymentType(initialValues.paymentType);
    setSubscriptionId(initialValues.subscriptionId);
    setPaymentStatus(initialValues.paymentStatus);
    setClientsProjected(initialValues.clientsProjected);
    setCostPerClient(initialValues.costPerClient);
    setCouponCode(initialValues.couponCode);
    setCouponPercent(initialValues.couponPercent);
    setPaidUntil(initialValues.paidUntil);
    setPaymentFor(initialValues.paymentFor);
    setErrors({});
  };
  const validations = {
    userId: [{ type: "Required" }],
    organizationId: [],
    organizationName: [],
    paymentType: [],
    subscriptionId: [],
    paymentStatus: [],
    clientsProjected: [],
    costPerClient: [],
    couponCode: [],
    couponPercent: [],
    paidUntil: [],
    paymentFor: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          organizationId,
          organizationName,
          paymentType,
          subscriptionId,
          paymentStatus,
          clientsProjected,
          costPerClient,
          couponCode,
          couponPercent,
          paidUntil,
          paymentFor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUserPayments.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserPaymentsCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Organization id"
        isRequired={false}
        isReadOnly={false}
        value={organizationId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId: value,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.organizationId ?? value;
          }
          if (errors.organizationId?.hasError) {
            runValidationTasks("organizationId", value);
          }
          setOrganizationId(value);
        }}
        onBlur={() => runValidationTasks("organizationId", organizationId)}
        errorMessage={errors.organizationId?.errorMessage}
        hasError={errors.organizationId?.hasError}
        {...getOverrideProps(overrides, "organizationId")}
      ></TextField>
      <TextField
        label="Organization name"
        isRequired={false}
        isReadOnly={false}
        value={organizationName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName: value,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.organizationName ?? value;
          }
          if (errors.organizationName?.hasError) {
            runValidationTasks("organizationName", value);
          }
          setOrganizationName(value);
        }}
        onBlur={() => runValidationTasks("organizationName", organizationName)}
        errorMessage={errors.organizationName?.errorMessage}
        hasError={errors.organizationName?.hasError}
        {...getOverrideProps(overrides, "organizationName")}
      ></TextField>
      <TextField
        label="Payment type"
        isRequired={false}
        isReadOnly={false}
        value={paymentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType: value,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.paymentType ?? value;
          }
          if (errors.paymentType?.hasError) {
            runValidationTasks("paymentType", value);
          }
          setPaymentType(value);
        }}
        onBlur={() => runValidationTasks("paymentType", paymentType)}
        errorMessage={errors.paymentType?.errorMessage}
        hasError={errors.paymentType?.hasError}
        {...getOverrideProps(overrides, "paymentType")}
      ></TextField>
      <TextField
        label="Subscription id"
        isRequired={false}
        isReadOnly={false}
        value={subscriptionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId: value,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionId ?? value;
          }
          if (errors.subscriptionId?.hasError) {
            runValidationTasks("subscriptionId", value);
          }
          setSubscriptionId(value);
        }}
        onBlur={() => runValidationTasks("subscriptionId", subscriptionId)}
        errorMessage={errors.subscriptionId?.errorMessage}
        hasError={errors.subscriptionId?.hasError}
        {...getOverrideProps(overrides, "subscriptionId")}
      ></TextField>
      <TextField
        label="Payment status"
        isRequired={false}
        isReadOnly={false}
        value={paymentStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus: value,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.paymentStatus ?? value;
          }
          if (errors.paymentStatus?.hasError) {
            runValidationTasks("paymentStatus", value);
          }
          setPaymentStatus(value);
        }}
        onBlur={() => runValidationTasks("paymentStatus", paymentStatus)}
        errorMessage={errors.paymentStatus?.errorMessage}
        hasError={errors.paymentStatus?.hasError}
        {...getOverrideProps(overrides, "paymentStatus")}
      ></TextField>
      <TextField
        label="Clients projected"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={clientsProjected}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected: value,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.clientsProjected ?? value;
          }
          if (errors.clientsProjected?.hasError) {
            runValidationTasks("clientsProjected", value);
          }
          setClientsProjected(value);
        }}
        onBlur={() => runValidationTasks("clientsProjected", clientsProjected)}
        errorMessage={errors.clientsProjected?.errorMessage}
        hasError={errors.clientsProjected?.hasError}
        {...getOverrideProps(overrides, "clientsProjected")}
      ></TextField>
      <TextField
        label="Cost per client"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costPerClient}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient: value,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.costPerClient ?? value;
          }
          if (errors.costPerClient?.hasError) {
            runValidationTasks("costPerClient", value);
          }
          setCostPerClient(value);
        }}
        onBlur={() => runValidationTasks("costPerClient", costPerClient)}
        errorMessage={errors.costPerClient?.errorMessage}
        hasError={errors.costPerClient?.hasError}
        {...getOverrideProps(overrides, "costPerClient")}
      ></TextField>
      <TextField
        label="Coupon code"
        isRequired={false}
        isReadOnly={false}
        value={couponCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode: value,
              couponPercent,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.couponCode ?? value;
          }
          if (errors.couponCode?.hasError) {
            runValidationTasks("couponCode", value);
          }
          setCouponCode(value);
        }}
        onBlur={() => runValidationTasks("couponCode", couponCode)}
        errorMessage={errors.couponCode?.errorMessage}
        hasError={errors.couponCode?.hasError}
        {...getOverrideProps(overrides, "couponCode")}
      ></TextField>
      <TextField
        label="Coupon percent"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={couponPercent}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent: value,
              paidUntil,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.couponPercent ?? value;
          }
          if (errors.couponPercent?.hasError) {
            runValidationTasks("couponPercent", value);
          }
          setCouponPercent(value);
        }}
        onBlur={() => runValidationTasks("couponPercent", couponPercent)}
        errorMessage={errors.couponPercent?.errorMessage}
        hasError={errors.couponPercent?.hasError}
        {...getOverrideProps(overrides, "couponPercent")}
      ></TextField>
      <TextField
        label="Paid until"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={paidUntil && convertToLocal(new Date(paidUntil))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil: value,
              paymentFor,
            };
            const result = onChange(modelFields);
            value = result?.paidUntil ?? value;
          }
          if (errors.paidUntil?.hasError) {
            runValidationTasks("paidUntil", value);
          }
          setPaidUntil(value);
        }}
        onBlur={() => runValidationTasks("paidUntil", paidUntil)}
        errorMessage={errors.paidUntil?.errorMessage}
        hasError={errors.paidUntil?.hasError}
        {...getOverrideProps(overrides, "paidUntil")}
      ></TextField>
      <TextField
        label="Payment for"
        isRequired={true}
        isReadOnly={false}
        value={paymentFor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              organizationId,
              organizationName,
              paymentType,
              subscriptionId,
              paymentStatus,
              clientsProjected,
              costPerClient,
              couponCode,
              couponPercent,
              paidUntil,
              paymentFor: value,
            };
            const result = onChange(modelFields);
            value = result?.paymentFor ?? value;
          }
          if (errors.paymentFor?.hasError) {
            runValidationTasks("paymentFor", value);
          }
          setPaymentFor(value);
        }}
        onBlur={() => runValidationTasks("paymentFor", paymentFor)}
        errorMessage={errors.paymentFor?.errorMessage}
        hasError={errors.paymentFor?.hasError}
        {...getOverrideProps(overrides, "paymentFor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
