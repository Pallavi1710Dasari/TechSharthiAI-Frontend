import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import PdfPage from './pages/PdfPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated
  const hasSignedUp = localStorage.getItem('hasSignedUp'); // Check if the user has signed up

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to Signup if no signup has occurred */}
        <Route path="/" element={hasSignedUp ? <Navigate to="/login" /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={hasSignedUp ? <Login /> : <Navigate to="/signup" />} />
        
        {/* Protected routes */}
        <Route
          path="/home"
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
