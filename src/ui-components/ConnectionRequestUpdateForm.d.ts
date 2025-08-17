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
export declare type ConnectionRequestUpdateFormInputValues = {
    requesterId?: string;
    requesterFirstName?: string;
    requesterLastName?: string;
    requesterEmail?: string;
    targetEmail?: string;
    status?: string;
    direction?: string;
};
export declare type ConnectionRequestUpdateFormValidationValues = {
    requesterId?: ValidationFunction<string>;
    requesterFirstName?: ValidationFunction<string>;
    requesterLastName?: ValidationFunction<string>;
    requesterEmail?: ValidationFunction<string>;
    targetEmail?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    direction?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConnectionRequestUpdateFormOverridesProps = {
    ConnectionRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requesterId?: PrimitiveOverrideProps<TextFieldProps>;
    requesterFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    requesterLastName?: PrimitiveOverrideProps<TextFieldProps>;
    requesterEmail?: PrimitiveOverrideProps<TextFieldProps>;
    targetEmail?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    direction?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConnectionRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConnectionRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    connectionRequest?: any;
    onSubmit?: (fields: ConnectionRequestUpdateFormInputValues) => ConnectionRequestUpdateFormInputValues;
    onSuccess?: (fields: ConnectionRequestUpdateFormInputValues) => void;
    onError?: (fields: ConnectionRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConnectionRequestUpdateFormInputValues) => ConnectionRequestUpdateFormInputValues;
    onValidate?: ConnectionRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConnectionRequestUpdateForm(props: ConnectionRequestUpdateFormProps): React.ReactElement;
