import type { ReactNode } from "react"

interface IHeader {
    key?:string | undefined;
    children?:ReactNode;
    className?: string | undefined;
}

export type {
    IHeader,
}