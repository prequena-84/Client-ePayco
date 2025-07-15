import type { ITransaction } from "./transaction.interfaces";
import type { TPhone } from "../../types/users/users.types";

interface IStateTransaction extends ITransaction {
    phone: TPhone;
}

export type {
    IStateTransaction,
}