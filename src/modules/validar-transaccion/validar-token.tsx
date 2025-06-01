//import React from "react";

import Form from "../../components/form/form";
import Input from "../../components/input/input";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";

// Importacion de Estilos
import stylesForm from "../../css/module/login/login-registro.module.css";

import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";

const ValidarTransaccion = () => {

    // Agregar el Api context

    //agregar la opcin para manejar el envio a la API
    const handleChange = () => {
    };

    const handleSubmit = () => {
    };

    const solicitarToken = () => {
    };

    return (
        <Form key="formulario-token" onSubmit={handleSubmit} className={`${stylesForm["container-Form"]} main-content`}>
            <Fieldset className={stylesForm.containerFieldset}>
                <Legend key="titulo" text="Validacion de Token"/>
                <Div key="enviarToken">
                    <Input
                        key="enviarToken"
                        name="enviarToken"
                        id="enviarToken"
                        placeHolder="Ingrese Token"
                        arialLabel="enviarToken"
                        value={''/*datoTransaccion.usuario_doc*/}
                        onChange={ () => handleChange() }
                        className={stylesForm.containerInputUserName}
                        classInput={stylesForm.inputUserName}
                    />
                </Div>
                <Div key="btn" className={stylesForm["container-btn-login"]}>
                    <BtnOutLine 
                        key="enviarToken"
                        text={"Enviar Token"}
                        type={"submit"}
                        sizes={"btn-lg"}
                        className={stylesForm.btnIngresar}
                    />
                    <BtnLine 
                        key="solitarToken"
                        type={"button"}
                        text="Solicitar Token"
                        sizes={"btn-lg"}
                        onClick={solicitarToken}
                        className={stylesForm.btnLimpiar}
                    />
                </Div>
            </Fieldset>
        </Form>
    )
};

export default ValidarTransaccion;