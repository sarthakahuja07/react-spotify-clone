import React from 'react'
import '../css/headerComponent.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
    return (
        <div className="header-container">
                <div className="header__left">
                    <SearchIcon />
                    <input type="text" placeholder="Search for songs or playlists" />
                </div>
                <div className="header__right">
                    <Avatar/>
                    <h4>Sarthak Ahuja</h4>
                </div>
        </div>
    )
}

export default Header
