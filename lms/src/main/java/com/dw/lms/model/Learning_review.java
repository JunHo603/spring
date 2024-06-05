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
@Table(name="learning_review")
public class Learning_review {
    @Id
    @Column(name = "user_id")
    private String userId;

    @Id
    @ManyToOne
    @JoinColumn(name = "lecture_id", referencedColumnName = "lecture_id")
    private Course_registration courseRegistration;

    @Column(name = "learning_review_date")
    private LocalDate learningReviewDate;

    @Column(name = "learning_review_score")
    private Long learningReviewScore;

    @Column(name = "learning_review_content", length = 255)
    private String learningReviewContent;

    @Column(name = "sys_date", updatable = false)
    private LocalDateTime sysDate;

    @Column(name = "upd_date")
    private LocalDateTime updDate;
}
