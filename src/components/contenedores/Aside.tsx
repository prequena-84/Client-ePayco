import React from "react";
import type { IAside } from "../../typescript/interface/html/html.interfaces";

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