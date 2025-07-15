import React from "react";
import type { IH2 } from "../../typescript/interface/html/html.interfaces";

const H2: React.FC<IH2> = ( {text="", className = undefined} ) => {
    return (
        <h2 className={className}>
            {text}
        </h2> 
    );
};

export default H2;