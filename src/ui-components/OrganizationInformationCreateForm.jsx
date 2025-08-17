/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createOrganizationInformation } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function OrganizationInformationCreateForm(props) {
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
    BusinessName: "",
    BusinessEIN: "",
    BusinessCountry: "",
    BusinessAddress: "",
    BusinessCity: "",
    BusinessState: "",
    BusinessZipCode: "",
    BusinessPhoneNumber: "",
    BusinessWebsite: "",
    Departments: [],
    ProgramsUnits: [],
    Services: [],
    clientsServed: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
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
  const [Departments, setDepartments] = React.useState(
    initialValues.Departments
  );
  const [ProgramsUnits, setProgramsUnits] = React.useState(
    initialValues.ProgramsUnits
  );
  const [Services, setServices] = React.useState(initialValues.Services);
  const [clientsServed, setClientsServed] = React.useState(
    initialValues.clientsServed
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setBusinessName(initialValues.BusinessName);
    setBusinessEIN(initialValues.BusinessEIN);
    setBusinessCountry(initialValues.BusinessCountry);
    setBusinessAddress(initialValues.BusinessAddress);
    setBusinessCity(initialValues.BusinessCity);
    setBusinessState(initialValues.BusinessState);
    setBusinessZipCode(initialValues.BusinessZipCode);
    setBusinessPhoneNumber(initialValues.BusinessPhoneNumber);
    setBusinessWebsite(initialValues.BusinessWebsite);
    setDepartments(initialValues.Departments);
    setCurrentDepartmentsValue("");
    setProgramsUnits(initialValues.ProgramsUnits);
    setCurrentProgramsUnitsValue("");
    setServices(initialValues.Services);
    setCurrentServicesValue("");
    setClientsServed(initialValues.clientsServed);
    setErrors({});
  };
  const [currentDepartmentsValue, setCurrentDepartmentsValue] =
    React.useState("");
  const DepartmentsRef = React.createRef();
  const [currentProgramsUnitsValue, setCurrentProgramsUnitsValue] =
    React.useState("");
  const ProgramsUnitsRef = React.createRef();
  const [currentServicesValue, setCurrentServicesValue] = React.useState("");
  const ServicesRef = React.createRef();
  const validations = {
    userId: [{ type: "Required" }],
    BusinessName: [],
    BusinessEIN: [],
    BusinessCountry: [],
    BusinessAddress: [],
    BusinessCity: [],
    BusinessState: [],
    BusinessZipCode: [],
    BusinessPhoneNumber: [],
    BusinessWebsite: [],
    Departments: [],
    ProgramsUnits: [],
    Services: [],
    clientsServed: [],
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
          BusinessName,
          BusinessEIN,
          BusinessCountry,
          BusinessAddress,
          BusinessCity,
          BusinessState,
          BusinessZipCode,
          BusinessPhoneNumber,
          BusinessWebsite,
          Departments,
          ProgramsUnits,
          Services,
          clientsServed,
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
            query: createOrganizationInformation.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "OrganizationInformationCreateForm")}
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
        label="Business name"
        isRequired={false}
        isReadOnly={false}
        value={BusinessName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              BusinessName: value,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN: value,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry: value,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress: value,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity: value,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState: value,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode: value,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber: value,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite: value,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userId,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments: values,
              ProgramsUnits,
              Services,
              clientsServed,
            };
            const result = onChange(modelFields);
            values = result?.Departments ?? values;
          }
          setDepartments(values);
          setCurrentDepartmentsValue("");
        }}
        currentFieldValue={currentDepartmentsValue}
        label={"Departments"}
        items={Departments}
        hasError={errors?.Departments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Departments", currentDepartmentsValue)
        }
        errorMessage={errors?.Departments?.errorMessage}
        setFieldValue={setCurrentDepartmentsValue}
        inputFieldRef={DepartmentsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Departments"
          isRequired={false}
          isReadOnly={false}
          value={currentDepartmentsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Departments?.hasError) {
              runValidationTasks("Departments", value);
            }
            setCurrentDepartmentsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("Departments", currentDepartmentsValue)
          }
          errorMessage={errors.Departments?.errorMessage}
          hasError={errors.Departments?.hasError}
          ref={DepartmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Departments")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userId,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits: values,
              Services,
              clientsServed,
            };
            const result = onChange(modelFields);
            values = result?.ProgramsUnits ?? values;
          }
          setProgramsUnits(values);
          setCurrentProgramsUnitsValue("");
        }}
        currentFieldValue={currentProgramsUnitsValue}
        label={"Programs units"}
        items={ProgramsUnits}
        hasError={errors?.ProgramsUnits?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("ProgramsUnits", currentProgramsUnitsValue)
        }
        errorMessage={errors?.ProgramsUnits?.errorMessage}
        setFieldValue={setCurrentProgramsUnitsValue}
        inputFieldRef={ProgramsUnitsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Programs units"
          isRequired={false}
          isReadOnly={false}
          value={currentProgramsUnitsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ProgramsUnits?.hasError) {
              runValidationTasks("ProgramsUnits", value);
            }
            setCurrentProgramsUnitsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("ProgramsUnits", currentProgramsUnitsValue)
          }
          errorMessage={errors.ProgramsUnits?.errorMessage}
          hasError={errors.ProgramsUnits?.hasError}
          ref={ProgramsUnitsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ProgramsUnits")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userId,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services: values,
              clientsServed,
            };
            const result = onChange(modelFields);
            values = result?.Services ?? values;
          }
          setServices(values);
          setCurrentServicesValue("");
        }}
        currentFieldValue={currentServicesValue}
        label={"Services"}
        items={Services}
        hasError={errors?.Services?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Services", currentServicesValue)
        }
        errorMessage={errors?.Services?.errorMessage}
        setFieldValue={setCurrentServicesValue}
        inputFieldRef={ServicesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Services"
          isRequired={false}
          isReadOnly={false}
          value={currentServicesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Services?.hasError) {
              runValidationTasks("Services", value);
            }
            setCurrentServicesValue(value);
          }}
          onBlur={() => runValidationTasks("Services", currentServicesValue)}
          errorMessage={errors.Services?.errorMessage}
          hasError={errors.Services?.hasError}
          ref={ServicesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Services")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Clients served"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={clientsServed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              BusinessName,
              BusinessEIN,
              BusinessCountry,
              BusinessAddress,
              BusinessCity,
              BusinessState,
              BusinessZipCode,
              BusinessPhoneNumber,
              BusinessWebsite,
              Departments,
              ProgramsUnits,
              Services,
              clientsServed: value,
            };
            const result = onChange(modelFields);
            value = result?.clientsServed ?? value;
          }
          if (errors.clientsServed?.hasError) {
            runValidationTasks("clientsServed", value);
          }
          setClientsServed(value);
        }}
        onBlur={() => runValidationTasks("clientsServed", clientsServed)}
        errorMessage={errors.clientsServed?.errorMessage}
        hasError={errors.clientsServed?.hasError}
        {...getOverrideProps(overrides, "clientsServed")}
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
