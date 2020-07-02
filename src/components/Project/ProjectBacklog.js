import React, {Component} from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {getProjectBacklog} from '../../actions/projectActions'
import ProjectTasks from './ProjectTasks/ProjectTasks'
import {Button} from "react-bootstrap"
import NavComponent from "./NavComponent";

class  ProjectBacklog extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProjectBacklog(this.props.match.params.id);
      }

      handleCreateProjectTaskForm() {
        console.log('creating project task');
        /*const container = document.createElement("div");
          document.body.appendChild(container);
          ReactDOM.render(
          <Provider store={store}>
              <AddProject store={store} history={this.props.history}/>
          </Provider>,
           container
          );*/
      }


      render() {
        const userProjectTasks = this.props.projectTasksData.projectTasks;
        const uPrjTsks = userProjectTasks.projectTasks;
        var openProjectTask = [];
        var todoProjectTask = [];
        var inProgressProjectTask = [];
        var completedProjectTask = [];
        console.log('u projs in backlogs')
        console.log(uPrjTsks)
        if(uPrjTsks != undefined) {
          uPrjTsks.forEach(function(task) {
            switch(task.status) {
              case "OPEN" : openProjectTask.push(task); break;
              case "TODO" : todoProjectTask.push(task); break
              case "IN_PROGRESS" : inProgressProjectTask.push(task); break;
              case "COMPLETE" : completedProjectTask.push(task); break;
              default : break; 
             }
          })

          var allTasks = {
            open : openProjectTask,
            completed : completedProjectTask,
            todo : todoProjectTask,
            inProgress : inProgressProjectTask
          }

        }
          return (
            <div id="projectBacklog">
                <NavComponent history={this.props.history}/>
                <br />
                <Button variant="primary" onClick={() => this.handleCreateProjectTaskForm()}>
                        <i className="fas fa-plus-circle">
                          Create Task
                        </i>
                </Button>
                <br />
                <br />
                <br />
                {console.log('in backlog of lall tasks')}
                <ProjectTasks allTasks={allTasks}  history={this.props.history} />
            </div>
            
          )
      }
}

ProjectBacklog.propTypes = {
  projectTasksData : PropTypes.object.isRequired,
  getProjectBacklog : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    projectTasksData: state.backlog
  })

export default connect(mapStateToProps , {getProjectBacklog})(ProjectBacklog)  
//export default ProjectBacklog;