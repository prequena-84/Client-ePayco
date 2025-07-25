import React, { useState } from "react";
import requestFecth from "../../utils/fetch.utils";
import Form from "../../components/form/form";
import Input from "../../components/input/input";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";
import stylesForm from "../../css/module/login/login-registro.module.css";
import type { IForm } from "../../typescript/interface/html/html.interfaces";
import type { IToken } from "../../typescript/interface/token/token.interfaces"
import Loading from "../../components/spinners/spinners"; // Importacion del spinner para la espera

const VerifyTransaction: React.FC<IForm> = () => {
    const [ loadingInfo, setLoadingInfo ] = useState<boolean>(false);

    const [ dataToken, setDataToken ] = useState<IToken>({
        token:'',
        document:'',
        id:'',  
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDataToken((prevData:IToken) => ({
            ...prevData,
            [name]:value,
        }));
    };

    const clearForm = () => {
        setDataToken({
            token:'',
            document:'',
            id:'',
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        setLoadingInfo(true);

        const { document, id, token }:IToken = dataToken;

        if (document !== '' && id !== '' && token !== '') {
            const body = { document, id };

            try {
                const respConfirmation:string = await requestFecth<IToken>(
                    import.meta.env.VITE_API_CONFIRMATION_TRANSACTION, 
                    "POST", 
                    body, {
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${dataToken.token}`,
                }).then( resp => resp.message );

                setLoadingInfo(false)
                alert(respConfirmation)
                clearForm();

            } catch(err) {
                setLoadingInfo(false);
                console.error('Error de solicitud:', err);
            };
        } else {
            alert('Ingrese los datos del Documento, Id de la Transacción y Token para enviar la autorización de la transacción')
            setLoadingInfo(false);
        }
    };

    const solicitarToken = async () => {
        setLoadingInfo(true);
        const { document, id }:IToken = dataToken;

        if ( document !== '' && id !== '' ) {
            const body = { document, id };       
            const response = await requestFecth<IToken>(import.meta.env.VITE_API_GET_TOKEN,"POST", body).then( resp => resp.message ).catch( err => err); 
            setLoadingInfo(false);
            alert(response)
        } else {
            alert('Ingrese los datos del Documento y Id de la Transacción para solicitar el token');
            setLoadingInfo(false);
        };
    };

    return (
        <Form key="formulario-token" onSubmit={handleSubmit} className={`${stylesForm["container-Form"]} main-content`}>
            <Fieldset className={stylesForm.containerFieldset}>
                <Legend key="titulo" text="Confirmación de Pago"/>
                {loadingInfo ? (
                    <Loading />
                ) : (
                    <>
                        <Div key="document">
                            <Input
                                key="document"
                                name="document"
                                id="document"
                                placeHolder="Documento del Usuario"
                                arialLabel="document"
                                value={dataToken.document}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
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
                                value={dataToken.id}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
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
                                value={dataToken.token}
                                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => handleChange(e) }
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

export default VerifyTransaction;