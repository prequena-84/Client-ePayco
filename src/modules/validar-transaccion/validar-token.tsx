//import React from "react";
import React, { useState } from "react";
import axios from "axios";

import Form from "../../components/form/form";
import Input from "../../components/input/input";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";

// Importacion de Estilos
import stylesForm from "../../css/module/login/login-registro.module.css";

import type { Iform } from "../../interface/IForms/IForms";
import type { IToken } from "../../interface/token/IToken";


// Importacion del spinner para la espera
import Loading from "../../components/spinners/spinners";

// Importacion URI Confirmar Transaccion 
const uriConfirmarTransaccion = import.meta.env.VITE_API_CONFIRMAR_TRANSACCION
const uriSolitudToken = import.meta.env.VITE_API_SOLICITAR_TOKEN

const ValidarTransaccion: React.FC<Iform> = () => {

    const [ cargadoInfo, setCargandoInfo ] = useState<boolean>(false);

    const [ data, setData ] = useState<IToken>({
        token:'',
        documento:'',
        idTransaccion:'',  
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = event.target;

        setData(prevData => ({
            ...prevData,
            [name]:value,
        }));
    };

    const clearForm = () => {
        setData({
            token:'',
            documento:'',
            idTransaccion:'',
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        setCargandoInfo(true);

        const body = {
            documento:data.documento,
            idTransaccion:data.idTransaccion
        }

        try {
            const responseConfirmacion = await axios.post(uriConfirmarTransaccion, body, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            })

            setCargandoInfo(false)
            alert(responseConfirmacion.data.message)
            clearForm();
        } catch(err: unknown) {
            setCargandoInfo(false);
            alert('Por favor ingresar el Documento, Id de Transacción o Token valido')
        };
    };

    const solicitarToken = async () => {
        try {
            setCargandoInfo(true);

            const body = {
                documento:data.documento,
                idTransaccion:data.idTransaccion
            }
            
            const responseToken = await axios.post(uriSolitudToken, body)
            setCargandoInfo(false);
            alert(responseToken.data.data)

        } catch( err) {
            setCargandoInfo(false);
            alert(`ocurrio un error con la solicitud del token, por favor intentarlo de nuevo en 1 minutos `)
            console.error('error en solitud', err)
        }
    };

    return (
        <Form key="formulario-token" onSubmit={handleSubmit} className={`${stylesForm["container-Form"]} main-content`}>
            <Fieldset className={stylesForm.containerFieldset}>
                <Legend key="titulo" text="Confirmación de Pago"/>
                {cargadoInfo ? (
                    <Loading />
                ) : (
                    <>
                        <Div key="documento">
                            <Input
                                key="documento"
                                name="documento"
                                id="documento"
                                placeHolder="Documento del Usuario"
                                arialLabel="documento"
                                value={data.documento}
                                onChange={ (e) => handleChange(e) }
                                className={stylesForm.containerInputUserName}
                                classInput={stylesForm.inputUserName}
                            />
                        </Div>
                        <Div key="idTransaccion">
                            <label htmlFor="idTransaccion"> Agregar Id del Pago a Confirmar</label>
                            <Input
                                key="idTransaccion"
                                name="idTransaccion"
                                id="idTransaccion"
                                placeHolder="Id Transacción"
                                arialLabel="enviarToken"
                                value={data.idTransaccion}
                                onChange={ (e) => handleChange(e) }
                                className={stylesForm.containerInputUserName}
                                classInput={stylesForm.inputUserName}
                            />
                        </Div>
                        <Div key="token">
                            <Input
                                key="token"
                                name="token"
                                id="token"
                                placeHolder="Ingrese Token"
                                arialLabel="token"
                                value={data.token}
                                onChange={ (e) => handleChange(e) }
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
                    </>
                )}
            </Fieldset>
        </Form>
    )
};

export default ValidarTransaccion;