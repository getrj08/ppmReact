import React, {Component} from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createProject} from "../../actions/projectActions"
import {Button,Modal, Form, Alert} from 'react-bootstrap';
//import {Alert} from 'react-bootstrap/Alert'

class  AddProject extends Component {
    constructor(props) {
        console.log('add project props are')
        console.log(props)
        super(props);

        this.state = {
            projectName: "",
            projectDescription: "",
            projectIdentifier: "",
            start_date: "",
            end_date : "",
            show : true,
            showAlert : true,
            errors : {}
        }

        //this.onChange = this.onChange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const newProject = {
            projectName: this.state.projectName,
            projectDescription: this.state.projectDescription,
            projectIdentifier: this.state.projectIdentifier,
            start_date: this.state.start_date,
            end_date : this.state.end_date
        }
        console.log(newProject);
        this.props.createProject(newProject, this.props.history, this)
    }

    handleClose() {
        this.setState( {
            show : false
        })
    }

    handleAlertClose() {
        this.setState({
            showAlert : false
        })
    }

    handleProjectCreateAlert() {
        console.log('handling alerts')
        this.setState({
            showAlert: true
        })
        const container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(
            <Alert show={this.state.showAlert} variant="success">
            <Alert.Heading>Project Created Successfully.</Alert.Heading>
            <div className="d-flex justify-content-end">
            <Button onClick={() => this.handleAlertClose()} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
          </Alert>,
         container
        );
    }

    //lifecycle hooks
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    createProjectModalForm() {
        const {errors} = this.state;
        return (
            <>
            <Modal show={this.state.show} onHide={() => this.handleClose()} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Project Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="idProjectName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" name="projectName" value={this.state.projectName}
                         placeholder="Enter Project Name" onChange={this.handleChange} />
                         <p>{errors.projectName}</p>
                    </Form.Group>
                    <Form.Group controlId="idProjectIdentifier">
                        <Form.Label>Project Identifier</Form.Label>
                        <Form.Control type="text" name="projectIdentifier" value={this.state.projectIdentifier}
                         placeholder="Enter unique project identifier" onChange={this.handleChange} />
                         <p>{errors.projectIdentifier}</p>
                    </Form.Group>
                    <Form.Group controlId="idProjectDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control type="text" name="projectDescription" value={this.state.projectDescription}
                         placeholder="Enter Project Description" onChange={this.handleChange} />
                         <p>{errors.projectDescription}</p>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
              </Modal.Body>
            </Modal>
            </>
        );
    }
    
    render() {
        const {errors} = this.state;
        return (
            <div>
                {this.createProjectModalForm()}
            </div>
           /* <div className="project">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " 
                                    placeholder="Project Name" 
                                    name="projectName" 
                                    value={this.state.projectName}
                                    onChange = {this.onChange} />
                                    <p>{errors.projectName}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" 
                                    placeholder="Unique Project ID"
                                    name="projectIdentifier"
                                    value={this.state.projectIdentifier}
                                    onChange = {this.onChange} />
                                    <p>{errors.projectIdentifier}</p>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" 
                                    placeholder="Project Description"
                                    name="projectDescription" 
                                    value={this.state.projectDescription} 
                                    onChange = {this.onChange} ></textarea>
                                    <p>{errors.projectDescription}</p>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" 
                                    name="start_date" 
                                    value={this.state.start_date}
                                    onChange = {this.onChange} />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" 
                                    name="end_date" 
                                    value={this.state.end_date}
                                    onChange = {this.onChange} />
                                </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>*/
        );
    }
}


AddProject.propTypes = {
    createProject : PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps , {createProject}) (AddProject);