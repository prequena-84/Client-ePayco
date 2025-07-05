// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { Ilabel } from "../../typescript/interface/forms/Ilabel";

const Label: React.FC<Ilabel> = ( {text, className = undefined, htmlFor=undefined} ) => {
    return (
        <label 
            className={className} 
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
};

export default Label;