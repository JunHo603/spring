package secendP.gameshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import secendP.gameshop.exception.ResourceNotFoundException;
import secendP.gameshop.model.GameShop;
import secendP.gameshop.model.User;
import secendP.gameshop.repository.GameShopRepository;
import secendP.gameshop.repository.UserRepository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GameShopService {

    GameShopRepository gameShopRepository;
    UserRepository userRepository;

    public GameShopService(GameShopRepository gameShopRepository, UserRepository userRepository) {
        this.gameShopRepository = gameShopRepository;
        this.userRepository = userRepository; // @Autowired
    }

    public GameShop saveGame(GameShop gameShop){
        gameShopRepository.save(gameShop);
        return gameShop;
    }
    public List<GameShop> getAllGames() {
        return gameShopRepository.findAll();
    }

    public GameShop getGameById(long id) {
        Optional<GameShop> gameShop = gameShopRepository.findById(id);
        if (gameShop.isEmpty()) {
            // 예외처리
            throw new ResourceNotFoundException("GameShop", "ID", id);
        } else {
            return gameShop.get();
        }
    }

    public GameShop updateGameById(long id, GameShop gameShop) {
        // ID로 해당 데이터 찾기
        Optional<GameShop> gameShop1 = gameShopRepository.findById(id);
        if (gameShop1.isPresent()) {
            // 데이터 업데이트
            gameShop1.get().setGenre(gameShop.getGenre());
            gameShop1.get().setPrice(gameShop.getPrice());
            gameShop1.get().setImage(gameShop.getImage());
            gameShop1.get().setText(gameShop.getText());
            gameShop1.get().setTitle(gameShop.getTitle());
            // 실제로 DB에 저장하기
            gameShopRepository.save(gameShop1.get());

            return gameShop1.get();
        }else {
            throw new ResourceNotFoundException("GameShop", "ID", id);
        }
    }

    public GameShop getGameWithMaxPrice(){
        // 제일 비싼 게임의 정보
        // 일반 자바코드 사용 예
        // List<GameShop> games = gameShopRepository.findAll();
//        GameShop max = games.get(0);
//        for (int i=0; i< games.size()-1;i++){
//            if(max.getPrice() < games.get(i+1).getPrice()){
//                max = games.get(i+1);
//            }
//        }
//        return max;
        //람다식 사용 예
//        return games.stream()
//                .sorted(Comparator.comparingInt(GameShop::getPrice))
//                .



        // JPQL 사용 예
        return gameShopRepository.getGameWithMaxPrice();
    }




    public List<GameShop> getGameWithMaxPriceTop3(){
        // 제일 비싼 게임 top 3
        // List<GameShop> games = gameShopRepository.findAll();
//        games.sort(Comparator.comparingInt((GameShop g) -> g.getPrice()).reversed());
//        List<GameShop> newGames = new ArrayList<>();
//        newGames.add(games.get(0));
//        newGames.add(games.get(1));
//        newGames.add(games.get(2));
//        return newGames;
        // 람다식
//        return games.stream()
//                .sorted(Comparator.comparingInt(GameShop::getPrice).reversed())
//                .limit(3)
//                .collect(Collectors.toList());

        return gameShopRepository.getGameWithMaxPriceTop3().stream().limit(3).collect(Collectors.toList());

    }
    public User saveUser(User user){
        return userRepository.save(user);
    }
}
