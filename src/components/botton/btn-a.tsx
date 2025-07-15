import React from "react";
import type { IBtnA } from "../../typescript/interface/html/html.interfaces";

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