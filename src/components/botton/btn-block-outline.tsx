// Importacion de hooks y componentes de React
import React from "react";

// Importación de Componentes
import Div from "../contenedores/Div";
import BtnOutLine from "./btn-outline";

// Importación de interfaces
import type { IBtn } from "../../typescript/interface/btn/btn.interfaces";

const BtnBlockOutLine: React.FC<IBtn> = ( {
    type, 
    className = undefined, 
    variantOutLine = "btn-outline-primary", 
    disabled=false,
    text ="",
    sizes= "btn-sm",
    onClick 
}) => {

    return (
        <Div
            className="d-grid gap-2"    
        >
            <BtnOutLine
                type={type}
                text={text}
                variantOutLine={variantOutLine}
                className={className} 
                onClick={onClick}
                sizes={sizes}
                disabled={disabled}
            />
        </Div>
    );
};

export default BtnBlockOutLine;