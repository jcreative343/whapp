/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SliderField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTrackPlan } from "../../graphql/mutations";
const client = generateClient();
export default function TrackPlan(props) {
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
    CompletedDate: "",
    CompletedTime: "",
    Action: "",
    Frequency: "",
    ActionNote: "",
    Update1Points: 0,
    Update1Note: "",
    Update1Date: "",
    Update2Points: 0,
    Update2Note: "",
    Update2Date: "",
    Update3Points: 0,
    Update3Note: "",
    Update3Date: "",
    Update4Points: 0,
    Update4Note: "",
    Update4Date: "",
    Update5Points: 0,
    Update5Note: "",
    Update5Date: "",
    Update6Points: 0,
    Update6Note: "",
    Update6Date: "",
    Update7Points: 0,
    Update7Note: "",
    Update7Date: "",
    Update8Points: 0,
    Update8Note: "",
    Update8Date: "",
  };
  const [CompletedDate, setCompletedDate] = React.useState(
    initialValues.CompletedDate
  );
  const [CompletedTime, setCompletedTime] = React.useState(
    initialValues.CompletedTime
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompletedDate(initialValues.CompletedDate);
    setCompletedTime(initialValues.CompletedTime);
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
    setErrors({});
  };
  const validations = {
    CompletedDate: [],
    CompletedTime: [],
    Action: [],
    Frequency: [],
    ActionNote: [],
    Update1Points: [],
    Update1Note: [],
    Update1Date: [{ type: "Required" }],
    Update2Points: [],
    Update2Note: [],
    Update2Date: [{ type: "Required" }],
    Update3Points: [],
    Update3Note: [],
    Update3Date: [{ type: "Required" }],
    Update4Points: [],
    Update4Note: [],
    Update4Date: [{ type: "Required" }],
    Update5Points: [],
    Update5Note: [],
    Update5Date: [{ type: "Required" }],
    Update6Points: [],
    Update6Note: [],
    Update6Date: [{ type: "Required" }],
    Update7Points: [],
    Update7Note: [],
    Update7Date: [{ type: "Required" }],
    Update8Points: [],
    Update8Note: [],
    Update8Date: [{ type: "Required" }],
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
          CompletedDate,
          CompletedTime,
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
      {...getOverrideProps(overrides, "TrackPlan")}
      {...rest}
    >
      <TextField
        label="Date Completed"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={CompletedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate: value,
              CompletedTime,
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
        label="Time Completed"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={CompletedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime: value,
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
        label="Action"
        isRequired={false}
        isReadOnly={false}
        value={Action}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
              CompletedDate,
              CompletedTime,
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
        label="Action Note"
        isRequired={false}
        isReadOnly={false}
        value={ActionNote}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        children="UPDATE 1"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update1Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update1Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Heading
        children="UPDATE 2"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update2Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update2Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Heading
        children="UPDATE 3"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update3Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update3Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Divider>
      <Heading
        children="UPDATE 4"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update4Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 4"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update4Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement14")}
      ></Divider>
      <Heading
        children="UPDATE 5"
        {...getOverrideProps(overrides, "SectionalElement15")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update5Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 5"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update5Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Divider>
      <Heading
        children="UPDATE 6"
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update6Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 6"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update6Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Divider>
      <Heading
        children="UPDATE 7"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update7Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 7"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update7Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Divider>
      <Heading
        children="UPDATE 8"
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Heading>
      <SliderField
        label="How do you feel you did this week on this action?"
        isDisabled={false}
        isRequired={false}
        value={Update8Points}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></SliderField>
      <TextAreaField
        label="Note for Update 8"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
      ></TextAreaField>
      <TextField
        label="Updated on"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={Update8Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
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
