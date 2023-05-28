import { FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from "./ActionTypes";

export const fetchUserData = () => {
    return{
        type: FETCH_USER_DATA_REQUEST,
    }
}

export const saveUserData = (data) => {
    return{
        type: FETCH_USER_DATA_SUCCESS,
        payload: data
    }
}

export const errorUserData = (error) => {
    return{
        type: FETCH_USER_DATA_FAILURE,
        payload: error
    }
}