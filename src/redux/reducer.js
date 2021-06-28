import * as ActionTypes from './Action_types';
const initialState = {
    token: null,
    user: null,
    playlists: [],
    curr_playlist: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            {
                return {
                    ...state,
                    token: action.payload.token
                }
            }
        case ActionTypes.SET_USER:
            {
                return {
                    ...state,
                    user: action.payload.user
                }
            }
        case ActionTypes.SET_USER_PLAYLISTS:
            {
                return {
                    ...state,
                    playlists: action.payload.playlists
                }
            }
        case ActionTypes.SET_CURR_PAYLIST:
            {
                return {
                    ...state,
                    curr_playlist: action.payload.curr_playlist
                }
            }
        default:
            {
                return {
                    ...state
                }
            }
    }

}