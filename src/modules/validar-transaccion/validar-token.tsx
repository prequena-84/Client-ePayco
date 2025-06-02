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
                <Legend key="titulo" text="Confirmación de Pago"/>
                <Div key="idTransaccion">
                    <label htmlFor="idTransaccion"> Agregar Id del Pago a Confirmar</label>
                    <Input
                        key="idTransaccion"
                        name="idTransaccion"
                        id="idTransaccion"
                        placeHolder="Id Transacción"
                        arialLabel="enviarToken"
                        value={''/*datoTransaccion.usuario_doc*/}
                        onChange={ () => handleChange() }
                        className={stylesForm.containerInputUserName}
                        classInput={stylesForm.inputUserName}
                    />
                </Div>
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


/**
 * OJO QUEDE EN EL MODULE DEL FRONT EN CREAR LA PETICIONES DE TOKEN Y Y SU REENVIO A LA API SI SE VENCE, EN EL BACK CREAR LA VALIDACIONEN LA API 2 QUE CONECTA AL SERVICIO DE REGISTRO DE TRANSACCIONES LO DEL CELULAR OPARA LA RECARGA O EL TOKEN DEL PAGO Y TERMINO EL PROYECTO
 * SOLOQUE DOCUMENTACION Y GRABAR EL VIDEO
 */