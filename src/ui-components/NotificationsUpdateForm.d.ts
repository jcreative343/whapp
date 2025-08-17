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
export declare type NotificationsUpdateFormInputValues = {
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
export declare type NotificationsUpdateFormValidationValues = {
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
export declare type NotificationsUpdateFormOverridesProps = {
    NotificationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type NotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notifications?: any;
    onSubmit?: (fields: NotificationsUpdateFormInputValues) => NotificationsUpdateFormInputValues;
    onSuccess?: (fields: NotificationsUpdateFormInputValues) => void;
    onError?: (fields: NotificationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsUpdateFormInputValues) => NotificationsUpdateFormInputValues;
    onValidate?: NotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsUpdateForm(props: NotificationsUpdateFormProps): React.ReactElement;
