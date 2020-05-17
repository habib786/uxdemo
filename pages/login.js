import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useForm } from "react-hook-form";

// Local Components.
import Form from '../components/form';

import { Provider } from 'react-redux';

import withReduxStore from '../lib/withReduxStore';


class Login extends React.Component {
    constructor() {
        super();

        // this.register, this.handleSubmit, this.watch, this.errors = useForm();

        // const { register, handleSubmit, watch, errors } = useForm();

    }
    render() {
        // const { register, handleSubmit, watch, errors } = useForm();
        const { reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <div className="parent-div">
                    <Container className="main-container">
                        <Row className="main-row">
                            <Col className="main-col" xs={{ size: 4, offset: 4 }} sm={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }} lg={{ size: 4, offset: 4 }} xl={{ size: 4, offset: 4 }}>
                                <div className="main-div">
                                    <h3 className="main-heading">Register for an account.</h3>
                                    <p className="main-text">Simply fill out the form below.</p>
                                    <Form />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Provider>
        );
    }
}


Login = withReduxStore(Login);
export default Login