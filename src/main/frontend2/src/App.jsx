import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar  from './components/NavBar'
import MainPage from './pages/MainPage'
import StudentForm from './forms/StudentForm'
import StudentList from './pages/StudentList'
import CourseForm from './forms/CourseForm'

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await getStudents();
      setStudents(res)
    }
    fetchStudents();
  }, []);

  
  const getStudents = async() => {
    const result = await fetch("http://localhost:8080/api/v1/students");
    const data = result.json();
    console.log(data);
    return data;
  }

  const addStudent = async (student) => {
   
    const res = await fetch(`http://localhost:8080/api/v1/students`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(student)
    })
    const data = await res.json();
    console.log(data)
    setStudents([...students, data])
    
  }
 
  
 
  
 
  return (
    <BrowserRouter>
    <div className='App'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>  
      <Route path='/students' element={<StudentForm />}></Route>
      <Route path='/createCourse' element={<CourseForm />}></Route>
      <Route path='/seeAllStudents' element={<StudentList students={students}/>}></Route>  
    </Routes>
    </div>
    </BrowserRouter>
  );
 
}

export default App