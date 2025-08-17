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
export declare type CouponUpdateFormInputValues = {
    type?: string;
    value?: number;
    isActive?: boolean;
    maxUses?: number;
    timesUsed?: number;
    expiresAt?: string;
};
export declare type CouponUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    isActive?: ValidationFunction<boolean>;
    maxUses?: ValidationFunction<number>;
    timesUsed?: ValidationFunction<number>;
    expiresAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CouponUpdateFormOverridesProps = {
    CouponUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    maxUses?: PrimitiveOverrideProps<TextFieldProps>;
    timesUsed?: PrimitiveOverrideProps<TextFieldProps>;
    expiresAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CouponUpdateFormProps = React.PropsWithChildren<{
    overrides?: CouponUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coupon?: any;
    onSubmit?: (fields: CouponUpdateFormInputValues) => CouponUpdateFormInputValues;
    onSuccess?: (fields: CouponUpdateFormInputValues) => void;
    onError?: (fields: CouponUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouponUpdateFormInputValues) => CouponUpdateFormInputValues;
    onValidate?: CouponUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CouponUpdateForm(props: CouponUpdateFormProps): React.ReactElement;
