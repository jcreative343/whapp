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
import { createGeneralInformation } from "../graphql/mutations";
const client = generateClient();
export default function GeneralInformationCreateForm(props) {
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
    FirstName: "",
    LastName: "",
    Email: "",
    ProfessionalRole: "",
    BusinessName: "",
    BusinessEIN: "",
    BusinessCountry: "",
    BusinessAddress: "",
    BusinessCity: "",
    BusinessState: "",
    BusinessZipCode: "",
    BusinessPhoneNumber: "",
    BusinessWebsite: "",
    OrganizationAdministrator: false,
    OrganizationEmployee: false,
    Department: "",
    Service: "",
    ProgramsUnit: "",
    ProfileType: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [ProfessionalRole, setProfessionalRole] = React.useState(
    initialValues.ProfessionalRole
  );
  const [BusinessName, setBusinessName] = React.useState(
    initialValues.BusinessName
  );
  const [BusinessEIN, setBusinessEIN] = React.useState(
    initialValues.BusinessEIN
  );
  const [BusinessCountry, setBusinessCountry] = React.useState(
    initialValues.BusinessCountry
  );
  const [BusinessAddress, setBusinessAddress] = React.useState(
    initialValues.BusinessAddress
  );
  const [BusinessCity, setBusinessCity] = React.useState(
    initialValues.BusinessCity
  );
  const [BusinessState, setBusinessState] = React.useState(
    initialValues.BusinessState
  );
  const [BusinessZipCode, setBusinessZipCode] = React.useState(
    initialValues.BusinessZipCode
  );
  const [BusinessPhoneNumber, setBusinessPhoneNumber] = React.useState(
    initialValues.BusinessPhoneNumber
  );
  const [BusinessWebsite, setBusinessWebsite] = React.useState(
    initialValues.BusinessWebsite
  );
  const [OrganizationAdministrator, setOrganizationAdministrator] =
    React.useState(initialValues.OrganizationAdministrator);
  const [OrganizationEmployee, setOrganizationEmployee] = React.useState(
    initialValues.OrganizationEmployee
  );
  const [Department, setDepartment] = React.useState(initialValues.Department);
  const [Service, setService] = React.useState(initialValues.Service);
  const [ProgramsUnit, setProgramsUnit] = React.useState(
    initialValues.ProgramsUnit
  );
  const [ProfileType, setProfileType] = React.useState(
    initialValues.ProfileType
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setFirstName(initialValues.FirstName);
    setLastName(initialValues.LastName);
    setEmail(initialValues.Email);
    setProfessionalRole(initialValues.ProfessionalRole);
    setBusinessName(initialValues.BusinessName);
    setBusinessEIN(initialValues.BusinessEIN);
    setBusinessCountry(initialValues.BusinessCountry);
    setBusinessAddress(initialValues.BusinessAddress);
    setBusinessCity(initialValues.BusinessCity);
    setBusinessState(initialValues.BusinessState);
    setBusinessZipCode(initialValues.BusinessZipCode);
    setBusinessPhoneNumber(initialValues.BusinessPhoneNumber);
    setBusinessWebsite(initialValues.BusinessWebsite);
    setOrganizationAdministrator(initialValues.OrganizationAdministrator);
    setOrganizationEmployee(initialValues.OrganizationEmployee);
    setDepartment(initialValues.Department);
    setService(initialValues.Service);
    setProgramsUnit(initialValues.ProgramsUnit);
    setProfileType(initialValues.ProfileType);
    setErrors({});
  };
  const validations = {
    userId: [{ type: "Required" }],
    FirstName: [{ type: "Required" }],
    LastName: [{ type: "Required" }],
    Email: [{ type: "Required" }, { type: "Email" }],
    ProfessionalRole: [],
    BusinessName: [],
    BusinessEIN: [],
    BusinessCountry: [],
    BusinessAddress: [],
    BusinessCity: [],
    BusinessState: [],
    BusinessZipCode: [],
    BusinessPhoneNumber: [],
    BusinessWebsite: [],
    OrganizationAdministrator: [],
    OrganizationEmployee: [],
    Department: [],
    Service: [],
    ProgramsUnit: [],
    ProfileType: [],
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
          userId,
          FirstName,
          LastName,
          Email,
          ProfessionalRole,
          BusinessName,
          BusinessEIN,
          BusinessCountry,
          BusinessAddress,
          BusinessCity,
          BusinessState,
          BusinessZipCode,
          BusinessPhoneNumber,
          BusinessWebsite,
          OrganizationAdministrator,
          OrganizationEmployee,
          Department,
          Service,
          ProgramsUnit,
          ProfileType,
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
            query: createGeneralInformation.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "GeneralInformationCreateForm")}
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
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
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
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName: value,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName: value,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email: value,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Professional role"
        isRequired={false}
        isReadOnly={false}
        value={ProfessionalRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole: value,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.ProfessionalRole ?? value;
          }
          if (errors.ProfessionalRole?.hasError) {
            runValidationTasks("ProfessionalRole", value);
          }
          setProfessionalRole(value);
        }}
        onBlur={() => runValidationTasks("ProfessionalRole", ProfessionalRole)}
        errorMessage={errors.ProfessionalRole?.errorMessage}
        hasError={errors.ProfessionalRole?.hasError}
        {...getOverrideProps(overrides, "ProfessionalRole")}
      ></TextField>
      <TextField
        label="Business name"
        isRequired={false}
        isReadOnly={false}
        value={BusinessName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName: value,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessName ?? value;
          }
          if (errors.BusinessName?.hasError) {
            runValidationTasks("BusinessName", value);
          }
          setBusinessName(value);
        }}
        onBlur={() => runValidationTasks("BusinessName", BusinessName)}
        errorMessage={errors.BusinessName?.errorMessage}
        hasError={errors.BusinessName?.hasError}
        {...getOverrideProps(overrides, "BusinessName")}
      ></TextField>
      <TextField
        label="Business ein"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={BusinessEIN}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN: value,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessEIN ?? value;
          }
          if (errors.BusinessEIN?.hasError) {
            runValidationTasks("BusinessEIN", value);
          }
          setBusinessEIN(value);
        }}
        onBlur={() => runValidationTasks("BusinessEIN", BusinessEIN)}
        errorMessage={errors.BusinessEIN?.errorMessage}
        hasError={errors.BusinessEIN?.hasError}
        {...getOverrideProps(overrides, "BusinessEIN")}
      ></TextField>
      <TextField
        label="Business country"
        isRequired={false}
        isReadOnly={false}
        value={BusinessCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry: value,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessCountry ?? value;
          }
          if (errors.BusinessCountry?.hasError) {
            runValidationTasks("BusinessCountry", value);
          }
          setBusinessCountry(value);
        }}
        onBlur={() => runValidationTasks("BusinessCountry", BusinessCountry)}
        errorMessage={errors.BusinessCountry?.errorMessage}
        hasError={errors.BusinessCountry?.hasError}
        {...getOverrideProps(overrides, "BusinessCountry")}
      ></TextField>
      <TextField
        label="Business address"
        isRequired={false}
        isReadOnly={false}
        value={BusinessAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress: value,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessAddress ?? value;
          }
          if (errors.BusinessAddress?.hasError) {
            runValidationTasks("BusinessAddress", value);
          }
          setBusinessAddress(value);
        }}
        onBlur={() => runValidationTasks("BusinessAddress", BusinessAddress)}
        errorMessage={errors.BusinessAddress?.errorMessage}
        hasError={errors.BusinessAddress?.hasError}
        {...getOverrideProps(overrides, "BusinessAddress")}
      ></TextField>
      <TextField
        label="Business city"
        isRequired={false}
        isReadOnly={false}
        value={BusinessCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity: value,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessCity ?? value;
          }
          if (errors.BusinessCity?.hasError) {
            runValidationTasks("BusinessCity", value);
          }
          setBusinessCity(value);
        }}
        onBlur={() => runValidationTasks("BusinessCity", BusinessCity)}
        errorMessage={errors.BusinessCity?.errorMessage}
        hasError={errors.BusinessCity?.hasError}
        {...getOverrideProps(overrides, "BusinessCity")}
      ></TextField>
      <TextField
        label="Business state"
        isRequired={false}
        isReadOnly={false}
        value={BusinessState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState: value,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessState ?? value;
          }
          if (errors.BusinessState?.hasError) {
            runValidationTasks("BusinessState", value);
          }
          setBusinessState(value);
        }}
        onBlur={() => runValidationTasks("BusinessState", BusinessState)}
        errorMessage={errors.BusinessState?.errorMessage}
        hasError={errors.BusinessState?.hasError}
        {...getOverrideProps(overrides, "BusinessState")}
      ></TextField>
      <TextField
        label="Business zip code"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={BusinessZipCode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode: value,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessZipCode ?? value;
          }
          if (errors.BusinessZipCode?.hasError) {
            runValidationTasks("BusinessZipCode", value);
          }
          setBusinessZipCode(value);
        }}
        onBlur={() => runValidationTasks("BusinessZipCode", BusinessZipCode)}
        errorMessage={errors.BusinessZipCode?.errorMessage}
        hasError={errors.BusinessZipCode?.hasError}
        {...getOverrideProps(overrides, "BusinessZipCode")}
      ></TextField>
      <TextField
        label="Business phone number"
        isRequired={false}
        isReadOnly={false}
        value={BusinessPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber: value,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessPhoneNumber ?? value;
          }
          if (errors.BusinessPhoneNumber?.hasError) {
            runValidationTasks("BusinessPhoneNumber", value);
          }
          setBusinessPhoneNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("BusinessPhoneNumber", BusinessPhoneNumber)
        }
        errorMessage={errors.BusinessPhoneNumber?.errorMessage}
        hasError={errors.BusinessPhoneNumber?.hasError}
        {...getOverrideProps(overrides, "BusinessPhoneNumber")}
      ></TextField>
      <TextField
        label="Business website"
        isRequired={false}
        isReadOnly={false}
        value={BusinessWebsite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite: value,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.BusinessWebsite ?? value;
          }
          if (errors.BusinessWebsite?.hasError) {
            runValidationTasks("BusinessWebsite", value);
          }
          setBusinessWebsite(value);
        }}
        onBlur={() => runValidationTasks("BusinessWebsite", BusinessWebsite)}
        errorMessage={errors.BusinessWebsite?.errorMessage}
        hasError={errors.BusinessWebsite?.hasError}
        {...getOverrideProps(overrides, "BusinessWebsite")}
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
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator: value,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
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
        label="Organization employee"
        defaultChecked={false}
        isDisabled={false}
        isChecked={OrganizationEmployee}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee: value,
              Department,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.OrganizationEmployee ?? value;
          }
          if (errors.OrganizationEmployee?.hasError) {
            runValidationTasks("OrganizationEmployee", value);
          }
          setOrganizationEmployee(value);
        }}
        onBlur={() =>
          runValidationTasks("OrganizationEmployee", OrganizationEmployee)
        }
        errorMessage={errors.OrganizationEmployee?.errorMessage}
        hasError={errors.OrganizationEmployee?.hasError}
        {...getOverrideProps(overrides, "OrganizationEmployee")}
      ></SwitchField>
      <TextField
        label="Department"
        isRequired={false}
        isReadOnly={false}
        value={Department}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department: value,
              Service,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.Department ?? value;
          }
          if (errors.Department?.hasError) {
            runValidationTasks("Department", value);
          }
          setDepartment(value);
        }}
        onBlur={() => runValidationTasks("Department", Department)}
        errorMessage={errors.Department?.errorMessage}
        hasError={errors.Department?.hasError}
        {...getOverrideProps(overrides, "Department")}
      ></TextField>
      <TextField
        label="Service"
        isRequired={false}
        isReadOnly={false}
        value={Service}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service: value,
              ProgramsUnit,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.Service ?? value;
          }
          if (errors.Service?.hasError) {
            runValidationTasks("Service", value);
          }
          setService(value);
        }}
        onBlur={() => runValidationTasks("Service", Service)}
        errorMessage={errors.Service?.errorMessage}
        hasError={errors.Service?.hasError}
        {...getOverrideProps(overrides, "Service")}
      ></TextField>
      <TextField
        label="Programs unit"
        isRequired={false}
        isReadOnly={false}
        value={ProgramsUnit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit: value,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.ProgramsUnit ?? value;
          }
          if (errors.ProgramsUnit?.hasError) {
            runValidationTasks("ProgramsUnit", value);
          }
          setProgramsUnit(value);
        }}
        onBlur={() => runValidationTasks("ProgramsUnit", ProgramsUnit)}
        errorMessage={errors.ProgramsUnit?.errorMessage}
        hasError={errors.ProgramsUnit?.hasError}
        {...getOverrideProps(overrides, "ProgramsUnit")}
      ></TextField>
      <TextField
        label="Profile type"
        isRequired={false}
        isReadOnly={false}
        value={ProfileType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              FirstName,
              LastName,
              Email,
              ProfessionalRole,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              OrganizationAdministrator,
              OrganizationEmployee,
              Department,
              Service,
              ProgramsUnit,
              ProfileType: value,
            };
            const result = onChange(modelFields);
            value = result?.ProfileType ?? value;
          }
          if (errors.ProfileType?.hasError) {
            runValidationTasks("ProfileType", value);
          }
          setProfileType(value);
        }}
        onBlur={() => runValidationTasks("ProfileType", ProfileType)}
        errorMessage={errors.ProfileType?.errorMessage}
        hasError={errors.ProfileType?.hasError}
        {...getOverrideProps(overrides, "ProfileType")}
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
