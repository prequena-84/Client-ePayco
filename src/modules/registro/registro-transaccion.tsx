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
import SelectTipoTransaccion from "../../components/select/select-tipo";

import ValidarTransaccion from "../validar-transaccion/validar-token";


// Importacion de Estilos
import stylesForm from "../../css/module/login/login-registro.module.css";

// Importacion de interfaces
import type { Iform } from "../../interface/IForms/IForms";
import type { ITransaccion } from "../../interface/IRegistro-transaccion";

// Importacion de hook axios para hacer peticiones al servidor
import axios from "axios";

//Importacion de URI API
const uriAgregaTransaccion = import.meta.env.VITE_API_REGISTRO_TRANSACCIONES;

const FormRegistroTransaccion: React.FC<Iform> = () => {

    const [ confirmacion, setConfirmacion ] = useState<boolean>(false);

    const [ datoTransaccion, setDatoTransaccion ] = useState<ITransaccion>({
        usuario_doc:'',
        tipo : 'recarga',
        monto : 0,
        status : 'pendiente',
    });

    const handlerChangeTipo = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const { name,value } = event.target;

        setDatoTransaccion(prevData => ({
            ...prevData,
            [name]:value as 'recarga' | 'pago',
        }));
    };

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDatoTransaccion( prevData  => ({
            ...prevData,
            [name]:value
        }));
    };

    const clearForm = () => {
        setDatoTransaccion({
            usuario_doc:'',
            tipo : 'recarga',
            monto : 0,
            status : 'pendiente',
        });
    };
    
    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();  

        try {
            const response = await axios.post(uriAgregaTransaccion, {
                datoTransaccion
            });

            alert( response.data.message );
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
        <>
            <Form key="formulario-login" onSubmit={handleSubmit} className={`${stylesForm["container-Form"]} main-content`}>
                <Fieldset className={stylesForm.containerFieldset}>
                    <Legend key="titulo" text="Registro de Transaccion"/>
                    <Div key="usuario_doc">
                        <Input
                            key="usuario_doc"
                            name="usuario_doc"
                            id="usuario_doc"
                            placeHolder="Documento del Usuario"
                            arialLabel="usuario_doc"
                            value={datoTransaccion.usuario_doc}
                            onChange={ (e) => handleChange(e) }
                            className={stylesForm.containerInputUserName}
                            classInput={stylesForm.inputUserName}
                        />
                    </Div>
                    <Div key="tipo">
                        <SelectTipoTransaccion
                            name="tipo"
                            value={datoTransaccion.tipo}
                            onChange={handlerChangeTipo}
                        />
                    </Div>
                    <Div key="monto">
                        <Input
                            key="monto"
                            name="monto"
                            id="monto"
                            type="number"
                            placeHolder="Monto"
                            arialLabel="monto"
                            value={datoTransaccion.monto}
                            onChange={ (e) => handleChange(e) }
                            className={stylesForm.containerInputUserName}
                            classInput={stylesForm.inputUserName}
                        />
                    </Div>
                    <Div key="status">
                        <Input
                            key="status"
                            name="status"
                            id="status"
                            placeHolder="Estado"
                            arialLabel="status Disabled input example"
                            value={datoTransaccion.status}
                            onChange={ (e) => handleChange(e) }
                            className={stylesForm.containerInputUserName}
                            classInput={stylesForm.inputUserName}
                            disabled={true}
                        />
                    </Div>
                    <Div key="btn" className={stylesForm["container-btn-login"]}>
                        <BtnOutLine 
                            key="registrar"
                            text={"Registrar"}
                            type={"submit"}
                            sizes={"btn-lg"}
                            className={stylesForm.btnIngresar}
                        />
                        <BtnLine key="limpiar"
                            type={"button"}
                            text="Limpiar"
                            sizes={"btn-lg"}
                            onClick={clearForm}
                            className={stylesForm.btnLimpiar}
                        />
                    </Div>
                </Fieldset>
            </Form>
            {confirmacion && (
                <ValidarTransaccion />
            )}
        </>
    );
};

export default FormRegistroTransaccion;