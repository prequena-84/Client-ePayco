import type { ReactNode,FormEventHandler } from "react"

interface Iform {
    key?:string | undefined;
    children?:ReactNode;
    onSubmit?:FormEventHandler<HTMLFormElement>;
    className?: string | undefined
};

export type {
    Iform,
}