import type { Tkey, TChildren, TClassName } from "../../types/forms/fieldset.types";

interface Ifieldset {
    key?:Tkey | undefined;
    children?:TChildren;
    className?: TClassName | undefined;
}

export type {
    Ifieldset,
}