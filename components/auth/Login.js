//Importaciones de Auth0
import { useAuth0 } from '@auth0/auth0-react';

//Componente para el inicio de seccion o creacion de la cuenta
const Login = () => {
    //Custom hook de auth0 para las funciones de inicio
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick={() => loginWithRedirect()} >
            Log In
        </button>
    );
};

//Exportacion del componente Login
export default Login;