import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
    return (
        <Layout pagina="Nosotros">
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <div>
                        <Image
                            src="/img/nosotros.jpg"
                            layout="responsive"
                            width={600}
                            height={450}
                            alt="Nosotros Image"
                        />
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In ut eros augue. Cras at libero vitae arcu
                            volutpat lobortis. Curabitur malesuada tincidunt
                            malesuada. Vivamus scelerisque augue risus, ac
                            finibus nisl facilisis vitae. Nulla turpis nisi,
                            accumsan nec congue id, egestas ac orci. Suspendisse
                            ac sem sollicitudin turpis vehicula blandit. Quisque
                            imperdiet elementum erat at commodo. Curabitur
                            gravida maximus arcu vel ornare.
                        </p>

                        <p>
                            In sed metus ut mauris rutrum aliquet vel non dolor.
                            Pellentesque iaculis molestie dui et hendrerit.
                            Maecenas auctor nulla sed nulla pharetra gravida.
                            Curabitur id ligula at enim molestie pharetra quis
                            ut felis. Etiam vulputate facilisis orci non
                            maximus. Nulla non leo eget ante malesuada dapibus
                            eget vel odio. Donec ut tristique sapien, sit amet
                            suscipit tortor. Proin rhoncus augue eget eros
                            hendrerit dignissim. Nullam vitae fermentum lacus,
                            nec consectetur elit. Vivamus luctus commodo
                            accumsan.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Nosotros;
