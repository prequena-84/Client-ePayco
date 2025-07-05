import type { IReportTransaction } from "../report/transaction.report.interfaces";

// ITableTransaction
interface ITableTransaction  {
    data: IReportTransaction[];
}

export type {
    ITableTransaction,
}