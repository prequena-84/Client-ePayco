import type { TKey,TChildren,TClassName, } from "../../types/container/sections.types";

interface ISection {
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined
}

export type {
    ISection,
}