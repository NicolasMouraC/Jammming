import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList results={props.results} />
        </div>
    );
};

export default SearchResults;