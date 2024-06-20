import './App.css';
import Login from './components/Login';
import React, {useState, useEffect} from 'react';
import {getTokenFromURL} from './vibestream';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';
import Player from './components/Player';


const vibestream = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      vibestream.setAccessToken(_token);
      vibestream.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      vibestream.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      vibestream.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player vibestream={vibestream} /> : <Login />}
    </div>
  );
}

export default App;
