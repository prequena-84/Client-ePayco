// Importacion de hooks y componentes de React
import _React, { useEffect, useState } from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";
import TablaTransacciones from "../tables/tabla-transacciones";

// Importación de interfaces
import type { IReporteTransaccion } from "../../typescript/interface/report/users.report.interfaces.tsx.tsx";

// Importacion del spinner para la espera
import Loading from "../../components/spinners/spinners";

// Importación de Axios
import axios, { type AxiosResponse, isAxiosError } from "axios";

//Importacion de URI API
const uriTransacciones = import.meta.env.VITE_API_REPORTE_TRANSACCIONES;

const Inicio = () => {
    const [ reporte, setReporte ] = useState<IReporteTransaccion[]>([]);
    const [ cargadoInfo, setCargandoInfo ] = useState<boolean>(true);
    
    useEffect( () => {
        const actualizarDatos = async () => {
            try {
                const Transaccion: AxiosResponse<{ data: IReporteTransaccion[] }> = await axios.get(uriTransacciones);
                setReporte(Transaccion.data.data)
                setCargandoInfo(false)

            } catch(err: unknown) {
                setCargandoInfo(false)
                if (isAxiosError(err)) {
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
                {cargadoInfo ? (
                    <Loading />
                ) : (
                    <TablaTransacciones dataTransaccion={reporte}/>
                )}
            </Section>  
        </>    
    );
};

export default Inicio;