import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, LOGIN } from "./action-types";

const initialState = {
    idUser: 0,
    myFavorites: [],
    allCharactersFav : []
}

const reducer =  (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FAV:
            return { 
                ...state,
                myFavorites: payload,
                allCharactersFav: payload 
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }

        case FILTER:
            const personajesFiltrados = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: 
                payload === 'allCharacters'
                ? [...state.allCharactersFav]
                : personajesFiltrados
            }

        case ORDER:
            const allCharactersFavCopia = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites: 
                    payload === 'A'
                    ? allCharactersFavCopia.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopia.sort((a, b) => b.id - a.id)
            }

        case LOGIN:
            return  {
                ...state,
                idUser: payload
            };

        default:
            return {...state}
    }
}  

export default reducer;