import axios from "axios";
import {GET_ERRORS} from "./types";

export const createProject = (project, history)  => async dispatch => {
    try {
        const res = await axios.put(
            "http://localhost:8090/ppm/project",project
        )
        history.push("/dashboard")
    } catch(err) {
        console.log(err.response.data);
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
    }
}