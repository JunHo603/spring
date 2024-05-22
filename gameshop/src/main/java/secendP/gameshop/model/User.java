package secendP.gameshop.model;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "user")
public class User {
    @Id
    // @GeneratedValue(strategy = IDENTITY)
    @Column(name = "user_id", length = 100)
    private String userId;
    @Column(name = "user_name", length = 255)
    private String userName;

    @Column(name = "email", length = 255)
    private String email;

    public User(){

    }
    public User(String userId, String userName, String email) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
    }

    public String getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
