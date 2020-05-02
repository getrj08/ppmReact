import React, {Component} from "react";
import ProjectItem from './Project/ProjectItem'
import CreateProject from './Project/CreateProject'
import {Dropdown} from "react-bootstrap"

class  UserDashboard extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            username : props.history.location.state.username
        } 
    }
   
   
    render() {
      return (
      <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-4">
          <div className="panel-group">
          <div className="panel panel-success" id="userdashboard">
              Projects Of {this.state.username} user
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
                    <CreateProject />
                    <br />
                    <hr />
                    <ProjectItem />
                </div>
              </div>
            </div>
          </div>
      </div>
      );
    }
  }

export default UserDashboard  