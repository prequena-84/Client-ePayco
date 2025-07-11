import type { TMessageText } from "../../types/request-fetch/request.fetch.types";

interface IFecth<T> {
    data: T,
    message:TMessageText,
}

export type { 
    IFecth,
}