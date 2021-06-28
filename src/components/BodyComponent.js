import React, { useEffect, useState } from 'react'
import '../css/bodyComponent.css';
import Header from './HeaderComponent';
import Songs from './SongsComponent';
// import RGBaster from 'rgbaster';
import analyze from 'rgbaster'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Loading from './LoadingComponent';

function Body() {
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        var img = 'https://seed-mix-image.spotifycdn.com/v6/img/artist/6AgTAQt8XS6jRWi4sX7w49/en/large'
        var r = document.querySelector(':root');
        analyze(img)
            .then(result => {
                setisLoading(false)
                r.style.setProperty('--bgcolor', result[0].color)
            })
    }, [])
    return (

        isLoading ?
            <div className="body-container">
                <Loading />
            </div>
            :
            <div className="body-container">
                <div className="body__header">
                    <Header />
                    <div className="body__info">
                        <img className="body__info__img" src="https://seed-mix-image.spotifycdn.com/v6/img/artist/6AgTAQt8XS6jRWi4sX7w49/en/large" alt="" />
                        <div className="body__info__text">
                            <strong>Playlist</strong>
                            <h2>Viral Hits</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptate deserunt quidem odio similique mollitia numquam consequatur ad, reprehenderit iusto modi omnis. At odit repellat possimus vitae minus quo omnis.</p>

                        </div>
                    </div>
                    <div className="songs__icons">
                        <PlayCircleFilledIcon color='error' className="body__shuffle" />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon style={{ color: 'white' }} />
                    </div>
                </div>
                <div className="body__songs">
                    <Songs />

                </div>
            </div>
    )
}

export default Body
