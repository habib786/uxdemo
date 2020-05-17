import React from 'react';
import { Button } from 'reactstrap';

// Redux
import { Provider } from 'react-redux';
import withReduxStore from '../lib/withReduxStore';
import { Container, Row, Col } from 'reactstrap';

// Local Components.
import ProfileData from '../components/profile-data';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <div className="parent-div">
                    <Container className="main-container">
                        <Row className="main-row">
                            <Col className="main-col" xs={{ size: 4, offset: 4 }} sm={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }} lg={{ size: 4, offset: 4 }} xl={{ size: 4, offset: 4 }}>
                                <div className="main-div">
                                    <ProfileData />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Provider>
        );
    }
}

Profile = withReduxStore(Profile);
export default Profile;
