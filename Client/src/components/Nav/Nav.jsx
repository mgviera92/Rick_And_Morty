import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = ({ onSearch }) => {
    return (
        <nav className = {style.nav}>
            <button className= {style.button}>
            <Link to='/home'>Home</Link>
            </button>
            <button className= {style.button}>
            <Link to='/about'>About</Link>
            </button>
            <button className= {style.button}>
            <Link to='/'>Log Out</Link>
            </button>
            <button className= {style.button}>
            <Link to='/favorites'>Favorites</Link>
            </button>
            <SearchBar onSearch = {onSearch}/>
        </nav>
    )
}

export default Nav;