import React from 'react';
import Track from '../Track/Track.jsx';
import './TrackList.css';

function TrackList(props) {
    return (
        <div className="TrackList">
            Tracklist
            {
                props.tracks.map(el => { 
                    return <Track track={el} key={el.name} isRemoval={props.isRemoval} onAdd={props.onAdd} onRemove={props.onRemove} /> 
                })
            }
        </div>
    );
};

export default TrackList;