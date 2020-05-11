import axios from "axios";
import {GET_ERRORS, GET_PROJECTS} from "./types";

export const createProject = (project, history, ProjectHandler)  => async dispatch => {
    try {
        const res = await axios.put(
            "http://localhost:8090/ppm/project",project
        )
        console.log('resoinse rssf')
        console.log(res)
        ProjectHandler.handleClose();
        //ProjectHandler.handleProjectCreateAlert();
        history.push('/user/dashboard')
    } catch(err) {
        console.log(err instanceof Error);
        console.log(err.message)
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
    }
}

export const getAllProjects = () => async dispatch => {
    try {
        const res = await axios.get(
            "http://localhost:8090/ppm/projects"
        )
        dispatch( {
            type : GET_PROJECTS,
            payload : res.data
        })
    } catch(err) {
        console.log(err);

    }
}