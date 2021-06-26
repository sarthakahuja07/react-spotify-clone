import React from 'react'
import {loginURI} from '../spotify';
import Button from '@material-ui/core/Button';
import '../css/loginComponent.css'
function Login() {
    return (
        <div className="login-container">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" className="login__logo" />
            <a href={loginURI}>
                <Button variant="contained" className="login__button">Login With Spotify</Button>
            </a>
        </div>
    )
}

export default Login
