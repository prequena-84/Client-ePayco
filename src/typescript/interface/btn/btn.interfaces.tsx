import type { TKey,
    TType,
    TClassName,
    TText,
    TVariantLine,
    TVariantOutLine,
    TSizes,
    TDisabled,
    TAriaDisabled,
    TOnClick, } from "../../types/btn/btn.types";

interface IBtn {
    key?:TKey | undefined;
    type?: TType | undefined;
    className?:TClassName | null;
    text?:TText | null;
    variantLine?: TVariantLine | null;
    variantOutLine?:TVariantOutLine | null;
    sizes?: TSizes;
    disabled?: TDisabled;
    ariaDisabled?: TAriaDisabled;
    onClick?: TOnClick | undefined;
}

export type {
    IBtn,
}