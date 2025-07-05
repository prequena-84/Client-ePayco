import type { TKey, TClassName, TClassInput, TName, TId, TPlaceHolder, TValue, TOnChange } from "../../types/input/password.types";

interface IInputPassword {
    key?:TKey | undefined;
    className?: TClassName | undefined;
    classInput?: TClassInput | undefined;
    name: TName;
    id:TId
    placeHolder?: TPlaceHolder;
    value: TValue | undefined;
    onChange: TOnChange
}

export type {
    IInputPassword,
}

