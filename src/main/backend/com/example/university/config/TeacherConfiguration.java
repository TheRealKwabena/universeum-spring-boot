package com.example.university.config;

import com.example.university.model.Course;
import com.example.university.model.Teacher;
import com.example.university.repositories.CourseRepository;
import com.example.university.repositories.TeacherRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TeacherConfiguration {
    private static final Logger log = LoggerFactory.getLogger(CourseConfiguration.class);

    @Bean
    CommandLineRunner commanLineRunner(TeacherRepository teacherRepository) {
        return args -> {
            Teacher teacher1 = new Teacher("Software Engineering", "paul.james@gu.edu", "Dr.Paul James");
            Teacher teacher2 = new Teacher("Quantum Physics", "abratammy@gu.edu", "Tammy Abraham");

            log.info("Loading " + teacherRepository.save(teacher1));
            log.info("Loading " + teacherRepository.save(teacher2));


        };
    }
}
