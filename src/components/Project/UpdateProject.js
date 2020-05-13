import React, { Component } from 'react'
import { getProjectById } from '../../actions/projectActions'
import { updateProject} from '../../actions/projectActions'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Button,Modal, Form} from 'react-bootstrap';

class UpdateProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : true,
            projectName : "",
            projectIdentifier : "",
            projectDescription : "",
            createdBy : ""
        }
    }

    componentDidMount() {
        this.props.getProjectById(this.props.projectId);
    }

    componentWillReceiveProps(nextProps) {
        const {project} = nextProps
        if(project) {
            this.setState(
                {
                    projectName : project.projectName,
                    projectIdentifier : project.projectIdentifier,
                    projectDescription : project.projectDescription,
                    createdBy : project.createdBy
                }
            );
        }
    }

    handleShow() {
        this.setState( {
            show: true
        })
    }

    handleClose() {
        this.setState( {
            show : false
        })
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
        const updatedProject = {
            projectName: this.state.projectName,
            projectDescription: this.state.projectDescription,
            projectIdentifier : this.state.projectIdentifier
        }
        
        console.log('submitting project')
        console.log(updatedProject)
        updateProject(updatedProject, this.props.history, this)
        
    }

    updateForm = () => {
        return (
          <>
            <Modal show={this.state.show} onHide={() => this.handleClose()} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Project Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicProjectName">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" name="projectName" value={this.state.projectName}
                         placeholder="Enter email" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicProjectIdentifier">
                        <Form.Label>Project Identifier</Form.Label>
                        <Form.Control type="text" name="projectIdentifier" value={this.state.projectIdentifier}
                         onChange={this.handleChange} disabled/>
                    </Form.Group>
                    <Form.Group controlId="formBasicProjectDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control type="text" name="projectNaprojectDescriptionme" value={this.state.projectDescription}
                        onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCreatedBy">
                        <Form.Label>Project Owner</Form.Label>
                        <Form.Control type="text" name="createdBy" value={this.state.createdBy}
                         disabled/>
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
        return (
            <div>
                {this.updateForm()}
            </div>
        );
    }
}

UpdateProject.protoTypes = {
    getProjectById : PropTypes.func.isRequired,
    updateProject : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    project: state.project.project
  })

//export default connect(null , {updateProject} (UpdateProject));
export default connect(mapStateToProps , {getProjectById})(UpdateProject);