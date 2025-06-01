interface IReporteTransaccion {
    data: {
        _id:string;
        usuario_doc:string;
        tipo: "recarga" | "pago";
        monto: number;
        status: "pendiente" | "confirmada";
        token_confirmacion: string;
        session_id: string;
        id: string;
        __v: number;
        Usuario: {
            _id: string;
            documento: string;
            nombre: string;
            email: string;
            celular: string;
            saldo: number;
            __v: number;
        };
    };
    dataTransaccion: IReporteTransaccion[];
}

interface datoReporte {
    id?:string;
    tipo?: "recarga" | "pago";
    monto?: number;
    status?: "pendiente" | "confirmada";
    nombre?: string;
    email?: string;
}

export type {
    IReporteTransaccion,
    datoReporte
}