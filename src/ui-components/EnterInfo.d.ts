/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, ToggleButtonProps } from "@aws-amplify/ui-react";
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
export declare type EnterInfoInputValues = {
    Field0?: boolean;
    Field1?: boolean;
    Field2?: boolean;
};
export declare type EnterInfoValidationValues = {
    Field0?: ValidationFunction<boolean>;
    Field1?: ValidationFunction<boolean>;
    Field2?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnterInfoOverridesProps = {
    EnterInfoGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<ToggleButtonProps>;
    Field1?: PrimitiveOverrideProps<ToggleButtonProps>;
    Field2?: PrimitiveOverrideProps<ToggleButtonProps>;
} & EscapeHatchProps;
export declare type EnterInfoProps = React.PropsWithChildren<{
    overrides?: EnterInfoOverridesProps | undefined | null;
} & {
    onSubmit: (fields: EnterInfoInputValues) => void;
    onChange?: (fields: EnterInfoInputValues) => EnterInfoInputValues;
    onValidate?: EnterInfoValidationValues;
} & React.CSSProperties>;
export default function EnterInfo(props: EnterInfoProps): React.ReactElement;
