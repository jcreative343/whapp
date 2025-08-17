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
export declare type CouponCreateFormInputValues = {
    type?: string;
    value?: number;
    isActive?: boolean;
    maxUses?: number;
    timesUsed?: number;
    expiresAt?: string;
};
export declare type CouponCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    isActive?: ValidationFunction<boolean>;
    maxUses?: ValidationFunction<number>;
    timesUsed?: ValidationFunction<number>;
    expiresAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CouponCreateFormOverridesProps = {
    CouponCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    maxUses?: PrimitiveOverrideProps<TextFieldProps>;
    timesUsed?: PrimitiveOverrideProps<TextFieldProps>;
    expiresAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CouponCreateFormProps = React.PropsWithChildren<{
    overrides?: CouponCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CouponCreateFormInputValues) => CouponCreateFormInputValues;
    onSuccess?: (fields: CouponCreateFormInputValues) => void;
    onError?: (fields: CouponCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouponCreateFormInputValues) => CouponCreateFormInputValues;
    onValidate?: CouponCreateFormValidationValues;
} & React.CSSProperties>;
export default function CouponCreateForm(props: CouponCreateFormProps): React.ReactElement;
