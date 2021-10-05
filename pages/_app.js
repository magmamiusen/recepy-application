//Estilos globales de nuestra App
import '../styles/globals.css';

//Conponente renderizador de la App
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

//Exportacion del componente que renderiza nuestra App
export default MyApp