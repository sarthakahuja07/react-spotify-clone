import * as ActionTypes from './Action_types';


export const set_token = (_token) => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: {
            token: _token
        }
    }
}

export const set_user = (_user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: {
            user: _user
        }
    }
}
export const set_user_playlists = (_playlists) => {
    return {
        type: ActionTypes.SET_USER_PLAYLISTS,
        payload: {
            playlists: _playlists
        }
    }
}

export const set_curr_playlist = (_playlist) => {
    return {
        type: ActionTypes.SET_CURR_PAYLIST,
        payload: {
            curr_playlist: _playlist
        }
    }
}
