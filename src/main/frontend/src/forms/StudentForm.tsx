import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
 
  return (
    <>
    
    <form className='input-form'>
      <h1 className='header'>Create a Student</h1>
      <TextField  value={firstName} label="First Name" variant="outlined" className='input' onChange={(e) => setFirstName(e.target.value)}/>
      <TextField value={lastName} label="Last Name" variant="outlined" className='input' onChange={(e) => setLastName(e.target.value)}/>
      <TextField  value= {email} label="Email" variant="outlined" className='input' onChange={(e) => setEmail(e.target.value)}/>
    
      <DatePicker className = 'input'selected={startDate} onChange={(date) => setStartDate(date)} />
    </form>
    </>
    
      
      
  )
}




// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  
};

export default StudentForm



