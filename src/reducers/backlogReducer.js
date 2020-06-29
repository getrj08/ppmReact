import {GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJECT_TASK} from '../actions/types'

const initialState = {
    projectTask  : {},
    projectTasks : []
}

export default function(state = initialState , action) {
    switch(action.type) {
        case GET_BACKLOG :  
        const a = {
            ...state,
            projectTasks: action.payload
        }
        return a;  
        case GET_PROJECT_TASK : return {
            ...state,
            projectTask: action.payload
        }
        case DELETE_PROJECT_TASK :
            const updatedProjectTaskList = state.projects.filter(function(p) {
                return p.projectTaskId != action.payload.projectTaskId
            })
            state.projectsTasks = updatedProjectTaskList
            return {
            ...state,
            showDeleteSuccess : true,
            data : action.payload
        }
        default : return state;
    }
}