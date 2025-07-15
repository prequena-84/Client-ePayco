import { useEffect, useState } from "react";
import requestFecth from "../../utils/fetch.utils.tsx";
import Section from "../../components/contenedores/section.tsx";
import H1 from "../../components/title/h1.tsx";
import TablaUsuarios from "./table-users.tsx";
import type { IReportUser} from "../../typescript/interface/users/users.report.interfaces.tsx.tsx";
import Loading from "../../components/spinners/spinners.tsx"; // Importacion del spinner para la espera

const GetUsers = () => {
    const [ report, setReport ] = useState<IReportUser[]>([]);        // Estado del reporte de Transacciones
    const [ loadingInfo, setLoadingInfo ] = useState<boolean>(true);  // Estado de carga de la información
    
    useEffect(() => {
        const updateData = async () => {
            try {
                const dataUser:IReportUser[] = await requestFecth<IReportUser[]>(import.meta.env.VITE_API_GET_USERS).then(resp => resp.data);
                setReport(dataUser);
                setLoadingInfo(false);           
            } catch(err: unknown) {
                setLoadingInfo(false);
                console.error('Error no relacionado con Axios:', err);
            };
        };
        
        setLoadingInfo(true);
        updateData();
    }, [])

    return (
        <>
            <Section className="main-content">
                <H1 text="Registro de Usuarios"/>
                {loadingInfo ? (
                    <Loading />
                ) : (
                    <TablaUsuarios dataUsers={report}/>  
                )}
            </Section>  
        </>    
    );
};

export default GetUsers;