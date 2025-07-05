import type { IUser } from "../users/users.interfaces";
//import type { IReportUser } from "../report/users.report.interfaces.tsx";
import type { T__V, T_id } from "../../types/tables/table.types";

interface ITableUsers extends IUser {
    __v?: T__V | null;
    _id?: T_id | null;
}

interface dataUser {
    data: ITableUsers[];
}

/*interface ITableReportUsers {
    data: IReportUser[];
}*/

export type {
    ITableUsers,
    //ITableReportUsers,
    dataUser,
}