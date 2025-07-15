import type { IUser } from "../users/users.interfaces";
import type { T__v,T_id } from "../../types/mongoose/mongoose.types";

interface ITableUsers extends IUser {
    __v?: T__v | null;
    _id?: T_id | null;
}

export type {
    ITableUsers,
}