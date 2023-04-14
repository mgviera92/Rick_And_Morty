import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './App.module.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '02707b54ebe2.1596efb6015c50aeb7c2';


function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();

   const [access, setAccess] = useState(false);
   const EMAIL = 'gabiviera92@gmail.com';
   const PASSWORD = '12345678';

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   //useEffect recibe dos parámetros: una callback y un array
   useEffect(() => {
      !access && navigate ('/') //si access es false, lo niego para que se quede en '/', si es true lo niego para que se pueda redirigir a '/home'
   }, [access]) //queda pendiente de algun cambio en access

   const onSearch = (id) => { 
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }


   return (
      <div className= {style.app}>
         <div className = {style.nav}>
         {location.pathname === '/' ? <Form login = {login}/> : <Nav onSearch = {onSearch}/>}
         </div>
         <Routes>
            <Route path = '/home' element = {<Cards characters={characters} onClose = {onClose}/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         <div>
            
         </div>
      </div>
   );
}

export default App;
