import React from "react";
import type { IHeader } from "../../typescript/interface/html/html.interfaces";

const Header: React.FC<IHeader> = ( {children, className = undefined} ) => {
    return(
        <header className={className}>
            {children}
        </header>
    );
};

export default Header;