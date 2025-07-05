// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IDiv } from "../../typescript/interface/container/div.interfaces";

const Div: React.FC<IDiv> = ( {children, className = undefined} ) => {
    return(
        <div className={className}>
            {children}
        </div>
    );
};

export default Div;