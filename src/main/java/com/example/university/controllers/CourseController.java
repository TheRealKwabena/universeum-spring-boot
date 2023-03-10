package com.example.university.controllers;

import com.example.university.model.Course;
import com.example.university.services.CourseService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/v1")
public class CourseController {

    private final CourseService courseService;
    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }


    @GetMapping("/courses")
    ResponseEntity<?> getAllCourses() {

        List<Course> courses = this.courseService.getCourses();
        return ResponseEntity.ok(courses);
    }

    @PostMapping("/courses")
    ResponseEntity<?> createCourse(@RequestBody Course course) {
        this.courseService.createCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).build();

    }

}
