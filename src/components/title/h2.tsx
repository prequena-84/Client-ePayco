// Importacion de hooks y componentes de React
import React from "react";

// Importación de Interfaces
import type { IH2 } from "../../interface/Ititle/Ih2";

const H2: React.FC<IH2> = ( {text="", className = undefined} ) => {
    return (
        <h2 className={className}>
            {text}
        </h2> 
    );
};

export default H2;