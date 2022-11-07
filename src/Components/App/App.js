import SearchBar from '../SearchBar/SearchBar.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [resultsState, setResults] = useState([{track: 'test', name: 'test', artist: 'test', album: 'test'}]);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={resultsState}/>
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
