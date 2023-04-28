import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

const URL_BASE = 'http://localhost:3001/rickandmorty/character';
// const API_KEY = '02707b54ebe2.1596efb6015c50aeb7c2';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({}); //uso destructuring porque useState me da un array de 2 posiciones, el primero es un estado y el segundo nos permite modificar ese estado

    useEffect(() => { //useEffect simula los 3 ciclos de vida
        axios(`${URL_BASE}/${id}`)
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
        <div className = {style.container}>
            <img src={character?.image} alt='{character?.name}' className = {style.img}></img>
            <h2>NAME: {character?.name}</h2>
            <h2>STATUS: {character?.status}</h2>
            <h2>SPECIES: {character?.species}</h2>
            <h2>GENDER: {character?.gender}</h2>
            <h2>ORIGIN: {character?.origin?.name}</h2>
        </div>
    )
}

export default Detail;