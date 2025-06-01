interface JwtPayload {
    exp?: number;
    [key:string]: any;
}

export type {
    JwtPayload,
}