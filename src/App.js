// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Chat from './pages/Chat';
// import PdfPage from './pages/PdfPage';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import { useEffect, useState } from 'react';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />

//        {/* <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Signup />} /> */}
//         <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
//         <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
//         <Route path="/chats" element={isLoggedIn ? <Chat /> : <Navigate to="/login" />} />
//         <Route path="/chatwithdoc" element={isLoggedIn ? <PdfPage /> : <Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import PdfPage from './pages/PdfPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AIWriter from './pages/Aiwriter';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={ <Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chats"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatwithdoc"
          element={
            <ProtectedRoute>
              <PdfPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aiwriter"
          element={
            <ProtectedRoute>
              <AIWriter />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

