import React from 'react'
import { useDispatch } from 'react-redux';
import { set_curr_song, set_is_playing } from '../redux/Action_creator';

function SongRow(props) {
    const dispatch = useDispatch();

    function playSong() {
        dispatch(set_curr_song(props.item.track))
        dispatch(set_is_playing(true))

        props.spotifyAPI
            .play({
                uris: [`spotify:track:${props.item.track.id}`],
            })
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
