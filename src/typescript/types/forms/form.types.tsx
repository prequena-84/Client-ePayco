import type { ReactNode,FormEventHandler } from "react"

type TKey = string;
type TChildren = ReactNode;
type TOnSubmit = FormEventHandler<HTMLFormElement>;
type TClassName = string;
type TOnLoginSuccesstype = () => void;

export type {
    TKey,
    TChildren,
    TOnSubmit,
    TClassName,
    TOnLoginSuccesstype,
}