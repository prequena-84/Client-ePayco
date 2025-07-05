import type { TExp, TKey, TAny } from "../../types/decode/decode.types";

interface JwtPayload {
    exp?: TExp;
    [key:TKey]: TAny;
}

export type {
    JwtPayload,
}

// ojo al parecer nunca se usa