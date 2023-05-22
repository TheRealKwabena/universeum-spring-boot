import { useEffect, useState } from 'react'
import './App.css'
import NavBar  from './components/NavBar'
import MainPage from './pages/MainPage'
import StudentForm from './forms/StudentForm'
import StudentList from './pages/StudentList'
import CourseForm from './forms/CourseForm'
import CourseList from './pages/CourseList'
import axios from 'axios'
import TeacherForm from './forms/TeacherForm'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify'

export interface Student {
  firstName: string,
  lastName: string,
  email: string,
  dob: Date

}
export interface Course {
  courseName: string,
  courseLanguage: string,
  courseCode: string
 

}
export interface Teacher {
  faculty: string,
  email: string, 
  fullName: string
}

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await getStudents();
      setStudents(res)
    }
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourses();
      setCourses(res)
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      const result = await getTeachers();
      setTeachers(result);

    }
    fetchTeachers();
    
  }, []);

  
  const getStudents = async() => {
    const result = await fetch("http://localhost:3000/api/students");
    const data = result.json();
    console.log(data);
    return data;
  }
  const getCourses = async() => {
    const result = await fetch("http://localhost:3000/api/courses");
    const data = result.json();
    console.log(data);
    return data
  }
  const getTeachers = async() => {
   const result = await fetch("http://localhost:3000/api/teachers");
   const data = result.json();
   console.log(data);
   return data;
  }

  const addCourse = async (course: Course) => {
    axios.post("http://localhost:3000/api/courses", course).then((response) =>{
      if(response.data === "Course code already exists") {
        toast.error(response.data, {position: "bottom-center"})
      }
      else {
        console.log(response.data)
        const data = response.data
        setCourses([...courses, data])
        toast.success("Course added successfully",  {position: "top-center"});

      }
    }
    ).catch((err) => {
      console.log(err)
    })
  }
    

  const addStudent = async (student:Student) => {
    axios.post("http://localhost:3000/api/students",student).then((response) => {
      if(response.data === "Email already taken") {
        toast.error(response.data, {position: "top-center"});
      } else {

        console.log(response.data)
        const data = response.data
        setStudents([...students, data])
        toast.success("Student added successfully",  {position: "top-center"});
      }
    }).catch((err) => {
      console.log(err)
    })
  }


  const addTeacher = async (teacher: Teacher) => {
    axios.post("http://localhost:3000/api/teachers", teacher).then((response) => {
      if(response.data === "Email already taken") {
        toast.error(response.data, {position: "top-center"});
      } else {
        console.log(response.data)
        const data = response.data
        setTeachers([...teachers, data])
        toast.success("Teacher added successfully",  {position: "top-center"});

      }
    })
  }
  const deleteStudent = async(id: number) => {
    axios.delete(`http://localhost:3000/api/students/${id}`).then((response) =>
    console.log(response.data)).catch((err) => console.log(err))
    
  }
  const deleteCourse = async(id: number) => {
    axios.delete(`http://localhost:3000/api/courses/${id}`).then((response) =>
    console.log(response.data)).catch((err) => console.log(err))
    
  }
 
  
 
  
 
  return (
    <BrowserRouter>
    <div className='App'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>  
      <Route path='/students' element={<StudentForm addStudent={addStudent}/>}></Route>
      <Route path='/createCourse' element={<CourseForm addCourse={addCourse}/>}></Route>
      <Route path='/createTeacher' element={<TeacherForm addTeacher={addTeacher} />}></Route>
      <Route path='/courses' element={<CourseList courses={courses} deleteCourse={deleteCourse}/>}></Route>
      <Route path='/seeAllStudents' element={<StudentList students={students} deleteStudent={deleteStudent}/>}></Route>  
    </Routes>
    </div>
    </BrowserRouter>
  );
 
}

export default App