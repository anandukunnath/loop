// RegisterPage.js
import React, { useState } from 'react';
import { Button, Typography, Container, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Perform registration logic here (dummy registration for demonstration)
    // After successful registration, navigate to the login page
    console.log('Registration successful');
    navigate('/');
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
          Register
        </Typography>
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <TextField
            label="Email"
            margin="normal"
            fullWidth
            required
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
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
          <TextField
            label="Confirm Password"
            margin="normal"
            fullWidth
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
          />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </div>
        </form>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Already have an account? <Link to="/login">Login here</Link>
        </Typography>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          <Link to="/">Go to Home</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default RegisterPage;
