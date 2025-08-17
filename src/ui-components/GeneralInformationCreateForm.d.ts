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
export declare type GeneralInformationCreateFormInputValues = {
    userId?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    ProfessionalRole?: string;
    BusinessName?: string;
    BusinessEIN?: number;
    BusinessCountry?: string;
    BusinessAddress?: string;
    BusinessCity?: string;
    BusinessState?: string;
    BusinessZipCode?: number;
    BusinessPhoneNumber?: string;
    BusinessWebsite?: string;
    OrganizationAdministrator?: boolean;
    OrganizationEmployee?: boolean;
    Department?: string;
    Service?: string;
    ProgramsUnit?: string;
    ProfileType?: string;
};
export declare type GeneralInformationCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    ProfessionalRole?: ValidationFunction<string>;
    BusinessName?: ValidationFunction<string>;
    BusinessEIN?: ValidationFunction<number>;
    BusinessCountry?: ValidationFunction<string>;
    BusinessAddress?: ValidationFunction<string>;
    BusinessCity?: ValidationFunction<string>;
    BusinessState?: ValidationFunction<string>;
    BusinessZipCode?: ValidationFunction<number>;
    BusinessPhoneNumber?: ValidationFunction<string>;
    BusinessWebsite?: ValidationFunction<string>;
    OrganizationAdministrator?: ValidationFunction<boolean>;
    OrganizationEmployee?: ValidationFunction<boolean>;
    Department?: ValidationFunction<string>;
    Service?: ValidationFunction<string>;
    ProgramsUnit?: ValidationFunction<string>;
    ProfileType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeneralInformationCreateFormOverridesProps = {
    GeneralInformationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    ProfessionalRole?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessName?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessEIN?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessCountry?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessAddress?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessCity?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessState?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessWebsite?: PrimitiveOverrideProps<TextFieldProps>;
    OrganizationAdministrator?: PrimitiveOverrideProps<SwitchFieldProps>;
    OrganizationEmployee?: PrimitiveOverrideProps<SwitchFieldProps>;
    Department?: PrimitiveOverrideProps<TextFieldProps>;
    Service?: PrimitiveOverrideProps<TextFieldProps>;
    ProgramsUnit?: PrimitiveOverrideProps<TextFieldProps>;
    ProfileType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeneralInformationCreateFormProps = React.PropsWithChildren<{
    overrides?: GeneralInformationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeneralInformationCreateFormInputValues) => GeneralInformationCreateFormInputValues;
    onSuccess?: (fields: GeneralInformationCreateFormInputValues) => void;
    onError?: (fields: GeneralInformationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeneralInformationCreateFormInputValues) => GeneralInformationCreateFormInputValues;
    onValidate?: GeneralInformationCreateFormValidationValues;
} & React.CSSProperties>;
export default function GeneralInformationCreateForm(props: GeneralInformationCreateFormProps): React.ReactElement;
