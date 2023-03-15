import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';


interface IListProps {
    courses: any[];
    deleteCourse: (id: number) => void

}

const CourseList: React.FC<IListProps> = ({courses, deleteCourse}) => {

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Course Name</TableCell>
                <TableCell align="right">Course Language</TableCell>
                <TableCell align="right">Course Code</TableCell>
                
                <TableCell align= "right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow
                  key={course.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {course.id}
                  </TableCell>
                  <TableCell align="right">{course.courseName}</TableCell>
                  <TableCell align="right">{course.courseLanguage}</TableCell>
                  <TableCell align="right">{course.courseCode}</TableCell>
                  
                  <TableCell align='right'><DeleteIcon onClick={() => deleteCourse(course.id)}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  
}

export default CourseList