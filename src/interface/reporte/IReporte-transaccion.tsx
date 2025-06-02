// Usuario anidado dentro de cada transacción
interface IUsuarioReporte {
  _id: string;
  documento: string;
  nombre: string;
  email: string;
  celular: string;
  saldo: number;
  __v: number;
}

// Transacción con usuario embebido
interface IReporteTransaccion {
  _id: string;
  usuario_doc: string;
  tipo: 'recarga' | 'pago';
  monto: number;
  status: 'pendiente' | 'confirmada';
  token_confirmacion: string;
  session_id: string;
  id: string;
  __v: number;
  Usuario: IUsuarioReporte;
}

interface tablaTransaccion {
    dataTransaccion: IReporteTransaccion[];
}

export type {
    IUsuarioReporte,
    IReporteTransaccion,
    tablaTransaccion,
}