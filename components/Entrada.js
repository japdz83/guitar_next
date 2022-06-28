import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formaterFecha } from "../helper";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
    const { titulo, imagen, resumen, published_at, id, url } = entrada;

    return (
        <article>
            <Image
                priority="true"
                layout="responsive"
                src={imagen.url}
                alt={`imgen blog ${titulo}`}
                width={800}
                height={600}
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formaterFecha(published_at)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer Entrada</a>
                </Link>
            </div>
        </article>
    );
};

export default Entrada;
