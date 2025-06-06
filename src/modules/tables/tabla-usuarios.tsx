import React from "react";
import H1 from "../../components/title/h1";

import type { tablaUsuarios } from "../../interface/reporte/IReporte-transaccion";

const TablaUsuarios: React.FC<tablaUsuarios> = ( {datosUsuario} ) => {

    const data = datosUsuario?.map( items => {
        return {
            Documento:items.documento,
            Nombre:items.nombre,
            Email:items.email,
            Celular:items.celular,
            Saldo:items.saldo,
        }
    });

   const title = data?.map( item => Object.keys(item) )[0] || [];

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
                                <td key={`Nombre-${index}`}>
                                    {item.Nombre}
                                </td>
                                <td key={`Email-${index}`}>
                                    {item.Email}
                                </td>
                                <td key={`Celular-${index}`}>
                                    {item.Celular}
                                </td>
                                <td key={`Saldo-${index}`}>
                                    {item.Saldo.toFixed(2)}
                                </td>
                            </tr>
                        ))}       
                    </tbody>
                </table>
            ) : (
                <H1 text="No Hay Usuarios Registradas"/>
            )}
        </>
    );
};

export default TablaUsuarios;