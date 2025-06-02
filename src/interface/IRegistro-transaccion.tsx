interface ITransaccion {
    id?:string;
    usuario_doc:string;
    tipo : 'recarga' | 'pago';
    monto : number;
    status : 'pendiente' | 'confirmada';
    token_confirmacion?: string | null;
    session_id?: string | null;
    celular?: string | undefined;
}

export type {
    ITransaccion,
}