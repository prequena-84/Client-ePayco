import type { ReactNode } from "react"

interface Imain {
    key?:string | undefined;
    children?:ReactNode;
    className?: string | undefined;
}

export type {
    Imain,
}