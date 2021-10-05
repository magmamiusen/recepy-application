//Importaciones de Auth0
import { useAuth0 } from '@auth0/auth0-react';

//Componente para el inicio de seccion o creacion de la cuenta
const Login = () => {
    //Custom hook de auth0 para las funciones de inicio
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    //Boton para iniciar la ingresar o iniciar la cuenta
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()} >
                Log In
            </button>
        )
    );
};

//Exportacion del componente Login
export default Login;