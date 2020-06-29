import React, {Component} from "react";
import {Dropdown} from "react-bootstrap"

class NavComponent extends Component {


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

    render() {
        return (
            <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
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
                    <li className="nav-item text-dark">
                        <a className="nav-link " href="register.html">
                            Logout
                        </a>
                    </li>
                </ul>
          </nav>
        </div>
        )
    }
}

export default NavComponent;