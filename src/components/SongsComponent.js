import React from 'react'
import '../css/songsComponent.css'
import SongRow from './SongRowComponent';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Songs() {
    return (
        <div className='songs-container'>
            <div className="songs__icons">
                <PlayCircleFilledIcon color='error' className="body__shuffle"/>
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon style={{color:'white'}}/>
            </div>
            <div className="hr-container">
            <hr></hr>
            </div>
        <div className="songs__list">
            {/* list of song rows */}
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
        </div>
        
        </div>


    )
}

export default Songs
