import type { IUser } from "../users/users.interfaces";
//import type { IReportUser } from "../report/users.report.interfaces.tsx";
import type { T__v,T_id } from "../../types/mongoose/mongoose.types";

interface ITableUsers extends IUser {
    __v?: T__v | null;
    _id?: T_id | null;
}

interface stateUser {
    data: ITableUsers[];
}

/*interface ITableReportUsers {
    data: IReportUser[];
}*/

export type {
    ITableUsers,
    //ITableReportUsers,
    stateUser,
}