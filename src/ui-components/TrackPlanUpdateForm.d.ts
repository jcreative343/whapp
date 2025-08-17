/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrackPlanUpdateFormInputValues = {
    userId?: string;
    CompletedDate?: string;
    CompletedTime?: string;
    ActionDomain?: string;
    ActionQuestion?: string;
    Action?: string;
    Frequency?: string;
    ActionNote?: string;
    Update1Points?: number;
    Update1Note?: string;
    Update1Date?: string;
    Update2Points?: number;
    Update2Note?: string;
    Update2Date?: string;
    Update3Points?: number;
    Update3Note?: string;
    Update3Date?: string;
    Update4Points?: number;
    Update4Note?: string;
    Update4Date?: string;
    Update5Points?: number;
    Update5Note?: string;
    Update5Date?: string;
    Update6Points?: number;
    Update6Note?: string;
    Update6Date?: string;
    Update7Points?: number;
    Update7Note?: string;
    Update7Date?: string;
    Update8Points?: number;
    Update8Note?: string;
    Update8Date?: string;
    Percentage?: number;
    Discontinued?: boolean;
    DiscontinuedDate?: string;
    Successful?: boolean;
    SuccessfulDate?: string;
};
export declare type TrackPlanUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    CompletedDate?: ValidationFunction<string>;
    CompletedTime?: ValidationFunction<string>;
    ActionDomain?: ValidationFunction<string>;
    ActionQuestion?: ValidationFunction<string>;
    Action?: ValidationFunction<string>;
    Frequency?: ValidationFunction<string>;
    ActionNote?: ValidationFunction<string>;
    Update1Points?: ValidationFunction<number>;
    Update1Note?: ValidationFunction<string>;
    Update1Date?: ValidationFunction<string>;
    Update2Points?: ValidationFunction<number>;
    Update2Note?: ValidationFunction<string>;
    Update2Date?: ValidationFunction<string>;
    Update3Points?: ValidationFunction<number>;
    Update3Note?: ValidationFunction<string>;
    Update3Date?: ValidationFunction<string>;
    Update4Points?: ValidationFunction<number>;
    Update4Note?: ValidationFunction<string>;
    Update4Date?: ValidationFunction<string>;
    Update5Points?: ValidationFunction<number>;
    Update5Note?: ValidationFunction<string>;
    Update5Date?: ValidationFunction<string>;
    Update6Points?: ValidationFunction<number>;
    Update6Note?: ValidationFunction<string>;
    Update6Date?: ValidationFunction<string>;
    Update7Points?: ValidationFunction<number>;
    Update7Note?: ValidationFunction<string>;
    Update7Date?: ValidationFunction<string>;
    Update8Points?: ValidationFunction<number>;
    Update8Note?: ValidationFunction<string>;
    Update8Date?: ValidationFunction<string>;
    Percentage?: ValidationFunction<number>;
    Discontinued?: ValidationFunction<boolean>;
    DiscontinuedDate?: ValidationFunction<string>;
    Successful?: ValidationFunction<boolean>;
    SuccessfulDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrackPlanUpdateFormOverridesProps = {
    TrackPlanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    CompletedDate?: PrimitiveOverrideProps<TextFieldProps>;
    CompletedTime?: PrimitiveOverrideProps<TextFieldProps>;
    ActionDomain?: PrimitiveOverrideProps<TextFieldProps>;
    ActionQuestion?: PrimitiveOverrideProps<TextFieldProps>;
    Action?: PrimitiveOverrideProps<TextFieldProps>;
    Frequency?: PrimitiveOverrideProps<TextFieldProps>;
    ActionNote?: PrimitiveOverrideProps<TextFieldProps>;
    Update1Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update1Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update1Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update2Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update2Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update2Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update3Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update3Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update3Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update4Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update4Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update4Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update5Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update5Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update5Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update6Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update6Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update6Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update7Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update7Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update7Date?: PrimitiveOverrideProps<TextFieldProps>;
    Update8Points?: PrimitiveOverrideProps<TextFieldProps>;
    Update8Note?: PrimitiveOverrideProps<TextFieldProps>;
    Update8Date?: PrimitiveOverrideProps<TextFieldProps>;
    Percentage?: PrimitiveOverrideProps<TextFieldProps>;
    Discontinued?: PrimitiveOverrideProps<SwitchFieldProps>;
    DiscontinuedDate?: PrimitiveOverrideProps<TextFieldProps>;
    Successful?: PrimitiveOverrideProps<SwitchFieldProps>;
    SuccessfulDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrackPlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrackPlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trackPlan?: any;
    onSubmit?: (fields: TrackPlanUpdateFormInputValues) => TrackPlanUpdateFormInputValues;
    onSuccess?: (fields: TrackPlanUpdateFormInputValues) => void;
    onError?: (fields: TrackPlanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrackPlanUpdateFormInputValues) => TrackPlanUpdateFormInputValues;
    onValidate?: TrackPlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrackPlanUpdateForm(props: TrackPlanUpdateFormProps): React.ReactElement;
