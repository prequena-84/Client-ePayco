import type { IReportTransaction } from "./transaction.report.interfaces";

// ITableTransaction
interface ITableTransaction  {
    dataTransaction: IReportTransaction[];
}

export type {
    ITableTransaction,
}