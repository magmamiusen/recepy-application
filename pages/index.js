//Importaciones de componentes
import Head from 'next/head';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import styles from '../styles/Home.module.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from '../components/auth/Profile';
import Add from '../components/database/upload/Add';
import Get from '../components/database/download/Get'
import { useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { dataBase } from '../components/database/config/config';

//componente de la pagina principal
const Home = () => {
  //useState para almacenar la informacion que viene desde firebase
  const [cards, setCards] = useState([{
    name: "1",
    type: "1",
    description: "1"
  },]);

  //Funcion para descargar los datos de las recetas, desde firebase
  const download = async () => {
    const query = await getDocs(collection(dataBase, 'testingBuild'));
    query.forEach(document => {
      setCards( cards => [...cards, document.data()] );
    });
  };

  return (
    <Auth0Provider domain="dev-dou8wmxc.us.auth0.com" clientId="8izHB80eLmjNtrOmvOsDzT9oPMNbIZOg" redirectUri="https://recepy-application.vercel.app/" >
      <div className={styles.container} onLoad={download} >
        {/*Contenedor de metadatos de la pagina*/}
        <Head>
          <title>Recepy</title>
          <meta name="description" content="Home menu of Recepy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*Contenedor de todos los componentes de la pagina*/}
        <main className={styles.main}>
          <Profile />
          <Login />
          <Logout />
          <Add />
          <Get data={cards} />
        </main>
      </div>
    </Auth0Provider>
  );
};

//Exportacion del componente Home
export default Home;