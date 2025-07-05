import type { TKey,
    TChildren,
    TOnSubmit,
    TClassName,
    TOnLoginSuccesstype, } from "../../types/forms/form.types";

interface IForm {
    key?:TKey | undefined;
    children?:TChildren;
    onSubmit?:TOnSubmit;
    className?: TClassName | undefined;
    onLoginSuccess?:TOnLoginSuccesstype;
};

export type {
    IForm,
}