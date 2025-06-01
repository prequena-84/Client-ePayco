import type React from "react";
import type { ReactNode } from "react";

interface IAutorizacion {
    isAuthenticated?: boolean;
    setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
    key?:string | undefined;
    children?: ReactNode;
    isLoading?: boolean;
    setIsloading?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {
    IAutorizacion,
}