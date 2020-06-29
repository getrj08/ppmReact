import axios from "axios";
import {GET_ERRORS, GET_PROJECTS, GET_PROJECT_BY_ID, DELETE_PROJECT_SUCESS, GET_BACKLOG} from "./types";


export const createProject = (project, history, ProjectHandler)  => async dispatch => {
    try {
        const res = await axios.put(
            "http://localhost:8090/ppm/project",project
        )
        ProjectHandler.handleClose();
        window.location.reload(true)
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

export const getProjectById = (projectId) => async dispatch => {
    try {
        const res = await axios.get(
            "http://localhost:8090/ppm/project/"+projectId
        )
        console.log('response of get projeect')
        console.log(res)
        dispatch( {
            type : GET_PROJECT_BY_ID,
            payload : res.data
        })
    } catch(err) {
        console.log(err);

    }
}

export const updateProject = (updateProject , history , UpdateProject) => async dispatch => {
    try {
        console.log('request ready to fire')
        const res = await axios.post(
            "http://localhost:8090/ppm/project"+updateProject.projectIdentifier,updateProject
        )
        console.log('resoinse rssf fo update project')
        console.log(res)
        UpdateProject.handleClose();
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

export const deleteProject = (projectId , DeleteProject, UserDashboard) => async dispatch => {
    try {
        console.log('deleting project' + projectId)
        const res = await axios.delete(
            "http://localhost:8090/ppm/project/"+projectId
        )
        console.log(res)
        DeleteProject.handleClose();
      dispatch({
        type: DELETE_PROJECT_SUCESS,
        payload:{
            res : res.data,
            projectId : projectId
        }
    })
    } catch(err) {
        console.log(err)
    }
}

export const getProjectBacklog = (projectId) => async dispatch => {
    try {
        console.log('getting project backlogs11111')
        const res = await axios.get(
            "http://localhost:8090/ppm/project/"+projectId+"/backlog"
        );
        console.log(res);
        dispatch({
            type : GET_BACKLOG,
            payload : res.data
        })

    } catch (err) {
        console.log(err);
    }
}