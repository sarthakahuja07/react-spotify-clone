import React from 'react'

function SongRow(props) {
    return (
        <div className="songRow-container" key={props.item.track.id}>
            <img className="songRow__album" src={props.item.track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{props.item.track.name}</h1>
                <p>
                {props.item.track.artists.map(artist=>artist.name).join(", ")}
                </p>
            </div>
        </div>
    )
}

export default SongRow
