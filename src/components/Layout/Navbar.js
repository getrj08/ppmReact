import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Login from "../Login";
import {Button} from "react-bootstrap"
import Provider from "react-redux/lib/components/Provider";
import store from '../../store'

class  Navbar extends Component {


    constructor(props) {
        console.log('props of navbar')
        console.log(props)
        super(props);
        this.state = {
            login: false,
            show: false
        }
    }

    handleLogin = () => {
        this.setState({
            show: true
        })
        const container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(
        <Provider store={store}>
            <Login store={store} history={this.props.history}/>
        </Provider>,
         container
        );
    }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
                Personal Project Management Tool
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link " href="register.html">
                            Sign Up
                        </a>
                    </li>
                    <li className="nav-item">
                    <Button variant="primary" onClick={() => this.handleLogin()}>
                         Login
                    </Button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Navbar;
