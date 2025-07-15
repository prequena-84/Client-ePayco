import React, { useState } from "react";
import type { IInputPassword } from "../../typescript/interface/html/html.interfaces";
import styles from "../../css/module/input/input-password.module.css";

const InputPassword: React.FC<IInputPassword> = ({
    name,
    id,
    placeHolder,
    onChange,
    value,
    className = undefined,
    classInput = undefined,
} ) => {

    // Estado para manejar la condicion del password
    const [ mostraPassword, setMostrarPassword ] = useState<boolean>(false);

    // Manejar el evento del click para mostrar el password
    const togglePasswordVisibility = () => {
        setMostrarPassword(!mostraPassword);
    };

    return (
        <div className={`col-auto ${styles["contenedor-div"]} ${className}`}>
            <label htmlFor={id} className="visually-hidden">Password</label>
            <input 
                name={name} 
                value={value}
                onChange={onChange} 
                id={id} 
                type={ mostraPassword ? 'text' : 'password' }
                className={`form-control ${styles["contenedor-input"]} ${classInput}`} 
                placeholder={placeHolder}
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="btn btn-primary"
                aria-label={!mostraPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'} // Mejora de accesibilidad
            >
                <i className={mostraPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
            </button>

        </div>
    );
};

export default InputPassword;