// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { IAside } from "../../typescript/interface/container/aside.interfaces"; //IAside";

const Aside: React.FC<IAside> = ({
    keyAside = undefined,
    children,
    className = undefined
}) => {
    return (
        <aside 
            key={keyAside}
            className={className}
        >
            {children}
        </aside>
    );
};

export default Aside;