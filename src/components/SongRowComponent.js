import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { set_is_playing} from '../redux/Action_creator';

function SongRow(props) {
    const dispatch = useDispatch();

    function playSong() {
        props.spotifyAPI
            .play({
                uris: [`spotify:track:${props.item.track.id}`],
            })
            .then((res) => {
                props.spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
                   dispatch(set_is_playing(true))
                });
            });
    }

    return (
        <div className="songRow-container" key={props.item.track.id} onClick={(playSong)}>
            <img className="songRow__album" src={props.item.track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{props.item.track.name}</h1>
                <p>
                    {props.item.track.artists.map(artist => artist.name).join(", ")}
                </p>
            </div>
        </div>
    )
}

export default SongRow
