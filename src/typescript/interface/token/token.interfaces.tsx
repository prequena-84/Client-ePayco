import type { TDocument } from "../../types/users/users.types";
import type { TIdTransaction } from "../../types/transactions/transaction.types";
import type { TToken } from "../../types/token/token.types";

interface IToken {
    document:TDocument;
    id: TIdTransaction;
    token?: TToken;
}

export type {
    IToken,
}