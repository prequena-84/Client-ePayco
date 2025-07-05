import type { ReactNode, ChangeEventHandler } from "react"

type TName = string;
type TKey = string;
type TChildren = ReactNode;
type TClassName = string;
type TValue = string;
type TOnchange = ChangeEventHandler<HTMLSelectElement>;

export type {
    TName,
    TKey,
    TChildren,
    TClassName,
    TValue,
    TOnchange,
}