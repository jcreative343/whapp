/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUserLink } from "../graphql/mutations";
const client = generateClient();
export default function UserLinkCreateForm(props) {
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
    professionalId: "",
    professionalEmail: "",
    professionalFirstName: "",
    professionalLastName: "",
    clientId: "",
    clientEmail: "",
    clientFirstName: "",
    clientLastName: "",
    clientViewable: false,
    subscriptionId: "",
  };
  const [professionalId, setProfessionalId] = React.useState(
    initialValues.professionalId
  );
  const [professionalEmail, setProfessionalEmail] = React.useState(
    initialValues.professionalEmail
  );
  const [professionalFirstName, setProfessionalFirstName] = React.useState(
    initialValues.professionalFirstName
  );
  const [professionalLastName, setProfessionalLastName] = React.useState(
    initialValues.professionalLastName
  );
  const [clientId, setClientId] = React.useState(initialValues.clientId);
  const [clientEmail, setClientEmail] = React.useState(
    initialValues.clientEmail
  );
  const [clientFirstName, setClientFirstName] = React.useState(
    initialValues.clientFirstName
  );
  const [clientLastName, setClientLastName] = React.useState(
    initialValues.clientLastName
  );
  const [clientViewable, setClientViewable] = React.useState(
    initialValues.clientViewable
  );
  const [subscriptionId, setSubscriptionId] = React.useState(
    initialValues.subscriptionId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProfessionalId(initialValues.professionalId);
    setProfessionalEmail(initialValues.professionalEmail);
    setProfessionalFirstName(initialValues.professionalFirstName);
    setProfessionalLastName(initialValues.professionalLastName);
    setClientId(initialValues.clientId);
    setClientEmail(initialValues.clientEmail);
    setClientFirstName(initialValues.clientFirstName);
    setClientLastName(initialValues.clientLastName);
    setClientViewable(initialValues.clientViewable);
    setSubscriptionId(initialValues.subscriptionId);
    setErrors({});
  };
  const validations = {
    professionalId: [{ type: "Required" }],
    professionalEmail: [{ type: "Required" }],
    professionalFirstName: [{ type: "Required" }],
    professionalLastName: [{ type: "Required" }],
    clientId: [{ type: "Required" }],
    clientEmail: [{ type: "Required" }],
    clientFirstName: [{ type: "Required" }],
    clientLastName: [{ type: "Required" }],
    clientViewable: [{ type: "Required" }],
    subscriptionId: [],
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
          professionalId,
          professionalEmail,
          professionalFirstName,
          professionalLastName,
          clientId,
          clientEmail,
          clientFirstName,
          clientLastName,
          clientViewable,
          subscriptionId,
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
            query: createUserLink.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserLinkCreateForm")}
      {...rest}
    >
      <TextField
        label="Professional id"
        isRequired={true}
        isReadOnly={false}
        value={professionalId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId: value,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.professionalId ?? value;
          }
          if (errors.professionalId?.hasError) {
            runValidationTasks("professionalId", value);
          }
          setProfessionalId(value);
        }}
        onBlur={() => runValidationTasks("professionalId", professionalId)}
        errorMessage={errors.professionalId?.errorMessage}
        hasError={errors.professionalId?.hasError}
        {...getOverrideProps(overrides, "professionalId")}
      ></TextField>
      <TextField
        label="Professional email"
        isRequired={true}
        isReadOnly={false}
        value={professionalEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail: value,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.professionalEmail ?? value;
          }
          if (errors.professionalEmail?.hasError) {
            runValidationTasks("professionalEmail", value);
          }
          setProfessionalEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("professionalEmail", professionalEmail)
        }
        errorMessage={errors.professionalEmail?.errorMessage}
        hasError={errors.professionalEmail?.hasError}
        {...getOverrideProps(overrides, "professionalEmail")}
      ></TextField>
      <TextField
        label="Professional first name"
        isRequired={true}
        isReadOnly={false}
        value={professionalFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName: value,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.professionalFirstName ?? value;
          }
          if (errors.professionalFirstName?.hasError) {
            runValidationTasks("professionalFirstName", value);
          }
          setProfessionalFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("professionalFirstName", professionalFirstName)
        }
        errorMessage={errors.professionalFirstName?.errorMessage}
        hasError={errors.professionalFirstName?.hasError}
        {...getOverrideProps(overrides, "professionalFirstName")}
      ></TextField>
      <TextField
        label="Professional last name"
        isRequired={true}
        isReadOnly={false}
        value={professionalLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName: value,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.professionalLastName ?? value;
          }
          if (errors.professionalLastName?.hasError) {
            runValidationTasks("professionalLastName", value);
          }
          setProfessionalLastName(value);
        }}
        onBlur={() =>
          runValidationTasks("professionalLastName", professionalLastName)
        }
        errorMessage={errors.professionalLastName?.errorMessage}
        hasError={errors.professionalLastName?.hasError}
        {...getOverrideProps(overrides, "professionalLastName")}
      ></TextField>
      <TextField
        label="Client id"
        isRequired={true}
        isReadOnly={false}
        value={clientId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId: value,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.clientId ?? value;
          }
          if (errors.clientId?.hasError) {
            runValidationTasks("clientId", value);
          }
          setClientId(value);
        }}
        onBlur={() => runValidationTasks("clientId", clientId)}
        errorMessage={errors.clientId?.errorMessage}
        hasError={errors.clientId?.hasError}
        {...getOverrideProps(overrides, "clientId")}
      ></TextField>
      <TextField
        label="Client email"
        isRequired={true}
        isReadOnly={false}
        value={clientEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail: value,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.clientEmail ?? value;
          }
          if (errors.clientEmail?.hasError) {
            runValidationTasks("clientEmail", value);
          }
          setClientEmail(value);
        }}
        onBlur={() => runValidationTasks("clientEmail", clientEmail)}
        errorMessage={errors.clientEmail?.errorMessage}
        hasError={errors.clientEmail?.hasError}
        {...getOverrideProps(overrides, "clientEmail")}
      ></TextField>
      <TextField
        label="Client first name"
        isRequired={true}
        isReadOnly={false}
        value={clientFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName: value,
              clientLastName,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.clientFirstName ?? value;
          }
          if (errors.clientFirstName?.hasError) {
            runValidationTasks("clientFirstName", value);
          }
          setClientFirstName(value);
        }}
        onBlur={() => runValidationTasks("clientFirstName", clientFirstName)}
        errorMessage={errors.clientFirstName?.errorMessage}
        hasError={errors.clientFirstName?.hasError}
        {...getOverrideProps(overrides, "clientFirstName")}
      ></TextField>
      <TextField
        label="Client last name"
        isRequired={true}
        isReadOnly={false}
        value={clientLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName: value,
              clientViewable,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.clientLastName ?? value;
          }
          if (errors.clientLastName?.hasError) {
            runValidationTasks("clientLastName", value);
          }
          setClientLastName(value);
        }}
        onBlur={() => runValidationTasks("clientLastName", clientLastName)}
        errorMessage={errors.clientLastName?.errorMessage}
        hasError={errors.clientLastName?.hasError}
        {...getOverrideProps(overrides, "clientLastName")}
      ></TextField>
      <SwitchField
        label="Client viewable"
        defaultChecked={false}
        isDisabled={false}
        isChecked={clientViewable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable: value,
              subscriptionId,
            };
            const result = onChange(modelFields);
            value = result?.clientViewable ?? value;
          }
          if (errors.clientViewable?.hasError) {
            runValidationTasks("clientViewable", value);
          }
          setClientViewable(value);
        }}
        onBlur={() => runValidationTasks("clientViewable", clientViewable)}
        errorMessage={errors.clientViewable?.errorMessage}
        hasError={errors.clientViewable?.hasError}
        {...getOverrideProps(overrides, "clientViewable")}
      ></SwitchField>
      <TextField
        label="Subscription id"
        isRequired={false}
        isReadOnly={false}
        value={subscriptionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalId,
              professionalEmail,
              professionalFirstName,
              professionalLastName,
              clientId,
              clientEmail,
              clientFirstName,
              clientLastName,
              clientViewable,
              subscriptionId: value,
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
