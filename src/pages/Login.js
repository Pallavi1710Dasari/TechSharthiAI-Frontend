import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token); // Save JWT token in localStorage
        navigate('/home'); // Redirect to Home page
      } else {
        console.log('Login failed');
        // Handle login failure
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error
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
          Log in to get the latest AI models and smarter responses
        </p>
        <form onSubmit={handleLogin} style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#a78bfa',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </form>
        <div style={{
          margin: '20px 0',
          color: '#777',
          fontSize: '12px',
        }}>
          or
        </div>
        <button style={{
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
          Continue with Google
        </button>
        <div style={{
          fontSize: '12px',
          color: '#777',
          marginTop: '15px',
        }}>
          By continuing, you are agreeing to our{' '}
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

export default Login;