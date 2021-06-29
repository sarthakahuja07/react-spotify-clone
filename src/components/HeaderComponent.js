import React from 'react'
import '../css/headerComponent.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector,useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { set_token} from '../redux/Action_creator';


function Header() {
    const user = useSelector(state => JSON.parse(state.user))
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.clear()
        dispatch(set_token(null));
    }

    return (
        <div className="header-container">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for songs or playlists" />
            </div>

            <div className="header__right">
                <Tooltip title="Log Out" onClick={logout}>
                    <Link to={'/'}>
                        <Avatar src={user?.images[0].url} />
                    </Link>
                </Tooltip>
                <h4>{user?.display_name}</h4>
            </div>




        </div>
    )
}

export default Header
