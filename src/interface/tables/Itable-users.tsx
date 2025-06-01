interface Itable {
    Apellidos: string
    Email: string 
    Nombres: string
    Password: string
    WhastApp: string;
    idUsuario: string;
    userName: string;
    __v?: number;
    _id?: string;
}

interface dataUser {
    dataUser: Itable[];
}

export type {
    Itable,
    dataUser,
}