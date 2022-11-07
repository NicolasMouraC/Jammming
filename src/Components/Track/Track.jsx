import React from 'react';
import './Track.css';

function Track(props) {
    /*const renderAction = () => {
        let button = props.isRemoval === true ? '-' : '+';
        return button;
    };*/

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.song.name}</h3>
                <p>{props.song.artist} | {props.song.track}</p>
            </div>
            <button className="Track-action">/* renderAction will go here */</button>
        </div>
    )
}

export default Track;