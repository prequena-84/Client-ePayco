import type { ReactNode, ChangeEventHandler } from "react"

interface Iselect {
    name?:string | undefined;
    key?:string | undefined;
    children?:ReactNode;
    className?: string | undefined;
    value?:string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

export type {
    Iselect,
}