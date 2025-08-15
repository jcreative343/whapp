/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LoginInputValues = {
    Email?: string;
    Password?: string;
    ProfileType?: string;
};
export declare type LoginValidationValues = {
    Email?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
    ProfileType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    LoginGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    ProfileType?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<{
    overrides?: LoginOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoginInputValues) => LoginInputValues;
    onSuccess?: (fields: LoginInputValues) => void;
    onError?: (fields: LoginInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginInputValues) => LoginInputValues;
    onValidate?: LoginValidationValues;
} & React.CSSProperties>;
export default function Login(props: LoginProps): React.ReactElement;
