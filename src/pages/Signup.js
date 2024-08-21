import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { signupUser } from '../services/serviceApi'; // Import the signup service

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async () => {
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
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5">Sign Up</Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success">{success}</Typography>}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignup}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;












// import React, { useState } from 'react';

 
// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
 
  
//     const handleSignup = async (e) => {
//       e.preventDefault();
  
//       try {
//           const response = await fetch('http://localhost:5000/signup', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                   username,
//                   email,
//                   password,
//               }),
//           });
  
//           const data = await response.json();
  
//           if (response.ok) {
//               setMessage(data.message);
//           } else {
//               setMessage(data.error);
//           }
//       } catch (error) {
//           setMessage('An error occurred. Please try again.');
//           console.log(error);
//       }
//   };
  
//     return (
//         <div className="container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSignup}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//             {message && <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}
//         </div>
//     );
// };
 
// export default Signup;
 
 











