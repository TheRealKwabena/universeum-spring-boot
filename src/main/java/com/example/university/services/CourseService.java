package com.example.university.services;

import com.example.university.model.Course;
import com.example.university.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;
    @Autowired

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
    public List<Course> getCourses() {
       return  this.courseRepository.findAll();
    }
    public void createCourse(Course course) {
        courseRepository.save(course);
    }
}
