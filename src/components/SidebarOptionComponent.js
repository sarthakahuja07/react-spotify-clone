import React from 'react'
import '../css/sidebarOptionComponent.css'

function SidebarOption(props) {
    return (
        <div className="sidebarOption-container">
            {props.Icon &&
                <props.Icon></props.Icon>
            }

            {props.Icon ?
                <h4>{props.title}</h4> :
                <div className="sidebarOption__playlistName">
                    <p>{props.title}</p>
                </div>
            }
        </div>
    )
}

export default SidebarOption
