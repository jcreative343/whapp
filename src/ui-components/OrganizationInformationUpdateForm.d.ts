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
export declare type OrganizationInformationUpdateFormInputValues = {
    userId?: string;
    BusinessName?: string;
    BusinessEIN?: number;
    BusinessCountry?: string;
    BusinessAddress?: string;
    BusinessCity?: string;
    BusinessState?: string;
    BusinessZipCode?: number;
    BusinessPhoneNumber?: string;
    BusinessWebsite?: string;
    Departments?: string[];
    ProgramsUnits?: string[];
    Services?: string[];
    clientsServed?: number;
};
export declare type OrganizationInformationUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    BusinessName?: ValidationFunction<string>;
    BusinessEIN?: ValidationFunction<number>;
    BusinessCountry?: ValidationFunction<string>;
    BusinessAddress?: ValidationFunction<string>;
    BusinessCity?: ValidationFunction<string>;
    BusinessState?: ValidationFunction<string>;
    BusinessZipCode?: ValidationFunction<number>;
    BusinessPhoneNumber?: ValidationFunction<string>;
    BusinessWebsite?: ValidationFunction<string>;
    Departments?: ValidationFunction<string>;
    ProgramsUnits?: ValidationFunction<string>;
    Services?: ValidationFunction<string>;
    clientsServed?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationInformationUpdateFormOverridesProps = {
    OrganizationInformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessName?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessEIN?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessCountry?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessAddress?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessCity?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessState?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessWebsite?: PrimitiveOverrideProps<TextFieldProps>;
    Departments?: PrimitiveOverrideProps<TextFieldProps>;
    ProgramsUnits?: PrimitiveOverrideProps<TextFieldProps>;
    Services?: PrimitiveOverrideProps<TextFieldProps>;
    clientsServed?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationInformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationInformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    organizationInformation?: any;
    onSubmit?: (fields: OrganizationInformationUpdateFormInputValues) => OrganizationInformationUpdateFormInputValues;
    onSuccess?: (fields: OrganizationInformationUpdateFormInputValues) => void;
    onError?: (fields: OrganizationInformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationInformationUpdateFormInputValues) => OrganizationInformationUpdateFormInputValues;
    onValidate?: OrganizationInformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationInformationUpdateForm(props: OrganizationInformationUpdateFormProps): React.ReactElement;
