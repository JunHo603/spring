package secendP.gameshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import secendP.gameshop.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUserId(String userID);
    Optional<User> findByUserName(String userName);



}
