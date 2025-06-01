// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { Ifieldset } from "../../interface/IForms/IFieldset";

const Fieldset:React.FC<Ifieldset> = ( {children, className = undefined} ) => {
    return (
        <fieldset 
            className={className}
        >
            {children}
        </fieldset>
    );
};

export default Fieldset;