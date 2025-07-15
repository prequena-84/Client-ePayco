import React from "react";
import type { ILabel } from "../../typescript/interface/html/html.interfaces";

const Label: React.FC<ILabel> = ( {text, className = undefined, htmlFor=undefined} ) => {
    return (
        <label 
            className={className} 
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
};

export default Label;