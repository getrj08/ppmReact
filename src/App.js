import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/UserDashboard'
import ProjectBacklog from './components/Project/ProjectBacklog'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AddProject from './components/Project/AddProject';
import Navbar from './components/Layout/Navbar';
import {Provider} from "react-redux"
import store from "./store"
import Test from "./components/Project/Test"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Route exact path="/" component={Navbar} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/addProject" component={AddProject}  />
          <Route exact path="/user/dashboard" component={UserDashboard} />
          <Route exact path="/user/dashboard/:id" component={ProjectBacklog} />
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
