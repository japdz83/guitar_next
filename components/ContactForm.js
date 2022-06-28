import React from "react";
import styles from "../styles/Contacto.module.css";

const ContactForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.campos}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Nombre" />
            </div>
            <div className={styles.campos}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div className={styles.campos}>
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" placeholder="Teléfono" />
            </div>
            <div className={styles.campos}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" placeholder="Mensaje" />
            </div>
        </form>
    );
};

export default ContactForm;
