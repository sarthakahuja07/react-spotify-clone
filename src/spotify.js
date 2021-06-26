let client_id = "500d6bc2d0d94929a90b69bdf13cdf18";
let response_type = "token"
let redirect_uri = "http://localhost:3000"
let show_dialog = "true"
let authEndPoint = "https://accounts.spotify.com/authorize"
let scopes = ["user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"]

export const loginURI=`${authEndPoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=${response_type}&show_dialog=${show_dialog}`
export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };