import type { ReactNode } from "react"

interface ISection {
    key?:string | undefined;
    children?:ReactNode;
    className?: string | undefined
}

export type {
    ISection,
}