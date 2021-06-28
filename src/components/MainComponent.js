import React, { useEffect } from 'react'
import Login from './LoginComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getTokenFromResponse } from '../spotify';
import { set_token, set_user } from '../redux/Action_creator';
import SpotifyWebApi from 'spotify-web-api-js';
import Spotify from './SpotifyComponent';

function Main() {
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const hash = getTokenFromResponse();
        let _token = hash.access_token;

        if (token == null) {
            dispatch(set_token(_token))
        }

        const _spotifyApi = new SpotifyWebApi();
        _spotifyApi.setAccessToken(token);
        console.log(_spotifyApi);
        window.location.hash = "";

        //Saving user //
        _spotifyApi.getMe()
            .then(user => {
                // console.log(user);
                dispatch(set_user(JSON.stringify(user)))
            })
            .catch(err => console.log(err))



    }, [dispatch, token])
    return (
        token ?
            <Spotify />
            :
            <div>
                <Login />
            </div>
    )
}
export default Main
