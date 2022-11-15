import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const search = (e) => {
        props.onSearch(term);
    };

    const handleTermChange = ({target}) => {
        setTerm(target.value);
    };

    return (
        <div className="SearchBar">
            <input value={term} onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button onClick={search} className="SearchButton">SEARCH</button>
        </div>
    );
};

export default SearchBar;
