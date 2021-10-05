//Importaciones de componentes
import Head from 'next/head';
import styles from '../styles/Home.module.css';

//componente de la pagina principal
const Home = () => {
  return (
    <div className={styles.container}>
      {/*Contenedor de metadatos de la pagina*/}
      <Head>
        <title>Recepy</title>
        <meta name="description" content="Home menu of Recepy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Contenedor de todos los componentes de la pagina*/}
      <main className={styles.main}>
        Juan Pablo Gutierrez Gutierrez
      </main>
    </div>
  );
};

//Exportacion del componente Home, componente de la pagina principal
export default Home;