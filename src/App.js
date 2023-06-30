
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nevbar from './components/Nevbar';
import Course from './components/Course';
import ProtectedRoute from './ProtectedRoute';
import { createContext } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


export const myContext=createContext()

function App() {
  const coursesData = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "John Doe",
      duration: "2 weeks",
      description:
        "Learn the basics of React framework and build interactive web applications.",
      imageUrl: "react.jpg",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      instructor: "Jane Smith",
      duration: "4 weeks",
      description:
        "Master the fundamentals of JavaScript programming language.",
      imageUrl: "javascript.png",
    },
    {
      id: 3,
      title: "HTML and CSS Basics",
      instructor: "David Johnson",
      duration: "3 weeks",
      description:
        "Learn the basics of HTML and CSS to create beautiful web pages.",
      imageUrl: "html.png",
    },
    {
      id: 3,
      title: "CSS",
      instructor: "David Johnson",
      duration: "3 weeks",
      description:
        "Learn the basics of HTML and CSS to create beautiful web pages.",
      imageUrl: "css.png",
    },
    {
      id: 20,
      title: "Database Fundamentals",
      instructor: "Emily Davis",
      duration: "4 weeks",
      description:
        "Get started with databases and learn about SQL and data management.",
      imageUrl: "database.png",
    },
      {
        id: 1,
        title: 'Java Programming Basics',
        instructor: 'John Doe',
        duration: '4 weeks',
        description: 'Learn the fundamentals of Java programming language and object-oriented programming.',
        imageUrl: 'java1.png',
      },
      {
        id: 2,
        title: 'Python for Data Science',
        instructor: 'Jane Smith',
        duration: '6 weeks',
        description: 'Explore Python programming language for data analysis and machine learning.',
        imageUrl: 'python1.png',
      },
      {
        id: 3,
        title: 'PHP Web Development',
        instructor: 'David Johnson',
        duration: '3 weeks',
        description: 'Learn PHP language for building dynamic websites and web applications.',
        imageUrl: 'php.png',
      },
  ];

  return (
    <>
    <BrowserRouter>
    <myContext.Provider value={coursesData }>
    <Nevbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login-form' element={<LoginForm/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<ProtectedRoute><Course/></ProtectedRoute>}/>
    </Routes>
    </myContext.Provider>
    </BrowserRouter>
   
    </>
      
  );
}

export default App;
