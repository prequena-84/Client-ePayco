import type { ReactNode } from "react"

interface IAside {
    keyAside?: string | undefined;
    children?:ReactNode;
    className?: string | undefined;
}

export type {
    IAside,
}