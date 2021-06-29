import React, { useEffect, useState } from 'react'
import '../css/bodyComponent.css';
import Header from './HeaderComponent';
import Songs from './SongsComponent';
import analyze from 'rgbaster'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Loading from './LoadingComponent';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { set_curr_playlist } from '../redux/Action_creator';


function Body(props) {
    let { playlistID } = useParams();
    const curr_playlist = useSelector(state => state.curr_playlist)
    const [isLoading, setisLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        props.spotifyAPI.getPlaylist(playlistID)
            .then(playlist => {
                dispatch(set_curr_playlist(playlist));
            })
            .catch(err => console.log(err))
    }, [playlistID]);

    useEffect(() => {
        var link = curr_playlist?.images[0].url;
        if (link && isLoading) {
            var img = link;
            var r = document.querySelector(':root');
            analyze(img)
                .then(result => {
                    r.style.setProperty('--bgcolor', result[0].color)
                        setisLoading(false)
                })
        }

        return () => {
            setisLoading(true);
        }

    }, [curr_playlist, playlistID])



    useEffect(() => {
        if (!isLoading) {
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
        }


    }, [isLoading]);

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
                        <img className="body__info__img" src={curr_playlist?.images[0].url} alt="" />
                        <div className="body__info__text">
                            <strong>Playlist</strong>
                            <h2>{curr_playlist?.name}</h2>
                            <p>{curr_playlist?.description}</p>
                            <div className="playlist__info">
                                <a href="" className="">{curr_playlist?.owner.display_name}</a>
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


    )
}

export default Body
