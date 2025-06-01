// Importacion de react
import React, { useState } from "react";

// Importacion Componentes
import Form from "../../components/form/form";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import InputUsername from "../../components/input/input-username";
import InputPassword from "../../components/input/input-password";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";
import Input from "../../components/input/input";

// Importacion de Estilos
import stylesFormLogin from "../../css/module/login/login-registro.module.css";

// Importacion de interfaces
import type { ILogin } from "../../interface/ILogin";
import type { IUser } from "../../interface/IRegistro";

// Importacion de hook axios para hacer peticiones al servidor
import axios from "axios";

//Importacion de URI API
const uriAddUser = import.meta.env.VITE_API_ADD_USER;

const FormRegistro: React.FC<ILogin> = () => {
    const [ dataUser, setDataUser ] = useState<IUser>({
            idUsuario:'',
            userName:'',
            Password:'',
            Nombres:'',
            Apellidos:'',
            Email:'',
            WhastApp:'',
    });

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDataUser( prevDataUser  => ({
            ...prevDataUser,
            [name]:value
        }));
    };

    const clearForm = () => {
        setDataUser({
            idUsuario:'',
            userName:'',
            Password:'',
            Nombres:'',
            Apellidos:'',
            Email:'',
            WhastApp:'',
        });
    };
    
    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();  

        try {
            const response = await axios.post(uriAddUser, {
                dataUser
            });

            alert(`Se registro el usuario ${response.data.data.userName} sastifactoriamente`);
            clearForm();
        } catch( err) {
            if (axios.isAxiosError(err)) {
                // Si el error es un error de Axios
                if (err.response) {
                    // La solicitud se realizó y el servidor respondió con un código de estado que no está en el rango de 2xx
                    console.error('Error de respuesta:', err.response.data);
                    console.error('Código de estado:', err.response.status);

                    alert( err.response.data.message === 'No Autorizado' ? `Credenciales Invalidas: ${err.response.data.message}`: '' )

                } else if (err.request) {
                    // La solicitud se realizó pero no se recibió respuesta
                    console.error('Error de solicitud:', err.request);
                } else {
                    // Algo sucedió al configurar la solicitud que lanzó un error
                    console.error('Error:', err.message);
                }
            } else {
                // Manejar otros tipos de errores
                console.error('Error no relacionado con Axios:', err);
            };
        };
    };

    return (
        <Form key="formulario-login" onSubmit={handleSubmit} className={stylesFormLogin["container-Form"]}>
            <Fieldset className={stylesFormLogin.containerFieldset}>
                <Div key="idUsuario">
                    <Legend key="titulo" text={"Registro de Usuario"}/>
                    <Input
                        key="input"
                        name="idUsuario"
                        id="idUsuario"
                        placeHolder="ID"
                        arialLabel="idUsuario"
                        value={dataUser.idUsuario}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="userName">
                    <InputUsername
                        key="userName"
                        name="userName"
                        id="userName"
                        placeHolder="Usuario"
                        arialLabel="Usuario"
                        value={dataUser.userName}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="Nombres">
                    <Input
                        key="Nombres"
                        name="Nombres"
                        id="Nombres"
                        placeHolder="Nombres"
                        arialLabel="Nombres"
                        value={dataUser.Nombres}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="Apellidos">
                    <Input
                        key="Apellidos"
                        name="Apellidos"
                        id="Apellidos"
                        placeHolder="Apellidos"
                        arialLabel="Apellidos"
                        value={dataUser.Apellidos}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="Email">
                    <Input
                        key="Email"
                        name="Email"
                        id="Email"
                        type="email"
                        placeHolder="Correo"
                        arialLabel="Email"
                        value={dataUser.Email}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="Password">
                    <InputPassword
                        name="Password"
                        id="Password"
                        className={stylesFormLogin.containerInputPassword}
                        classInput={stylesFormLogin.inputPassword}
                        placeHolder="Contraseña"
                        value={dataUser.Password}
                        onChange={(e) => handleChange(e) }
                    />
                </Div>
                <Div key="WhastApp">
                    <Input
                        key="WhastApp"
                        name="WhastApp"
                        id="WhastApp"
                        placeHolder="WhastApp"
                        arialLabel="WhastApp"
                        value={dataUser.WhastApp}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="btn" className={stylesFormLogin["container-btn-login"]}>
                    <BtnOutLine 
                        key="ingresar"
                        text={"Ingresar"}
                        type={"submit"}
                        sizes={"btn-lg"}
                        className={stylesFormLogin.btnIngresar}
                    />
                    <BtnLine key="limpiar"
                        type={"button"}
                        text="Limpiar"
                        sizes={"btn-lg"}
                        onClick={clearForm}
                        className={stylesFormLogin.btnLimpiar}
                    />
                </Div>
            </Fieldset>
        </Form>
    );
};

export default FormRegistro;