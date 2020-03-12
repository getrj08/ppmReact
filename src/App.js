import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AddProject from './components/Project/AddProject';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject}  />
      </div>
      </Router>
    
    
    
  );
}

export default App;
