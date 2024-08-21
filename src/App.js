import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import PdfPage from './pages/PdfPage'
// import Chat from './pages/Chat/index.js'
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css'

function App() {
  

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chats" element={<Chat/>}/>
        <Route path="/chatwithdoc" element={<PdfPage/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;