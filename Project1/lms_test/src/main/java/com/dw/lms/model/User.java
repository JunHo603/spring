package com.dw.lms.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@Table(name="user")
public class User implements UserDetails { // UserDetails 를 상속받아 사용
    @Id
    @Column(name="user_id", length=100)
    private String userId;
    @Column(name="user_name", length=255, nullable = false)
    private String userName;
    @Column(name="email", length=255, nullable = false)
    private String email;
    @Column(name="password")
    private String password;

    // 권한 관련 추가
    @ManyToOne
    @JoinColumn(name="user_authority")
    private Authority authority;

    @Column(name="created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name="user_name_eng")
    private String userNameEng;

    @Column(name="gender")
    private String gender;

    @Column(name="birth_date")
    private LocalDate birthDate;

    @Column(name="hp_tel")
    private String hpTel;

    @Column(name="zip_code")
    private String zip_code;

    @Column(name="address1_name")
    private String address1Name;

    @Column(name="address2_name")
    private String address2Name;

    @Column(name="education")
    private String education;

    @Column(name="final_school")
    private String finalSchool;

    @Column(name="cf_of_emp")
    private String cfOfEmp;

    @Column(name="consent_to_ri_yn")
    private String consentToRiYn;

    @Column(name="act_yn")
    private String actYn;

    @Column(name="upd_date")
    private LocalDateTime updatedAt;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //return List.of(new SimpleGrantedAuthority("user"));
        return Collections.singletonList(new SimpleGrantedAuthority(authority.getAuthorityName()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    } // boolean 계정이 만료되지 않았습니까? 정상 true

    @Override
    public boolean isAccountNonLocked() {
        return true;
    } // boolean 계정이 잠기지 않았습니까? 정상 true

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    } // boolean 자격 증명이 만료되지 않았습니까? 정상 true

    @Override
    public boolean isEnabled() {
        return true;
    } // boolean 정상 true
}
