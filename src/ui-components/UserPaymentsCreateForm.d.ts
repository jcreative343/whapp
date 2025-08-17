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
export declare type UserPaymentsCreateFormInputValues = {
    userId?: string;
    organizationId?: string;
    organizationName?: string;
    paymentType?: string;
    subscriptionId?: string;
    paymentStatus?: string;
    clientsProjected?: number;
    costPerClient?: number;
    couponCode?: string;
    couponPercent?: number;
    paidUntil?: string;
    paymentFor?: string;
};
export declare type UserPaymentsCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    organizationId?: ValidationFunction<string>;
    organizationName?: ValidationFunction<string>;
    paymentType?: ValidationFunction<string>;
    subscriptionId?: ValidationFunction<string>;
    paymentStatus?: ValidationFunction<string>;
    clientsProjected?: ValidationFunction<number>;
    costPerClient?: ValidationFunction<number>;
    couponCode?: ValidationFunction<string>;
    couponPercent?: ValidationFunction<number>;
    paidUntil?: ValidationFunction<string>;
    paymentFor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserPaymentsCreateFormOverridesProps = {
    UserPaymentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    organizationId?: PrimitiveOverrideProps<TextFieldProps>;
    organizationName?: PrimitiveOverrideProps<TextFieldProps>;
    paymentType?: PrimitiveOverrideProps<TextFieldProps>;
    subscriptionId?: PrimitiveOverrideProps<TextFieldProps>;
    paymentStatus?: PrimitiveOverrideProps<TextFieldProps>;
    clientsProjected?: PrimitiveOverrideProps<TextFieldProps>;
    costPerClient?: PrimitiveOverrideProps<TextFieldProps>;
    couponCode?: PrimitiveOverrideProps<TextFieldProps>;
    couponPercent?: PrimitiveOverrideProps<TextFieldProps>;
    paidUntil?: PrimitiveOverrideProps<TextFieldProps>;
    paymentFor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserPaymentsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserPaymentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserPaymentsCreateFormInputValues) => UserPaymentsCreateFormInputValues;
    onSuccess?: (fields: UserPaymentsCreateFormInputValues) => void;
    onError?: (fields: UserPaymentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserPaymentsCreateFormInputValues) => UserPaymentsCreateFormInputValues;
    onValidate?: UserPaymentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserPaymentsCreateForm(props: UserPaymentsCreateFormProps): React.ReactElement;
