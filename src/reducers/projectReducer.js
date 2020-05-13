import {GET_PROJECTS, GET_PROJECT_BY_ID, DELETE_PROJECT_SUCESS, ADD_CREATED_PROJECT} from '../actions/types'

const initialState = {
    project  : {},
    projects : []
}

export default function(state = initialState , action) {
    switch(action.type) {
        case GET_PROJECTS : return  {
            ...state,
            projects: action.payload
        }
        case GET_PROJECT_BY_ID : return {
            ...state,
            project: action.payload
        }
        case DELETE_PROJECT_SUCESS :
            const updatedProjectList = state.projects.filter(function(p) {
                return p.projectIdentifier != action.payload.projectId
            })
            state.projects = updatedProjectList
            return {
            ...state,
            showDeleteSuccess : true,
            data : action.payload
        }
        default : return state;
    }
}