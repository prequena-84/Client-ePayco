import React from "react";

import H1 from "../../components/title/h1";


import type { IReporteTransaccion,datoReporte } from "../../interface/reporte/IReporte-transaccion";

const TableUsers: React.FC<IReporteTransaccion> = ( {dataTransaccion} ) => {


        dataTransaccion.map((item) => {
            console.log(item)
        })



    /*const data = dataUser.map( ({idUsuario,Password,userName,Nombres,Apellidos,Email,WhastApp}) => {
        return {
            idUsuario,
            userName,
            Nombres,
            Apellidos,
            Email,
            WhastApp,
            Password,
        };
    });*/

    const data:[] = []
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
                                <H1 text="Sin usuarios registrados"/>
                        )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map( (item,index) => (
                                <tr key={`row-${index}`}>
                                    <th key={`idUsuario-${index}`} scope="row">
                                        {item.idUsuario}
                                    </th >
                                    <td key={`userName-${index}`}>
                                        {item.userName}
                                    </td>
                                    <td key={`Nombres-${index}`}>
                                        {item.Nombres}
                                    </td>
                                    <td key={`Apellidos-${index}`}>
                                        {item.Apellidos}
                                    </td>
                                    <td key={`Email-${index}`}>
                                        {item.Email}
                                    </td>
                                    <td key={`WhastApp-${index}`}>
                                        {item.WhastApp}
                                    </td>
                                    <td key={`Password-${index}`}>
                                        {item.Password}
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