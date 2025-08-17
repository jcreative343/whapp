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
export declare type OrganizationCPsUpdateFormInputValues = {
    OrganizationId?: string;
    OrganizationCPFirstName?: string;
    OrganizationCPLastName?: string;
    OrganizationCPEmail?: string;
    OrganizationCPRole?: string;
    primaryDepartment?: string;
    primaryProgramsUnit?: string;
    primaryService?: string;
    OrganizationAdministrator?: boolean;
    PrimaryOrganizationAdministrator?: boolean;
};
export declare type OrganizationCPsUpdateFormValidationValues = {
    OrganizationId?: ValidationFunction<string>;
    OrganizationCPFirstName?: ValidationFunction<string>;
    OrganizationCPLastName?: ValidationFunction<string>;
    OrganizationCPEmail?: ValidationFunction<string>;
    OrganizationCPRole?: ValidationFunction<string>;
    primaryDepartment?: ValidationFunction<string>;
    primaryProgramsUnit?: ValidationFunction<string>;
    primaryService?: ValidationFunction<string>;
    OrganizationAdministrator?: ValidationFunction<boolean>;
    PrimaryOrganizationAdministrator?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationCPsUpdateFormOverridesProps = {
    OrganizationCPsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    OrganizationId?: PrimitiveOverrideProps<TextFieldProps>;
    OrganizationCPFirstName?: PrimitiveOverrideProps<TextFieldProps>;
    OrganizationCPLastName?: PrimitiveOverrideProps<TextFieldProps>;
    OrganizationCPEmail?: PrimitiveOverrideProps<TextFieldProps>;
    OrganizationCPRole?: PrimitiveOverrideProps<TextFieldProps>;
    primaryDepartment?: PrimitiveOverrideProps<TextFieldProps>;
    primaryProgramsUnit?: PrimitiveOverrideProps<TextFieldProps>;
    primaryService?: PrimitiveOverrideProps<TextFieldProps>;
    OrganizationAdministrator?: PrimitiveOverrideProps<SwitchFieldProps>;
    PrimaryOrganizationAdministrator?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationCPsUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationCPsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    organizationCPs?: any;
    onSubmit?: (fields: OrganizationCPsUpdateFormInputValues) => OrganizationCPsUpdateFormInputValues;
    onSuccess?: (fields: OrganizationCPsUpdateFormInputValues) => void;
    onError?: (fields: OrganizationCPsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationCPsUpdateFormInputValues) => OrganizationCPsUpdateFormInputValues;
    onValidate?: OrganizationCPsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationCPsUpdateForm(props: OrganizationCPsUpdateFormProps): React.ReactElement;
