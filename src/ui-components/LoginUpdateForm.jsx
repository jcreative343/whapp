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
import { getLogin } from "../graphql/queries";
import { updateLogin } from "../graphql/mutations";
const client = generateClient();
export default function LoginUpdateForm(props) {
  const {
    id: idProp,
    login: loginModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Email: "",
    Password: "",
    LoginDate: "",
    LoginTime: "",
    ProfileType: "",
  };
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Password, setPassword] = React.useState(initialValues.Password);
  const [LoginDate, setLoginDate] = React.useState(initialValues.LoginDate);
  const [LoginTime, setLoginTime] = React.useState(initialValues.LoginTime);
  const [ProfileType, setProfileType] = React.useState(
    initialValues.ProfileType
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = loginRecord
      ? { ...initialValues, ...loginRecord }
      : initialValues;
    setEmail(cleanValues.Email);
    setPassword(cleanValues.Password);
    setLoginDate(cleanValues.LoginDate);
    setLoginTime(cleanValues.LoginTime);
    setProfileType(cleanValues.ProfileType);
    setErrors({});
  };
  const [loginRecord, setLoginRecord] = React.useState(loginModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLogin.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLogin
        : loginModelProp;
      setLoginRecord(record);
    };
    queryData();
  }, [idProp, loginModelProp]);
  React.useEffect(resetStateValues, [loginRecord]);
  const validations = {
    Email: [{ type: "Email" }],
    Password: [],
    LoginDate: [],
    LoginTime: [],
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
          Email: Email ?? null,
          Password: Password ?? null,
          LoginDate: LoginDate ?? null,
          LoginTime: LoginTime ?? null,
          ProfileType: ProfileType ?? null,
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
            query: updateLogin.replaceAll("__typename", ""),
            variables: {
              input: {
                id: loginRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LoginUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email: value,
              Password,
              LoginDate,
              LoginTime,
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
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={Password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Password: value,
              LoginDate,
              LoginTime,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.Password ?? value;
          }
          if (errors.Password?.hasError) {
            runValidationTasks("Password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("Password", Password)}
        errorMessage={errors.Password?.errorMessage}
        hasError={errors.Password?.hasError}
        {...getOverrideProps(overrides, "Password")}
      ></TextField>
      <TextField
        label="Login date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={LoginDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Password,
              LoginDate: value,
              LoginTime,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.LoginDate ?? value;
          }
          if (errors.LoginDate?.hasError) {
            runValidationTasks("LoginDate", value);
          }
          setLoginDate(value);
        }}
        onBlur={() => runValidationTasks("LoginDate", LoginDate)}
        errorMessage={errors.LoginDate?.errorMessage}
        hasError={errors.LoginDate?.hasError}
        {...getOverrideProps(overrides, "LoginDate")}
      ></TextField>
      <TextField
        label="Login time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={LoginTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Email,
              Password,
              LoginDate,
              LoginTime: value,
              ProfileType,
            };
            const result = onChange(modelFields);
            value = result?.LoginTime ?? value;
          }
          if (errors.LoginTime?.hasError) {
            runValidationTasks("LoginTime", value);
          }
          setLoginTime(value);
        }}
        onBlur={() => runValidationTasks("LoginTime", LoginTime)}
        errorMessage={errors.LoginTime?.errorMessage}
        hasError={errors.LoginTime?.hasError}
        {...getOverrideProps(overrides, "LoginTime")}
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
              Email,
              Password,
              LoginDate,
              LoginTime,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || loginModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || loginModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
