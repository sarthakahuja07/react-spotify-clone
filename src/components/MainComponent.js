import React, { useEffect, useMemo } from 'react'
import Login from './LoginComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getTokenFromResponse } from '../spotify';
import { set_token, set_user, set_user_playlists } from '../redux/Action_creator';
import SpotifyWebApi from 'spotify-web-api-js';
import Spotify from './SpotifyComponent';


function Main() {
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const _spotifyApi = new SpotifyWebApi();

    useEffect(() => {
        const hash = getTokenFromResponse();
        let _token = hash.access_token;
        if (token == null) {
            dispatch(set_token(_token))
        }

        _spotifyApi.setAccessToken(token);
        console.log(_spotifyApi);


        //Saving user //
        _spotifyApi.getMe()
            .then(user => {
                // console.log(user);
                dispatch(set_user(JSON.stringify(user)))
            })
            .catch(err => console.log(err))


        // getting user playlists

        _spotifyApi.getUserPlaylists("4d3s4xj2kfe0qzyz8qhepb0sb")
            .then(playlists => {
                dispatch(set_user_playlists(playlists.items))
            })
            .catch(err => console.log(err))

    }, [_spotifyApi, dispatch, token])


  

    return (
        token ?
            <Spotify spotifyAPI={_spotifyApi} />
            :
            <div>
                <Login />
            </div>
    )
}
export default Main
