import ContactForm from "../components/ContactForm";
import DatosContacto from "../components/DatosContacto";
import Layout from "../components/Layout";
import styles from "../styles/Contacto.module.css";

const Contacto = () => {
    return (
        <Layout pagina="Contacto">
            <div className="contenedor">
                <h1 className="heading">Contacto</h1>
                <div className={styles.contacto}>
                    <DatosContacto />
                    <ContactForm />
                </div>
            </div>
        </Layout>
    );
};

export default Contacto;
