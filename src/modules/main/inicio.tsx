// Importacion de hooks y componentes de React
import _React, { useContext, useEffect, useState } from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";
import TableUsers from "../tables/table";

// Importación de interfaces

// Importacion del Provider la Api context
import { DataContext } from "../api-Context/login-context";
import { AuthContext } from "../api-Context/auth-context";

// Importación de Axios
import axios from "axios";

//Importacion de URI API
const uriDowUser = import.meta.env.VITE_API_DOWN_USER;

const Inicio = () => {

    const { dataLogin } = useContext(DataContext);
    const { setIsAuthenticated } = useContext(AuthContext);

    const [ users, setUsers ] = useState([]);

    const token:String | null = dataLogin?.token || localStorage.getItem('token');
    
    useEffect(() => {
        const ResponseUsers = async () => {
            try {
                const users = await axios.get(uriDowUser, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUsers(users.data.data)

            } catch(err: unknown) {

                if (axios.isAxiosError(err)) {
                    if (err.response) {
                        console.log('error', err.response.data.message);
                        
                        if ( err.response.data.message === 'No Autorizado' ) {
                            alert('Error en la credenciales suministrada, por ingrese un usuario o contraseña valido')
                            localStorage.removeItem('token');
                            if (setIsAuthenticated) setIsAuthenticated(false);
                        };

                    } else {
                        console.error('Error de solicitud:', err.request);
                        localStorage.removeItem('token');
                    };
                } else {

                    console.error('Error no relacionado con Axios:', err);
                    localStorage.removeItem('token');
                };
            };
        };
        ResponseUsers();
    }, [dataLogin?.token])

    return (
        <>
            <Section className="main-content">
                <H1 text="Usuarios"/>
                <TableUsers dataUser={users}/>
            </Section>  
        </>    
    );
};

export default Inicio;