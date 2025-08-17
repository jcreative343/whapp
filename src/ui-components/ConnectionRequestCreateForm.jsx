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
import { createConnectionRequest } from "../graphql/mutations";
const client = generateClient();
export default function ConnectionRequestCreateForm(props) {
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
    requesterId: "",
    requesterFirstName: "",
    requesterLastName: "",
    requesterEmail: "",
    targetEmail: "",
    status: "",
    direction: "",
  };
  const [requesterId, setRequesterId] = React.useState(
    initialValues.requesterId
  );
  const [requesterFirstName, setRequesterFirstName] = React.useState(
    initialValues.requesterFirstName
  );
  const [requesterLastName, setRequesterLastName] = React.useState(
    initialValues.requesterLastName
  );
  const [requesterEmail, setRequesterEmail] = React.useState(
    initialValues.requesterEmail
  );
  const [targetEmail, setTargetEmail] = React.useState(
    initialValues.targetEmail
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [direction, setDirection] = React.useState(initialValues.direction);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRequesterId(initialValues.requesterId);
    setRequesterFirstName(initialValues.requesterFirstName);
    setRequesterLastName(initialValues.requesterLastName);
    setRequesterEmail(initialValues.requesterEmail);
    setTargetEmail(initialValues.targetEmail);
    setStatus(initialValues.status);
    setDirection(initialValues.direction);
    setErrors({});
  };
  const validations = {
    requesterId: [{ type: "Required" }],
    requesterFirstName: [{ type: "Required" }],
    requesterLastName: [{ type: "Required" }],
    requesterEmail: [{ type: "Required" }, { type: "Email" }],
    targetEmail: [{ type: "Required" }, { type: "Email" }],
    status: [{ type: "Required" }],
    direction: [{ type: "Required" }],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          requesterId,
          requesterFirstName,
          requesterLastName,
          requesterEmail,
          targetEmail,
          status,
          direction,
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
            query: createConnectionRequest.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ConnectionRequestCreateForm")}
      {...rest}
    >
      <TextField
        label="Requester id"
        isRequired={true}
        isReadOnly={false}
        value={requesterId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId: value,
              requesterFirstName,
              requesterLastName,
              requesterEmail,
              targetEmail,
              status,
              direction,
            };
            const result = onChange(modelFields);
            value = result?.requesterId ?? value;
          }
          if (errors.requesterId?.hasError) {
            runValidationTasks("requesterId", value);
          }
          setRequesterId(value);
        }}
        onBlur={() => runValidationTasks("requesterId", requesterId)}
        errorMessage={errors.requesterId?.errorMessage}
        hasError={errors.requesterId?.hasError}
        {...getOverrideProps(overrides, "requesterId")}
      ></TextField>
      <TextField
        label="Requester first name"
        isRequired={true}
        isReadOnly={false}
        value={requesterFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId,
              requesterFirstName: value,
              requesterLastName,
              requesterEmail,
              targetEmail,
              status,
              direction,
            };
            const result = onChange(modelFields);
            value = result?.requesterFirstName ?? value;
          }
          if (errors.requesterFirstName?.hasError) {
            runValidationTasks("requesterFirstName", value);
          }
          setRequesterFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("requesterFirstName", requesterFirstName)
        }
        errorMessage={errors.requesterFirstName?.errorMessage}
        hasError={errors.requesterFirstName?.hasError}
        {...getOverrideProps(overrides, "requesterFirstName")}
      ></TextField>
      <TextField
        label="Requester last name"
        isRequired={true}
        isReadOnly={false}
        value={requesterLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId,
              requesterFirstName,
              requesterLastName: value,
              requesterEmail,
              targetEmail,
              status,
              direction,
            };
            const result = onChange(modelFields);
            value = result?.requesterLastName ?? value;
          }
          if (errors.requesterLastName?.hasError) {
            runValidationTasks("requesterLastName", value);
          }
          setRequesterLastName(value);
        }}
        onBlur={() =>
          runValidationTasks("requesterLastName", requesterLastName)
        }
        errorMessage={errors.requesterLastName?.errorMessage}
        hasError={errors.requesterLastName?.hasError}
        {...getOverrideProps(overrides, "requesterLastName")}
      ></TextField>
      <TextField
        label="Requester email"
        isRequired={true}
        isReadOnly={false}
        value={requesterEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId,
              requesterFirstName,
              requesterLastName,
              requesterEmail: value,
              targetEmail,
              status,
              direction,
            };
            const result = onChange(modelFields);
            value = result?.requesterEmail ?? value;
          }
          if (errors.requesterEmail?.hasError) {
            runValidationTasks("requesterEmail", value);
          }
          setRequesterEmail(value);
        }}
        onBlur={() => runValidationTasks("requesterEmail", requesterEmail)}
        errorMessage={errors.requesterEmail?.errorMessage}
        hasError={errors.requesterEmail?.hasError}
        {...getOverrideProps(overrides, "requesterEmail")}
      ></TextField>
      <TextField
        label="Target email"
        isRequired={true}
        isReadOnly={false}
        value={targetEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId,
              requesterFirstName,
              requesterLastName,
              requesterEmail,
              targetEmail: value,
              status,
              direction,
            };
            const result = onChange(modelFields);
            value = result?.targetEmail ?? value;
          }
          if (errors.targetEmail?.hasError) {
            runValidationTasks("targetEmail", value);
          }
          setTargetEmail(value);
        }}
        onBlur={() => runValidationTasks("targetEmail", targetEmail)}
        errorMessage={errors.targetEmail?.errorMessage}
        hasError={errors.targetEmail?.hasError}
        {...getOverrideProps(overrides, "targetEmail")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId,
              requesterFirstName,
              requesterLastName,
              requesterEmail,
              targetEmail,
              status: value,
              direction,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Direction"
        isRequired={true}
        isReadOnly={false}
        value={direction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requesterId,
              requesterFirstName,
              requesterLastName,
              requesterEmail,
              targetEmail,
              status,
              direction: value,
            };
            const result = onChange(modelFields);
            value = result?.direction ?? value;
          }
          if (errors.direction?.hasError) {
            runValidationTasks("direction", value);
          }
          setDirection(value);
        }}
        onBlur={() => runValidationTasks("direction", direction)}
        errorMessage={errors.direction?.errorMessage}
        hasError={errors.direction?.hasError}
        {...getOverrideProps(overrides, "direction")}
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
