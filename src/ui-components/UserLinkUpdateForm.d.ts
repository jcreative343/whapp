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
export declare type UserLinkUpdateFormInputValues = {
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
export declare type UserLinkUpdateFormValidationValues = {
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
export declare type UserLinkUpdateFormOverridesProps = {
    UserLinkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type UserLinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserLinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userLink?: any;
    onSubmit?: (fields: UserLinkUpdateFormInputValues) => UserLinkUpdateFormInputValues;
    onSuccess?: (fields: UserLinkUpdateFormInputValues) => void;
    onError?: (fields: UserLinkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserLinkUpdateFormInputValues) => UserLinkUpdateFormInputValues;
    onValidate?: UserLinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserLinkUpdateForm(props: UserLinkUpdateFormProps): React.ReactElement;
