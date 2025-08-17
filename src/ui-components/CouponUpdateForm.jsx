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
import { getCoupon } from "../graphql/queries";
import { updateCoupon } from "../graphql/mutations";
const client = generateClient();
export default function CouponUpdateForm(props) {
  const {
    id: idProp,
    coupon: couponModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    value: "",
    isActive: false,
    maxUses: "",
    timesUsed: "",
    expiresAt: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [value, setValue] = React.useState(initialValues.value);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [maxUses, setMaxUses] = React.useState(initialValues.maxUses);
  const [timesUsed, setTimesUsed] = React.useState(initialValues.timesUsed);
  const [expiresAt, setExpiresAt] = React.useState(initialValues.expiresAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = couponRecord
      ? { ...initialValues, ...couponRecord }
      : initialValues;
    setType(cleanValues.type);
    setValue(cleanValues.value);
    setIsActive(cleanValues.isActive);
    setMaxUses(cleanValues.maxUses);
    setTimesUsed(cleanValues.timesUsed);
    setExpiresAt(cleanValues.expiresAt);
    setErrors({});
  };
  const [couponRecord, setCouponRecord] = React.useState(couponModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCoupon.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCoupon
        : couponModelProp;
      setCouponRecord(record);
    };
    queryData();
  }, [idProp, couponModelProp]);
  React.useEffect(resetStateValues, [couponRecord]);
  const validations = {
    type: [{ type: "Required" }],
    value: [{ type: "Required" }],
    isActive: [{ type: "Required" }],
    maxUses: [{ type: "Required" }],
    timesUsed: [{ type: "Required" }],
    expiresAt: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          type,
          value,
          isActive,
          maxUses,
          timesUsed,
          expiresAt,
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
            query: updateCoupon.replaceAll("__typename", ""),
            variables: {
              input: {
                id: couponRecord.id,
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
      {...getOverrideProps(overrides, "CouponUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              value,
              isActive,
              maxUses,
              timesUsed,
              expiresAt,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              value: value,
              isActive,
              maxUses,
              timesUsed,
              expiresAt,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              value,
              isActive: value,
              maxUses,
              timesUsed,
              expiresAt,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <TextField
        label="Max uses"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxUses}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              value,
              isActive,
              maxUses: value,
              timesUsed,
              expiresAt,
            };
            const result = onChange(modelFields);
            value = result?.maxUses ?? value;
          }
          if (errors.maxUses?.hasError) {
            runValidationTasks("maxUses", value);
          }
          setMaxUses(value);
        }}
        onBlur={() => runValidationTasks("maxUses", maxUses)}
        errorMessage={errors.maxUses?.errorMessage}
        hasError={errors.maxUses?.hasError}
        {...getOverrideProps(overrides, "maxUses")}
      ></TextField>
      <TextField
        label="Times used"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={timesUsed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              value,
              isActive,
              maxUses,
              timesUsed: value,
              expiresAt,
            };
            const result = onChange(modelFields);
            value = result?.timesUsed ?? value;
          }
          if (errors.timesUsed?.hasError) {
            runValidationTasks("timesUsed", value);
          }
          setTimesUsed(value);
        }}
        onBlur={() => runValidationTasks("timesUsed", timesUsed)}
        errorMessage={errors.timesUsed?.errorMessage}
        hasError={errors.timesUsed?.hasError}
        {...getOverrideProps(overrides, "timesUsed")}
      ></TextField>
      <TextField
        label="Expires at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={expiresAt && convertToLocal(new Date(expiresAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              type,
              value,
              isActive,
              maxUses,
              timesUsed,
              expiresAt: value,
            };
            const result = onChange(modelFields);
            value = result?.expiresAt ?? value;
          }
          if (errors.expiresAt?.hasError) {
            runValidationTasks("expiresAt", value);
          }
          setExpiresAt(value);
        }}
        onBlur={() => runValidationTasks("expiresAt", expiresAt)}
        errorMessage={errors.expiresAt?.errorMessage}
        hasError={errors.expiresAt?.hasError}
        {...getOverrideProps(overrides, "expiresAt")}
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
          isDisabled={!(idProp || couponModelProp)}
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
              !(idProp || couponModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
