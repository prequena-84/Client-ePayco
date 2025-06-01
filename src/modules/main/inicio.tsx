// Importacion de hooks y componentes de React
import _React, { useEffect, useState } from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";
import TableUsers from "../tables/table";

// Importación de interfaces

// Importacion del Provider la Api context

// Importación de Axios
import axios from "axios";

//Importacion de URI API
const uriTransacciones = import.meta.env.VITE_API_TRANSACCIONES;

const Inicio = () => {

    // Estado del reporte de Transacciones
    const [ reporte, setReporte ] = useState([]);
    
    useEffect(() => {
        const actualizarDatos = async () => {
            try {
                const respTransaccion = await axios.get(uriTransacciones);
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
                <TableUsers dataUser={reporte}/>
            </Section>  
        </>    
    );
};

export default Inicio;