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
@Table(name="course_history")
public class Course_history {
    @Id
    @Column(name = "user_id", length = 100)
    private String userId;

    @Id
    @ManyToOne
    @JoinColumn(name = "lecture_id", referencedColumnName = "lecture_id")
    private Course_registration courseRegistration;

    @Id
    @Column(name = "course_history_seq")
    private Long courseHistorySeq;

    @Column(name = "connection_ip", length = 15)
    private String connectionIp;

    @Column(name = "connection_start_date")
    private LocalDate connectionStartDate;

    @Column(name = "connection_end_date")
    private LocalDate connectionEndDate;

    @Column(name = "sys_date", updatable = false)
    private LocalDateTime sysDate;

    @Column(name = "upd_date")
    private LocalDateTime updDate;
}
