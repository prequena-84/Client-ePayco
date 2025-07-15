import React from "react";
import type { ISection } from "../../typescript/interface/html/html.interfaces";

const Section: React.FC<ISection> = ( {children, className = undefined} ) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
};

export default Section;