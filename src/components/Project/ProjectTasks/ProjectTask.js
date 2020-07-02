import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {Dropdown, Button} from "react-bootstrap"
import {Link} from 'react-router-dom';
import {updateProjectTaskStatus} from '../../../actions/projectActions'
import {connect} from "react-redux"

class  ProjectTask extends Component {

    constructor(props) {
        super(props);
        let uname = ''
        console.log('props of tasks')
        console.log(props)
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

      handleProjectStatusChange = (projectId , projectTaskId,projectStatus,e) => {
       e.preventDefault();
        console.log("selected status" + e.target.name)
       console.log("current status "+projectStatus)
        console.log('to handle status changes');
        console.log("project task id" + projectTaskId);
        var projectTask = {
          status : e.target.name
        }
        console.log('calling updating of status');
        console.log(projectTask)
        this.props.updateProjectTaskStatus(projectId , projectTaskId, projectTask)
        console.log('finished updating of status');
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
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => this.handleProjectTaskUpdate(`${projectTask.projectTaskId}`,`${projectTask.projectIdentifier}`)}>
                    Edit/View
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.handleProjectTaskDelete(`${projectTask.projectTaskId}`,`${projectTask.projectIdentifier}`)}>
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item id="statusDrpDwn" onClick={(e) => this.handleProjectStatusChange(`${projectTask.projectIdentifier}`,`${projectTask.projectTaskId}`,`${projectTask.status}`,e)}>
                  <span className="dropbtn">Move to</span>
                      <div className="dropdown-content">
                          <Button variant="light" size="sm" name="TODO" block>TODO</Button>
                          <Button variant="light" size="sm" name="IN_PROGRESS" block>In-Progress</Button>
                          <Button variant="light" size="sm" name="COMPLETE" block>Completed</Button>
                      </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> 
        </div>
        );
    }
}

export default connect(null , {updateProjectTaskStatus}) (ProjectTask);