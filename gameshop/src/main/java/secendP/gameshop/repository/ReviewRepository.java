package secendP.gameshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import secendP.gameshop.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
