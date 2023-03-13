package com.example.university.repositories;

import com.example.university.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Optional<Teacher> getTeacherByEmail(String email);
    Teacher getTeacherByTeacherId(long id);
    void deleteTeacherByTeacherId(long id);
}
