package com.dw.lms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity // 없으면 JPA 가 Table 생성을 안해줌
@Table(name = "authority")
public class Authority {
    @Id
    @Column(name = "authority_name", length = 50)
    private String authorityName;
}
