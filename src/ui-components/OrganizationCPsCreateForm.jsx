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
import { createOrganizationCPs } from "../graphql/mutations";
const client = generateClient();
export default function OrganizationCPsCreateForm(props) {
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
    OrganizationId: "",
    OrganizationCPFirstName: "",
    OrganizationCPLastName: "",
    OrganizationCPEmail: "",
    OrganizationCPRole: "",
    primaryDepartment: "",
    primaryProgramsUnit: "",
    primaryService: "",
    OrganizationAdministrator: false,
    PrimaryOrganizationAdministrator: false,
  };
  const [OrganizationId, setOrganizationId] = React.useState(
    initialValues.OrganizationId
  );
  const [OrganizationCPFirstName, setOrganizationCPFirstName] = React.useState(
    initialValues.OrganizationCPFirstName
  );
  const [OrganizationCPLastName, setOrganizationCPLastName] = React.useState(
    initialValues.OrganizationCPLastName
  );
  const [OrganizationCPEmail, setOrganizationCPEmail] = React.useState(
    initialValues.OrganizationCPEmail
  );
  const [OrganizationCPRole, setOrganizationCPRole] = React.useState(
    initialValues.OrganizationCPRole
  );
  const [primaryDepartment, setPrimaryDepartment] = React.useState(
    initialValues.primaryDepartment
  );
  const [primaryProgramsUnit, setPrimaryProgramsUnit] = React.useState(
    initialValues.primaryProgramsUnit
  );
  const [primaryService, setPrimaryService] = React.useState(
    initialValues.primaryService
  );
  const [OrganizationAdministrator, setOrganizationAdministrator] =
    React.useState(initialValues.OrganizationAdministrator);
  const [
    PrimaryOrganizationAdministrator,
    setPrimaryOrganizationAdministrator,
  ] = React.useState(initialValues.PrimaryOrganizationAdministrator);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOrganizationId(initialValues.OrganizationId);
    setOrganizationCPFirstName(initialValues.OrganizationCPFirstName);
    setOrganizationCPLastName(initialValues.OrganizationCPLastName);
    setOrganizationCPEmail(initialValues.OrganizationCPEmail);
    setOrganizationCPRole(initialValues.OrganizationCPRole);
    setPrimaryDepartment(initialValues.primaryDepartment);
    setPrimaryProgramsUnit(initialValues.primaryProgramsUnit);
    setPrimaryService(initialValues.primaryService);
    setOrganizationAdministrator(initialValues.OrganizationAdministrator);
    setPrimaryOrganizationAdministrator(
      initialValues.PrimaryOrganizationAdministrator
    );
    setErrors({});
  };
  const validations = {
    OrganizationId: [{ type: "Required" }],
    OrganizationCPFirstName: [],
    OrganizationCPLastName: [],
    OrganizationCPEmail: [{ type: "Required" }, { type: "Email" }],
    OrganizationCPRole: [],
    primaryDepartment: [],
    primaryProgramsUnit: [],
    primaryService: [],
    OrganizationAdministrator: [{ type: "Required" }],
    PrimaryOrganizationAdministrator: [{ type: "Required" }],
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
          OrganizationId,
          OrganizationCPFirstName,
          OrganizationCPLastName,
          OrganizationCPEmail,
          OrganizationCPRole,
          primaryDepartment,
          primaryProgramsUnit,
          primaryService,
          OrganizationAdministrator,
          PrimaryOrganizationAdministrator,
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
            query: createOrganizationCPs.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "OrganizationCPsCreateForm")}
      {...rest}
    >
      <TextField
        label="Organization id"
        isRequired={true}
        isReadOnly={false}
        value={OrganizationId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId: value,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationId ?? value;
          }
          if (errors.OrganizationId?.hasError) {
            runValidationTasks("OrganizationId", value);
          }
          setOrganizationId(value);
        }}
        onBlur={() => runValidationTasks("OrganizationId", OrganizationId)}
        errorMessage={errors.OrganizationId?.errorMessage}
        hasError={errors.OrganizationId?.hasError}
        {...getOverrideProps(overrides, "OrganizationId")}
      ></TextField>
      <TextField
        label="Organization cp first name"
        isRequired={false}
        isReadOnly={false}
        value={OrganizationCPFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName: value,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationCPFirstName ?? value;
          }
          if (errors.OrganizationCPFirstName?.hasError) {
            runValidationTasks("OrganizationCPFirstName", value);
          }
          setOrganizationCPFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("OrganizationCPFirstName", OrganizationCPFirstName)
        }
        errorMessage={errors.OrganizationCPFirstName?.errorMessage}
        hasError={errors.OrganizationCPFirstName?.hasError}
        {...getOverrideProps(overrides, "OrganizationCPFirstName")}
      ></TextField>
      <TextField
        label="Organization cp last name"
        isRequired={false}
        isReadOnly={false}
        value={OrganizationCPLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName: value,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationCPLastName ?? value;
          }
          if (errors.OrganizationCPLastName?.hasError) {
            runValidationTasks("OrganizationCPLastName", value);
          }
          setOrganizationCPLastName(value);
        }}
        onBlur={() =>
          runValidationTasks("OrganizationCPLastName", OrganizationCPLastName)
        }
        errorMessage={errors.OrganizationCPLastName?.errorMessage}
        hasError={errors.OrganizationCPLastName?.hasError}
        {...getOverrideProps(overrides, "OrganizationCPLastName")}
      ></TextField>
      <TextField
        label="Organization cp email"
        isRequired={true}
        isReadOnly={false}
        value={OrganizationCPEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail: value,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationCPEmail ?? value;
          }
          if (errors.OrganizationCPEmail?.hasError) {
            runValidationTasks("OrganizationCPEmail", value);
          }
          setOrganizationCPEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("OrganizationCPEmail", OrganizationCPEmail)
        }
        errorMessage={errors.OrganizationCPEmail?.errorMessage}
        hasError={errors.OrganizationCPEmail?.hasError}
        {...getOverrideProps(overrides, "OrganizationCPEmail")}
      ></TextField>
      <TextField
        label="Organization cp role"
        isRequired={false}
        isReadOnly={false}
        value={OrganizationCPRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole: value,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationCPRole ?? value;
          }
          if (errors.OrganizationCPRole?.hasError) {
            runValidationTasks("OrganizationCPRole", value);
          }
          setOrganizationCPRole(value);
        }}
        onBlur={() =>
          runValidationTasks("OrganizationCPRole", OrganizationCPRole)
        }
        errorMessage={errors.OrganizationCPRole?.errorMessage}
        hasError={errors.OrganizationCPRole?.hasError}
        {...getOverrideProps(overrides, "OrganizationCPRole")}
      ></TextField>
      <TextField
        label="Primary department"
        isRequired={false}
        isReadOnly={false}
        value={primaryDepartment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment: value,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.primaryDepartment ?? value;
          }
          if (errors.primaryDepartment?.hasError) {
            runValidationTasks("primaryDepartment", value);
          }
          setPrimaryDepartment(value);
        }}
        onBlur={() =>
          runValidationTasks("primaryDepartment", primaryDepartment)
        }
        errorMessage={errors.primaryDepartment?.errorMessage}
        hasError={errors.primaryDepartment?.hasError}
        {...getOverrideProps(overrides, "primaryDepartment")}
      ></TextField>
      <TextField
        label="Primary programs unit"
        isRequired={false}
        isReadOnly={false}
        value={primaryProgramsUnit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit: value,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.primaryProgramsUnit ?? value;
          }
          if (errors.primaryProgramsUnit?.hasError) {
            runValidationTasks("primaryProgramsUnit", value);
          }
          setPrimaryProgramsUnit(value);
        }}
        onBlur={() =>
          runValidationTasks("primaryProgramsUnit", primaryProgramsUnit)
        }
        errorMessage={errors.primaryProgramsUnit?.errorMessage}
        hasError={errors.primaryProgramsUnit?.hasError}
        {...getOverrideProps(overrides, "primaryProgramsUnit")}
      ></TextField>
      <TextField
        label="Primary service"
        isRequired={false}
        isReadOnly={false}
        value={primaryService}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService: value,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.primaryService ?? value;
          }
          if (errors.primaryService?.hasError) {
            runValidationTasks("primaryService", value);
          }
          setPrimaryService(value);
        }}
        onBlur={() => runValidationTasks("primaryService", primaryService)}
        errorMessage={errors.primaryService?.errorMessage}
        hasError={errors.primaryService?.hasError}
        {...getOverrideProps(overrides, "primaryService")}
      ></TextField>
      <SwitchField
        label="Organization administrator"
        defaultChecked={false}
        isDisabled={false}
        isChecked={OrganizationAdministrator}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator: value,
              PrimaryOrganizationAdministrator,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationAdministrator ?? value;
          }
          if (errors.OrganizationAdministrator?.hasError) {
            runValidationTasks("OrganizationAdministrator", value);
          }
          setOrganizationAdministrator(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "OrganizationAdministrator",
            OrganizationAdministrator
          )
        }
        errorMessage={errors.OrganizationAdministrator?.errorMessage}
        hasError={errors.OrganizationAdministrator?.hasError}
        {...getOverrideProps(overrides, "OrganizationAdministrator")}
      ></SwitchField>
      <SwitchField
        label="Primary organization administrator"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PrimaryOrganizationAdministrator}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              OrganizationId,
              OrganizationCPFirstName,
              OrganizationCPLastName,
              OrganizationCPEmail,
              OrganizationCPRole,
              primaryDepartment,
              primaryProgramsUnit,
              primaryService,
              OrganizationAdministrator,
              PrimaryOrganizationAdministrator: value,
            };
            const result = onChange(modelFields);
            value = result?.PrimaryOrganizationAdministrator ?? value;
          }
          if (errors.PrimaryOrganizationAdministrator?.hasError) {
            runValidationTasks("PrimaryOrganizationAdministrator", value);
          }
          setPrimaryOrganizationAdministrator(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "PrimaryOrganizationAdministrator",
            PrimaryOrganizationAdministrator
          )
        }
        errorMessage={errors.PrimaryOrganizationAdministrator?.errorMessage}
        hasError={errors.PrimaryOrganizationAdministrator?.hasError}
        {...getOverrideProps(overrides, "PrimaryOrganizationAdministrator")}
      ></SwitchField>
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
