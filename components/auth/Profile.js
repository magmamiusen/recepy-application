//Importaciones de Auth0
import { useAuth0 } from '@auth0/auth0-react';

//Componente que muestra las credenciales del usuario
const Profile = () => {
    //Custom hook de auth0 extraer los datos de la cuenta
    const { user, isAuthenticated, isLoading } = useAuth0();

    //Cuando los datos esten llegando, se motrara esto
    if (isLoading) {
        return <h1>Loading</h1>
    };

    //Si los datos ya llegaron, se muestra esto
    return (
        isAuthenticated && (
            <section>
                <img src={user.picture} alt={user.name} />
                <h1>{user.name}</h1>
                <h5>{user.email}</h5>
            </section>
        )
    );
};

//Exportacion del componente Profile
export default Profile;