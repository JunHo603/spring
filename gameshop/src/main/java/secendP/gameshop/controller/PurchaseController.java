package secendP.gameshop.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import secendP.gameshop.model.Purchase;
import secendP.gameshop.service.PurchaseService;

import java.util.List;

@RestController
public class PurchaseController {
    PurchaseService purchaseService;
    @Autowired
    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @PostMapping("/purchase")
    public Purchase savePurchase(@RequestBody Purchase purchase){
        return purchaseService.savePurchase(purchase);
    }

    @GetMapping("/products/purchase")
    public List<Purchase> getAllPurchases(){
        return purchaseService.getAllPurchases();
    }

    @GetMapping("/products/purchase/{userId}")
    public List<Purchase> getPurchaseListById(@PathVariable String userId){
        return purchaseService.getPurchaseListByUser(userId);
    }

    @GetMapping("/products/purchase/game/{userName}")
    public ResponseEntity<List<Purchase>> getPurchaseListByUserName(@PathVariable String userName){
        return new ResponseEntity<>(purchaseService.getPurchaseListByUserName(userName), HttpStatus.OK);
    }


}
