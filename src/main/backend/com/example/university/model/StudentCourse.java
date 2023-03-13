package com.example.university.model;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;


@Entity(name = "StudentCourse")
@Table(name = "student_course")
public class StudentCourse {
    @Id
    @SequenceGenerator(
            name = "student_course_sequence",
            sequenceName = "student_course_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.UUID,
            generator = "student_course_sequence"
    )
    @UuidGenerator
    @Column(
            updatable = false
    )
    private UUID id;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @Column(
            name = "grade"
    )
    private Integer grade;

    public StudentCourse(UUID id, Student student, Course course, Integer grade) {
        this.id = id;
        this.student = student;
        this.course = course;
        this.grade = grade;
    }
    public StudentCourse(Student student, Course course, Integer grade) {

        this.student = student;
        this.course = course;
        this.grade = grade;
    }
    public StudentCourse() {

    }


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}
