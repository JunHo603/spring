package secendP.gameshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import secendP.gameshop.model.GameShop;
import secendP.gameshop.model.Purchase;
import secendP.gameshop.model.User;

import java.util.List;
import java.util.Optional;

public interface GameShopRepository extends JpaRepository<GameShop, Long> {
    // Repository에서 JPQL 사용법 : @Query 어노테이션 사용
    @Query("SELECT g1 FROM GameShop g1 " +
            "WHERE g1.price = (SELECT MAX(g2.price) FROM GameShop g2)")
    GameShop getGameWithMaxPrice();

    @Query("select g1 from GameShop g1 order by g1.price desc")
    public List<GameShop> getGameWithMaxPriceTop3();
}
