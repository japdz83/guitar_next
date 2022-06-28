import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
    const { descripcion, id, imagen, precio, nombre, url } = guitarra;

    return (
        <div className={styles.guitarra}>
            <Image
                layout="responsive"
                src={imagen.url}
                alt={`Imagen Guitarra ${nombre}`}
                width={250}
                height={520}
            />
            <div className={styles.contenido}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver Producto</a>
                </Link>
            </div>
        </div>
    );
};

export default Guitarra;
