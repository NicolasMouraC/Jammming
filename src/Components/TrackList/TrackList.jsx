import React from 'react';
import Track from '../Track/Track.jsx';
import './TrackList.css';

function TrackList(props) {
    const songs = props.results.map((el) => { console.log(el) } )

    return (
        <div className="TrackList">
            /* You will add a map method that renders a set of Track components  */
            {
                props.results.map(el => { <Track song={el} key={el.name}/> })
            }
        </div>
    );
};

export default TrackList;