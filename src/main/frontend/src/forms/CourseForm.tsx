import React, {useState} from 'react'
import Navigation from "../components/Navigation"
import { TextField } from '@mui/material';
import { Course } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import Box from '@mui/material/Box';

interface CourseProps {
  addCourse: (course: Course) => void
}

const CourseForm: React.FC<CourseProps> = ({addCourse}) => {

  const [courseName, setCourseName] = useState("");
  const [courseLanguage, setCourseLanguage] = useState("");
  const [courseCode, setCourseCode] = useState("");

  const createCourse = (e: any) =>  {
    e.preventDefault();
    if(!courseName && !courseLanguage && ! courseCode) {
      toast.warn("FIll all fields before saving!")
      return;
    }
    const course: Course = {
      "courseName" : courseName,
      "courseLanguage": courseLanguage,
      "courseCode": courseCode
    }
    addCourse(course);
    setCourseName("");
    setCourseLanguage("");
    setCourseCode("");
  }


  return (


    <>
    <Box sx={{ flexGrow: 1 }}>
      <form className='course-input-form' onSubmit={createCourse}>
        <header>
          <h1 style={{
            fontSize: "40px"
          }} className='course-header'>Register Course</h1>
        </header>
        <TextField value={courseName} label="Course Name" variant="outlined" className='input' onChange={(e) => setCourseName(e.target.value)}/>
        
      
        <TextField value={courseLanguage} label="Course Language" variant="outlined" className='input' onChange={(e) => setCourseLanguage(e.target.value)}/>
        
        
        <TextField value={courseCode} label="Course Code" variant="outlined" className='input' onChange={(e) => setCourseCode(e.target.value)}/>
        <button className='create-course-button' style={{
          fontSize: "21px",
          height: "10%"
        }}>Save Student</button>

        <ToastContainer/>
      
      </form>
      
    </Box>
   
    </>
  )
}

export default CourseForm