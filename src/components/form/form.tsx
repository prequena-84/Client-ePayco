// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { Iform } from "../../interface/IForms/IForms";

const Form:React.FC<Iform> = ( {children, className = undefined, onSubmit} ) => {
    return (
        <form 
            onSubmit={onSubmit}
            className={className}
        >
            {children}
        </form>
    );
};

export default Form;