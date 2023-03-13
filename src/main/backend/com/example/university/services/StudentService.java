package com.example.university.services;

import com.example.university.model.Course;
import com.example.university.model.Student;
import com.example.university.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public List<Student> getAllStudents() {
        return this.studentRepository.findAll();
    }
    public Student getStudentById(Long id) {
        Student student = null;
        Optional<Student> studentOptional = this.studentRepository.findById(id);
        if(studentOptional.isPresent()) {

            student = studentOptional.get();
        }
        return student;
    }
    public void createStudent(Student student) {
        this.studentRepository.save(student);
    }

    public void deleteStudents() {
        this.studentRepository.deleteAll();
    }

    public void deleteStudentById(Long id) {
        this.studentRepository.deleteById(id);
    }


}
