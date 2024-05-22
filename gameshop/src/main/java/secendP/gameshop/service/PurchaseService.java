package secendP.gameshop.service;

import org.springframework.stereotype.Service;
import secendP.gameshop.exception.ResourceNotFoundException;
import secendP.gameshop.model.GameShop;
import secendP.gameshop.model.Purchase;
import secendP.gameshop.model.User;
import secendP.gameshop.repository.GameShopRepository;
import secendP.gameshop.repository.PurchaseRepository;
import secendP.gameshop.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PurchaseService {
    PurchaseRepository purchaseRepository;
    UserRepository userRepository;


    public PurchaseService(PurchaseRepository purchaseRepository, UserRepository userRepository) {
        this.purchaseRepository = purchaseRepository;
        this.userRepository = userRepository;
    }

    public Purchase savePurchase(Purchase purchase){
        purchase.setPurchaseTime(LocalDateTime.now()); // 구매확정 바로 직전, 현재시간을 저장함
        purchaseRepository.save(purchase);
        return purchase;
    }

    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }

    public List<Purchase> getPurchaseListByUser(String userId){
        Optional<User> userOptional = userRepository.findByUserId(userId);
        if(userOptional.isEmpty()){
            throw new ResourceNotFoundException("User", "ID", userId);
        }
        return purchaseRepository.findByUser(userOptional.get());
    }

    // 유저 이름으로 구매한 게임 찾기

    public List<Purchase> getPurchaseListByUserName(String userName){
        Optional<User> userOptional = userRepository.findByUserName(userName);
        if(userOptional.isEmpty()){
            throw new ResourceNotFoundException("User","Name", userName);
        }
        return purchaseRepository.findByUser(userOptional.get());

    }

}
