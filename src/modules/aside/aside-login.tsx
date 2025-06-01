// Importacion de hooks y componentes de React
import React from "react";

// Importación de modulos y componentes
import Aside from "../../components/contenedores/Aside";
import H1 from "../../components/title/h1";
import H2 from "../../components/title/h2";
import Div from "../../components/contenedores/Div";
import BtnBlockOutLine from "../../components/botton/btn-block-outline";

// Importación de Interfaces
import type { IAsideLogin } from "../../interface/Iaside/IAside-login";

const AsideLogin: React.FC<IAsideLogin> = ({
    keyAside = undefined,
    classAside = undefined,
    textH1 = '',
    textH2 = '',
    textBtn,
    classRegistro = undefined,
    classBtnRegistro = undefined,
    onClick,
}) => {

    return (
        <Aside keyAside={keyAside} className={classAside}>
            <Div key="titulo-1">
                <H1 text={textH1}/>
            </Div>
            <Div key="titulo-2">
                <H2 text={textH2}/>
            </Div>
            <Div key="btn-registro" className={classRegistro}>
                <BtnBlockOutLine
                    text={textBtn}
                    variantOutLine={"btn-outline-secondary"}
                    className={classBtnRegistro}
                    sizes={"btn-lg"}
                    onClick={onClick}
                />
            </Div>
        </Aside>
    );
};

export default AsideLogin;