import type { TKey, TChildren, TClassName, } from "../../types/main/main.types"

interface Imain {
    key?:TKey | undefined;
    children?:TChildren;
    className?: TClassName | undefined;
}

export type {
    Imain,
}