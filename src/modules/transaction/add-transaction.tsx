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
import Loading from "../../components/spinners/spinners"; // Importacion del spinner para la espera

const FormAddTransaction:React.FC<IForm> = () => {
    const [ loadingInfo, setLoadingInfo ] = useState<boolean>(false);

    const [ dateTransaction, setDateTransaction ] = useState<IStateTransaction>({
        userDocument:'',
        type: 'recarga',
        amount: 0,
        status: 'confirmada',
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
            status:"confirmada",
        });
    };
    
    const handleSubmit = async ( event: React.FormEvent ) => {
        event.preventDefault();  
        setLoadingInfo(true);

        const { userDocument, phone, amount }:IStateTransaction = dateTransaction;

        console.log(typeof dateTransaction.amount)

        if ( userDocument !== '' && phone !== '' && amount !== 0  || userDocument !== '' && phone === '' && amount !== 0 ) {
            try {
                const response:string = await requestFecth<IStateTransaction>(import.meta.env.VITE_API_ADD_TRANSACTION, "POST", dateTransaction).then( resp => resp.message)
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
                            <Div key="type">
                                <SelectTipoTransaccion
                                    name="type"
                                    value={dateTransaction.type}
                                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handlerChangeTipo(e)}
                                />
                            </Div>
                                <Div key="userDocument">
                                <Input
                                    key="userDocument"
                                    name="userDocument"
                                    id="userDocument"
                                    placeHolder="Documento del Usuario"
                                    arialLabel="userDocument"
                                    value={dateTransaction.userDocument}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                    className={stylesForm.containerInputUserName}
                                    classInput={stylesForm.inputUserName}
                                />
                            </Div>
                            {dateTransaction.type === "recarga" && 
                                <Div key="phone">
                                    <Input
                                        key="phone"
                                        name="phone"
                                        id="phone"
                                        type="text"
                                        placeHolder="Celular"
                                        arialLabel="phone"
                                        value={dateTransaction.phone}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                        className={stylesForm.containerInputUserName}
                                        classInput={stylesForm.inputUserName}
                                    />
                                </Div>}
                            <Div key="monto">
                                <label>Monto</label>
                                <Input
                                    key="amount"
                                    name="amount"
                                    id="amount"
                                    type="number"
                                    placeHolder="Monto"
                                    arialLabel="amount"
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
                                    key="add"
                                    text={"Registrar"}
                                    type={"submit"}
                                    sizes={"btn-lg"}
                                    className={stylesForm.btnIngresar}
                                />
                                <BtnLine 
                                    key="clear"
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