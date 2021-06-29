import React from 'react'
import '../css/footerComponent.css'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import {  Slider } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';

function Footer() {
    const curr_song = useSelector(state => state.curr_song)

    return (
        <div className="footer-container">
            {/* "https://i.scdn.co/image/ab67616d00004851268e04235dd657681fadf9aa" */}
            <div className="footer__left">
                <img src={curr_song?.album.images[0].url || "https://i.scdn.co/image/ab67616d00004851268e04235dd657681fadf9aa"} className="footer__left__img" alt="" />
                <div className="footer__left__info">
                    <h4>{curr_song?.name}</h4>
                    <p>{curr_song?.artists.map(artist=>artist.name).join(", ")}</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green footer__icon" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleFilledIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green footer__icon" />

            </div>
            <div className="footer__right">
                {/* <Grid container spacing={1}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__icon"/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__icon" />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid> */}
                <PlaylistPlayIcon className="footer__icon" />
                <VolumeDownIcon className="footer__icon" />
                <Slider aria-labelledby="continuous-slider" />

            </div>
        </div>
    )
}

export default Footer
