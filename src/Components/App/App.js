import SearchBar from '../SearchBar/SearchBar.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [results, setResults] = useState([
    {track: 'Track 1', name: 'Name 1', artist: 'Artist 1', album: 'Album 1', id: 1},
    {track: 'Track 2', name: 'Name 2', artist: 'Artist 2', album: 'Album 2', id: 2}
  ]);
  const [playlistName, setPlaylistName] = useState('Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([
    {track: 'Track 3', name: 'NAME 1', artist: 'ARTIST 1', album: 'ALBUM 1', id: 3},
    {track: 'Track 3', name: 'NAME 2', artist: 'ARTIST 2', album: 'ALBUM 2', id: 4}
  ]);

  const addTrack = (track) => {
    if ( !(playlistTracks.some(el => el.id === track.id)) ) {
      setPlaylistTracks(prevValues => [...prevValues, track])
    }
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(el => el.id !== track.id))
  }

  const changePlaylistName = (e) => {
    setPlaylistName(e.nativeEvent.target.value);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={results} onAdd={addTrack} />
          <Playlist playlistName={playlistName} changePlaylistName={changePlaylistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  );
}

export default App;
