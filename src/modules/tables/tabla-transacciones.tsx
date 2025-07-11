import React from "react";
import H1 from "../../components/title/h1";

import type { ITableTransaction } from "../../typescript/interface/html/html.interfaces";

const TablaTransacciones: React.FC<ITableTransaction> = ( {dataTransaction} ) => {

    const data = dataTransaction?.map( items => {
        return {
            Documento:items.userDocument,
            Usuario:items.users.name,
            "Id Transaccion":items.id,
            "Tipo Transaccion":items.type,
            Monto:items.amount,
            Estado:items.status,
        };
    });

   const title = data?.map( item => Object.keys(item) )[0];

    return (
        <>
            {data.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            {title.map( (title,index) => (<th key={`title-${index}`} scope="col">{title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (item,index) => (
                            <tr key={`row-${index}`}>
                                <th key={`document-${index}`} scope="row">
                                    {item.Documento}
                                </th >
                                <td key={`users-${index}`}>
                                    {item.Usuario}
                                </td>
                                <td key={`idTransaction-${index}`}>
                                    {item["Id Transaccion"]}
                                </td>
                                <td key={`typeTransaction-${index}`}>
                                    {item["Tipo Transaccion"]}
                                </td>
                                <td key={`amount-${index}`}>
                                    {item.Monto.toFixed(2)}
                                </td>
                                <td key={`state-${index}`}>
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