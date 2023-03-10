package com.example.university.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity(name = "Course")
@Table(
        name = "course",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "course_code_unique",
                        columnNames = "course_code"
                )
        }
)
public class Course {
    @Id
    @SequenceGenerator(
            name = "course_sequence",
            sequenceName = "course_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_sequence"
    )
    @Column(
            name = "id",
            updatable = false,
            nullable = false
    )
    private long id;
    @Column(
            name = "course_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String courseName;
    @Column(
            name = "course_language",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String courseLanguage;

    @Column(
            name = "course_code",
            columnDefinition = "TEXT"
    )
    private String courseCode;



    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)

    private List<Teacher> teacherList;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Set<StudentCourse> studentCourseSet;

    public Set<StudentCourse> getStudentCourseSet() {
        return studentCourseSet;
    }

    public void setStudentCourseSet(Set<StudentCourse> studentCourseSet) {
        this.studentCourseSet = studentCourseSet;
    }

    public Course() {
    }

    public Course(long id, String courseName, String courseLanguage, String courseCode) {
        this.id = id;
        this.courseName = courseName;
        this.courseLanguage = courseLanguage;
        this.courseCode = courseCode;
    }
    public Course(String courseName, String courseLanguage, String courseCode) {
        this.courseName = courseName;
        this.courseLanguage = courseLanguage;
        this.courseCode = courseCode;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseLanguage() {
        return courseLanguage;
    }

    public void setCourseLanguage(String courseLanguage) {
        this.courseLanguage = courseLanguage;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }
    public List<Teacher> getTeacherList() {
        return teacherList;
    }



    public void setTeacherList(List<Teacher> teacherList) {
        this.teacherList = teacherList;
    }


}
