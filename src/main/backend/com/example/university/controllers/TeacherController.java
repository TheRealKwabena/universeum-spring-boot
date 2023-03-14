package com.example.university.controllers;

import com.example.university.model.Course;
import com.example.university.model.Teacher;
import com.example.university.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class TeacherController {

    private final TeacherService teacherService;
    @Autowired

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    @GetMapping("/teachers")
    ResponseEntity<?>  getAllTeachers() {
        List<Teacher> teacherList = this.teacherService.getAllTeachers();
        return ResponseEntity.ok(teacherList);

    }
    @GetMapping("/teachers/{id}")
    ResponseEntity<?> getSpecificTeacher(@PathVariable Long id) {
        try {
            Teacher teacher = this.teacherService.getTeacherById(id);
            if(teacher == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return ResponseEntity.ok(teacher);

        } catch(IllegalStateException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @DeleteMapping("/teachers/{id}")
    ResponseEntity<?> deleteTeacher(@PathVariable Long id) {
        this.teacherService.deleteSpecificTeacher(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Teacher with id " + id + " has been deleted");
    }
    @DeleteMapping("/teachers")
    ResponseEntity<?> deleteAllTeachers() {
        this.teacherService.deleteAllTeachers();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("All teachers have been deleted");
    }
    @PostMapping("/teachers")
    ResponseEntity<?> createTeacher(@RequestBody Teacher teacher) {
        Teacher addedTeacher = this.teacherService.createTeacher(teacher);
        return new ResponseEntity<>(addedTeacher, HttpStatus.CREATED);
    }
}
