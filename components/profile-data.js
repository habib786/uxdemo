import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

import { Container, Row, Col } from 'reactstrap';


function ProfileData(props) {
    const { t } = props;

    const user_data = useSelector(store => store.user);

    const router = useRouter()
    console.log('user_data', user_data);

    useEffect(() => {
        if (!user_data || !user_data.fullName || !user_data.gender || !user_data.email) { router.push('/login') }
    });


    return (
        <div className="profile-data-parent">
            <h1 className="main-heading">Submitted Data</h1>
            <Row className="element-row">
                <h3 className="element-heading">Name</h3>
                <p className="element-data">{user_data.fullName}</p>
            </Row>
            <Row className="element-row">
                <h3 className="element-heading">Email</h3>
                <p className="element-data">{user_data.email}</p>
            </Row>
            <Row className="element-row">
                <h3 className="element-heading">gender</h3>
                <p className="element-data">{user_data.gender}</p>
            </Row>
        </div>
    )
}

export default ProfileData;