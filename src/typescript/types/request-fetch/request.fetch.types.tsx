type TUri = string;
type TMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
type THeaders = Record<string, string>;
type TMessageText = string;

export type {
    TUri,
    TMethod,
    THeaders,
    TMessageText,
};