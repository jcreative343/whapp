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
export declare type NotificationsCreateFormInputValues = {
    RecommedationResult?: string;
    RecommedationAction?: string;
    RecommedationActionFrequency?: string;
    RecommedationType?: string;
    RecommedationNote?: string;
    RecommendationDate?: string;
    SenderId?: string;
    SenderFirstName?: string;
    SenderLastName?: string;
    SenderEmail?: string;
    TargetEmail?: string;
    NotificationType?: string;
    StatusDate?: string;
    Status?: string;
};
export declare type NotificationsCreateFormValidationValues = {
    RecommedationResult?: ValidationFunction<string>;
    RecommedationAction?: ValidationFunction<string>;
    RecommedationActionFrequency?: ValidationFunction<string>;
    RecommedationType?: ValidationFunction<string>;
    RecommedationNote?: ValidationFunction<string>;
    RecommendationDate?: ValidationFunction<string>;
    SenderId?: ValidationFunction<string>;
    SenderFirstName?: ValidationFunction<string>;
    SenderLastName?: ValidationFunction<string>;
    SenderEmail?: ValidationFunction<string>;
    TargetEmail?: ValidationFunction<string>;
    NotificationType?: ValidationFunction<string>;
    StatusDate?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsCreateFormOverridesProps = {
    NotificationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RecommedationResult?: PrimitiveOverrideProps<TextFieldProps>;
    RecommedationAction?: PrimitiveOverrideProps<TextFieldProps>;
    RecommedationActionFrequency?: PrimitiveOverrideProps<TextFieldProps>;
    RecommedationType?: PrimitiveOverrideProps<TextFieldProps>;
    RecommedationNote?: PrimitiveOverrideProps<TextFieldProps>;
    RecommendationDate?: PrimitiveOverrideProps<TextFieldProps>;
    SenderId?: PrimitiveOverrideProps<TextFieldProps>;
    SenderFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    SenderLastName?: PrimitiveOverrideProps<TextFieldProps>;
    SenderEmail?: PrimitiveOverrideProps<TextFieldProps>;
    TargetEmail?: PrimitiveOverrideProps<TextFieldProps>;
    NotificationType?: PrimitiveOverrideProps<TextFieldProps>;
    StatusDate?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationsCreateFormInputValues) => NotificationsCreateFormInputValues;
    onSuccess?: (fields: NotificationsCreateFormInputValues) => void;
    onError?: (fields: NotificationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsCreateFormInputValues) => NotificationsCreateFormInputValues;
    onValidate?: NotificationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsCreateForm(props: NotificationsCreateFormProps): React.ReactElement;
