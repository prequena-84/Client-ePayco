// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { ISection } from "../../interface/IContenedores/Isection";

const Section: React.FC<ISection> = ( {children, className = undefined} ) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
};

export default Section;