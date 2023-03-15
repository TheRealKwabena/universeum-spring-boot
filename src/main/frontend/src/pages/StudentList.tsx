import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

interface IProps {
    students: any[];
    deleteStudent: (id: number) => void
}

const StudentList: React.FC<IProps> = ({students, deleteStudent}) => {
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Date of Birth</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align= "right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {student.id}
                  </TableCell>
                  <TableCell align="right">{student.firstName}</TableCell>
                  <TableCell align="right">{student.lastName}</TableCell>
                  <TableCell align="right">{student.email}</TableCell>
                  <TableCell align="right">{student.dob}</TableCell>
                  <TableCell align="right">{student.age}</TableCell>
                  <TableCell align='right'><DeleteIcon onClick={() => deleteStudent(student.id)}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default StudentList



