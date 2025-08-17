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
import { createTrackPlan } from "../graphql/mutations";
const client = generateClient();
export default function TrackPlanCreateForm(props) {
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
    CompletedDate: "",
    CompletedTime: "",
    ActionDomain: "",
    ActionQuestion: "",
    Action: "",
    Frequency: "",
    ActionNote: "",
    Update1Points: "",
    Update1Note: "",
    Update1Date: "",
    Update2Points: "",
    Update2Note: "",
    Update2Date: "",
    Update3Points: "",
    Update3Note: "",
    Update3Date: "",
    Update4Points: "",
    Update4Note: "",
    Update4Date: "",
    Update5Points: "",
    Update5Note: "",
    Update5Date: "",
    Update6Points: "",
    Update6Note: "",
    Update6Date: "",
    Update7Points: "",
    Update7Note: "",
    Update7Date: "",
    Update8Points: "",
    Update8Note: "",
    Update8Date: "",
    Percentage: "",
    Discontinued: false,
    DiscontinuedDate: "",
    Successful: false,
    SuccessfulDate: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [CompletedDate, setCompletedDate] = React.useState(
    initialValues.CompletedDate
  );
  const [CompletedTime, setCompletedTime] = React.useState(
    initialValues.CompletedTime
  );
  const [ActionDomain, setActionDomain] = React.useState(
    initialValues.ActionDomain
  );
  const [ActionQuestion, setActionQuestion] = React.useState(
    initialValues.ActionQuestion
  );
  const [Action, setAction] = React.useState(initialValues.Action);
  const [Frequency, setFrequency] = React.useState(initialValues.Frequency);
  const [ActionNote, setActionNote] = React.useState(initialValues.ActionNote);
  const [Update1Points, setUpdate1Points] = React.useState(
    initialValues.Update1Points
  );
  const [Update1Note, setUpdate1Note] = React.useState(
    initialValues.Update1Note
  );
  const [Update1Date, setUpdate1Date] = React.useState(
    initialValues.Update1Date
  );
  const [Update2Points, setUpdate2Points] = React.useState(
    initialValues.Update2Points
  );
  const [Update2Note, setUpdate2Note] = React.useState(
    initialValues.Update2Note
  );
  const [Update2Date, setUpdate2Date] = React.useState(
    initialValues.Update2Date
  );
  const [Update3Points, setUpdate3Points] = React.useState(
    initialValues.Update3Points
  );
  const [Update3Note, setUpdate3Note] = React.useState(
    initialValues.Update3Note
  );
  const [Update3Date, setUpdate3Date] = React.useState(
    initialValues.Update3Date
  );
  const [Update4Points, setUpdate4Points] = React.useState(
    initialValues.Update4Points
  );
  const [Update4Note, setUpdate4Note] = React.useState(
    initialValues.Update4Note
  );
  const [Update4Date, setUpdate4Date] = React.useState(
    initialValues.Update4Date
  );
  const [Update5Points, setUpdate5Points] = React.useState(
    initialValues.Update5Points
  );
  const [Update5Note, setUpdate5Note] = React.useState(
    initialValues.Update5Note
  );
  const [Update5Date, setUpdate5Date] = React.useState(
    initialValues.Update5Date
  );
  const [Update6Points, setUpdate6Points] = React.useState(
    initialValues.Update6Points
  );
  const [Update6Note, setUpdate6Note] = React.useState(
    initialValues.Update6Note
  );
  const [Update6Date, setUpdate6Date] = React.useState(
    initialValues.Update6Date
  );
  const [Update7Points, setUpdate7Points] = React.useState(
    initialValues.Update7Points
  );
  const [Update7Note, setUpdate7Note] = React.useState(
    initialValues.Update7Note
  );
  const [Update7Date, setUpdate7Date] = React.useState(
    initialValues.Update7Date
  );
  const [Update8Points, setUpdate8Points] = React.useState(
    initialValues.Update8Points
  );
  const [Update8Note, setUpdate8Note] = React.useState(
    initialValues.Update8Note
  );
  const [Update8Date, setUpdate8Date] = React.useState(
    initialValues.Update8Date
  );
  const [Percentage, setPercentage] = React.useState(initialValues.Percentage);
  const [Discontinued, setDiscontinued] = React.useState(
    initialValues.Discontinued
  );
  const [DiscontinuedDate, setDiscontinuedDate] = React.useState(
    initialValues.DiscontinuedDate
  );
  const [Successful, setSuccessful] = React.useState(initialValues.Successful);
  const [SuccessfulDate, setSuccessfulDate] = React.useState(
    initialValues.SuccessfulDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setCompletedDate(initialValues.CompletedDate);
    setCompletedTime(initialValues.CompletedTime);
    setActionDomain(initialValues.ActionDomain);
    setActionQuestion(initialValues.ActionQuestion);
    setAction(initialValues.Action);
    setFrequency(initialValues.Frequency);
    setActionNote(initialValues.ActionNote);
    setUpdate1Points(initialValues.Update1Points);
    setUpdate1Note(initialValues.Update1Note);
    setUpdate1Date(initialValues.Update1Date);
    setUpdate2Points(initialValues.Update2Points);
    setUpdate2Note(initialValues.Update2Note);
    setUpdate2Date(initialValues.Update2Date);
    setUpdate3Points(initialValues.Update3Points);
    setUpdate3Note(initialValues.Update3Note);
    setUpdate3Date(initialValues.Update3Date);
    setUpdate4Points(initialValues.Update4Points);
    setUpdate4Note(initialValues.Update4Note);
    setUpdate4Date(initialValues.Update4Date);
    setUpdate5Points(initialValues.Update5Points);
    setUpdate5Note(initialValues.Update5Note);
    setUpdate5Date(initialValues.Update5Date);
    setUpdate6Points(initialValues.Update6Points);
    setUpdate6Note(initialValues.Update6Note);
    setUpdate6Date(initialValues.Update6Date);
    setUpdate7Points(initialValues.Update7Points);
    setUpdate7Note(initialValues.Update7Note);
    setUpdate7Date(initialValues.Update7Date);
    setUpdate8Points(initialValues.Update8Points);
    setUpdate8Note(initialValues.Update8Note);
    setUpdate8Date(initialValues.Update8Date);
    setPercentage(initialValues.Percentage);
    setDiscontinued(initialValues.Discontinued);
    setDiscontinuedDate(initialValues.DiscontinuedDate);
    setSuccessful(initialValues.Successful);
    setSuccessfulDate(initialValues.SuccessfulDate);
    setErrors({});
  };
  const validations = {
    userId: [{ type: "Required" }],
    CompletedDate: [],
    CompletedTime: [],
    ActionDomain: [],
    ActionQuestion: [],
    Action: [],
    Frequency: [],
    ActionNote: [],
    Update1Points: [],
    Update1Note: [],
    Update1Date: [],
    Update2Points: [],
    Update2Note: [],
    Update2Date: [],
    Update3Points: [],
    Update3Note: [],
    Update3Date: [],
    Update4Points: [],
    Update4Note: [],
    Update4Date: [],
    Update5Points: [],
    Update5Note: [],
    Update5Date: [],
    Update6Points: [],
    Update6Note: [],
    Update6Date: [],
    Update7Points: [],
    Update7Note: [],
    Update7Date: [],
    Update8Points: [],
    Update8Note: [],
    Update8Date: [],
    Percentage: [],
    Discontinued: [],
    DiscontinuedDate: [],
    Successful: [],
    SuccessfulDate: [],
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
          CompletedDate,
          CompletedTime,
          ActionDomain,
          ActionQuestion,
          Action,
          Frequency,
          ActionNote,
          Update1Points,
          Update1Note,
          Update1Date,
          Update2Points,
          Update2Note,
          Update2Date,
          Update3Points,
          Update3Note,
          Update3Date,
          Update4Points,
          Update4Note,
          Update4Date,
          Update5Points,
          Update5Note,
          Update5Date,
          Update6Points,
          Update6Note,
          Update6Date,
          Update7Points,
          Update7Note,
          Update7Date,
          Update8Points,
          Update8Note,
          Update8Date,
          Percentage,
          Discontinued,
          DiscontinuedDate,
          Successful,
          SuccessfulDate,
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
            query: createTrackPlan.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TrackPlanCreateForm")}
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
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
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
        label="Completed date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={CompletedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate: value,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.CompletedDate ?? value;
          }
          if (errors.CompletedDate?.hasError) {
            runValidationTasks("CompletedDate", value);
          }
          setCompletedDate(value);
        }}
        onBlur={() => runValidationTasks("CompletedDate", CompletedDate)}
        errorMessage={errors.CompletedDate?.errorMessage}
        hasError={errors.CompletedDate?.hasError}
        {...getOverrideProps(overrides, "CompletedDate")}
      ></TextField>
      <TextField
        label="Completed time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={CompletedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime: value,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.CompletedTime ?? value;
          }
          if (errors.CompletedTime?.hasError) {
            runValidationTasks("CompletedTime", value);
          }
          setCompletedTime(value);
        }}
        onBlur={() => runValidationTasks("CompletedTime", CompletedTime)}
        errorMessage={errors.CompletedTime?.errorMessage}
        hasError={errors.CompletedTime?.hasError}
        {...getOverrideProps(overrides, "CompletedTime")}
      ></TextField>
      <TextField
        label="Action domain"
        isRequired={false}
        isReadOnly={false}
        value={ActionDomain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain: value,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.ActionDomain ?? value;
          }
          if (errors.ActionDomain?.hasError) {
            runValidationTasks("ActionDomain", value);
          }
          setActionDomain(value);
        }}
        onBlur={() => runValidationTasks("ActionDomain", ActionDomain)}
        errorMessage={errors.ActionDomain?.errorMessage}
        hasError={errors.ActionDomain?.hasError}
        {...getOverrideProps(overrides, "ActionDomain")}
      ></TextField>
      <TextField
        label="Action question"
        isRequired={false}
        isReadOnly={false}
        value={ActionQuestion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion: value,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.ActionQuestion ?? value;
          }
          if (errors.ActionQuestion?.hasError) {
            runValidationTasks("ActionQuestion", value);
          }
          setActionQuestion(value);
        }}
        onBlur={() => runValidationTasks("ActionQuestion", ActionQuestion)}
        errorMessage={errors.ActionQuestion?.errorMessage}
        hasError={errors.ActionQuestion?.hasError}
        {...getOverrideProps(overrides, "ActionQuestion")}
      ></TextField>
      <TextField
        label="Action"
        isRequired={false}
        isReadOnly={false}
        value={Action}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action: value,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Action ?? value;
          }
          if (errors.Action?.hasError) {
            runValidationTasks("Action", value);
          }
          setAction(value);
        }}
        onBlur={() => runValidationTasks("Action", Action)}
        errorMessage={errors.Action?.errorMessage}
        hasError={errors.Action?.hasError}
        {...getOverrideProps(overrides, "Action")}
      ></TextField>
      <TextField
        label="Frequency"
        isRequired={false}
        isReadOnly={false}
        value={Frequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency: value,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Frequency ?? value;
          }
          if (errors.Frequency?.hasError) {
            runValidationTasks("Frequency", value);
          }
          setFrequency(value);
        }}
        onBlur={() => runValidationTasks("Frequency", Frequency)}
        errorMessage={errors.Frequency?.errorMessage}
        hasError={errors.Frequency?.hasError}
        {...getOverrideProps(overrides, "Frequency")}
      ></TextField>
      <TextField
        label="Action note"
        isRequired={false}
        isReadOnly={false}
        value={ActionNote}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote: value,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.ActionNote ?? value;
          }
          if (errors.ActionNote?.hasError) {
            runValidationTasks("ActionNote", value);
          }
          setActionNote(value);
        }}
        onBlur={() => runValidationTasks("ActionNote", ActionNote)}
        errorMessage={errors.ActionNote?.errorMessage}
        hasError={errors.ActionNote?.hasError}
        {...getOverrideProps(overrides, "ActionNote")}
      ></TextField>
      <TextField
        label="Update1 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update1Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points: value,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update1Points ?? value;
          }
          if (errors.Update1Points?.hasError) {
            runValidationTasks("Update1Points", value);
          }
          setUpdate1Points(value);
        }}
        onBlur={() => runValidationTasks("Update1Points", Update1Points)}
        errorMessage={errors.Update1Points?.errorMessage}
        hasError={errors.Update1Points?.hasError}
        {...getOverrideProps(overrides, "Update1Points")}
      ></TextField>
      <TextField
        label="Update1 note"
        isRequired={false}
        isReadOnly={false}
        value={Update1Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note: value,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update1Note ?? value;
          }
          if (errors.Update1Note?.hasError) {
            runValidationTasks("Update1Note", value);
          }
          setUpdate1Note(value);
        }}
        onBlur={() => runValidationTasks("Update1Note", Update1Note)}
        errorMessage={errors.Update1Note?.errorMessage}
        hasError={errors.Update1Note?.hasError}
        {...getOverrideProps(overrides, "Update1Note")}
      ></TextField>
      <TextField
        label="Update1 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update1Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date: value,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update1Date ?? value;
          }
          if (errors.Update1Date?.hasError) {
            runValidationTasks("Update1Date", value);
          }
          setUpdate1Date(value);
        }}
        onBlur={() => runValidationTasks("Update1Date", Update1Date)}
        errorMessage={errors.Update1Date?.errorMessage}
        hasError={errors.Update1Date?.hasError}
        {...getOverrideProps(overrides, "Update1Date")}
      ></TextField>
      <TextField
        label="Update2 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update2Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points: value,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update2Points ?? value;
          }
          if (errors.Update2Points?.hasError) {
            runValidationTasks("Update2Points", value);
          }
          setUpdate2Points(value);
        }}
        onBlur={() => runValidationTasks("Update2Points", Update2Points)}
        errorMessage={errors.Update2Points?.errorMessage}
        hasError={errors.Update2Points?.hasError}
        {...getOverrideProps(overrides, "Update2Points")}
      ></TextField>
      <TextField
        label="Update2 note"
        isRequired={false}
        isReadOnly={false}
        value={Update2Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note: value,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update2Note ?? value;
          }
          if (errors.Update2Note?.hasError) {
            runValidationTasks("Update2Note", value);
          }
          setUpdate2Note(value);
        }}
        onBlur={() => runValidationTasks("Update2Note", Update2Note)}
        errorMessage={errors.Update2Note?.errorMessage}
        hasError={errors.Update2Note?.hasError}
        {...getOverrideProps(overrides, "Update2Note")}
      ></TextField>
      <TextField
        label="Update2 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update2Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date: value,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update2Date ?? value;
          }
          if (errors.Update2Date?.hasError) {
            runValidationTasks("Update2Date", value);
          }
          setUpdate2Date(value);
        }}
        onBlur={() => runValidationTasks("Update2Date", Update2Date)}
        errorMessage={errors.Update2Date?.errorMessage}
        hasError={errors.Update2Date?.hasError}
        {...getOverrideProps(overrides, "Update2Date")}
      ></TextField>
      <TextField
        label="Update3 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update3Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points: value,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update3Points ?? value;
          }
          if (errors.Update3Points?.hasError) {
            runValidationTasks("Update3Points", value);
          }
          setUpdate3Points(value);
        }}
        onBlur={() => runValidationTasks("Update3Points", Update3Points)}
        errorMessage={errors.Update3Points?.errorMessage}
        hasError={errors.Update3Points?.hasError}
        {...getOverrideProps(overrides, "Update3Points")}
      ></TextField>
      <TextField
        label="Update3 note"
        isRequired={false}
        isReadOnly={false}
        value={Update3Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note: value,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update3Note ?? value;
          }
          if (errors.Update3Note?.hasError) {
            runValidationTasks("Update3Note", value);
          }
          setUpdate3Note(value);
        }}
        onBlur={() => runValidationTasks("Update3Note", Update3Note)}
        errorMessage={errors.Update3Note?.errorMessage}
        hasError={errors.Update3Note?.hasError}
        {...getOverrideProps(overrides, "Update3Note")}
      ></TextField>
      <TextField
        label="Update3 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update3Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date: value,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update3Date ?? value;
          }
          if (errors.Update3Date?.hasError) {
            runValidationTasks("Update3Date", value);
          }
          setUpdate3Date(value);
        }}
        onBlur={() => runValidationTasks("Update3Date", Update3Date)}
        errorMessage={errors.Update3Date?.errorMessage}
        hasError={errors.Update3Date?.hasError}
        {...getOverrideProps(overrides, "Update3Date")}
      ></TextField>
      <TextField
        label="Update4 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update4Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points: value,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update4Points ?? value;
          }
          if (errors.Update4Points?.hasError) {
            runValidationTasks("Update4Points", value);
          }
          setUpdate4Points(value);
        }}
        onBlur={() => runValidationTasks("Update4Points", Update4Points)}
        errorMessage={errors.Update4Points?.errorMessage}
        hasError={errors.Update4Points?.hasError}
        {...getOverrideProps(overrides, "Update4Points")}
      ></TextField>
      <TextField
        label="Update4 note"
        isRequired={false}
        isReadOnly={false}
        value={Update4Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note: value,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update4Note ?? value;
          }
          if (errors.Update4Note?.hasError) {
            runValidationTasks("Update4Note", value);
          }
          setUpdate4Note(value);
        }}
        onBlur={() => runValidationTasks("Update4Note", Update4Note)}
        errorMessage={errors.Update4Note?.errorMessage}
        hasError={errors.Update4Note?.hasError}
        {...getOverrideProps(overrides, "Update4Note")}
      ></TextField>
      <TextField
        label="Update4 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update4Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date: value,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update4Date ?? value;
          }
          if (errors.Update4Date?.hasError) {
            runValidationTasks("Update4Date", value);
          }
          setUpdate4Date(value);
        }}
        onBlur={() => runValidationTasks("Update4Date", Update4Date)}
        errorMessage={errors.Update4Date?.errorMessage}
        hasError={errors.Update4Date?.hasError}
        {...getOverrideProps(overrides, "Update4Date")}
      ></TextField>
      <TextField
        label="Update5 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update5Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points: value,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update5Points ?? value;
          }
          if (errors.Update5Points?.hasError) {
            runValidationTasks("Update5Points", value);
          }
          setUpdate5Points(value);
        }}
        onBlur={() => runValidationTasks("Update5Points", Update5Points)}
        errorMessage={errors.Update5Points?.errorMessage}
        hasError={errors.Update5Points?.hasError}
        {...getOverrideProps(overrides, "Update5Points")}
      ></TextField>
      <TextField
        label="Update5 note"
        isRequired={false}
        isReadOnly={false}
        value={Update5Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note: value,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update5Note ?? value;
          }
          if (errors.Update5Note?.hasError) {
            runValidationTasks("Update5Note", value);
          }
          setUpdate5Note(value);
        }}
        onBlur={() => runValidationTasks("Update5Note", Update5Note)}
        errorMessage={errors.Update5Note?.errorMessage}
        hasError={errors.Update5Note?.hasError}
        {...getOverrideProps(overrides, "Update5Note")}
      ></TextField>
      <TextField
        label="Update5 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update5Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date: value,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update5Date ?? value;
          }
          if (errors.Update5Date?.hasError) {
            runValidationTasks("Update5Date", value);
          }
          setUpdate5Date(value);
        }}
        onBlur={() => runValidationTasks("Update5Date", Update5Date)}
        errorMessage={errors.Update5Date?.errorMessage}
        hasError={errors.Update5Date?.hasError}
        {...getOverrideProps(overrides, "Update5Date")}
      ></TextField>
      <TextField
        label="Update6 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update6Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points: value,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update6Points ?? value;
          }
          if (errors.Update6Points?.hasError) {
            runValidationTasks("Update6Points", value);
          }
          setUpdate6Points(value);
        }}
        onBlur={() => runValidationTasks("Update6Points", Update6Points)}
        errorMessage={errors.Update6Points?.errorMessage}
        hasError={errors.Update6Points?.hasError}
        {...getOverrideProps(overrides, "Update6Points")}
      ></TextField>
      <TextField
        label="Update6 note"
        isRequired={false}
        isReadOnly={false}
        value={Update6Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note: value,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update6Note ?? value;
          }
          if (errors.Update6Note?.hasError) {
            runValidationTasks("Update6Note", value);
          }
          setUpdate6Note(value);
        }}
        onBlur={() => runValidationTasks("Update6Note", Update6Note)}
        errorMessage={errors.Update6Note?.errorMessage}
        hasError={errors.Update6Note?.hasError}
        {...getOverrideProps(overrides, "Update6Note")}
      ></TextField>
      <TextField
        label="Update6 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update6Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date: value,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update6Date ?? value;
          }
          if (errors.Update6Date?.hasError) {
            runValidationTasks("Update6Date", value);
          }
          setUpdate6Date(value);
        }}
        onBlur={() => runValidationTasks("Update6Date", Update6Date)}
        errorMessage={errors.Update6Date?.errorMessage}
        hasError={errors.Update6Date?.hasError}
        {...getOverrideProps(overrides, "Update6Date")}
      ></TextField>
      <TextField
        label="Update7 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update7Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points: value,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update7Points ?? value;
          }
          if (errors.Update7Points?.hasError) {
            runValidationTasks("Update7Points", value);
          }
          setUpdate7Points(value);
        }}
        onBlur={() => runValidationTasks("Update7Points", Update7Points)}
        errorMessage={errors.Update7Points?.errorMessage}
        hasError={errors.Update7Points?.hasError}
        {...getOverrideProps(overrides, "Update7Points")}
      ></TextField>
      <TextField
        label="Update7 note"
        isRequired={false}
        isReadOnly={false}
        value={Update7Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note: value,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update7Note ?? value;
          }
          if (errors.Update7Note?.hasError) {
            runValidationTasks("Update7Note", value);
          }
          setUpdate7Note(value);
        }}
        onBlur={() => runValidationTasks("Update7Note", Update7Note)}
        errorMessage={errors.Update7Note?.errorMessage}
        hasError={errors.Update7Note?.hasError}
        {...getOverrideProps(overrides, "Update7Note")}
      ></TextField>
      <TextField
        label="Update7 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update7Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date: value,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update7Date ?? value;
          }
          if (errors.Update7Date?.hasError) {
            runValidationTasks("Update7Date", value);
          }
          setUpdate7Date(value);
        }}
        onBlur={() => runValidationTasks("Update7Date", Update7Date)}
        errorMessage={errors.Update7Date?.errorMessage}
        hasError={errors.Update7Date?.hasError}
        {...getOverrideProps(overrides, "Update7Date")}
      ></TextField>
      <TextField
        label="Update8 points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Update8Points}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points: value,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update8Points ?? value;
          }
          if (errors.Update8Points?.hasError) {
            runValidationTasks("Update8Points", value);
          }
          setUpdate8Points(value);
        }}
        onBlur={() => runValidationTasks("Update8Points", Update8Points)}
        errorMessage={errors.Update8Points?.errorMessage}
        hasError={errors.Update8Points?.hasError}
        {...getOverrideProps(overrides, "Update8Points")}
      ></TextField>
      <TextField
        label="Update8 note"
        isRequired={false}
        isReadOnly={false}
        value={Update8Note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note: value,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update8Note ?? value;
          }
          if (errors.Update8Note?.hasError) {
            runValidationTasks("Update8Note", value);
          }
          setUpdate8Note(value);
        }}
        onBlur={() => runValidationTasks("Update8Note", Update8Note)}
        errorMessage={errors.Update8Note?.errorMessage}
        hasError={errors.Update8Note?.hasError}
        {...getOverrideProps(overrides, "Update8Note")}
      ></TextField>
      <TextField
        label="Update8 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Update8Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date: value,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Update8Date ?? value;
          }
          if (errors.Update8Date?.hasError) {
            runValidationTasks("Update8Date", value);
          }
          setUpdate8Date(value);
        }}
        onBlur={() => runValidationTasks("Update8Date", Update8Date)}
        errorMessage={errors.Update8Date?.errorMessage}
        hasError={errors.Update8Date?.hasError}
        {...getOverrideProps(overrides, "Update8Date")}
      ></TextField>
      <TextField
        label="Percentage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Percentage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage: value,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Percentage ?? value;
          }
          if (errors.Percentage?.hasError) {
            runValidationTasks("Percentage", value);
          }
          setPercentage(value);
        }}
        onBlur={() => runValidationTasks("Percentage", Percentage)}
        errorMessage={errors.Percentage?.errorMessage}
        hasError={errors.Percentage?.hasError}
        {...getOverrideProps(overrides, "Percentage")}
      ></TextField>
      <SwitchField
        label="Discontinued"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Discontinued}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued: value,
              DiscontinuedDate,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Discontinued ?? value;
          }
          if (errors.Discontinued?.hasError) {
            runValidationTasks("Discontinued", value);
          }
          setDiscontinued(value);
        }}
        onBlur={() => runValidationTasks("Discontinued", Discontinued)}
        errorMessage={errors.Discontinued?.errorMessage}
        hasError={errors.Discontinued?.hasError}
        {...getOverrideProps(overrides, "Discontinued")}
      ></SwitchField>
      <TextField
        label="Discontinued date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DiscontinuedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate: value,
              Successful,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.DiscontinuedDate ?? value;
          }
          if (errors.DiscontinuedDate?.hasError) {
            runValidationTasks("DiscontinuedDate", value);
          }
          setDiscontinuedDate(value);
        }}
        onBlur={() => runValidationTasks("DiscontinuedDate", DiscontinuedDate)}
        errorMessage={errors.DiscontinuedDate?.errorMessage}
        hasError={errors.DiscontinuedDate?.hasError}
        {...getOverrideProps(overrides, "DiscontinuedDate")}
      ></TextField>
      <SwitchField
        label="Successful"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Successful}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful: value,
              SuccessfulDate,
            };
            const result = onChange(modelFields);
            value = result?.Successful ?? value;
          }
          if (errors.Successful?.hasError) {
            runValidationTasks("Successful", value);
          }
          setSuccessful(value);
        }}
        onBlur={() => runValidationTasks("Successful", Successful)}
        errorMessage={errors.Successful?.errorMessage}
        hasError={errors.Successful?.hasError}
        {...getOverrideProps(overrides, "Successful")}
      ></SwitchField>
      <TextField
        label="Successful date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={SuccessfulDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              CompletedDate,
              CompletedTime,
              ActionDomain,
              ActionQuestion,
              Action,
              Frequency,
              ActionNote,
              Update1Points,
              Update1Note,
              Update1Date,
              Update2Points,
              Update2Note,
              Update2Date,
              Update3Points,
              Update3Note,
              Update3Date,
              Update4Points,
              Update4Note,
              Update4Date,
              Update5Points,
              Update5Note,
              Update5Date,
              Update6Points,
              Update6Note,
              Update6Date,
              Update7Points,
              Update7Note,
              Update7Date,
              Update8Points,
              Update8Note,
              Update8Date,
              Percentage,
              Discontinued,
              DiscontinuedDate,
              Successful,
              SuccessfulDate: value,
            };
            const result = onChange(modelFields);
            value = result?.SuccessfulDate ?? value;
          }
          if (errors.SuccessfulDate?.hasError) {
            runValidationTasks("SuccessfulDate", value);
          }
          setSuccessfulDate(value);
        }}
        onBlur={() => runValidationTasks("SuccessfulDate", SuccessfulDate)}
        errorMessage={errors.SuccessfulDate?.errorMessage}
        hasError={errors.SuccessfulDate?.hasError}
        {...getOverrideProps(overrides, "SuccessfulDate")}
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
