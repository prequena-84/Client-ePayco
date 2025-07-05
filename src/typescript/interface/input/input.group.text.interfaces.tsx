import type { TName, TKey, TId, TType, TClassName, TClassInput, TPlaceHolder, TArialLabel, TValueSTR, TValueNUM, TOnChange, TDisabled } from "../../types/input/input.group.text.types";

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

export type {
    IInputGroupText,
}