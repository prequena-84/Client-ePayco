import type { TKey,TChildren,TClassName, } from "../../types/container/header.types";

interface IHeader {
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
}

export type {
    IHeader,
}