import React, {Component} from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Button,Modal, Form} from 'react-bootstrap';
import {loginApi} from '../actions/userActions'

class Login extends Component {
    constructor(props) {
        console.log('props is')
        console.log(props)
        super(props);
        this.state = {
            show: true,
            username : "",
            password : "",
            errors : {}
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
        const loginUser = {
            username: this.state.username,
            password: this.state.password
        }
        console.log('history is')
        console.log(this.props.history)
        this.props.loginApi(loginUser, this.props.history, this)
        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    Example() {
        let {errors} = this.state;
        return (
          <>
            <Modal show={this.state.show} onHide={() => this.handleClose()} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Login Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username}
                         placeholder="Enter email" onChange={this.handleChange} />
                        <p>{errors.username}</p>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password}
                         placeholder="Password" onChange={this.handleChange} />
                         <p>{errors.password}</p>
                    </Form.Group>
                    <p>{errors.msg}</p>
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
                  {this.Example()}
              </div>
          )
      };
          
}

Login.propTypes = {
    login : PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    state: state,
    errors : state.errors
})

export default connect(mapStateToProps, {loginApi})(Login);