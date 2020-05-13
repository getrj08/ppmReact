import React, { Component } from 'react'
import {Modal , Button} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
import {connect, Provider} from "react-redux"
import {deleteProject} from '../../actions/projectActions'
import UserDashboard from '../UserDashboard';

class DeleteProject extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show : true,
            showDeleteSuccess : false
        }
    }

    handleClose() {
        this.setState( {
            show : false
        })
    }


    handleDeleteProject = () => {
        this.props.deleteProject(this.props.projectId , this, UserDashboard)
        
    }

    deleteForm = () => {
        const {showDeleteSuccess} = this.state;
        console.log('showing delete sucees')
        console.log(showDeleteSuccess)
        return (
            <>
              <Modal show={this.state.show} onHide={() => this.handleClose()} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.projectId}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the project
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleClose()}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => this.handleDeleteProject()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
    
    render() {
        return (
            <div>
                {this.deleteForm()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showDeleteSuccess: state.showDeleteSuccess
})


DeleteProject.propTypes = {
    deleteProject : PropTypes.func.isRequired
}

export default connect(mapStateToProps , {deleteProject})(DeleteProject)