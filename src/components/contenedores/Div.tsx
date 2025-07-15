import React from "react";
import type { IDiv } from "../../typescript/interface/html/html.interfaces";

const Div: React.FC<IDiv> = ( {children, className = undefined} ) => {
    return(
        <div className={className}>
            {children}
        </div>
    );
};

export default Div;