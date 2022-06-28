import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra }) => {
    return (
        <div>
            <Head>
                <title>Guitar LA App - {pagina}</title>
                <meta
                    name="description"
                    content="Sitio Web de ventas de guitarras"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
                />
            </Head>
            <Header guitarra={guitarra} />
            {children}
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    guitarra: null,
};

export default Layout;
