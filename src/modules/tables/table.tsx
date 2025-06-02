import React from "react";

import H1 from "../../components/title/h1";


import type { IUsuarioReporte,IReporteTransaccion,tablaTransaccion } from "../../interface/reporte/IReporte-transaccion";

const TableUsers: React.FC<tablaTransaccion> = ( {dataTransaccion} ) => {

        const data = dataTransaccion.map( items => {
           return {
                Documento:items.usuario_doc,
                Usuario:items.Usuario.nombre,
                "Id Transaccion":items.id,
                "Tipo Transaccion":items.tipo,
                Monto:items.monto,
                Estado:items.status,
           }
        });

   const title = data.map( item => Object.keys(item) )[0];

    return (
        <>
            {data.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            {data.length > 0 ? (
                                title.map( (titulo,index) => (<th key={`title-${index}`} scope="col">{titulo}</th>))
                            ) : (
                                <H1 text="Sin transacciones registradas"/>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map( (item,index) => (
                                <tr key={`row-${index}`}>
                                    <th key={`Documento-${index}`} scope="row">
                                        {item.Documento}
                                    </th >
                                    <td key={`Usuario-${index}`}>
                                        {item.Documento}
                                    </td>
                                    <td key={`idTransaccion-${index}`}>
                                        {item["Id Transaccion"]}
                                    </td>
                                    <td key={`tipoTransaccion-${index}`}>
                                        {item["Tipo Transaccion"]}
                                    </td>
                                    <td key={`Monto-${index}`}>
                                        {item.Monto}
                                    </td>
                                    <td key={`Estado-${index}`}>
                                        {item.Estado}
                                    </td>
                                </tr>
                            ))       
                        ) : ( 
                            <H1 text="Sin usuarios registrados"/>
                        )}
                    </tbody>
                </table>
            ) : (
                <H1 text="No hay transacciones registradas"/>
            )}
        </>
    );
};

export default TableUsers;