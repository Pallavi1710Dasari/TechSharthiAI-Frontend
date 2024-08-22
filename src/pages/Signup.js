import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { signupUser } from '../services/serviceApi'; // Import the signup service

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signupUser({ username, email, password });
      setSuccess(data.message);
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '350px',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '20px' }}>
          <img
            src="popai-logo.png"
            alt="PopAI Logo"
            style={{ width: '50px', marginBottom: '10px' }}
          />
          <h2 style={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#555',
          }}>
            Your Personal AI Workspace
          </h2>
        </div>
        <p style={{
          fontSize: '14px',
          marginBottom: '20px',
          color: '#333',
        }}>
          Create an account to get the latest AI models and smarter responses
        </p>
        <form onSubmit={handleSignup} style={{ marginBottom: '15px' }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: '100%',
              marginBottom: '15px',
              borderRadius: '5px',
            }}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              marginBottom: '15px',
              borderRadius: '5px',
            }}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              marginBottom: '15px',
              borderRadius: '5px',
            }}
          />
          {error && <Typography color="error" style={{ marginBottom: '15px' }}>{error}</Typography>}
          {success && <Typography color="success" style={{ marginBottom: '15px' }}>{success}</Typography>}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#a78bfa',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '15px',
            }}
          >
            Sign Up
          </Button>
        </form>
        <div style={{ marginBottom: '15px' }}>
          <a href="/forgot-password" style={{ color: '#4285f4', textDecoration: 'none', fontSize: '14px' }}>
            Forgot Password?
          </a>
        </div>
        <div style={{
          margin: '20px 0',
          color: '#777',
          fontSize: '12px',
        }}>
          or
        </div>
        <Button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4285f4',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <FaGoogle style={{ marginRight: '8px' }} />
          Sign in with Google
        </Button>
        <div style={{
          fontSize: '12px',
          color: '#777',
          marginTop: '15px',
        }}>
          By signing up, you agree to our{' '}
          <a href="/terms" style={{ color: '#4285f4', textDecoration: 'none' }}>
            Terms of Service
          </a> &amp;{' '}
          <a href="/privacy" style={{ color: '#4285f4', textDecoration: 'none' }}>
            Privacy Policy
          </a>.
        </div>
      </div>
    </div>
  );
};

export default Signup;
