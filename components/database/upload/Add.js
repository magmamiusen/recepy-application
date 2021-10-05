//Importaciones de funciones
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { dataBase } from '../config/config';

//Componente para agregar las recetas
const Add = () => {
    //useState para guardar los datos de la receta
    const [data, setData] = useState({
        name: "",
        description: "",
        type: "",
    });

    //Funcion para alterar los datos del useState
    const typing = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    //Funcion para enviar la informacion a firebase
    const sent = async event => {
        //Evitamos que se recargue
        event.preventDefault();

        //Se captura si el proceso es exitoso o erroneo
        try {
            //Si esta bien, se envian estos datos
            await addDoc(collection(dataBase, 'testingBuild'), {
                name: data.name,
                description: data.description,
                type: data.type,
                date: new Date
            });
            //Mensaje de confirmacion
            alert('Receta subida con exito');

        } catch (error) {
            //Si esta mal, se informa del error
            console.log('An error has occurred : ' + error);
        };

        //Recargamos la pagina para mostrar la receta nueva
        window.location.reload()
    }
    
    //Formulario para agregar los datos de la receta
    return (
        <section>
            <form>
                <h1>Agrega Una Receta</h1>
                {/*Nombre de la receta*/}
                <label>Nombra tu receta</label>
                <input 
                    type="text" 
                    name="name" 
                    required 
                    onChange={typing}
                />
                {/*Descripcion de la receta*/}
                <label>¿Como se hace tu receta?</label>
                <textarea 
                    name="description" 
                    required 
                    onChange={typing} 
                />
                {/*Tipo de la receta*/}
                <label>¿De que tipo es tu receta?</label>
                <input 
                    type="text" 
                    name="type" 
                    required 
                    onChange={typing} 
                />
                {/*Boton para subir la receta*/}
                <input 
                    type="submit" 
                    value="Agregar" 
                    onClick={sent}
                />
            </form>
        </section>
    );
};

//Exportacion del componente Add
export default Add;