const clientID = '92e9878f347d4a8e909cd04bf4342b7d';
const redirectURL = 'http://localhost:3000';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // REGEX expressions
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);


        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
            window.location = accessURL;
        }
    },

    // Method that requests for tracks information  
    async search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        const responseJson = await response.json();

        if (!responseJson) {
            return [];
        }

        return responseJson.tracks.items.map(track => ({
            id: track.id,
            name: track.name, 
            artist: track.artists[0].name, 
            album: track.album.name, URI: 
            track.uri
        }));
    },

    // Method that creates a new playlist and puts the tracks in
    async savePlaylist(playlistName, tracksURIs) {
        if (!playlistName || !tracksURIs.length) {
            return ;
        }
        
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userID;

        // Gets the user's id
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        const responseJson = await response.json();
        console.log(responseJson)
        userID = responseJson.id;

        // Makes a new Spotify playlist
        const newPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name: playlistName})
        });
        const newPlaylistResponseJson = await newPlaylistResponse.json();
        const playlistID = newPlaylistResponseJson.id;
        console.log(playlistID)

        // Fill the playlist with tracks
        await fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({uris: tracksURIs})
        })
    }
};

export default Spotify