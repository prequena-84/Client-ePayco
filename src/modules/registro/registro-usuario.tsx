// Importacion de react
import React, { useState } from "react";
// Importacion de hook axios para hacer peticiones al servidor
import axios from "axios";

// Importacion Componentes
import Form from "../../components/form/form";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";
import Input from "../../components/input/input";

// Importacion de Estilos
import stylesFormLogin from "../../css/module/login/login-registro.module.css";

// Importacion de interfaces
import type { Iform } from "../../interface/IForms/IForms";
import type { IUser } from "../../interface/IRegistro-usuario";

// Importacion del spinner para la espera
import Loading from "../../components/spinners/spinners";

//Importacion de URI API
const uriAgregarUsuatio = import.meta.env.VITE_API_REGISTRO_USUARIO;

const FormRegistroUsuario: React.FC<Iform> = () => {

    const [ cargadoInfo, setCargandoInfo ] = useState<boolean>(false);

    const [ datoUsuario, setDatoUsuario ] = useState<IUser>({
        documento:'',
        nombre:'',
        email:'',
        celular:'',
    });

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDatoUsuario( prevDatoUsuario  => ({
            ...prevDatoUsuario,
            [name]:value
        }));
    };

    const clearForm = () => {
        setDatoUsuario({
            documento:'',
            nombre:'',
            email:'',
            celular:'',
        });
    };
    
    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();  
        setCargandoInfo(true);

        if ( datoUsuario.documento !== '' &&
            datoUsuario.nombre !== '' &&
            datoUsuario.email !== '' &&
            datoUsuario.celular !== '' ) {

            try {
                const response = await axios.post(uriAgregarUsuatio, {
                    datoUsuario
                });

                setCargandoInfo(false);
                alert( response.data.message );
                clearForm();

            } catch( err) {
                setCargandoInfo(false)
                if (axios.isAxiosError(err)) {
                    // Si el error es un error de Axios
                    if (err.response) {
                        // La solicitud se realizó y el servidor respondió con un código de estado que no está en el rango de 2xx
                        console.error('Error de respuesta:', err.response.data);
                        console.error('Código de estado:', err.response.status);

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

            } else {
                alert('Por favor ingrese todos los datos del "Usuario" para completar el registro')
                setCargandoInfo(false);
            }

    };

    return (
        <Form key="formulario-login" onSubmit={handleSubmit} className={`${stylesFormLogin["container-Form"]} main-content`}>
            <Fieldset className={stylesFormLogin.containerFieldset}>
                <Legend key="titulo" text={"Registro de Usuario"}/>
                {cargadoInfo ? ( 
                    <Loading />
                ) : (
                    <>
                        <Div key="documento">
                            <Input
                                key="inpdocumentout"
                                name="documento"
                                id="documento"
                                placeHolder="Documento"
                                arialLabel="documento"
                                value={datoUsuario.documento}
                                onChange={ (e) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="nombre">
                            <Input
                                key="nombre"
                                name="nombre"
                                id="nombre"
                                placeHolder="Nombre"
                                arialLabel="nombre"
                                value={datoUsuario.nombre}
                                onChange={ (e) => handleChange(e) }
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
                                value={datoUsuario.email}
                                onChange={ (e) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="celular">
                            <Input
                                key="celular"
                                name="celular"
                                id="celular"
                                placeHolder="Celular"
                                arialLabel="celular"
                                value={datoUsuario.celular}
                                onChange={ (e) => handleChange(e) }
                                className={stylesFormLogin.containerInputUserName}
                                classInput={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="btn" className={stylesFormLogin["container-btn-login"]}>
                            <BtnOutLine 
                                key="ingresar"
                                text={"Registrar"}
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
                    </>
                )}
            </Fieldset>
        </Form>
    );
};

export default FormRegistroUsuario;