import type { TKey,TChildren,TClassName, } from "../../types/container/div.types"

interface IDiv {
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
}

export type {
    IDiv,
}