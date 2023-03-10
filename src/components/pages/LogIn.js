import React from 'react';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';

export default function LogIn() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
