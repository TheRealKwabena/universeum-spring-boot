package com.example.university.utils;

import java.time.LocalDate;

public class StudentUtil {
    public static LocalDate convertedDate(String date) {
        String[] parts = date.split("-");
        int day = Integer.parseInt(parts[0]);
        int month = Integer.parseInt(parts[1]);
        int year = Integer.parseInt(parts[2]);
        return LocalDate.of(year, month, day);
    }
}
