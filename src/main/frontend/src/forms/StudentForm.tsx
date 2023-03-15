import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form"
import { Student } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface StudentProps {
  addStudent: (student: Student) => void 

  }
  


const StudentForm : React.FC<StudentProps> = ({addStudent}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  
 

  const createStudent = (e:any) => {
    e.preventDefault();
    if(firstName.length <= 0 || lastName.length <= 0 || email.length <= 0 || !date) {
      toast.error("Fill all fields before saving", {
        position: "top-center"
      });
      return;
    }
    else {
      

     
      const student: Student = {
        "firstName" : firstName,
        "lastName": lastName,
        "email": email,
        "dob" : date
      }
      addStudent(student)
      setFirstName("")
      setLastName("")
      setEmail("")
      
     
     
    }
    
  }


 
 
  return (
    <>
   <form className='student-input-form' onSubmit={createStudent}>
      <header>
        <h1 style={{
          fontSize: "40px"
        }} className='course-header'>Register Student</h1>
      </header>
      <TextField  value={firstName} label="First Name" variant="outlined" className='input' onChange={(e) => setFirstName(e.target.value)}/>
      <TextField value={lastName} label="Last Name" variant="outlined" className='input' onChange={(e) => setLastName(e.target.value)}/>
      <TextField  value= {email} type= "email" label="Email" variant="outlined" className='input' onChange={(e) => setEmail(e.target.value)}/>
      <Form.Control
                type="date"
                name="datepic"
                className='input-date'
                placeholder="DateRange"
                value={date}
                onChange={(date) => setDate(date.target.value)}
              />
              <button className='create-course-button'>Save</button>
      <ToastContainer/>     
      
     
    </form>
    
    </>
    
      
      
  )
 
}






export default StudentForm



