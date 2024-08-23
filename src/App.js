import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import PdfPage from './pages/PdfPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AIWriter from './pages/Aiwriter';
import NotFound from './pages/NotFound';
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
        <Route path="/login" element={<Login />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
