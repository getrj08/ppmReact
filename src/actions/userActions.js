import axios from "axios";
import {GET_ERRORS} from "./types";

export const loginApi = (login, history, Login) => async dispatch => {
    try {
        const res = await axios.post(
            "http://localhost:8090/user/authenticate",login
        )
        console.log('response received from server');
        console.log(res.data.username);
        Login.handleClose();
        history.push({
            pathname: "/user/dashboard",
            state: res.data
        })
    } catch(err) {
        console.log(err)
        if(err.response) {
                console.log(err.response.data);
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
        }
        
    }
}