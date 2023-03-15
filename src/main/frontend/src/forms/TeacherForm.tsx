import React, {useState} from 'react'
import { TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import Form from "react-bootstrap/Form"
import { Teacher } from '../App';
export interface ITeacherProps {
  addTeacher: (teacher: Teacher) => void
}

const TeacherForm: React.FC<ITeacherProps> = ({addTeacher}) => {
    const [faculty, setFaculty] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");


    const createTeacher = (e: any) => {
      e.preventDefault();
      if(!faculty && !email && !fullName) {
        toast.error("Fill all the fields before saving!");
        return;
      }
      else {
        const teacher : Teacher = {
          "faculty": faculty,
          "email": email,
          "fullName": fullName
        }
        addTeacher(teacher);
        setFaculty("");
        setEmail("");
        setFullName("");
      }

    }


  return (
    <form className='student-input-form' onSubmit={createTeacher}>
      <header>
        <h1 style={{
          fontSize: "40px"
        }} className='course-header'>Register Student</h1>
      </header>
      <TextField  value={faculty} label="Faculty" variant="outlined" className='input' onChange={(e) => setFaculty(e.target.value)}/>
      <TextField value={email} label="Email" type= "email"  variant="outlined" className='input' onChange={(e) => setEmail(e.target.value)}/>
      <TextField  value= {fullName} label="Full Name" variant="outlined" className='input' onChange={(e) => setFullName(e.target.value)}/>
      <button className='create-course-button' style={{
          fontSize: "21px",
          height: "10%"
        }}>Save Teacher</button>

        <ToastContainer/>
      
     
    </form>
  )
}

export default TeacherForm