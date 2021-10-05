//Importaciones de componentes
import Head from 'next/head';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import styles from '../styles/Home.module.css';
import { Auth0Provider } from '@auth0/auth0-react';

//componente de la pagina principal
const Home = () => {
  return (
    <Auth0Provider domain="dev-dou8wmxc.us.auth0.com" clientId="8izHB80eLmjNtrOmvOsDzT9oPMNbIZOg" redirectUri="https://recepy-application.vercel.app/" >
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
          <Login />
          <Logout />
        </main>
      </div>
    </Auth0Provider>
  );
};

//Exportacion del componente Home
export default Home;