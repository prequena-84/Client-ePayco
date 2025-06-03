// Importacion de hooks y componentes de React
import { useEffect, useState } from "react";

// Importación de Axios
import axios, { type AxiosResponse } from "axios";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section" ;//"../../components/contenedores/section";
import H1 from "../../components/title/h1"; //"../../components/title/h1";
import TablaUsuarios from "../tables/tabla-usuarios"; //"../tables/tabla-transacciones";

// Importación de interfaces
import type { IUsuarioReporte } from "../../interface/reporte/IReporte-transaccion";

// Importacion del spinner para la espera
import Loading from "../../components/spinners/spinners";

//Importacion de URI API
const uriConsultaUsuario = import.meta.env.VITE_API_CONSULTA_USUARIO;

const RegistroUsuarios = () => {
    // Estado del reporte de Transacciones
    const [ reporte, setReporte ] = useState<IUsuarioReporte[]>([]);
    const [ cargadoInfo, setCargandoInfo ] = useState<boolean>(true);
    
    useEffect(() => {
        const actualizarDatos = async () => {
            try {

                const datosUsuario: AxiosResponse<{ data: IUsuarioReporte[] }>  = await axios.get(uriConsultaUsuario);
                setReporte(datosUsuario.data.data)  
                setCargandoInfo(false)
                              
            } catch(err: unknown) {
                setCargandoInfo(false)
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
        setCargandoInfo(true);
        actualizarDatos();
    }, [])

    return (
        <>
            <Section className="main-content">
                <H1 text="Registro de Usuarios"/>
                {cargadoInfo ? (
                    <Loading />
                ) : (
                    <TablaUsuarios datosUsuario={reporte}/>  
                )}
            </Section>  
        </>    
    );
};

export default RegistroUsuarios;