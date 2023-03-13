package com.example.university.config;

import com.example.university.model.Course;
import com.example.university.repositories.CourseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class CourseConfiguration {
    private static final Logger log = LoggerFactory.getLogger(CourseConfiguration.class);
    @Bean
    CommandLineRunner commandLineRunner(CourseRepository courseRepository) {
        return args -> {
            Course discreteMaths = new Course("Discrete Mathematics", "Swedish", "DIT444");
            Course physics = new Course("Physics", "English", "DIT101");
            Course biology = new Course("Biology", "English", "DIT104");
            log.info("Loading " + courseRepository.save(discreteMaths));
            log.info("Loading " + courseRepository.save(physics));
            log.info("Loading " + courseRepository.save(biology));

        };
    }
}
