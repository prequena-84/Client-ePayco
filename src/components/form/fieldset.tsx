import React from "react";
import type { IFieldset } from "../../typescript/interface/html/html.interfaces";

const Fieldset:React.FC<IFieldset> = ( {children, className = undefined} ) => {
    return (
        <fieldset 
            className={className}
        >
            {children}
        </fieldset>
    );
};

export default Fieldset;