package com.example.university.model;

import jakarta.persistence.*;

@Entity(name = "Teacher")
@Table(name = "teacher",
    uniqueConstraints = {
        @UniqueConstraint(
                name = "teacher_email_unique",
                columnNames = "email"
        )
    }
)
public class Teacher {
    @Id
    @SequenceGenerator(
            name = "teacher_sequence",
            sequenceName = "teacher_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "teacher_sequence"
    )
    @Column(
            name = "course_id",
            nullable = false,
            updatable = false
    )
    private long teacherId;
    @Column(
            name = "faculty",
            nullable = false,
            columnDefinition = "TEXT"


    )
    private String faculty;
    @Column(
            name = "email",
            nullable = false,
            columnDefinition = "TEXT"

    )

    private String email;
    @Column(
            name = "full_name",
            nullable = false,
            columnDefinition = "TEXT"

    )
    private String fullName;
    @ManyToOne
    @JoinColumn( name = "course_id", nullable = false, insertable=false, updatable=false)

    private Course course;

    public Teacher(long teacherId, String faculty, String email, String fullName) {
        this.teacherId = teacherId;
        this.faculty = faculty;
        this.email = email;
        this.fullName = fullName;
    }
    public Teacher(String faculty, String email, String fullName) {
        this.faculty = faculty;
        this.email = email;
        this.fullName = fullName;
    }

    public Teacher() {
    }

    public long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(long teacherId) {
        this.teacherId = teacherId;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }




}


