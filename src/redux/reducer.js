import { FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from "./ActionTypes";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_USER_DATA_REQUEST:
            return{
                ...state,
                loading: true
            }
        
        case FETCH_USER_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                data: actions.payload
            }
        
        case FETCH_USER_DATA_FAILURE:
            return{
                ...state,
                loading: false,
                error: actions.payload
            }

        default: return state
    }
}
