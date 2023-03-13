package com.example.university.config;

import com.example.university.model.Course;
import com.example.university.model.Student;
import com.example.university.repositories.CourseRepository;
import com.example.university.repositories.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;

@Configuration
public class StudentConfiguration {
    private static final Logger log = LoggerFactory.getLogger(CourseConfiguration.class);
    @Bean
    CommandLineRunner studentCommandLineRunner(StudentRepository studentRepository) {
        return args -> {
            Student student1= new Student("Papa", "John", "papa.johns123@gmail.com", LocalDate.of(1999, Month.APRIL, 10));
            Student student2 = new Student("Kobbie", "Bryant", "kobbie.bryant@gu.se", LocalDate.of(2003, Month.JANUARY, 19));

            log.info("Loading " + studentRepository.save(student1));
            log.info("Loading " + studentRepository.save(student2));


        };
    }
}
