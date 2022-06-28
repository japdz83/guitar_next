import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({ guitarra, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(1);
    const { descripcion, nombre, precio, imagen, id } = guitarra[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cantidad < 1) {
            alert("Cantidad no valida");
            return;
        }
        // Agregarlo al Carrito
        const guitarraSeleccionada = {
            id,
            nombre,
            precio,
            cantidad,
            imagen: imagen.url,
        };
        agregarCarrito(guitarraSeleccionada);
    };
    console.log(handleSubmit);

    return (
        <Layout pagina={`Guitarra ${nombre}`}>
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
                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label>Cantidad: </label>
                        <select
                            value={cantidad}
                            onChange={(e) =>
                                setCantidad(parseInt(e.target.value))
                            }
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <input type="submit" value="Agregar al carrito" />
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps({ query: { url } }) {
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
    const respuesta = await fetch(urlGuitarra);
    const guitarra = await respuesta.json();

    console.log(guitarra);

    return {
        props: {
            guitarra: guitarra,
        },
    };
}

export default Producto;
