import React from "react";
import H1 from "../../components/title/h1";
import type { IPropsUser } from "../../typescript/interface/users/state.users.interfaces";

const TablaUsuarios: React.FC<IPropsUser> = ( {dataUsers} ) => {
    const data = dataUsers?.map( items => {
        return {
            Documento:items.document,
            Nombre:items.name,
            Email:items.email,
            Celular:items.phone,
            Saldo:items.balance ?? 0,
        };
    });

   const title = data?.map( item => Object.keys(item) )[0] || [];

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
                                <td key={`name-${index}`}>
                                    {item.Nombre}
                                </td>
                                <td key={`email-${index}`}>
                                    {item.Email}
                                </td>
                                <td key={`phone-${index}`}>
                                    {item.Celular}
                                </td>
                                <td key={`balance-${index}`}>
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