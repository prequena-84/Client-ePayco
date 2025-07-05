// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IBtn } from "../../typescript/interface/btn/btn.interfaces";

const BtnOutLine:React.FC<IBtn> = ( {
    type="button",
    text= null,
    onClick=undefined,
    className="",
    variantOutLine="btn-outline-primary",
    ariaDisabled="false",
    disabled=false,
    sizes="btn-sm",
} ) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variantOutLine} ${sizes} ${className}`}
            arial-disabled={ariaDisabled}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default BtnOutLine;