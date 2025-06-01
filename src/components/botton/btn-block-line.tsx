// Importacion de hooks y componentes de React
import React from "react";

// Importación de Componentes
import Div from "../contenedores/Div";
import BtnLine from "./btn-line";

// Importación de interfaces
import type { IBtn } from "../../interface/Ibtn/IBtn";

const BtnBlockLine: React.FC<IBtn> = ( {
    type, 
    className = undefined, 
    variantLine = "btn-primary", 
    disabled=false,
    text ="",
    onClick 
}) => {

    return (
        <Div
            className="d-grid gap-2"    
        >
            <BtnLine
                type={type}
                text={text}
                variantLine={variantLine}
                className={className} 
                onClick={onClick}
                disabled={disabled}
            />
        </Div>
    );
};

export default BtnBlockLine;