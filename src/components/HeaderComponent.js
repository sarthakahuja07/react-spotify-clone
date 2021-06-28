import React, { useEffect } from 'react'
import '../css/headerComponent.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from 'react-redux';



function Header() {
    const user = useSelector(state => JSON.parse(state.user))

    useEffect(() => {

        console.log(user);

    }, [user])
    return (
        <div className="header-container">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for songs or playlists" />
            </div>

            <div className="header__right">

                <Avatar src={user.images[0].url}/>
                <h4>{user.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
