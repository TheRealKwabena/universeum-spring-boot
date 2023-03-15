package com.example.university.services;

import com.example.university.model.Teacher;
import com.example.university.repositories.TeacherRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {
    private final TeacherRepository teacherRepository;
    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public Teacher getTeacherById(Long id) {
        return this.teacherRepository.getTeacherByTeacherId(id);
    }
    public List<Teacher> getAllTeachers() {
        return this.teacherRepository.findAll();
    }

    public void deleteSpecificTeacher(Long id) {
        this.teacherRepository.deleteById(id);
    }
    public void deleteAllTeachers() {
        this.teacherRepository.deleteAll();
    }

    public String createTeacher(Teacher teacher) {
        String response = "";
        try{
            this.teacherRepository.save(teacher);
            response = "Teacher added successfully";

        } catch(DataIntegrityViolationException ex) {
            response = "Email already taken";
        }
        return response;

    }
}
