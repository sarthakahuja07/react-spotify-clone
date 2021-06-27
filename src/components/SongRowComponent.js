import React from 'react'

function SongRow() {
    return (
        <div className="songRow-container">
            <img className="songRow__album" src="https://i.scdn.co/image/ab67616d00004851f56eccbf4222bfefaffc9b30" alt="" />
            <div className="songRow__info">
                <h1>Moon Man (feat. Strick & Kid Cudi)</h1>
                <p>
                    Young Stoner Life, Young Thug -{" "}
                    Slime Language 2
                </p>
            </div>
        </div>
    )
}

export default SongRow
