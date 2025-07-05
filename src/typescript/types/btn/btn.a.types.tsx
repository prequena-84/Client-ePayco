import React from "react";

type TKey = string;
type TRole = "button" | undefined;
type TClassName = string;
type TText = string;
type TVariant = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link' | null;
type TDisabled = boolean;
type TArialDisabled = boolean;
type TSizes = 'btn-lg' | 'btn-sm';
type TOnClick = ( e:React.FormEvent ) => void | undefined;

export type {
    TKey,
    TRole,
    TClassName,
    TText,
    TVariant,
    TDisabled,
    TArialDisabled,
    TSizes,
    TOnClick,
}