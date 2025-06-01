import type { MouseEventHandler } from "react";

interface IBtn {
    key?:string | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    className?:string | null;
    text?:string | null;
    variantLine?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link' | null;
    variantOutLine?: 'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark' | null;
    sizes?: 'btn-lg' | 'btn-sm';
    disabled?: boolean;
    ariaDisabled?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export type {
    IBtn,
}