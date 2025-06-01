import type { ReactNode } from "react"

interface IDiv {
    key?:string | undefined;
    children?:ReactNode;
    className?: string | undefined;
}

export type {
    IDiv,
}