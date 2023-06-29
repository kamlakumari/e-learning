
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nevbar from './components/Nevbar';
import Course from './components/Course';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nevbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login-form' element={<LoginForm/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<ProtectedRoute><Course/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
   
    </>
      
  );
}

export default App;
