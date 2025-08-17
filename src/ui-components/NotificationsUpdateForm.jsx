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
import { getNotifications } from "../graphql/queries";
import { updateNotifications } from "../graphql/mutations";
const client = generateClient();
export default function NotificationsUpdateForm(props) {
  const {
    id: idProp,
    notifications: notificationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    RecommedationResult: "",
    RecommedationAction: "",
    RecommedationActionFrequency: "",
    RecommedationType: "",
    RecommedationNote: "",
    RecommendationDate: "",
    SenderId: "",
    SenderFirstName: "",
    SenderLastName: "",
    SenderEmail: "",
    TargetEmail: "",
    NotificationType: "",
    StatusDate: "",
    Status: "",
  };
  const [RecommedationResult, setRecommedationResult] = React.useState(
    initialValues.RecommedationResult
  );
  const [RecommedationAction, setRecommedationAction] = React.useState(
    initialValues.RecommedationAction
  );
  const [RecommedationActionFrequency, setRecommedationActionFrequency] =
    React.useState(initialValues.RecommedationActionFrequency);
  const [RecommedationType, setRecommedationType] = React.useState(
    initialValues.RecommedationType
  );
  const [RecommedationNote, setRecommedationNote] = React.useState(
    initialValues.RecommedationNote
  );
  const [RecommendationDate, setRecommendationDate] = React.useState(
    initialValues.RecommendationDate
  );
  const [SenderId, setSenderId] = React.useState(initialValues.SenderId);
  const [SenderFirstName, setSenderFirstName] = React.useState(
    initialValues.SenderFirstName
  );
  const [SenderLastName, setSenderLastName] = React.useState(
    initialValues.SenderLastName
  );
  const [SenderEmail, setSenderEmail] = React.useState(
    initialValues.SenderEmail
  );
  const [TargetEmail, setTargetEmail] = React.useState(
    initialValues.TargetEmail
  );
  const [NotificationType, setNotificationType] = React.useState(
    initialValues.NotificationType
  );
  const [StatusDate, setStatusDate] = React.useState(initialValues.StatusDate);
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationsRecord
      ? { ...initialValues, ...notificationsRecord }
      : initialValues;
    setRecommedationResult(cleanValues.RecommedationResult);
    setRecommedationAction(cleanValues.RecommedationAction);
    setRecommedationActionFrequency(cleanValues.RecommedationActionFrequency);
    setRecommedationType(cleanValues.RecommedationType);
    setRecommedationNote(cleanValues.RecommedationNote);
    setRecommendationDate(cleanValues.RecommendationDate);
    setSenderId(cleanValues.SenderId);
    setSenderFirstName(cleanValues.SenderFirstName);
    setSenderLastName(cleanValues.SenderLastName);
    setSenderEmail(cleanValues.SenderEmail);
    setTargetEmail(cleanValues.TargetEmail);
    setNotificationType(cleanValues.NotificationType);
    setStatusDate(cleanValues.StatusDate);
    setStatus(cleanValues.Status);
    setErrors({});
  };
  const [notificationsRecord, setNotificationsRecord] = React.useState(
    notificationsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNotifications.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotifications
        : notificationsModelProp;
      setNotificationsRecord(record);
    };
    queryData();
  }, [idProp, notificationsModelProp]);
  React.useEffect(resetStateValues, [notificationsRecord]);
  const validations = {
    RecommedationResult: [],
    RecommedationAction: [],
    RecommedationActionFrequency: [],
    RecommedationType: [],
    RecommedationNote: [],
    RecommendationDate: [],
    SenderId: [{ type: "Required" }],
    SenderFirstName: [{ type: "Required" }],
    SenderLastName: [{ type: "Required" }],
    SenderEmail: [{ type: "Required" }],
    TargetEmail: [{ type: "Required" }],
    NotificationType: [{ type: "Required" }],
    StatusDate: [],
    Status: [{ type: "Required" }],
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
          RecommedationResult: RecommedationResult ?? null,
          RecommedationAction: RecommedationAction ?? null,
          RecommedationActionFrequency: RecommedationActionFrequency ?? null,
          RecommedationType: RecommedationType ?? null,
          RecommedationNote: RecommedationNote ?? null,
          RecommendationDate: RecommendationDate ?? null,
          SenderId,
          SenderFirstName,
          SenderLastName,
          SenderEmail,
          TargetEmail,
          NotificationType,
          StatusDate: StatusDate ?? null,
          Status,
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
            query: updateNotifications.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationsRecord.id,
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
      {...getOverrideProps(overrides, "NotificationsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Recommedation result"
        isRequired={false}
        isReadOnly={false}
        value={RecommedationResult}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult: value,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.RecommedationResult ?? value;
          }
          if (errors.RecommedationResult?.hasError) {
            runValidationTasks("RecommedationResult", value);
          }
          setRecommedationResult(value);
        }}
        onBlur={() =>
          runValidationTasks("RecommedationResult", RecommedationResult)
        }
        errorMessage={errors.RecommedationResult?.errorMessage}
        hasError={errors.RecommedationResult?.hasError}
        {...getOverrideProps(overrides, "RecommedationResult")}
      ></TextField>
      <TextField
        label="Recommedation action"
        isRequired={false}
        isReadOnly={false}
        value={RecommedationAction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction: value,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.RecommedationAction ?? value;
          }
          if (errors.RecommedationAction?.hasError) {
            runValidationTasks("RecommedationAction", value);
          }
          setRecommedationAction(value);
        }}
        onBlur={() =>
          runValidationTasks("RecommedationAction", RecommedationAction)
        }
        errorMessage={errors.RecommedationAction?.errorMessage}
        hasError={errors.RecommedationAction?.hasError}
        {...getOverrideProps(overrides, "RecommedationAction")}
      ></TextField>
      <TextField
        label="Recommedation action frequency"
        isRequired={false}
        isReadOnly={false}
        value={RecommedationActionFrequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency: value,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.RecommedationActionFrequency ?? value;
          }
          if (errors.RecommedationActionFrequency?.hasError) {
            runValidationTasks("RecommedationActionFrequency", value);
          }
          setRecommedationActionFrequency(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RecommedationActionFrequency",
            RecommedationActionFrequency
          )
        }
        errorMessage={errors.RecommedationActionFrequency?.errorMessage}
        hasError={errors.RecommedationActionFrequency?.hasError}
        {...getOverrideProps(overrides, "RecommedationActionFrequency")}
      ></TextField>
      <TextField
        label="Recommedation type"
        isRequired={false}
        isReadOnly={false}
        value={RecommedationType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType: value,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.RecommedationType ?? value;
          }
          if (errors.RecommedationType?.hasError) {
            runValidationTasks("RecommedationType", value);
          }
          setRecommedationType(value);
        }}
        onBlur={() =>
          runValidationTasks("RecommedationType", RecommedationType)
        }
        errorMessage={errors.RecommedationType?.errorMessage}
        hasError={errors.RecommedationType?.hasError}
        {...getOverrideProps(overrides, "RecommedationType")}
      ></TextField>
      <TextField
        label="Recommedation note"
        isRequired={false}
        isReadOnly={false}
        value={RecommedationNote}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote: value,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.RecommedationNote ?? value;
          }
          if (errors.RecommedationNote?.hasError) {
            runValidationTasks("RecommedationNote", value);
          }
          setRecommedationNote(value);
        }}
        onBlur={() =>
          runValidationTasks("RecommedationNote", RecommedationNote)
        }
        errorMessage={errors.RecommedationNote?.errorMessage}
        hasError={errors.RecommedationNote?.hasError}
        {...getOverrideProps(overrides, "RecommedationNote")}
      ></TextField>
      <TextField
        label="Recommendation date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={RecommendationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate: value,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.RecommendationDate ?? value;
          }
          if (errors.RecommendationDate?.hasError) {
            runValidationTasks("RecommendationDate", value);
          }
          setRecommendationDate(value);
        }}
        onBlur={() =>
          runValidationTasks("RecommendationDate", RecommendationDate)
        }
        errorMessage={errors.RecommendationDate?.errorMessage}
        hasError={errors.RecommendationDate?.hasError}
        {...getOverrideProps(overrides, "RecommendationDate")}
      ></TextField>
      <TextField
        label="Sender id"
        isRequired={true}
        isReadOnly={false}
        value={SenderId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId: value,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.SenderId ?? value;
          }
          if (errors.SenderId?.hasError) {
            runValidationTasks("SenderId", value);
          }
          setSenderId(value);
        }}
        onBlur={() => runValidationTasks("SenderId", SenderId)}
        errorMessage={errors.SenderId?.errorMessage}
        hasError={errors.SenderId?.hasError}
        {...getOverrideProps(overrides, "SenderId")}
      ></TextField>
      <TextField
        label="Sender first name"
        isRequired={true}
        isReadOnly={false}
        value={SenderFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName: value,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.SenderFirstName ?? value;
          }
          if (errors.SenderFirstName?.hasError) {
            runValidationTasks("SenderFirstName", value);
          }
          setSenderFirstName(value);
        }}
        onBlur={() => runValidationTasks("SenderFirstName", SenderFirstName)}
        errorMessage={errors.SenderFirstName?.errorMessage}
        hasError={errors.SenderFirstName?.hasError}
        {...getOverrideProps(overrides, "SenderFirstName")}
      ></TextField>
      <TextField
        label="Sender last name"
        isRequired={true}
        isReadOnly={false}
        value={SenderLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName: value,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.SenderLastName ?? value;
          }
          if (errors.SenderLastName?.hasError) {
            runValidationTasks("SenderLastName", value);
          }
          setSenderLastName(value);
        }}
        onBlur={() => runValidationTasks("SenderLastName", SenderLastName)}
        errorMessage={errors.SenderLastName?.errorMessage}
        hasError={errors.SenderLastName?.hasError}
        {...getOverrideProps(overrides, "SenderLastName")}
      ></TextField>
      <TextField
        label="Sender email"
        isRequired={true}
        isReadOnly={false}
        value={SenderEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail: value,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.SenderEmail ?? value;
          }
          if (errors.SenderEmail?.hasError) {
            runValidationTasks("SenderEmail", value);
          }
          setSenderEmail(value);
        }}
        onBlur={() => runValidationTasks("SenderEmail", SenderEmail)}
        errorMessage={errors.SenderEmail?.errorMessage}
        hasError={errors.SenderEmail?.hasError}
        {...getOverrideProps(overrides, "SenderEmail")}
      ></TextField>
      <TextField
        label="Target email"
        isRequired={true}
        isReadOnly={false}
        value={TargetEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail: value,
              NotificationType,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.TargetEmail ?? value;
          }
          if (errors.TargetEmail?.hasError) {
            runValidationTasks("TargetEmail", value);
          }
          setTargetEmail(value);
        }}
        onBlur={() => runValidationTasks("TargetEmail", TargetEmail)}
        errorMessage={errors.TargetEmail?.errorMessage}
        hasError={errors.TargetEmail?.hasError}
        {...getOverrideProps(overrides, "TargetEmail")}
      ></TextField>
      <TextField
        label="Notification type"
        isRequired={true}
        isReadOnly={false}
        value={NotificationType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType: value,
              StatusDate,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.NotificationType ?? value;
          }
          if (errors.NotificationType?.hasError) {
            runValidationTasks("NotificationType", value);
          }
          setNotificationType(value);
        }}
        onBlur={() => runValidationTasks("NotificationType", NotificationType)}
        errorMessage={errors.NotificationType?.errorMessage}
        hasError={errors.NotificationType?.hasError}
        {...getOverrideProps(overrides, "NotificationType")}
      ></TextField>
      <TextField
        label="Status date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={StatusDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate: value,
              Status,
            };
            const result = onChange(modelFields);
            value = result?.StatusDate ?? value;
          }
          if (errors.StatusDate?.hasError) {
            runValidationTasks("StatusDate", value);
          }
          setStatusDate(value);
        }}
        onBlur={() => runValidationTasks("StatusDate", StatusDate)}
        errorMessage={errors.StatusDate?.errorMessage}
        hasError={errors.StatusDate?.hasError}
        {...getOverrideProps(overrides, "StatusDate")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={Status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              RecommedationResult,
              RecommedationAction,
              RecommedationActionFrequency,
              RecommedationType,
              RecommedationNote,
              RecommendationDate,
              SenderId,
              SenderFirstName,
              SenderLastName,
              SenderEmail,
              TargetEmail,
              NotificationType,
              StatusDate,
              Status: value,
            };
            const result = onChange(modelFields);
            value = result?.Status ?? value;
          }
          if (errors.Status?.hasError) {
            runValidationTasks("Status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("Status", Status)}
        errorMessage={errors.Status?.errorMessage}
        hasError={errors.Status?.hasError}
        {...getOverrideProps(overrides, "Status")}
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
          isDisabled={!(idProp || notificationsModelProp)}
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
              !(idProp || notificationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
