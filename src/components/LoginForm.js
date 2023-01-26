import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError();
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Please enter correct email and password');
      setLoading(false);
    }
  }
  return (
    <Form style={{ height: '300px' }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Log IN</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account?
        <Link to="/signup"> Signup </Link>
        instead.
      </div>
    </Form>
  );
}
