import React from 'react';
import { Component } from 'react';

class ProjectTask extends Component {

    constructor(props) {
        super(props);
        let uname = ''
        if(props.history.location.state) {
              uname = props.history.location.state.username;
        } 
        this.state = {
            username : uname
        }
      }

      handleProjectTaskUpdate = (projectTaskId , projectId) => {
        console.log('to update project task id' + projectTaskId);
        console.log('to update project id' + projectId);
        /* const container = document.createElement("div");
            document.body.appendChild(container);
            ReactDOM.render(
            <Provider store={store}>
                <UpdateProject store={store} projectId={projectId} history={this.props.history}/>
            </Provider>,
             container
            );*/
      }
    
      handleProjectTaskDelete = (projectTaskId , projectId) => {
        console.log('to update project task id' + projectTaskId);
        console.log('to update project id' + projectId);
        /* const container = document.createElement("div");
            document.body.appendChild(container);
            ReactDOM.render(
            <Provider store={store}>
                <DeleteProject store={store} projectId={projectId} />
            </Provider>,
             container
            );*/
      }
    

    render() {
        let projectTask = this.props.projectTask
        return (
            <div>
            <div className="card-body">
                TaskId : {projectTask.projectTaskId}
                <br />
                {projectTask.summary} 
            </div>
            <div className="card-footer">
              <a onClick={() => this.handleProjectTaskUpdate(`${projectTask.projectTaskId}`,`${projectTask.projectIdentifier}`)}>
                Edit/View
              </a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a onClick={() => this.handleProjectTaskDelete(`${projectTask.projectTaskId}`,`${projectTask.projectIdentifier}`)}>
                Delete
              </a> 
            </div> 
        </div>
        );
    }
}

export default ProjectTask;