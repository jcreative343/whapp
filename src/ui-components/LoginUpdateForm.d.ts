/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LoginUpdateFormInputValues = {
    Email?: string;
    Password?: string;
    LoginDate?: string;
    LoginTime?: string;
    ProfileType?: string;
};
export declare type LoginUpdateFormValidationValues = {
    Email?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
    LoginDate?: ValidationFunction<string>;
    LoginTime?: ValidationFunction<string>;
    ProfileType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginUpdateFormOverridesProps = {
    LoginUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password?: PrimitiveOverrideProps<TextFieldProps>;
    LoginDate?: PrimitiveOverrideProps<TextFieldProps>;
    LoginTime?: PrimitiveOverrideProps<TextFieldProps>;
    ProfileType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoginUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    login?: any;
    onSubmit?: (fields: LoginUpdateFormInputValues) => LoginUpdateFormInputValues;
    onSuccess?: (fields: LoginUpdateFormInputValues) => void;
    onError?: (fields: LoginUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginUpdateFormInputValues) => LoginUpdateFormInputValues;
    onValidate?: LoginUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoginUpdateForm(props: LoginUpdateFormProps): React.ReactElement;
