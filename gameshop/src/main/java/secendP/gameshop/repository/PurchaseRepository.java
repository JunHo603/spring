package secendP.gameshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import secendP.gameshop.model.Purchase;
import secendP.gameshop.model.User;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    List<Purchase> findByUser(User user);
}
