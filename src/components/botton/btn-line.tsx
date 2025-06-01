// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IBtn } from "../../interface/Ibtn/IBtn";

const BtnLine:React.FC<IBtn> = ( {
    type="button",
    text= null,
    onClick=undefined,
    className="",
    variantLine="btn-primary",
    disabled=false,
    sizes="btn-sm",
} ) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variantLine} ${sizes} ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default BtnLine;