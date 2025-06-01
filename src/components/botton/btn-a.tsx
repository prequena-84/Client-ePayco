// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IBtnA } from "../../interface/Ibtn/IBtnA";

const BtnA:React.FC<IBtnA> = ( {
    role=undefined,
    text= null,
    onClick=undefined,
    className="",
    variant="btn-primary",
    arialDisabled=false,
    sizes="btn-sm",
} ) => {

    return (
        <a 
            role={role}
            onClick={onClick}
            className={`btn ${variant} ${sizes} ${className}`}
            aria-disabled={arialDisabled}
        >
            {text}
        </a>
    );
};

export default BtnA;