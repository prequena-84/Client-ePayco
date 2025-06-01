interface ILogin {
    key?:string | undefined;
    onLoginSuccess?: () => void;
}

export type {
    ILogin,
}