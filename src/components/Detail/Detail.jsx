import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '02707b54ebe2.1596efb6015c50aeb7c2';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({}); //uso destructuring porque useState me da un array de 2 posiciones, el primero es un estado y el segundo nos permite modificar ese estado

    useEffect(() => { //useEffect simula los 3 ciclos de vida
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({}); //cuando se desmonta, se vacía
     }, [id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt='{character?.name}'></img>
        </div>
    )
}

export default Detail;