import React from "react";
import Div from "../contenedores/Div";
import BtnLine from "./btn-line";
import type { IBtn } from "../../typescript/interface/html/html.interfaces";

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