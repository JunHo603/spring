package secendP.gameshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import secendP.gameshop.model.GameShop;
import secendP.gameshop.model.User;
import secendP.gameshop.service.GameShopService;

import java.util.List;

@RestController
public class GameShopController {
    GameShopService gameShopService;
    @Autowired
    public GameShopController(GameShopService gameShopService){
        this.gameShopService=gameShopService;
    }

    @GetMapping("/products")
    public ResponseEntity<List<GameShop>> getAllGames() {
        return new ResponseEntity<>(gameShopService.getAllGames(), HttpStatus.OK);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<GameShop> getGameById(@PathVariable long id) {
        return new ResponseEntity<>(gameShopService.getGameById(id), HttpStatus.OK);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<GameShop> updateGameById(@PathVariable long id,
                                   @RequestBody GameShop employee) {
        return new ResponseEntity<>(gameShopService.updateGameById(id, employee), HttpStatus.OK);
    }

    @PostMapping("/products/user")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return new ResponseEntity<>(gameShopService.saveUser(user), HttpStatus.OK);
    }

    @GetMapping("/products/maxprice")
    public ResponseEntity<GameShop> getGameWithMaxPrice(){
        return new ResponseEntity<>(gameShopService.getGameWithMaxPrice(), HttpStatus.OK);
    }

    @GetMapping("/products/price/topthree")
    public ResponseEntity<List<GameShop>> getGameWithMaxPriceTop3(){
        return new ResponseEntity<>(gameShopService.getGameWithMaxPriceTop3(), HttpStatus.OK);
    }

}
