import React from "react";
import type { ISelect } from "../../typescript/interface/html/html.interfaces";

const SelectTipoTransaccion: React.FC<ISelect> = ( {name=undefined,key=undefined, className = undefined, value, onChange} ) => {
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