import React from 'react'
import '../css/songsComponent.css'
import SongRow from './SongRowComponent';


function Songs() {
    return (
        <div className='songs-container'>
            <div className="hr-container">
                <hr></hr>
            </div>
            <div className="songs__list">
                {/* list of song rows */}
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
            </div>

        </div>


    )
}

export default Songs
