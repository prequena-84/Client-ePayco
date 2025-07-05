//import React from "react";
import React, { useState } from "react";
import axios, { isAxiosError} from "axios";

import Form from "../../components/form/form";
import Input from "../../components/input/input";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";

// Importacion de Estilos
import stylesForm from "../../css/module/login/login-registro.module.css";

import type { Iform } from "../../typescript/interface/forms/form.interfaces";
import type { IToken } from "../../typescript/interface/token/token.interfaces";


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
        id:'',  
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = event.target;

        setData(prevData => ({
            ...prevData,
            [name]:value,
        }));
    };

    // esta sin usar
    const clearForm = () => {
        setData({
            token:'',
            documento:'',
            id:'',
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        setCargandoInfo(true);

        if ( data.documento !== '' && data.id !== '' && data.token !== '' ) {

            const body = {
                documento:data.documento,
                id:data.id
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

            } catch(err) {
                setCargandoInfo(false);

                if (isAxiosError(err)) {

                    if (err.response) {
                        alert(err.response.data.message)
                        console.error('mensaje', err.response.data.message);
                    } else {
                        console.error('Error de solicitud:', err.request);
                    };
                } else {
                    console.error('Error no relacionado con Axios:', err);
                };
            };
        } else {
            alert('Ingrese los datos del Documento, Id de la Transacción y Token para enviar la autorización de la transacción')
            setCargandoInfo(false);
        }
    };

    const solicitarToken = async () => {
        try {
            setCargandoInfo(true);

            if ( data.documento !== '' && data.id !== '' ) {

                const body = {
                    documento:data.documento,
                    id:data.id
                };           
                
                const responseToken = await axios.post(uriSolitudToken, body);
                setCargandoInfo(false);
                alert(responseToken.data.data)

            } else {
                alert('Ingrese los datos del Documento y Id de la Transacción para solicitar el token');
                setCargandoInfo(false);
            };

        } catch( err: any  ) {
            setCargandoInfo(false);
            console.error(err)
            alert(err.response.data.message)
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
                        <Div key="id">
                            <label htmlFor="id"> Agregar Id del Pago a Confirmar</label>
                            <Input
                                key="id"
                                name="id"
                                id="id"
                                placeHolder="Id Transacción"
                                arialLabel="id"
                                value={data.id}
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