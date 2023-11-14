// LoginPage.js
import React, { useState } from 'react';
import { Button, Typography, Container, TextField, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials
    const dummyUsername = 'test';
    const dummyPassword = 'test';

    // Simple validation for demonstration purposes
    if (formData.username === dummyUsername && formData.password === dummyPassword) {
      // Reset error state if the login is successful
      setError('');

      // Redirect the user to the homepage
      navigate('/home');

      console.log('Login successful');
    } else {
      setError('Invalid username or password');
      console.log('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Username"
            margin="normal"
            fullWidth
            required
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
          />
          <TextField
            label="Password"
            margin="normal"
            fullWidth
            type="password"
            required
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
          {error && (
            <Alert severity="error" style={{ marginTop: '10px' }}>
              {error}
            </Alert>
          )}
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default LoginPage;
