
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3050/"; 
const clientId = "8c9436beda614d3eb06257d0524f706b";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
                                                let parts = item.split("=");
                                                initial[parts[0]] = decodeURIComponent(parts[1]);
                                                return initial;}, {});
    };
  

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;