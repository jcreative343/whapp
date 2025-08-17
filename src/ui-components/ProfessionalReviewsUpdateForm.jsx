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
import { getProfessionalReviews } from "../graphql/queries";
import { updateProfessionalReviews } from "../graphql/mutations";
const client = generateClient();
export default function ProfessionalReviewsUpdateForm(props) {
  const {
    id: idProp,
    professionalReviews: professionalReviewsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ReviewedId: "",
    ReviewType: "",
    ProfessionalName: "",
    ProfessionalRole: "",
    ReviewDate: "",
  };
  const [ReviewedId, setReviewedId] = React.useState(initialValues.ReviewedId);
  const [ReviewType, setReviewType] = React.useState(initialValues.ReviewType);
  const [ProfessionalName, setProfessionalName] = React.useState(
    initialValues.ProfessionalName
  );
  const [ProfessionalRole, setProfessionalRole] = React.useState(
    initialValues.ProfessionalRole
  );
  const [ReviewDate, setReviewDate] = React.useState(initialValues.ReviewDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = professionalReviewsRecord
      ? { ...initialValues, ...professionalReviewsRecord }
      : initialValues;
    setReviewedId(cleanValues.ReviewedId);
    setReviewType(cleanValues.ReviewType);
    setProfessionalName(cleanValues.ProfessionalName);
    setProfessionalRole(cleanValues.ProfessionalRole);
    setReviewDate(cleanValues.ReviewDate);
    setErrors({});
  };
  const [professionalReviewsRecord, setProfessionalReviewsRecord] =
    React.useState(professionalReviewsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProfessionalReviews.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProfessionalReviews
        : professionalReviewsModelProp;
      setProfessionalReviewsRecord(record);
    };
    queryData();
  }, [idProp, professionalReviewsModelProp]);
  React.useEffect(resetStateValues, [professionalReviewsRecord]);
  const validations = {
    ReviewedId: [{ type: "Required" }],
    ReviewType: [{ type: "Required" }],
    ProfessionalName: [{ type: "Required" }],
    ProfessionalRole: [{ type: "Required" }],
    ReviewDate: [{ type: "Required" }],
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
          ReviewedId,
          ReviewType,
          ProfessionalName,
          ProfessionalRole,
          ReviewDate,
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
            query: updateProfessionalReviews.replaceAll("__typename", ""),
            variables: {
              input: {
                id: professionalReviewsRecord.id,
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
      {...getOverrideProps(overrides, "ProfessionalReviewsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Reviewed id"
        isRequired={true}
        isReadOnly={false}
        value={ReviewedId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ReviewedId: value,
              ReviewType,
              ProfessionalName,
              ProfessionalRole,
              ReviewDate,
            };
            const result = onChange(modelFields);
            value = result?.ReviewedId ?? value;
          }
          if (errors.ReviewedId?.hasError) {
            runValidationTasks("ReviewedId", value);
          }
          setReviewedId(value);
        }}
        onBlur={() => runValidationTasks("ReviewedId", ReviewedId)}
        errorMessage={errors.ReviewedId?.errorMessage}
        hasError={errors.ReviewedId?.hasError}
        {...getOverrideProps(overrides, "ReviewedId")}
      ></TextField>
      <TextField
        label="Review type"
        isRequired={true}
        isReadOnly={false}
        value={ReviewType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ReviewedId,
              ReviewType: value,
              ProfessionalName,
              ProfessionalRole,
              ReviewDate,
            };
            const result = onChange(modelFields);
            value = result?.ReviewType ?? value;
          }
          if (errors.ReviewType?.hasError) {
            runValidationTasks("ReviewType", value);
          }
          setReviewType(value);
        }}
        onBlur={() => runValidationTasks("ReviewType", ReviewType)}
        errorMessage={errors.ReviewType?.errorMessage}
        hasError={errors.ReviewType?.hasError}
        {...getOverrideProps(overrides, "ReviewType")}
      ></TextField>
      <TextField
        label="Professional name"
        isRequired={true}
        isReadOnly={false}
        value={ProfessionalName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ReviewedId,
              ReviewType,
              ProfessionalName: value,
              ProfessionalRole,
              ReviewDate,
            };
            const result = onChange(modelFields);
            value = result?.ProfessionalName ?? value;
          }
          if (errors.ProfessionalName?.hasError) {
            runValidationTasks("ProfessionalName", value);
          }
          setProfessionalName(value);
        }}
        onBlur={() => runValidationTasks("ProfessionalName", ProfessionalName)}
        errorMessage={errors.ProfessionalName?.errorMessage}
        hasError={errors.ProfessionalName?.hasError}
        {...getOverrideProps(overrides, "ProfessionalName")}
      ></TextField>
      <TextField
        label="Professional role"
        isRequired={true}
        isReadOnly={false}
        value={ProfessionalRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ReviewedId,
              ReviewType,
              ProfessionalName,
              ProfessionalRole: value,
              ReviewDate,
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
        label="Review date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={ReviewDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ReviewedId,
              ReviewType,
              ProfessionalName,
              ProfessionalRole,
              ReviewDate: value,
            };
            const result = onChange(modelFields);
            value = result?.ReviewDate ?? value;
          }
          if (errors.ReviewDate?.hasError) {
            runValidationTasks("ReviewDate", value);
          }
          setReviewDate(value);
        }}
        onBlur={() => runValidationTasks("ReviewDate", ReviewDate)}
        errorMessage={errors.ReviewDate?.errorMessage}
        hasError={errors.ReviewDate?.hasError}
        {...getOverrideProps(overrides, "ReviewDate")}
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
          isDisabled={!(idProp || professionalReviewsModelProp)}
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
              !(idProp || professionalReviewsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
