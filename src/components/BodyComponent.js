import React from 'react'
import '../css/bodyComponent.css';
import Header from './HeaderComponent';
import Songs from './SongsComponent';
function Body() {
    return (
        <div className="body-container">
            <Header />
            <div className="body__info">
                <img className="body__info__img" src="https://i.scdn.co/image/ab67706f000000036bdff7dc0e53fe6ca17749b5" alt="" />
                <div className="body__info__text">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptate deserunt quidem odio similique mollitia numquam consequatur ad, reprehenderit iusto modi omnis. At odit repellat possimus vitae minus quo omnis.</p>
                </div>
                <Songs/>
            </div>
        </div>
    )
}

export default Body
