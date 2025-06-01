// Importacion de hooks y componentes de React
import React from "react";

// Importación de Interfaces
import type { IH1 } from "../../interface/Ititle/Ih1";

const H1: React.FC<IH1> = ( {text="", className = undefined} ) => {
    return (
        <h1 className={className}>
            {text}
        </h1> 
    );
};

export default H1;