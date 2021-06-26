import * as ActionTypes from './Action_types';
const initialState = {
    token: null
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
        default:
            {
                return {
                    ...state
                }
            }
    }

}