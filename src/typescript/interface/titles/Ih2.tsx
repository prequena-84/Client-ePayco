import type { TKey, TText, TClassName, } from "../../types/titles/h1.types";

interface IH2 {
    key?:TKey | undefined;
    text:TText;
    className?: TClassName | undefined;
}

export type {
    IH2,
}