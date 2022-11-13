import React from 'react';
import './Track.css';

function Track(props) {
    const addTrack = () => {
        props.onAdd(props.track);
    }

    const removeTrack = () => {
        props.onRemove(props.track)
    }

    const renderAction = () => {
        if (props.isRemoval) {
            return <button onClick={addTrack} className="Track-action">+</button>
        } else {
            return <button onClick={removeTrack} className="Track-action">-</button>
        }
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.track}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;