import type { 
    TKey,
    TRole,
    TClassName,
    TText,
    TVariant,
    TDisabled,
    TArialDisabled,
    TSizes,
    TOnClick 
} from "../../types/btn/btn.a.types";

interface IBtnA {
    key?:TKey | undefined;
    role?:TRole;
    className?:TClassName | null;
    text?:TText | null;
    variant?:TVariant;
    disabled?:TDisabled;
    arialDisabled?:TArialDisabled;
    sizes?:TSizes;
    onClick?:TOnClick;
}

export type {
    IBtnA,
}