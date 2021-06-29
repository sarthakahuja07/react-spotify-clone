import React from 'react'
import '../css/songsComponent.css'
import SongRow from './SongRowComponent';
import { useSelector} from 'react-redux';


function Songs(props) {
    const curr_playlist = useSelector(state => state.curr_playlist)

    return (
        <div className='songs-container'>
            <div className="hr-container">
                <hr></hr>
            </div>
            <div className="songs__list">
                {curr_playlist?.tracks.items.map(item=><SongRow  spotifyAPI={props.spotifyAPI} item={item}/>)}
            </div>

        </div>


    )
}

export default Songs
