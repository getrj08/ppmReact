import React from 'react';
import { Component } from 'react';
import NavComponent from '../NavComponent'
import ProjectTask from './ProjectTask';


class ProjectTasks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
   var openProjectTask = [];
   var completedProjectTask = [];
   var todoProjectTask = [];
   var inProgressTasks = [];
    const allTasks = this.props.allTasks;
    if(allTasks == undefined) {
      return (<div></div>);
    }
    if(allTasks != undefined) {
      openProjectTask = allTasks.open;
      completedProjectTask = allTasks.completed;
      todoProjectTask = allTasks.todo;
      inProgressTasks = allTasks.inProgress;
    }
    
      return (
        <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card text-center mb-2">
                          <div className="card-header bg-info text-white">
                               Open
                          </div> 
                      </div> 
                      
                      {
                        openProjectTask.map(openTask => (
                            <div className="card bg-info text-center text-white mb-2">
                              <ProjectTask key={openTask.projectTaskId} projectTask={openTask} history={this.props.history} />
                            </div>
                          )
                        )
                      }
                       
                    </div>
                    <div className="col-md-3">
                    <div className="card text-center mb-2">
                          <div className="card-header bg-primary text-white">
                               TODO
                          </div> 
                      </div>
                      {
                        todoProjectTask.map(todoTask => (
                            <div className="card bg-primary text-center text-white mb-2">
                              <ProjectTask key={todoTask.projectTaskId} projectTask={todoTask} history={this.props.history} />
                            </div>
                          )
                        )
                      } 
                    </div>
                    <div className="col-md-3">
                    <div className="card text-center mb-2">
                          <div className="card-header bg-warning text-white">
                               In-Progress
                          </div> 
                      </div> 
                      {
                        inProgressTasks.map(inProgressTask => (
                            <div className="card bg-warning text-center text-white mb-2">
                              <ProjectTask key={inProgressTask.projectTaskId} projectTask={inProgressTask} history={this.props.history} />
                            </div>
                          )
                        )
                      }
                    </div>
                    <div className="col-md-3">
                      <div className="card text-center mb-2">
                          <div className="card-header bg-success text-white">
                               Completed
                          </div> 
                      </div> 
                      {
                        completedProjectTask.map(completedTask => (
                            <div className="card bg-success text-center text-white mb-2">
                              <ProjectTask key={completedTask.projectTaskId} projectTask={completedTask} history={this.props.history} />
                            </div>
                          )
                        )
                      }
                    </div>
                  </div>
                </div>
      )
  }
}

export default ProjectTasks
