import type { IUser } from "../users/users.interfaces";
import type { ITransaction } from "./transaction.interfaces";
import type { T__v, T_id } from "../../types/mongoose/mongoose.types";

// Transacción con usuario embebido
interface IReportTransaction extends ITransaction {
  _id: T_id;
  __v: T__v;
  User?: IUser;
}

export type {
  IReportTransaction,
}