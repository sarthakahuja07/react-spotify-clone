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
import { useSelector } from 'react-redux';

function Body() {
    const curr_playlist = useSelector(state => state.curr_playlist)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        setisLoading(true);
        var link = curr_playlist?.images[0].url;
        if (link) {
            var img = link;
            var r = document.querySelector(':root');
            analyze(img)
                .then(result => {
                    r.style.setProperty('--bgcolor', result[0].color)
                    setisLoading(false)
                })
        } else {
            setisLoading(false);
        }

    }, [curr_playlist])


    useEffect(() => {

        var body = document.querySelector(".body-container");
        var songs_icons = document.querySelector(".songs__icons");
        if (songs_icons) {
            var top = songs_icons.offsetTop;
            body.addEventListener("scroll", () => {
                if (body.scrollTop >= top) {
                    songs_icons.classList.add("songs__icons-fixed");
                }
                if (body.scrollTop <= (top)) {
                    songs_icons.classList.remove("songs__icons-fixed");
                }
            })
        }

    }, [curr_playlist])
    return (

        isLoading ?
            <div className="body-container">
                <Loading />
            </div>
            :
            curr_playlist ?
                <div className="body-container">
                    <div className="body__header">
                        <Header />
                        <div className="body__info">
                            <img className="body__info__img" src={curr_playlist.images[0].url} alt="" />
                            <div className="body__info__text">
                                <strong>Playlist</strong>
                                <h2>{curr_playlist.name}</h2>
                                <p>{curr_playlist.description}</p>
                                <div className="playlist__info">
                                    <a href="" className="">{curr_playlist.owner.display_name}</a>
                                    <span>93 songs</span>
                                </div>
                            </div>
                        </div>
                        <div className="songs__icons">
                            <PlayCircleFilledIcon fontSize="large" color='error' className="body__shuffle" />
                            <FavoriteIcon fontSize="large" />
                            <MoreHorizIcon style={{ color: 'white' }} />
                        </div>
                    </div>
                    <div className="body__songs">
                        <Songs />

                    </div>
                </div>
                :
                <div className="body-container home">
                    <div className="body__header home">
                        <Header />
                    </div>
                </div>
    )
}

export default Body
