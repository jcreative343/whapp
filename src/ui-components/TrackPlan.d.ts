/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, SliderFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TrackPlanInputValues = {
    CompletedDate?: string;
    CompletedTime?: string;
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
};
export declare type TrackPlanValidationValues = {
    CompletedDate?: ValidationFunction<string>;
    CompletedTime?: ValidationFunction<string>;
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
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrackPlanOverridesProps = {
    TrackPlanGrid?: PrimitiveOverrideProps<GridProps>;
    CompletedDate?: PrimitiveOverrideProps<TextFieldProps>;
    CompletedTime?: PrimitiveOverrideProps<TextFieldProps>;
    Action?: PrimitiveOverrideProps<TextFieldProps>;
    Frequency?: PrimitiveOverrideProps<TextFieldProps>;
    ActionNote?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    Update1Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update1Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update1Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    Update2Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update2Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update2Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    Update3Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update3Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update3Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement6?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement7?: PrimitiveOverrideProps<HeadingProps>;
    Update4Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update4Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update4Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement14?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement15?: PrimitiveOverrideProps<HeadingProps>;
    Update5Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update5Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update5Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement12?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement13?: PrimitiveOverrideProps<HeadingProps>;
    Update6Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update6Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update6Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement10?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement11?: PrimitiveOverrideProps<HeadingProps>;
    Update7Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update7Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update7Date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement8?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement9?: PrimitiveOverrideProps<HeadingProps>;
    Update8Points?: PrimitiveOverrideProps<SliderFieldProps>;
    Update8Note?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Update8Date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrackPlanProps = React.PropsWithChildren<{
    overrides?: TrackPlanOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrackPlanInputValues) => TrackPlanInputValues;
    onSuccess?: (fields: TrackPlanInputValues) => void;
    onError?: (fields: TrackPlanInputValues, errorMessage: string) => void;
    onChange?: (fields: TrackPlanInputValues) => TrackPlanInputValues;
    onValidate?: TrackPlanValidationValues;
} & React.CSSProperties>;
export default function TrackPlan(props: TrackPlanProps): React.ReactElement;
