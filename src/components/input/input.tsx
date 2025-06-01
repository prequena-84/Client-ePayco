// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IInputGroupText } from "../../interface/IInput/IInput-group-text";

const Input:React.FC<IInputGroupText> = ({
    name,
    type="text",
    placeHolder,
    arialLabel,
    onChange,
    value, 
    className = undefined,
    classInput = undefined,
}) => {
    
    return (
        <div className={`input-group mb-3 ${className}`}>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                type={type} 
                className={`form-control ${classInput}`}
                placeholder={placeHolder} 
                aria-label={arialLabel} 
                aria-describedby="basic-addon1"
            />
        </div>
    );
};

export default Input;