import * as ActionTypes from './Action_types';


export const set_token = (_token) => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: {
            token:_token
        }
    }
}