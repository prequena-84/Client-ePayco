import type { TDocument,TName,TEmail,TPhone,TBalance } from "../../types/users/users.types";

interface IUser {
    document:TDocument;
    name:TName;
    email:TEmail;
    phone:TPhone
    balance?:TBalance;
}

export type {
    IUser,
}