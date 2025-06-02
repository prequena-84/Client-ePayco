import React from "react";
import H1 from "../../components/title/h1";

import type { tablaTransaccion } from "../../interface/reporte/IReporte-transaccion";

const TablaTransacciones: React.FC<tablaTransaccion> = ( {dataTransaccion} ) => {

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
                            {title.map( (titulo,index) => (<th key={`title-${index}`} scope="col">{titulo}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (item,index) => (
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
                        ))}       
                    </tbody>
                </table>
            ) : (
                <H1 text="No Hay Transacciones Registradas"/>
            )}
        </>
    );
};

export default TablaTransacciones;