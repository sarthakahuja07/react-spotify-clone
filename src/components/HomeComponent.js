import React, { useEffect } from 'react'
import Header from './HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import { set_curr_playlist, set_is_playing, set_curr_song } from '../redux/Action_creator';

function Home(props) {

    const curr_song = useSelector((state) => state.curr_song);
    const dispatch = useDispatch()
    useEffect(() => {
        props.spotifyAPI.getMyCurrentPlayingTrack().then((r) => {
            dispatch(set_curr_song(r.item));
            dispatch(set_is_playing(true))
        })
    }, [curr_song]);
    return (

        <div className="body-container home">
            <div className="body__header home">
                <Header />
            </div>
        </div>

    )
}

export default Home
