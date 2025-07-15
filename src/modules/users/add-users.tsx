// Importacion de react
import React, { useState } from "react";

// Importacion Componentes
import Form from "../../components/form/form";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";
import Input from "../../components/input/input";

import requestFecth from "../../utils/fetch.utils";

// Importacion de Estilos
import stylesFormLogin from "../../css/module/login/login-registro.module.css";

// Importacion de interfaces
import type { IForm } from "../../typescript/interface/html/html.interfaces";
import type { IUser } from "../../typescript/interface/users/users.interfaces";

// Importacion del spinner para la espera
import Loading from "../../components/spinners/spinners";

//Importacion de URI API
//const uriAgregarUsuatio = import.meta.env.VITE_API_ADD_USERS;

const FormAddUsers: React.FC<IForm> = () => {

    const [ loadingInfo, setLoadingInfo ] = useState<boolean>(false);

    const [ dataUser, setDataUser ] = useState<IUser>({
        document:'',
        name:'',
        email:'',
        phone:'',
    });

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDataUser( (prevDataUser):IUser => ({
            ...prevDataUser,
            [name]:value
        }));
    };

    const clearForm = () => {
        setDataUser({
            document:'',
            name:'',
            email:'',
            phone:'',
        });
    };
    
    const handleSubmit = async ( event: React.FormEvent ) => {
        event.preventDefault();  
        setLoadingInfo(true);

        const { document, name, email, phone }: IUser = dataUser;

        if ( document !== '' && name !== '' && email !== '' && phone !== '' ) {

            try {
                const response = await requestFecth<IUser>(import.meta.env.VITE_API_ADD_USERS, "POST", dataUser)

                setLoadingInfo(false);
                alert( response.message );
                clearForm();

            } catch( err) {
                setLoadingInfo(false)
                console.error(`Ha ocurrido el siguiente Error: ${err}`);
            };
        } else {

            alert('Por favor ingrese todos los datos del "Usuario" para completar el registro')
            setLoadingInfo(false);
        };

    };

    return (
        <Form key="formulario-login" onSubmit={handleSubmit} className={`${stylesFormLogin["container-Form"]} main-content`}>
            <Fieldset className={stylesFormLogin.containerFieldset}>
                <Legend key="titulo" text={"Registro de Usuario"}/>
                {loadingInfo ? ( 
                    <Loading />
                ) : (
                    <>
                        <Div key="document">
                            <Input
                                key="document"
                                name="document"
                                id="document"
                                placeHolder="Documento"
                                arialLabel="documento"
                                value={dataUser.document}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="name">
                            <Input
                                key="name"
                                name="name"
                                id="name"
                                placeHolder="Nombre"
                                arialLabel="name"
                                value={dataUser.name}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="email">
                            <Input
                                key="email"
                                name="email"
                                id="email"
                                type="email"
                                placeHolder="Correo"
                                arialLabel="email"
                                value={dataUser.email}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="phone">
                            <Input
                                key="phone"
                                name="phone"
                                id="phone"
                                placeHolder="Celular"
                                arialLabel="phone"
                                value={dataUser.phone}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="btn" className={stylesFormLogin["container-btn-login"]}>
                            <BtnOutLine 
                                key="add"
                                text={"Registrar"}
                                type={"submit"}
                                sizes={"btn-lg"}
                                className={stylesFormLogin.btnIngresar}
                            />
                            <BtnLine 
                                key="clear"
                                type={"button"}
                                text="Limpiar"
                                sizes={"btn-lg"}
                                onClick={clearForm}
                                className={stylesFormLogin.btnLimpiar}
                            />
                        </Div>
                    </>
                )}
            </Fieldset>
        </Form>
    );
};

export default FormAddUsers;