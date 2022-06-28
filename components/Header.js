import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/img/logo.svg"
                                width={400}
                                height={100}
                                alt="Logo Image"
                            />
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/"> Inicio </Link>
                        <Link href="/nosotros"> Nosotros </Link>
                        <Link href="/blog"> Blog </Link>
                        <Link href="/tienda"> Tienda </Link>
                        <Link href="/contacto"> Contacto </Link>
                        <Link href="/carrito">
                            <a className={styles.carrito}>
                                <Image
                                    layout="fixed"
                                    src="/img/carrito.png"
                                    width={30}
                                    height={25}
                                    alt="Imagen Carrito"
                                />
                            </a>
                        </Link>
                    </nav>
                </div>
                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo: {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}> Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div>
            {router.pathname === "/" && (
                <div className={styles.guitarra}>
                    <Image
                        width={500}
                        height={1200}
                        layout="fixed"
                        src="/img/header_guitarra.png"
                        alt="Imagen Header guitarra"
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
