import React from "react";
import type { IForm } from "../../typescript/interface/html/html.interfaces";

const Form:React.FC<IForm> = ( {children, className = undefined, onSubmit} ) => {
    return (
        <form 
            onSubmit={onSubmit}
            className={className}
        >
            {children}
        </form>
    );
};

export default Form;