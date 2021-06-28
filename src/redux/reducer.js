import * as ActionTypes from './Action_types';
const initialState = {
    token: null,
    user: null
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
        default:
            {
                return {
                    ...state
                }
            }
    }

}