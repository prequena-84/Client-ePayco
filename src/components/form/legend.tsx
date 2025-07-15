import React from "react";
import type { ILegend } from "../../typescript/interface/html/html.interfaces";

const Legend: React.FC<ILegend> = ( {text, className=undefined} ) => {
    
    return (
        <legend className={className}>
            {text}
        </legend>
    )
};

export default Legend;