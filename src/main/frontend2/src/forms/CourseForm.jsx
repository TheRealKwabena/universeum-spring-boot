import React from 'react'

const CourseForm = () => {
  const createStudent = (e) => {
    e.preventDefault();
    if(firstName.length <= 0 || lastName.length <= 0 || email.length <= 0 || date.length <= 0) {
      alert("Fill all fields before submitting");
      return;
    }
    else {
      
  
      var newDate = date.toString().split("-").reverse().join("-");
      
      const student = {
        "firstName" : firstName,
        "lastName": lastName,
        "email": email,
        "dob" : new Date(newDate)
      }
      console.log(student)
      setFirstName("")
      setLastName("")
      setEmail("")
      setDate("")
     
     
    }
  
  
  
  
  return (
    <>
   
  
    
    <form className='input-form' onSubmit={createStudent}>
      <h1 className='header'>Create a Student</h1>
      <TextField  value={firstName} label="First Name" variant="outlined" className='input' onChange={(e) => setFirstName(e.target.value)}/>
      <TextField value={lastName} label="Last Name" variant="outlined" className='input' onChange={(e) => setLastName(e.target.value)}/>
      <TextField  value= {email} type= "email" label="Email" variant="outlined" className='input' onChange={(e) => setEmail(e.target.value)}/>
      
      
  
    
      <Form.Control
                type="date"
                name="datepic"
                className='input'
                placeholder="DateRange"
                value={date}
                onChange={(date) => setDate(date.target.value)}
              />
      <button className='create-button'>Save</button>          
          
    </form>
    
    </>
    
      
      
  )
  }
}

export default CourseForm








