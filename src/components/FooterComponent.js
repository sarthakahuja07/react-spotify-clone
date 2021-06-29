import React from 'react'
import '../css/footerComponent.css'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Slider } from "@material-ui/core";
import { set_is_playing, set_curr_song } from '../redux/Action_creator';
import { useSelector, useDispatch } from 'react-redux';

function Footer(props) {

    const is_playing = useSelector(state => state.is_playing)
    const curr_song = useSelector(state => state.curr_song)
    const dispatch = useDispatch()

    function handlePlayPause() {
        if (is_playing) {
            props.spotifyAPI.pause();
            dispatch(set_is_playing(false))
        } else {
            props.spotifyAPI.play();
            dispatch(set_is_playing(true))
        }
    };

    const skipNext = () => {
        props.spotifyAPI.skipToNext((err, res) => {
            dispatch(set_is_playing(true))
            setTimeout(() => {
                props.spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
                    dispatch(set_curr_song(r.item));
                })
            }, 1000);
        })

    };

    const skipPreveious = () => {
        props.spotifyAPI.skipToNext((err, res) => {
            dispatch(set_is_playing(true))
            setTimeout(() => {
                props.spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
                    dispatch(set_curr_song(r.item));
                })
            }, 1000);
        })

    };

    const shuffle = () => {
        var button = document.querySelector(".footer__icon.shuffle")
        button.classList.contains("footer__green") ?
            props.spotifyAPI.setShuffle(false)
                .then((res) => {
                    console.log("🔥 ", false);
                    button.classList.remove("footer__green")
                })
            :
            props.spotifyAPI.setShuffle(true)
                .then((res) => {
                    console.log("🔥 ", true);
                    button.classList.add("footer__green")
                })

    };


    return (
        <div className="footer-container">
            <div className="footer__left">
                <img src={curr_song?.album.images[0].url || "https://i.scdn.co/image/ab67616d00004851268e04235dd657681fadf9aa"} className="footer__left__img" alt="" />
                <div className="footer__left__info">
                    <h4>{curr_song?.name}</h4>
                    <p>{curr_song?.artists.map(artist => artist.name).join(", ")}</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className=" footer__icon shuffle" onClick={shuffle} />
                <SkipPreviousIcon className="footer__icon" onClick={skipPreveious} />
                {
                    is_playing ?
                        <PauseCircleFilledIcon fontSize="large" className="footer__icon" onClick={handlePlayPause} />
                        :
                        <PlayCircleFilledIcon fontSize="large" className="footer__icon" onClick={handlePlayPause} />

                }
                <SkipNextIcon className="footer__icon" onClick={skipNext} />
                <RepeatIcon className="footer__green footer__icon" />

            </div>
            <div className="footer__right">

                <PlaylistPlayIcon className="footer__icon" />
                <VolumeDownIcon className="footer__icon" />
                <Slider aria-labelledby="continuous-slider" />

            </div>
        </div>
    )
}

export default Footer
