// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { Ifieldset } from "../../typescript/interface/forms/fieldset.interfaces";

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