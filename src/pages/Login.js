import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token); // Save JWT token in localStorage
        navigate('/'); // Redirect to Home page
      } else {
        const errData = await response.json();
        setError(errData.message || 'Login failed'); // Display error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSignUpNavigation = () => {
    navigate('/signup'); // Navigate to the Sign Up page
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password page or handle password reset logic
    navigate('/forgot-password');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', marginTop: '50px', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', width: '350px', textAlign: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          {/* <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>Math Sharthi / Login</h2>
          <h2 style={{ fontSize: '14px', fontWeight: '400', color: '#555' }}>Your Personal AI Workspace</h2> */}
        </div>
        <Typography component="h1" variant="h5" sx={{ fontSize: '20px', 
                                                      fontWeight: '600', 
                                                      color: '#edb418', 
                                                      marginBottom: '20px',
                                                      background: 'linear-gradient(90deg, #ff7e5f, #feb47b,  #2a91ff, #4557f3)',
                                                      WebkitBackgroundClip: 'text',
                                                      WebkitTextFillColor: 'transparent' 
                                                      }}>
        Math Sharthi / Login
        </Typography>
        <form onSubmit={handleLogin} style={{ marginBottom: '15px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '15px' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '15px' }}
          />
          {error && <Typography color="error" style={{ marginBottom: '15px', color: 'red' }}>{error}</Typography>}
          <Button type="submit" fullWidth variant="outlined" color="primary" style={{ marginBottom: '15px',   }}>
            Log In
          </Button>
        </form>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={handleSignUpNavigation}
          style={{ marginBottom: '15px', borderColor: '#a78bfa', color: '#ffffff',  backgroundImage:"linear-gradient(90deg,  #4557f3, #2a91ff, #feb47b, #ff7e5f)"}}
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          variant="text"
          color="primary"
          onClick={handleForgotPassword}
          style={{ color: '#4285f4' }}
        >
          Forgot Password?
        </Button>
      </div>
    </div>
  );
};

export default Login;
