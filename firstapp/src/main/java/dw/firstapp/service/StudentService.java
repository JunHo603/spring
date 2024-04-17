package dw.firstapp.service;

import dw.firstapp.model.Student;

public class StudentService {
    public int getStudentScore(Student student){
        System.out.println(student.getFirstName() + " " + student.getLastName());
        return 100;
    }


}
