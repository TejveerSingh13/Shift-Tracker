import axios from "axios"
import { fetchUserData, saveUserData, errorUserData } from "./Actions";

export const getUserData = () => {
    return (dispatch) => {
        dispatch(fetchUserData)
        axios.get('http://localhost:5000/data/1234')
        .then(res => {
            const user = res.data
            dispatch(saveUserData(user))
        })
        .catch(err => {
            const errmsg = err
            dispatch(errorUserData(errmsg))
        })
    }
}