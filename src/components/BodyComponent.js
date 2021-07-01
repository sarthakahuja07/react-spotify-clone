import React, { useEffect, useState } from 'react'
import '../css/bodyComponent.css';
import Header from './HeaderComponent';
import Songs from './SongsComponent';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Loading from './LoadingComponent';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { set_curr_playlist, set_is_loading, set_is_playing, set_curr_song } from '../redux/Action_creator';
import { usePalette } from 'react-palette'

function Body(props) {

    let { playlistID } = useParams();
    console.log("🔥 ",playlistID);
    const curr_playlist = useSelector(state => state.curr_playlist)
    const { data, loading, error } = usePalette(curr_playlist?.images[0].url)
    const is_loading = useSelector(state => state.is_loading)
    const dispatch = useDispatch();
    var r = document.querySelector(':root');

    useEffect(() => {
        dispatch(set_is_loading(true));
        
        if (playlistID==0) {
            props.spotifyAPI.getFeaturedPlaylists()
                .then(res => {
                    props.spotifyAPI.getPlaylist(res.playlists.items[0].id)
                        .then(playlist => {
                            dispatch(set_curr_playlist(playlist));
                        })
                        .catch(err => console.log(err))
                })
        }else{
            props.spotifyAPI.getPlaylist(playlistID)
            .then(
                playlist => {
                    dispatch(set_curr_playlist(playlist));
                }
            )
            .catch(err => console.log(err))
        }
        
    }, [playlistID]);

    useEffect(() => {
        r.style.setProperty('--bgcolor', data.vibrant)
        dispatch(set_is_loading(false));
    }, [data.vibrant])


    useEffect(() => {
        if (!is_loading) {
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

    }, [is_loading]);



    useEffect(() => {

        props.spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
            dispatch(set_curr_song(r.item));
        })
    }, []);

    function playPlaylist() {
        props.spotifyAPI
            .play({
                context_uri: `spotify:playlist:${curr_playlist.id}`,
            })
        dispatch(set_is_playing(true))
        setTimeout(() => {
            props.spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
                dispatch(set_curr_song(r.item));
            })
        }, 1500);
    }

    return (
        is_loading ?
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
                                <span>{curr_playlist?.tracks.total} songs</span>
                            </div>
                        </div>
                    </div>
                    <div className="songs__icons">
                        <PlayCircleFilledIcon fontSize="large" color='error' className="body__shuffle" onClick={playPlaylist} />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon style={{ color: 'white' }} />
                    </div>
                </div>

                <div className="body__songs">
                    <Songs spotifyAPI={props.spotifyAPI} />
                </div>
            </div>


    )
}

export default Body
