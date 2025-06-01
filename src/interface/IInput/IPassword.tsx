import type { InputHTMLAttributes } from "react"

interface IInputPassword {
    key?:string | undefined;
    className?: string | undefined;
    classInput?: string | undefined;
    name: string;
    id:string
    placeHolder?: string;
    value: string | undefined;
    onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

export type {
    IInputPassword,
}

