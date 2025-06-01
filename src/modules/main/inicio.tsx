// Importacion de hooks y componentes de React
import _React, { useEffect, useState } from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";
import TableUsers from "../tables/table";

// Importación de interfaces
import type { IReporteTransaccion } from "../../interface/reporte/IReporte-transaccion";

// Importacion del Provider la Api context

// Importación de Axios
import axios from "axios";

//Importacion de URI API
const uriTransacciones = import.meta.env.VITE_API_REPORTE_TRANSACCIONES;

const Inicio = () => {

    // Estado del reporte de Transacciones
    const [ reporte, setReporte ] = useState([]);
    
    useEffect(() => {
        const actualizarDatos = async () => {
            try {
                const respTransaccion: IReporteTransaccion[] = await axios.get(uriTransacciones);
                
                //console.log(respTransaccion.data.data[0])
                //console.log(respTransaccion.data.data[0].Usuario.nombre)

                // queda pendiente definir la estructura de la interface del reporte

                setReporte(respTransaccion.data.data)

            } catch(err: unknown) {

                if (axios.isAxiosError(err)) {
                    if (err.response) {
                        console.error('error', err.response.data.message);
                    } else {
                        console.error('Error de solicitud:', err.request);
                    };
                } else {
                    console.error('Error no relacionado con Axios:', err);
                };
            };
        };
        actualizarDatos();
    }, [])

    return (
        <>
            <Section className="main-content">
                <H1 text="Historial de Transacciones"/>
                <TableUsers dataTransaccion={reporte}/>
            </Section>  
        </>    
    );
};

export default Inicio;

/*
    // estructura del objecto del reporte

    {
        "_id": "683c976d5850d114dc5ff71a",
        "usuario_doc": "V17477617",
        "tipo": "recarga",
        "monto": 350,
        "status": "pendiente",
        "token_confirmacion": "",
        "session_id": "",
        "id": "f201eb889894a933cd70",
        "__v": 0,
        "Usuario": {
            "_id": "683c96dc5850d114dc5ff714",
            "documento": "V17477617",
            "nombre": "Pedro Requena",
            "email": "pedrorequenarondon@hotmail.com",
            "celular": "04241772059",
            "saldo": 0,
            "__v": 0
        }
    }

*/