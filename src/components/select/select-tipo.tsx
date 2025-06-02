// Importacion de hooks y componentes de React
import React from "react";

// Importación de interfaces
import type { Iselect } from "../../interface/ISelect/ISelect";

const SelectTipoTransaccion: React.FC<Iselect> = ( {name=undefined,key=undefined, className = undefined, value, onChange} ) => {
    return (
      <select 
        name={name}
        className={`form-select form-select-lg mb-3 ${className}`} 
        aria-label="Large select example"
        key={key}
        value={value}
        onChange={onChange}
      >
        <option value="recarga" >recarga</option>
        <option value="pago" >pago</option>
      </select>
    );
};

export default SelectTipoTransaccion;