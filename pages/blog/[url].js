import Image from "next/image";
import { formaterFecha } from "../../helper";
import Layout from "../../components/Layout";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
    const { titulo, imagen, contenido, published_at, id, url } = entrada;

    return (
        <Layout pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image
                        priority="true"
                        layout="responsive"
                        src={imagen.url}
                        alt={`imgen blog ${titulo}`}
                        width={800}
                        height={600}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>
                            {formaterFecha(published_at)}
                        </p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.map((entrada) => ({
        params: { url: entrada.url },
    }));

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { url } }) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
    const respuesta = await fetch(urlBlog);
    const entrada = await respuesta.json();

    return {
        props: {
            entrada: entrada[0],
        },
    };
}

// export async function getServerSideProps({ query: { id } }) {
//     const url = `${process.env.API_URL}/blogs/${id}`;
//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();
//
//     return {
//         props: {
//             entrada: entrada,
//         },
//     };
// }

export default EntradaBlog;
