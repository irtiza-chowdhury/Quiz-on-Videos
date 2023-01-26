import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [loading, setLoading] = useState('');

  const [error, setError] = useState();

  //   const history = useHistory();
  const navigate = useNavigate();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    // console.log('e', e);
    e.preventDefault();

    // validation
    if (password !== confirmPassword) {
      return setError('Password does not match');
    }

    try {
      setError();
      setLoading(true);
      await signup(email, password, userName);
      navigate('/');
    } catch (err) {
      setError('Failed to create account');
      setLoading(false);
    }
  }

  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        required
        type="text"
        placeholder="Enter your name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        required
        type="email"
        placeholder="Enter email address"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        required
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        required
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
