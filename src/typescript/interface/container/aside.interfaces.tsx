import type { TKey,TChildren,TClassName, } from "../../types/container/aside.interfaces"

interface IAside {
    keyAside?:TKey | undefined;
    children?:TChildren;
    className?:TClassName | undefined;
}

export type {
    IAside,
}