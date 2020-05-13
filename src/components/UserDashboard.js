import React, {Component} from "react";
import ReactDOM from 'react-dom';
import ProjectItem from './Project/ProjectItem'
import CreateProject from './Project/CreateProject'
import {Dropdown} from "react-bootstrap"
import {connect} from 'react-redux'
import Provider from "react-redux/lib/components/Provider";
import store from '../store'
import {Button} from "react-bootstrap"
import {getAllProjects} from '../actions/projectActions'
import PropTypes from 'prop-types'
import AddProject from "./Project/AddProject";
import {Modal} from 'react-bootstrap'
 
class  UserDashboard extends Component {
   
    constructor(props) {
        super(props);
        let uname = ''
        if(props.history.location.state) {
          uname = props.history.location.state.username;
        } 
        this.state = {
            username : uname,
            successDelete : false
        }
    }

    componentDidMount() {
      this.props.getAllProjects();
    }

    handleCreateProjectForm() {
      const container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(
        <Provider store={store}>
            <AddProject store={store} history={this.props.history}/>
        </Provider>,
         container
        );
    }

    showDeletedContent(projectId) {
       
      console.log('rendering success delete from user dashboard')
      this.setState( {
        successDelete : true
      })
      console.log(this.state)
      const container = document.createElement("div");
      document.body.appendChild(container);
      ReactDOM.render(
          <Provider store={store}>
              <Modal open={this.state.successDelete}>
                  <Modal.Header closeButton>
                   <Modal.Title>Project Deleted : {projectId}</Modal.Title>
                  </Modal.Header>
              </Modal>
          </Provider>,
          container
      )
  }
   
   
    render() {
      const userProjects = this.props.project.projects;
      return (
      <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-4">
          <div className="panel-group">
          <div className="panel panel-success" id="userdashboard">
              Dashboard of {this.state.username} user
            </div>
          </div>
          
          <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {this.state.username}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="register.html">
                            Logout
                        </a>
                    </li>
                </ul>
          </nav>
          <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <br />
                    <Button variant="primary" onClick={() => this.handleCreateProjectForm()}>
                         CreateProject
                    </Button>
                    <br />
                    <hr />
                    {
                      userProjects.map(userProject => (
                        <ProjectItem key={userProject.id} project={userProject} history={this.props.history} />
                        )
                      )
                    }
                </div>
              </div>
            </div>
          </div>
      </div>
      );
    }
  }

  UserDashboard.propTypes = {
    project : PropTypes.object.isRequired,
    getAllProjects : PropTypes.func.isRequired
  }

  const mapStateToProps = state => ({
    project: state.project
  })

export default connect(mapStateToProps , {getAllProjects})(UserDashboard)  