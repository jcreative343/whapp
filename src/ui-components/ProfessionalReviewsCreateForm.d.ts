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
export declare type ProfessionalReviewsCreateFormInputValues = {
    ReviewedId?: string;
    ReviewType?: string;
    ProfessionalName?: string;
    ProfessionalRole?: string;
    ReviewDate?: string;
};
export declare type ProfessionalReviewsCreateFormValidationValues = {
    ReviewedId?: ValidationFunction<string>;
    ReviewType?: ValidationFunction<string>;
    ProfessionalName?: ValidationFunction<string>;
    ProfessionalRole?: ValidationFunction<string>;
    ReviewDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfessionalReviewsCreateFormOverridesProps = {
    ProfessionalReviewsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ReviewedId?: PrimitiveOverrideProps<TextFieldProps>;
    ReviewType?: PrimitiveOverrideProps<TextFieldProps>;
    ProfessionalName?: PrimitiveOverrideProps<TextFieldProps>;
    ProfessionalRole?: PrimitiveOverrideProps<TextFieldProps>;
    ReviewDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfessionalReviewsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfessionalReviewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfessionalReviewsCreateFormInputValues) => ProfessionalReviewsCreateFormInputValues;
    onSuccess?: (fields: ProfessionalReviewsCreateFormInputValues) => void;
    onError?: (fields: ProfessionalReviewsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfessionalReviewsCreateFormInputValues) => ProfessionalReviewsCreateFormInputValues;
    onValidate?: ProfessionalReviewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfessionalReviewsCreateForm(props: ProfessionalReviewsCreateFormProps): React.ReactElement;
