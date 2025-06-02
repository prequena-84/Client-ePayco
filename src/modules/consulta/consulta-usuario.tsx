// Importacion de hooks y componentes de React
import _React, { useEffect, useState } from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section" ;//"../../components/contenedores/section";
import H1 from "../../components/title/h1"; //"../../components/title/h1";
import TablaUsuarios from "../tables/tabla-usuarios"; //"../tables/tabla-transacciones";

// Importación de interfaces
import type { IUsuarioReporte } from "../../interface/reporte/IReporte-transaccion";

// Importación de Axios
import axios, { type AxiosResponse } from "axios";

//Importacion de URI API
const uriConsultaUsuario = import.meta.env.VITE_API_CONSULTA_USUARIO;

const RegistroUsuarios = () => {
    // Estado del reporte de Transacciones
    const [ reporte, setReporte ] = useState<IUsuarioReporte[]>([]);
    
    useEffect(() => {
        const actualizarDatos = async () => {
            try {

                const datosUsuario: AxiosResponse<{ data: IUsuarioReporte[] }>  = await axios.get(uriConsultaUsuario);
                setReporte(datosUsuario.data.data)
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
                <H1 text="Registro de Usuarios"/>
                <TablaUsuarios datosUsuario={reporte}/>
            </Section>  
        </>    
    );
};

export default RegistroUsuarios;