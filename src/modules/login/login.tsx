// Importacion de hooks y componentes de React
import React, { useContext, useState } from "react";

// Importación de modulos y componentes
import Form from "../../components/form/form"
import Legend from "../../components/form/legend";
import InputUsername from "../../components/input/input-username";
import InputPassword from "../../components/input/input-password";
import BtnLine from "../../components/botton/btn-line";
import BtnOutLine from "../../components/botton/btn-outline";
import Div from "../../components/contenedores/Div";
import Section from "../../components/contenedores/section";
import Fieldset from "../../components/form/fieldset";
import AsideLogin from "../aside/aside-login";
import FormRegistro from "../registro/registro-usuario";

// Importación de Interfaces
import type { ILogin } from "../../interface/ILogin";

// Importacion de Estilos y Css
import stylesFormLogin from "../../css/module/login/login.module.css";
import stylesAsideLog from "../../css/module/aside/aside-login.module.css";
import stylesAsideReg from "../../css/module/aside/aside-registro.module.css";
import styleAsideEfecto from "../../css/module/aside/aside-Transicion.module.css";

// Importacion del Provider la Api context
import { DataContext } from "../api-Context/login-context";
import { AuthContext } from "../api-Context/auth-context";

// Importación de Axios
import axios from "axios";

//Importacion de URI API
const uriLogin = import.meta.env.VITE_API_LOGIN_USER;

const Login: React.FC<ILogin> = () => {
    
    const { dataLogin, setDataLogin } = useContext(DataContext);
    const { setIsAuthenticated } = useContext(AuthContext);
    const [ mostrarRegistro, setMostrarRegistro ] = useState(false);
    
    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        if ( setDataLogin ) {
            setDataLogin( prevDataLogin  => ({
                ...prevDataLogin,
                [name]:value
            }));
        };
    };

    const clearForm = () => { 
        if (setDataLogin) {
            setDataLogin({
                userName:'',
                password:'',
                token:'',
                autorizado:'',
            });
        };
    };

    // Queda pendiente enviar el token si se olvian la contraseña
    const forgotPassword = () => {
        alert('hice click');
    };

    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault(); 

        const dataUser = {
            userName:dataLogin?.userName,
            Password:dataLogin?.password,
        };

        try {

            const respLogin = await axios.post(uriLogin, {
                dataUser
            });

            if (setDataLogin) {
                setDataLogin( prevDataLogin  => ({
                    ...prevDataLogin,
                    token:respLogin.data.token,
                    autorizado:respLogin.data.message,
                }));
            };

            if ( respLogin.data.message === 'Autorizado' ) {
                localStorage.setItem('token', respLogin.data.token);
                if ( setIsAuthenticated ) setIsAuthenticated(true)
            };

        } catch(err) {
            if (axios.isAxiosError(err)) {

                // Si el error es un error de Axios
                if (err.response) {

                    // La solicitud se realizó y el servidor respondió con un código de estado que no está en el rango de 2xx
                    console.error('Error de respuesta:', err.response.data);
                    console.error('Código de estado:', err.response.status);

                    alert( err.response.data.message === 'No Autorizado' ? `Por favor ingrese un Usuario o Contraseña valida: ${err.response.data.message}.`: `${err.response.data.message}: Por favor agregue un Usuario o Contraseña validos.` )
                    if ( setIsAuthenticated ) setIsAuthenticated(false);

                } else if (err.request) {
                    // La solicitud se realizó pero no se recibió respuesta
                    console.error('Error de solicitud:', err.request);
                } else {
                    // Algo sucedió al configurar la solicitud que lanzó un error
                    console.error('Error:', err.message);
                };

            } else {
            
                // Manejar otros tipos de errores
                console.error('Error no relacionado con Axios:', err);
            };
        };
    };

    const togleFormReg = () => setMostrarRegistro(!mostrarRegistro);

    return (
        <Section key="login" className={stylesFormLogin["container-section"]}>
            {!mostrarRegistro && 
                <Form key="formulario-login" onSubmit={handleSubmit} className={stylesFormLogin["container-Form"]}>
                    <Fieldset className={stylesFormLogin.containerFieldset}>
                        <Div key="userName">
                            <Legend text={"Inicio de Sesión"}/>
                            <InputUsername
                                name="userName"
                                id="userName"
                                placeHolder="Usuario"
                                arialLabel="userName"
                                value={dataLogin?.userName}
                                onChange={ (e) => handleChange(e) }
                                className={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="password">
                            <InputPassword
                                name="password"
                                id="passWord"
                                className={stylesFormLogin.inputPassword}
                                placeHolder="Contraseña"
                                value={dataLogin?.password}
                                onChange={(e) => handleChange(e) }
                            />
                        </Div>
                        <Div key="olvidaste-contraseña" className={stylesFormLogin["container-olvidates-password"]}>
                            <BtnLine
                                text={"Olvidaste tu Contraseña"}
                                type={"button"}
                                variantLine={"btn-link"}
                                onClick={forgotPassword}
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
                            <BtnLine 
                                key="limpiar"
                                type={"button"}
                                text="Limpiar"
                                sizes={"btn-lg"}
                                onClick={clearForm}
                                className={stylesFormLogin.btnLimpiar}
                            />
                        </Div>
                    </Fieldset>
                </Form>}
                <AsideLogin
                    classAside={`${styleAsideEfecto.aside} ${mostrarRegistro ? stylesAsideReg["container-Aside"] : stylesAsideLog["container-Aside"]} ${mostrarRegistro ? 'rotate-left' : ''}`}
                    textH1="¡Bienvenidos!"
                    textH2={mostrarRegistro ? "Ingresa a tu Cuenta" : "Crea tu cuenta" }
                    textBtn={mostrarRegistro ? "INGRESAR" : "REGISTRAR"}
                    classRegistro={mostrarRegistro ? stylesAsideLog["container-btn-registro"] : stylesAsideReg["container-btn-registro"] }
                    classBtnRegistro={mostrarRegistro ? stylesAsideReg["btn-registro"] : stylesAsideLog["btn-registro"]}
                    onClick={togleFormReg}
                />
            {mostrarRegistro && <FormRegistro key="form-registro"/>}
        </Section>
    );
};

export default Login;