package com.example.university.services;

import com.example.university.model.Course;
import com.example.university.model.Student;
import com.example.university.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Course getCourseById(Long id) {
        Course course = null;
        Optional<Course> courseOptional = this.courseRepository.findById(id);
        if(courseOptional.isPresent()) {

            course = courseOptional.get();
        }
        return course;
    }
    public void deleteCourseById(Long id) {
        this.courseRepository.deleteById(id);
    }
}
