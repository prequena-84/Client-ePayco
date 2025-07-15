import React, { useState } from "react";
import requestFecth from "../../utils/fetch.utils";
import Form from "../../components/form/form";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";
import Input from "../../components/input/input";
import SelectTipoTransaccion from "../../components/select/select-tipo";
import stylesForm from "../../css/module/login/login-registro.module.css";
import type { IForm } from "../../typescript/interface/html/html.interfaces";
import type { IStateTransaction } from "../../typescript/interface/transaction/state.transaction.interfaces";
import type { IReportTransaction } from "../../typescript/interface/transaction/transaction.report.interfaces";
import Loading from "../../components/spinners/spinners"; // Importacion del spinner para la espera

const FormAddTransaction:React.FC<IForm> = () => {
    const [ loadingInfo, setLoadingInfo ] = useState<boolean>(false);

    const [ dateTransaction, setDateTransaction ] = useState<IStateTransaction>({
        userDocument:'',
        type: 'recarga',
        amount: 0,
        status: 'pendiente',
        phone:'',
    });

    const handlerChangeTipo = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const { name,value } = event.target;

        setDateTransaction( (prevData:IStateTransaction) => ({
            ...prevData,
            [name]:value,
            status: value === 'recarga' ? 'confirmada' : 'pendiente',
        }));
    };

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDateTransaction( (prevData:IStateTransaction) => ({
            ...prevData,
            [name]: name !=='monto' ? value : Number(value)
        }));
    };

    const clearForm = () => {
        setDateTransaction({
            userDocument:'',
            type:'recarga',
            amount:0,
            phone:'',
            status:'pendiente',
        });
    };
    
    const handleSubmit = async ( event: React.FormEvent ) => {
        event.preventDefault();  
        setLoadingInfo(true);

        const { userDocument, phone, amount }:IStateTransaction = dateTransaction;

        if ( userDocument !== '' && phone !== '' && amount !== 0  || userDocument !== '' && phone === '' && amount !== 0 ) {
            try {
                const response:string = await requestFecth<IReportTransaction>(import.meta.env.VITE_API_ADD_TRANSACTION).then( resp => resp.message)
                setLoadingInfo(false)
                alert( response );
                clearForm();
            } catch( err) {
                setLoadingInfo(false);
                console.error(`Ha ocurrido un error el siguiente error: ${err}`)
            };
        } else {
            alert('Por favor ingrese todos los datos de la "Transacción" para completar el registro')
            setLoadingInfo(false);
        };
    };

    return (
        <>
            <Form key="formulario-login" onSubmit={handleSubmit} className={`${stylesForm["container-Form"]} main-content`}>
                <Fieldset className={stylesForm.containerFieldset}>
                    <Legend key="titulo" text="Registro de Transaccion"/>
                    {loadingInfo ? (
                        <Loading />
                    ) : (
                        <>
                            <Div key="tipo">
                                <SelectTipoTransaccion
                                    name="tipo"
                                    value={dateTransaction.type}
                                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handlerChangeTipo(e)}
                                />
                            </Div>
                                <Div key="usuario_doc">
                                <Input
                                    key="usuario_doc"
                                    name="usuario_doc"
                                    id="usuario_doc"
                                    placeHolder="Documento del Usuario"
                                    arialLabel="usuario_doc"
                                    value={dateTransaction.userDocument}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                    className={stylesForm.containerInputUserName}
                                    classInput={stylesForm.inputUserName}
                                />
                            </Div>
                            {dateTransaction.type === "recarga" && 
                                <Div key="celular">
                                    <Input
                                        key="celular"
                                        name="celular"
                                        id="celular"
                                        type="text"
                                        placeHolder="Celular"
                                        arialLabel="celular"
                                        value={dateTransaction.phone}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                        className={stylesForm.containerInputUserName}
                                        classInput={stylesForm.inputUserName}
                                    />
                                </Div>}
                            <Div key="monto">
                                <label>Monto</label>
                                <Input
                                    key="monto"
                                    name="monto"
                                    id="monto"
                                    type="number"
                                    placeHolder="Monto"
                                    arialLabel="monto"
                                    value={dateTransaction.amount}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                    className={stylesForm.containerInputUserName}
                                    classInput={stylesForm.inputUserName}
                                />
                            </Div>
                            {dateTransaction.type !== "recarga" &&
                                <Div key="status">
                                    <label>Estado del Pago</label>
                                    <Input
                                        key="status"
                                        name="status"
                                        id="status"
                                        placeHolder="Estado"
                                        arialLabel="status Disabled input example"
                                        value={dateTransaction.status}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                        className={stylesForm.containerInputUserName}
                                        classInput={stylesForm.inputUserName}
                                        disabled={true}
                                    />
                                    </Div>}
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
                        </>
                    )}
                </Fieldset>
            </Form>
        </>
    );
};

export default FormAddTransaction;