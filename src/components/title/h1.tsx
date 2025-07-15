import React from "react";
import type { IH1 } from "../../typescript/interface/html/html.interfaces";

const H1: React.FC<IH1> = ( {text="", className = undefined} ) => {
    return (
        <h1 className={className}>
            {text}
        </h1> 
    );
};

export default H1;