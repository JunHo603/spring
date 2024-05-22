package secendP.gameshop.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import secendP.gameshop.dto.ReviewDto;
import secendP.gameshop.model.Review;
import secendP.gameshop.repository.ReviewRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
// @Transactional // 값을 저장하다 나중에 오류나면 처음에 저장한 데이터만 저장되고 오류난 부분부터는 오류로 저장이 안돼서 오류발생하니깐 이걸 써서 전체를 오류없이 코딩됐는지 안됐는지 확인하고 동작함.
public class ReviewService {
    ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review saveReview(Review review){
        review.setCreatedAt(LocalDateTime.now());
        return reviewRepository.save(review);
    }

    public List<Review> getReviewAll(){
        return reviewRepository.findAll();
    }

    // 내가 필요한 정보만 꺼내올 수 있음 -> 효율이 좋음
    // model을 직접 사용하면 보안에 취약해서 dto를 사용하는게 좋음
    public List<ReviewDto> getReviewAllByDto(){
        List<Review> reviewList = reviewRepository.findAll();
        List<ReviewDto> reviewDtoList = new ArrayList<>();

        for (int i = 0; i < reviewList.size(); i++) {
            ReviewDto reviewDto = new ReviewDto();
//            reviewDto.setReviewPoint(reviewList.get(i).getPoint());
//            reviewDto.setReviewText(reviewList.get(i).getReviewText());
//            reviewDto.setGameId(reviewList.get(i).getGameShop().getId());
//            reviewDto.setGameName(reviewList.get(i).getGameShop().getTitle());
//            reviewDto.setUserId(reviewList.get(i).getUser().getUserId());
            reviewDtoList.add(reviewDto.toReviewDtoFromReview(reviewList.get(i)));

        }
        return reviewDtoList;
    }

}
