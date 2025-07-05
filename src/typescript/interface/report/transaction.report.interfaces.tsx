import type { IUser } from "../users/users.interfaces";
import type { ITransaction } from "../transaction/transaction.interfaces";
import type { T__v } from "../../types/report/users.report.types";
import type { T_id } from "../../types/tables/table.types";

// Transacción con usuario embebido
interface IReportTransaction extends ITransaction {
  _id: T_id;
  __v: T__v;
  users: IUser;
}

export type {
  IReportTransaction,
}