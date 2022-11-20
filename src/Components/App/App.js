import SearchBar from "../SearchBar/SearchBar.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import "./App.css";
import Spotify from "../../util/Spotify.js";
import React, {useState} from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const date = new Date();

  /* Method that is trigged when 'SAVE TO SPOTIFY' button is clicked
     It uses Spotify.js to create and populate a new playlist */
  const savePlaylist = () => {
    const tracksURIs = playlistTracks.map(track => track.URI);
    Spotify.savePlaylist(playlistName, tracksURIs);
    setPlaylistName('New playlist');
    setResults([]);
    setPlaylistTracks([]);
  };

  /* Method that is trigged when 'Search' button is clicked
     It uses Spotify.js to fetches from Spotify API looking for tracks */
  const search = async (searchTerm) => {
    const response = await Spotify.search(searchTerm);
    setResults(response);
  };

  // Method that is trigged when '+' button is clicked
  const addTrack = (track) => {
    if (!playlistTracks.some((el) => el.id === track.id)) {
      setPlaylistTracks((prevValues) => [...prevValues, track]);
    }
  };
  // Method that is trigged when '-' button is clicked
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((el) => el.id !== track.id));
  };

  // Method that sets a new playlist name when the user type on Playlist's component input
  const changePlaylistName = (e) => {
    setPlaylistName(e.nativeEvent.target.value);
  };

  return (
    <div>
      <div className="marker">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </div>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults results={results} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            changePlaylistName={changePlaylistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
      <div className="marker">
        <h1>Nicolas de Moura {date.getFullYear()}</h1>
        <div className="links">
          <a href="https://github.com/NicolasMouraC" className="highlight"><ion-icon name="logo-github" size="la"></ion-icon></a>
          <a href="https://www.linkedin.com/in/nicolas-moura-b677b8232/" className="highlight"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
    </div>
  );
}

export default App;
