import React from 'react'
import '../css/sidebarOptionComponent.css'
import { Link } from 'react-router-dom'


function SidebarOption(props) {
    return(
        props.playlist ?
        (
            <Link to={`/playlist/${props.playlist.id}`} key={props.playlist.id}>
                <div className="sidebarOption-container" >
                    <div className="sidebarOption__playlistName" >
                        <p>{props.title}</p>
                    </div>
                </div>
            </Link>
        )
        :
        (
            <div className="sidebarOption-container" >
                {props.Icon &&
                    <props.Icon></props.Icon>
                }
                <h4>{props.title}</h4>
            </div>
        )
    );

    
}

export default SidebarOption
