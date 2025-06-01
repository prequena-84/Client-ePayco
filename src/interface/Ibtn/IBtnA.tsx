import React from "react";
interface IBtnA {
    key?:string | undefined;
    role?: "button" | undefined;
    className?:string | null;
    text?:string | null;
    variant?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link' | null;
    disabled?: boolean;
    arialDisabled?: boolean;
    sizes?: 'btn-lg' | 'btn-sm';
    onClick?: ( e:React.FormEvent ) => void | undefined;
}

export type {
    IBtnA,
}