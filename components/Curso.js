import React from "react";
import Link from "next/link";
import styles from "../styles/Curso.module.css";

const Curso = ({ cursos }) => {
    const { imagen, titulo, contenido } = cursos;
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className="heading">{titulo}</h2>
                    <p className={styles.descripcion}>{contenido}</p>
                    <Link href="#">
                        <a className={styles.enlace}> Más Información</a>
                    </Link>
                </div>
            </div>
            <style jsx>
                {`
                    section {
                        padding: 10rem 0;
                        margin-top: 10rem;
                        background-image: linear-gradient(
                                to right,
                                rgb(0 0 0 / 0.65),
                                rgb(0 0 0 / 0.7)
                            ),
                            url(${imagen.url}) !important;
                        background-size: cover;
                        background-position: 50%;
                    }
                `}
            </style>
        </section>
    );
};

export default Curso;
