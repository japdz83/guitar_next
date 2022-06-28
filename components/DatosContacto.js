import React from "react";
import styles from "../styles/Contacto.module.css";

const DatosContacto = () => {
    return (
        <div>
            <div className={styles.datosCard}>
                <h1 className="heading">¿TIENES DUDAS O SUGERENCIAS?</h1>
                <p>
                    Puedes contactarnos por alguna de estas vías para mayor
                    información
                </p>
                <p>
                    {" "}
                    <i className="bx bxs-been-here"></i>{" "}
                    <span>Calle falsa 123</span>{" "}
                </p>
                <p>
                    {" "}
                    <i className="bx bxs-phone"></i> <span>555.55.55.55</span>{" "}
                </p>
                <p>
                    {" "}
                    <i className="bx bxs-envelope"></i>{" "}
                    <span>correo@correo.com</span>{" "}
                </p>
            </div>
        </div>
    );
};

export default DatosContacto;
