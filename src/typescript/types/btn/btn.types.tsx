import type { MouseEventHandler } from "react";

type TKey = string;
type TType = "button" | "submit" | "reset";
type TClassName = string;
type TText = string;
type TVariantLine = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link';
type TVariantOutLine ='btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark';
type TSizes = 'btn-lg' | 'btn-sm';
type TDisabled = boolean;
type TAriaDisabled = string;
type TOnClick = MouseEventHandler<HTMLButtonElement>;

export type {
    TKey,
    TType,
    TClassName,
    TText,
    TVariantLine,
    TVariantOutLine,
    TSizes,
    TDisabled,
    TAriaDisabled,
    TOnClick,
}