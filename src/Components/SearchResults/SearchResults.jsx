import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={props.results} isRemoval={true} onAdd={props.onAdd} />
        </div>
    );
};

export default SearchResults;