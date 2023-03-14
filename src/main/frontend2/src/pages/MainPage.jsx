import React,{useState} from 'react'
import  student from "../assets/student.jpg"
import picture from "../assets/study.jpg"
import teacher from "../assets/teacher.jpg"
import MainCard from '../components/MainCard'
 


const MainPage = () => {
    const functionalities = [
        {
          id: 1,
          name: "Add Student",
          text: "Select this card gives you the option to add a new student to the university",
          image: student,
          link: '/students'
    
        },
        {
          id: 2, 
          name: "Add Course",
          text: "Choose this option to add a new course",
          image: picture,
          link: '/createCourse'
        },
        {
          id: 3, 
          name: "Register Teacher",
          text: "Select this card gives you the option to add a new teacher to the university",
          image: teacher,
          link: '/createTeacher'
        },
        {
          id: 4, 
          name: "See All Courses",
          text: "Click to find all the courses in the university",
          image: picture,
          link: "/courses"
        },
        {
          id: 5, 
          name: "See All Students",
          text: "Click to find all the students in the university",
          image: student,
          link: "/seeAllStudents"
        }
      ]
    
    
  return (
    <>
    <div className='card-container'>
        
        {functionalities.map((functionality) => <MainCard name={functionality.name} text={functionality.text} image={functionality.image} link={functionality.link} />)}
      
      </div>
    </>
  )
}

export default MainPage