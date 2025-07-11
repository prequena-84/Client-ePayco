import _React, { useEffect, useState } from "react";
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";
import TablaTransacciones from "../tables/tabla-transacciones";
import Loading from "../../components/spinners/spinners";
import requestFecth from "../../utils/fetch.utils.tsx";
import type { IReportTransaction } from "../../typescript/interface/transaction/transaction.report.interfaces.tsx";

//const uriTransaction = import.meta.env.VITE_API_GET_TRANSACTION;

const Inicio = () => {
    const [ report, setReport ] = useState<IReportTransaction[]> ([]);
    const [ loadingInfo, setLoadingInfo ] = useState<boolean> (true);
    
    useEffect( () => {
        const updateDataTransaction = async () => {
            try {
                const datatransaction: IReportTransaction[] = await requestFecth<IReportTransaction[]>(import.meta.env.VITE_API_GET_TRANSACTION).then( resp => resp.data);
                setReport(datatransaction);
                setLoadingInfo(false);

            } catch(err: unknown) {
                setLoadingInfo(false);
                console.error(`Se ha identificado el siguiente error: ${err}`);
            };
        };
        
        updateDataTransaction();
    }, []);

    return (
        <>
            <Section className="main-content">
                <H1 text="Historial de Transacciones"/>
                {loadingInfo ? (
                    <Loading />
                ) : (
                    <TablaTransacciones dataTransaction={report}/>
                )}
            </Section>  
        </>    
    );
};

export default Inicio;