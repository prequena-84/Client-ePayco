import type { 
    TKey, 
    TText, 
    TClassName,
    TName, 
    TChildren, 
    TValue, 
    TOnchangeSelect,
    TLink,
    TLabel,
    TMenu,
    TTitleBrand,
    TTitleNavbar,
    TClassInput,
    TPlaceHolder,
    TId,
    TOnChange,
    TType,
    TArialLabel,
    TValueSTR,
    TValueNUM,
    TDisabled,
    THtmlFor,
    TOnSubmit,
    TOnLoginSuccesstype,
    TVariant,
    TVariantLine,
    TVariantOutLine,
    TSizes,
    TAriaDisabled,
    TOnClick,
    TRole,
    TArialDisabled,
} from "../../types/html/html.types";

import type { T__v, T_id } from "../../types/mongoose/mongoose.types";
import type { IUser } from "../users/users.interfaces";
import type { IReportTransaction } from "../transaction/transaction.report.interfaces";

interface IH1 {
    key?:TKey | undefined;
    text:TText;
    className?: TClassName | undefined;
}

interface IH2 extends IH1{}

interface ITableUsers extends IUser {
    __v?: T__v | null;
    _id?: T_id | null;
}

// Anterior dataUser
interface stateUser {
    data: ITableUsers[];
}

interface ITableTransaction {
    dataTransaction:IReportTransaction[];
}

interface ISelect {
    name?:TName | undefined;
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
    value?:TValue;
    onChange:TOnchangeSelect;
}

interface ISubMenu {
    link: TLink;
    label: TLabel;
}

interface IMenu {
    menu: TMenu;
    submenu: ISubMenu[];
}

interface INavBar {
    titleBrand?: TTitleBrand | undefined;
    titleNavbar?: TTitleNavbar | undefined;
}

interface Imain {
    key?:TKey | undefined;
    children?:TChildren;
    className?: TClassName | undefined;
}

interface IInputPassword {
    key?:TKey | undefined;
    className?: TClassName | undefined;
    classInput?: TClassInput | undefined;
    name: TName;
    id:TId
    placeHolder?: TPlaceHolder;
    value: TValue | undefined;
    onChange: TOnChange;
}

interface IInputGroupText {
    key?:TKey | undefined;
    name:TName;
    id:TId;
    type?:TType;
    className?:TClassName;
    classInput?:TClassInput;
    placeHolder?:TPlaceHolder;
    arialLabel?:TArialLabel;
    value:TValueSTR | TValueNUM | undefined;
    onChange:TOnChange
    disabled?:TDisabled;
}

interface ILegend {
    key?:TKey | undefined;
    text:TText | null;
    className?:TClassName | undefined;
}

interface ILabel {
    key?:TKey | undefined;
    text:TText | null;
    className?:TClassName | undefined;
    htmlFor?:THtmlFor | undefined; 
}

interface IForm {
    key?:TKey | undefined;
    children?:TChildren;
    onSubmit?:TOnSubmit;
    className?: TClassName | undefined;
    onLoginSuccess?:TOnLoginSuccesstype;
}

interface Ifieldset {
    key?:TKey | undefined;
    children?:TChildren;
    className?: TClassName | undefined;
}

interface ISection {
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined
}

interface IHeader {
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
}

interface IDiv {
    key?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
}

interface IAside {
    keyAside?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
}

interface IBtn {
    key?:TKey | undefined;
    type?: TType | undefined;
    className?:TClassName | null;
    text?:TText | null;
    variantLine?: TVariantLine | null;
    variantOutLine?:TVariantOutLine | null;
    sizes?: TSizes;
    disabled?: TDisabled;
    ariaDisabled?: TAriaDisabled;
    onClick?: TOnClick | undefined;
}

interface IBtnA {
    key?:TKey | undefined;
    role?:TRole;
    className?:TClassName | null;
    text?:TText | null;
    variant?:TVariant;
    disabled?:TDisabled;
    arialDisabled?:TArialDisabled;
    sizes?:TSizes;
    onClick?:TOnClick;
}


export type {
    IH1,
    IH2,
    ITableUsers,
    stateUser,
    ITableTransaction,
    ISelect,
    ISubMenu,
    IMenu,
    INavBar,
    Imain,
    IInputPassword,
    IInputGroupText,
    ILegend,
    ILabel,
    IForm,
    Ifieldset,
    ISection,
    IHeader,
    IDiv,
    IAside,
    IBtn,
    IBtnA,
}