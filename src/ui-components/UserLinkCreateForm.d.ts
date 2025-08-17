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
export declare type UserLinkCreateFormInputValues = {
    professionalId?: string;
    professionalEmail?: string;
    professionalFirstName?: string;
    professionalLastName?: string;
    clientId?: string;
    clientEmail?: string;
    clientFirstName?: string;
    clientLastName?: string;
    clientViewable?: boolean;
    subscriptionId?: string;
};
export declare type UserLinkCreateFormValidationValues = {
    professionalId?: ValidationFunction<string>;
    professionalEmail?: ValidationFunction<string>;
    professionalFirstName?: ValidationFunction<string>;
    professionalLastName?: ValidationFunction<string>;
    clientId?: ValidationFunction<string>;
    clientEmail?: ValidationFunction<string>;
    clientFirstName?: ValidationFunction<string>;
    clientLastName?: ValidationFunction<string>;
    clientViewable?: ValidationFunction<boolean>;
    subscriptionId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserLinkCreateFormOverridesProps = {
    UserLinkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    professionalId?: PrimitiveOverrideProps<TextFieldProps>;
    professionalEmail?: PrimitiveOverrideProps<TextFieldProps>;
    professionalFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    professionalLastName?: PrimitiveOverrideProps<TextFieldProps>;
    clientId?: PrimitiveOverrideProps<TextFieldProps>;
    clientEmail?: PrimitiveOverrideProps<TextFieldProps>;
    clientFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    clientLastName?: PrimitiveOverrideProps<TextFieldProps>;
    clientViewable?: PrimitiveOverrideProps<SwitchFieldProps>;
    subscriptionId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserLinkCreateFormProps = React.PropsWithChildren<{
    overrides?: UserLinkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserLinkCreateFormInputValues) => UserLinkCreateFormInputValues;
    onSuccess?: (fields: UserLinkCreateFormInputValues) => void;
    onError?: (fields: UserLinkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserLinkCreateFormInputValues) => UserLinkCreateFormInputValues;
    onValidate?: UserLinkCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserLinkCreateForm(props: UserLinkCreateFormProps): React.ReactElement;
