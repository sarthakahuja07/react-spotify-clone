import React, { useEffect } from 'react'
import Login from './LoginComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getTokenFromResponse } from '../spotify';
import { set_token } from '../redux/Action_creator';

function Main() {
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    useEffect(() => {
        const hash = getTokenFromResponse();
        let _token = hash.access_token;
        if (token == null) {
            dispatch(set_token(_token))
        }
        window.location.hash = "";
    }, [dispatch, token])
    return (
        token ?
            <div>loggedIN</div>
            :
            <div>
                <Login />
            </div>
    )
}
export default Main
