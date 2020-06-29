import React, {Component} from "react";
import ReactDOM from 'react-dom';
import UpdateProject from "./UpdateProject";
import DeleteProject from "./DeleteProject";
import Provider from "react-redux/lib/components/Provider";
import store from '../../store'

class  ProjectItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDelete : true
        }
    }

  handleProjectUpdate = (projectId) => {
    const container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(
        <Provider store={store}>
            <UpdateProject store={store} projectId={projectId} history={this.props.history}/>
        </Provider>,
         container
        );
  }

  handleProjectDelete = (projectId) => {
    const container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(
        <Provider store={store}>
            <DeleteProject store={store} projectId={projectId} />
        </Provider>,
         container
        );
  }

  handleProjectBoard = (projectId) => {
    this.props.history.push('/user/dashboard/'+projectId)
  }

  render() {
      const project = this.props.project;
    return (
      <div className="container">
                       <div className="card card-body bg-light mb-3">
                           <div className="row">
                               <div className="col-2">
                                    <span className="mx-auto">
                                        <h2>{project.projectIdentifier}</h2>
                                    </span>
                               </div>
                               <div className="col-lg-6 col-md-4 col-8">
                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDescription}</p>
                               </div>
                               <div className="col-md-4 d-none d-lg-block">
                                   <ul className="list-group">
                                       <a onClick={() => this.handleProjectBoard(`${project.projectIdentifier}`)}>
                                           <li className="list-group-item board">
                                               <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                           </li>
                                       </a>
                                       <a onClick={() => this.handleProjectUpdate(`${project.projectIdentifier}`)}>
                                           <li className="list-group-item update">
                                               <i className="fa fa-edit pr-1">Update Project Info</i>
                                           </li>
                                       </a>
                                       <a onClick={() => this.handleProjectDelete(`${project.projectIdentifier}`)}>
                                           <li className="list-group-item delete">
                                               <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                           </li>
                                       </a>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
    );
  }
}

export default ProjectItem;
