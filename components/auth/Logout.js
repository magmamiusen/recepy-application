//Importaciones de Auth0
import { useAuth0 } from '@auth0/auth0-react';

//Componente para terminar la sesion de la app
const Logout = () => {
    //Custom hook de Auth0 para las funciones de cierre
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout({ returnTo: window.location.origin })} >
            Log Out
        </button>
    );
};

//Exportacion del componente Logout
export default Logout;