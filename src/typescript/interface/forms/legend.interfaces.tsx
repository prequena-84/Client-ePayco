import type { TKey, TText, TClassName, } from "../../types/forms/legend.types";

interface Ilegend {
    key?:TKey | undefined;
    text:TText | null;
    className?:TClassName | undefined;
}

export type {
    Ilegend,
}