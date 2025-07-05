import type { IUser } from "../users/users.interfaces";
import type { T__v, T_id } from "../../types/report/users.report.types";

// Usuario anidado dentro de cada transacción
interface IReportUser extends IUser {
  _id: T_id;
  __v: T__v;
}

export type {
  IReportUser,
}