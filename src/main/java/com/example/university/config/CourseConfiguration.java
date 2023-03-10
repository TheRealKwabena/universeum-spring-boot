package com.example.university.config;

import com.example.university.model.Course;
import com.example.university.repositories.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class CourseConfiguration {
    @Bean
    CommandLineRunner commandLineRunner(CourseRepository courseRepository) {
        return args -> {
            Course discreteMaths = new Course("Discrete Mathematics", "Swedish", "DIT444");
            Course physics = new Course("Physics", "English", "DIT101");
            Course biology = new Course("Biology", "English", "DIT104");
            courseRepository.saveAll(List.of(discreteMaths, physics, biology));
        };
    }
}
