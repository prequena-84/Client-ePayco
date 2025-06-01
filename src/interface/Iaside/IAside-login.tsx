interface IAsideLogin {
    keyAside?: string | undefined;
    classAside?: string | undefined;
    textH1?:string ;
    textH2?: string ;
    textBtn?:string;
    classRegistro?: string | undefined;
    classBtnRegistro?: string | undefined;
    onClick?: () => void;
}

export type { 
    IAsideLogin,
}