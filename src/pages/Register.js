// import React, { useState } from 'react';
// import axios from 'axios';
 
// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
 
//     const handleSignup = async (e) => {
//         e.preventDefault();
 
//         try {
//             const response = await axios.post('http://localhost:5000/signup', {
//                 username,
//                 email,
//                 password,
//             });
 
//             setMessage(response.data.message);
//         } catch (error) {
//             setMessage(error.response.data.error);
//         }
//     };
 
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