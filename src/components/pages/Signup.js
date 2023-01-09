import React from 'react';
import classes from '../../styles/Signup.module.css';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter your name" icon="person" />
          <TextInput type="email" placeholder="Enter email address" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
          <Checkbox text="I agree to the Terms & Conditions" />
        </Form>
      </div>
    </>
  );
}
