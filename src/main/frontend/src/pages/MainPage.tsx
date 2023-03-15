import React,{useState} from 'react'
import  student from "../assets/student.jpg"
import picture from "../assets/study.jpg"
import teacher from "../assets/teacher.jpg"
import MainCard from '../components/MainCard'
 


const MainPage = () => {
    const functionalities = [
        {
          id: 1,
          name: "Register Student",
          text: "Click to register a student into the university",
          image: student,
          link: '/students'
    
        },
        {
          id: 2, 
          name: "Register Course",
          text: "Click to register a course into the database",
          image: picture,
          link: '/createCourse'
        },
        {
          id: 3, 
          name: "Register Teacher",
          text: "Click to register a teacher into the university",
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
        ,
        {
          id: 6, 
          name: "See All Teachers",
          text: "Click to find all the teachers in the university",
          image: teacher,
          link: "/seeAllTeachers"
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