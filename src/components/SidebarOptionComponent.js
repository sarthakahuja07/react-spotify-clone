import React from 'react'
import '../css/sidebarOptionComponent.css'
import { set_curr_playlist } from '../redux/Action_creator';
import { useDispatch } from 'react-redux';


function SidebarOption(props) {
    const dispatch = useDispatch();


    function myfunc(playlist){
        if(playlist){
            dispatch(set_curr_playlist(playlist));
        }
    }

    return (
        <div className="sidebarOption-container" onClick={()=>myfunc(props.playlist)}>
            {props.Icon &&
                <props.Icon></props.Icon>
            }

            {props.Icon ?
                <h4>{props.title}</h4> :
                <div className="sidebarOption__playlistName" >
                    <p>{props.title}</p>
                </div>
            }
        </div>
    )
}

export default SidebarOption
