// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IHeader } from "../../interface/IContenedores/IHeader";

const Header: React.FC<IHeader> = ( {children, className = undefined} ) => {
    return(
        <header className={className}>
            {children}
        </header>
    );
};

export default Header;