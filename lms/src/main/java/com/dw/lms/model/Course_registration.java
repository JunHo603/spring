package com.dw.lms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@Table(name="course_registration")
public class Course_registration {
    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Column(name = "course_registration_date")
    private LocalDate courseRegistrationDate;

    @Column(name = "final_lecture_contents_seq")
    private Long finalLectureContentsSeq;

    @Column(name = "progress_lecture_contents_seq")
    private Long progressLectureContentsSeq;

    @Column(name = "lecture_completed_check", length = 1)
    private String lectureCompletedCheck;

    @Column(name = "sys_date", updatable = false)
    private LocalDateTime sysDate;

    @Column(name = "upd_date")
    private LocalDateTime updDate;
}
