import React from "react";
import type { IBtn } from "../../typescript/interface/html/html.interfaces";

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