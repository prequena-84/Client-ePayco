import type { InputHTMLAttributes } from "react"
import type { ReactNode, ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react"

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
type TValue = string;
type TChildren = ReactNode;
type TLink = string;
type TLabel = string;
type TMenu = string;
type TTitleBrand = string;
type TTitleNavbar = string;
type TOnchangeSelect = ChangeEventHandler<HTMLSelectElement>;
type TText = string;
type TOnSubmit = FormEventHandler<HTMLFormElement>;
type TOnLoginSuccesstype = () => void;
type THtmlFor = string;
type TTypeBtn = "button" | "submit" | "reset";
type TVariantLine = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link';
type TVariantOutLine ='btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark';
type TSizes = 'btn-lg' | 'btn-sm';
type TAriaDisabled = string;
type TOnClick = MouseEventHandler<HTMLButtonElement>;
type TRole = "button";
type TVariant = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link' | null;
type TArialDisabled = boolean;
type TOnClickBtn = ( e:React.FormEvent ) => void | undefined;

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
    TValue,
    TChildren,
    TLink,
    TLabel,
    TMenu,
    TTitleBrand,
    TTitleNavbar,
    TOnchangeSelect,
    TText,
    TOnSubmit,
    TOnLoginSuccesstype,
    THtmlFor,
    TTypeBtn,
    TVariantLine,
    TVariantOutLine,
    TSizes,
    TAriaDisabled,
    TOnClick,
    TRole,
    TVariant,
    TArialDisabled,
    TOnClickBtn,
}

