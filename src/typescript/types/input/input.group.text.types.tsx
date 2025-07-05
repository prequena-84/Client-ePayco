import type { InputHTMLAttributes } from "react"

type TName = string; 
type TKey = string; 
type TId = string; 
type TType = "text" | "number" | "password" | "email" | "url" | "number" | "date" | "checkbox" | "radio" | "radio" | "file" | "submit";
type TClassName = string; 
type TClassInput = string; 
type TPlaceHolder = string; 
type TArialLabel = string; 
type TValueSTR = string;
type TValueNUM = number; 

type TOnChange = InputHTMLAttributes<HTMLInputElement>['onChange'];
type TDisabled = boolean;

export type {
    TName,
    TKey,
    TId,
    TType,
    TClassName,
    TClassInput,
    TPlaceHolder,
    TArialLabel,
    TValueSTR,
    TValueNUM,
    TOnChange,
    TDisabled,
}