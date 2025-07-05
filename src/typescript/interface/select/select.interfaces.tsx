import type { TName, TKey, TChildren, TClassName, TValue, TOnchange } from "../../types/select/select.types"

interface ISelect {
    name?:TName | undefined;
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
    value?:TValue;
    onChange:TOnchange;
}

export type {
    ISelect,
}