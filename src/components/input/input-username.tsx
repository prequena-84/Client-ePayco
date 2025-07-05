// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IInputGroupText } from "../../typescript/interface/input/input.group.text.interfaces";

const InputUsername:React.FC<IInputGroupText> = ({
    name,
    placeHolder,
    arialLabel,
    onChange,
    value, 
    className = undefined,
    classInput = undefined,
} ) => {
    
    return (
        <div className={`input-group mb-3 ${className}`}>
            <span className="input-group-text" id="basic-addon1">@</span>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                type="text" 
                className={`form-control ${classInput}`}
                placeholder={placeHolder} 
                aria-label={arialLabel} 
                aria-describedby="basic-addon1"
            />
        </div>
    );
};

export default InputUsername;