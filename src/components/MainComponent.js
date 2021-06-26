import React from 'react'
import Login from './LoginComponent';
import {useSelector} from 'react-redux';

function Main() {
    return (
        useSelector((state) => state.token)?
        <div>hi</div>
        :
        <div>
            <Login/>
        </div>
    )
}

export default Main
