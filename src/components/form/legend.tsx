// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { Ilegend } from "../../interface/IForms/ILegend";

const Legend: React.FC<Ilegend> = ( {text, className=undefined} ) => {
    
    return (
        <legend className={className}>
            {text}
        </legend>
    )
};

export default Legend;