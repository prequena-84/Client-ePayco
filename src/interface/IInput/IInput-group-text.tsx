import type { InputHTMLAttributes } from "react"

interface IInputGroupText {
    key?:string | undefined;
    name:string;
    id:string;
    type?: "text" | "password" | "email" | "url" | "number" | "date" | "checkbox" | "radio" | "radio" | "file" | "submit";
    className?:string;
    classInput?:string;
    placeHolder?:string;
    arialLabel?:string;
    value:string | number | undefined;
    onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

export type {
    IInputGroupText,
}