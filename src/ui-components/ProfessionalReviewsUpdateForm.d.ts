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
export declare type ProfessionalReviewsUpdateFormInputValues = {
    ReviewedId?: string;
    ReviewType?: string;
    ProfessionalName?: string;
    ProfessionalRole?: string;
    ReviewDate?: string;
};
export declare type ProfessionalReviewsUpdateFormValidationValues = {
    ReviewedId?: ValidationFunction<string>;
    ReviewType?: ValidationFunction<string>;
    ProfessionalName?: ValidationFunction<string>;
    ProfessionalRole?: ValidationFunction<string>;
    ReviewDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfessionalReviewsUpdateFormOverridesProps = {
    ProfessionalReviewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ReviewedId?: PrimitiveOverrideProps<TextFieldProps>;
    ReviewType?: PrimitiveOverrideProps<TextFieldProps>;
    ProfessionalName?: PrimitiveOverrideProps<TextFieldProps>;
    ProfessionalRole?: PrimitiveOverrideProps<TextFieldProps>;
    ReviewDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfessionalReviewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProfessionalReviewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    professionalReviews?: any;
    onSubmit?: (fields: ProfessionalReviewsUpdateFormInputValues) => ProfessionalReviewsUpdateFormInputValues;
    onSuccess?: (fields: ProfessionalReviewsUpdateFormInputValues) => void;
    onError?: (fields: ProfessionalReviewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProfessionalReviewsUpdateFormInputValues) => ProfessionalReviewsUpdateFormInputValues;
    onValidate?: ProfessionalReviewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProfessionalReviewsUpdateForm(props: ProfessionalReviewsUpdateFormProps): React.ReactElement;
