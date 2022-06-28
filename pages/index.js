import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, cursos, entradas }) {
    return (
        <Layout pagina="Inicio" guitarra={guitarras[3]}>
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>
                <Listado guitarras={guitarras} />
            </main>
            <Curso cursos={cursos} />
            <main className="contenedor">
                <ListadoBlog entradas={entradas} />
            </main>
        </Layout>
    );
}

export async function getServerSideProps() {
    const urlGuitarra = `${process.env.API_URL}/guitarras?_limit=6&_sort=created_at:desc`;
    const urlCursos = `${process.env.API_URL}/cursos`;
    const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

    const [resGuitarra, resCursos, resEntradas] = await Promise.all([
        fetch(urlGuitarra),
        fetch(urlCursos),
        fetch(urlBlog),
    ]);
    const [guitarras, cursos, entradas] = await Promise.all([
        resGuitarra.json(),
        resCursos.json(),
        resEntradas.json(),
    ]);

    return {
        props: {
            guitarras: guitarras,
            cursos: cursos,
            entradas: entradas,
        },
    };
}
