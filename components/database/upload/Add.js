import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { dataBase } from '../config/config';

const Add = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        type: "",
    });

    const typing = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const sent = async event => {
        event.preventDefault()

        try {
            await addDoc(collection(dataBase, "testingBuild"), {
                name: data.name,
                description: data.description,
                type: data.type,
                date: new Date
            });
        } catch (error) {
            console.log("An error has occurred + " + error);
        };
        
        window.location.reload()
    }
    
    return (
        <section>
            <form>
                <h1>Agrega Una Receta</h1>
                <label>Nombra tu receta</label>
                <input type="text" name="name" required onChange={typing} />
                <label>¿Como se hace tu receta?</label>
                <textarea name="description" required onChange={typing} />
                <label>¿De que tipo es tu receta?</label>
                <input type="text" name="type" required onChange={typing} />
                <input type="submit" value="Agregar" onClick={sent} />
            </form>
        </section>
    );
};

export default Add;