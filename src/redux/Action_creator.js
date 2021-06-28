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
