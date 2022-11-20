import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist(props) {
    return (
        <div className="Playlist">
            <input value={props.playlistName} onChange={props.changePlaylistName} />
            <TrackList tracks={props.playlistTracks} isRemoval={false} onRemove={props.onRemove} />
            <button onClick={props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;