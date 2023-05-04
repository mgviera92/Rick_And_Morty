import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, LOGIN } from "./action-types";

export const addFav = (character, idUser) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav?idUser=${idUser}`;
    return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

         if(!data.length) throw Error('No hay favoritos') 

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
    };
 };

 export const removeFav = (id, idUser) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}?idUser=${idUser}`;
    return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);

         if(!data.length) throw Error('No hay favoritos');

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      } catch (error) {
         console.log(error.message);
      }
    };
 };

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
};

export function login(email, password) {
   return async function (dispatch) {
      try {
         const obj = await fetch(
            `http://localhost:3001/login?email=${email}&password=${password}`
         ).then((response) => response.json());

         if (obj.access) dispatch({ type: LOGIN, payload: obj.id });
      } catch (error) {
         console.log(error);
      }
   };
}
