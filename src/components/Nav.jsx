import SearchBar from './SearchBar.jsx';

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch = {onSearch}/>
        </nav>
    )
}

export default Nav;