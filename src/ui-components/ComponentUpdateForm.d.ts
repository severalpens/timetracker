/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Component } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComponentUpdateFormInputValues = {
    parentId?: string;
    type?: string;
    name?: string;
    description?: string;
    isActive?: boolean;
    startTime?: number;
    endTime?: number;
    children?: string;
};
export declare type ComponentUpdateFormValidationValues = {
    parentId?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    startTime?: ValidationFunction<number>;
    endTime?: ValidationFunction<number>;
    children?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComponentUpdateFormOverridesProps = {
    ComponentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    parentId?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    startTime?: PrimitiveOverrideProps<TextFieldProps>;
    endTime?: PrimitiveOverrideProps<TextFieldProps>;
    children?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ComponentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComponentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    component?: Component;
    onSubmit?: (fields: ComponentUpdateFormInputValues) => ComponentUpdateFormInputValues;
    onSuccess?: (fields: ComponentUpdateFormInputValues) => void;
    onError?: (fields: ComponentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComponentUpdateFormInputValues) => ComponentUpdateFormInputValues;
    onValidate?: ComponentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComponentUpdateForm(props: ComponentUpdateFormProps): React.ReactElement;
