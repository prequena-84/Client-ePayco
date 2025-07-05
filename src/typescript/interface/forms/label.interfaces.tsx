import type { TKey, TText, TClassName, THtmlFor } from "../../types/forms/label.types";

interface Ilabel {
    key?:TKey | undefined;
    text:TText | null;
    className?:TClassName | undefined;
    htmlFor?:THtmlFor | undefined; 
}

export type {
    Ilabel,
}