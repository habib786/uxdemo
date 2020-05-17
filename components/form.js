import React, { useState } from "react";
import { useForm } from "react-hook-form";

// React Strap.
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, FormFeedback } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';

import { updateUserData } from '../store/actions/userActions';

import { useRouter } from 'next/router'




export default function FormCmp() {
  const { register, handleSubmit, setValue, setError, errors } = useForm();

  const [gender, setGender] = useState('male');

  const dispatch = useDispatch();

  const router = useRouter()

  const onSubmit = (data) => {
    console.log('data in onSubmit', data);
    dispatch(updateUserData({ gender, fullName: data.fullName, email: data.userEmail }));
    router.push('/profile')
  };


  return (

    <form className="form-parent" onSubmit={handleSubmit(onSubmit)}>
      <Col className="parent-col">
        <p>Full Name</p>
        <input
          type="text"
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby="fullNameError"
          name="fullName"
          ref={register({ required: true, minLength: 3 })}
          placeholder="Enter you full name."
        />
        <span id="fullNameError" style={{ display: errors.fullName ? "block" : "none" }}>Name should at least 3 characters long.</span>
      </Col>

      <Col className="parent-col">
        <p>Email</p>
        <input
          type="email"
          aria-invalid={errors.userEmail ? "true" : "false"}
          aria-describedby="userEmailError"
          name="userEmail"
          ref={register({ required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
          placeholder="Enter you email."
        />
        <span id="userEmailError" style={{ display: errors.userEmail ? "block" : "none" }}>Email is not valid.</span>
      </Col>

      <Col className="parent-col">
        <p>Password</p>
        <input
          type="password"
          aria-invalid={errors.userPass ? "true" : "false"}
          aria-describedby="userPassError"
          name="userPass"
          // ref={register({ required: true, pattern: /(.*[a-zA-Z]){3}(.*[0-9]){3}/i })}
          ref={register({ required: true, pattern: /^(?=.*[0-9]{3})(?=.*[a-zA-Z]{3})([a-zA-Z0-9]+)$/i })}
          placeholder="Enter you password"
        />
        <span id="userPassError" style={{ display: errors.userPass ? "block" : "none" }}>Pass should at least have 3 numbers and 3 characters.</span>
      </Col>

      <Col className="parent-col">
        <p>Gender</p>
        <FormGroup tag="fieldset">
          <FormGroup check><Label check><input className="gender-radio" id="male" type="radio" name="gender" checked={gender === 'male' ? true : false} value="male" onClick={() => { setGender('male') }} />Male</Label></FormGroup>
          <FormGroup check><Label check><input className="gender-radio" id="female" type="radio" name="gender" checked={gender === 'female' ? true : false} value="female" onClick={() => { setGender('female') }} />Female</Label></FormGroup>
        </FormGroup>

      </Col>


      <Col className="btn-parent">
        <Button color="primary" className="submit-btn" type='submit'>Register</Button>
      </Col>
    </form>
  );
}