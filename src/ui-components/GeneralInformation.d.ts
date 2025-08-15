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
export declare type GeneralInformationInputValues = {
    userId?: string;
    FirstName?: string;
    LastName?: string;
    Height?: number;
    Weight?: number;
    Email?: string;
    ProfileType?: string;
};
export declare type GeneralInformationValidationValues = {
    userId?: ValidationFunction<string>;
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Height?: ValidationFunction<number>;
    Weight?: ValidationFunction<number>;
    Email?: ValidationFunction<string>;
    ProfileType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeneralInformationOverridesProps = {
    GeneralInformationGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Height?: PrimitiveOverrideProps<TextFieldProps>;
    Weight?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    ProfileType?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type GeneralInformationProps = React.PropsWithChildren<{
    overrides?: GeneralInformationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeneralInformationInputValues) => GeneralInformationInputValues;
    onSuccess?: (fields: GeneralInformationInputValues) => void;
    onError?: (fields: GeneralInformationInputValues, errorMessage: string) => void;
    onChange?: (fields: GeneralInformationInputValues) => GeneralInformationInputValues;
    onValidate?: GeneralInformationValidationValues;
} & React.CSSProperties>;
export default function GeneralInformation(props: GeneralInformationProps): React.ReactElement;
