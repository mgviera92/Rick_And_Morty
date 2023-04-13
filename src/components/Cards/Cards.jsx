import Card from '../Card/Card.jsx';
import { CardsContainer } from './styledComponents.js';

function Cards({characters, onClose}) {
   return(
      <CardsContainer>
      {
         characters.map(({id, name, status, species, gender, image, origin}) => {
            return (
               <Card
               key = {id}
               id = {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               image = {image}
               origin = {origin.name}
               onClose = {onClose}
               />
            )
         })
      }
      </CardsContainer>
   )
}



export default Cards;
