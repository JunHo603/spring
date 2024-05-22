package secendP.gameshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import secendP.gameshop.model.Review;

// @Component // bean으로 쓰고싶으면 쓰는 어노테이션

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ReviewDto {
    private long gameId;
    private String gameName;
    private String userId;
    private int reviewPoint;
    private String reviewText;

    // review 엔티티를 reviewdto 타입으로 형변환하는 매서드
    // 이런식의 형변환 코드를 내장하는 것이 더 효율적
    public ReviewDto toReviewDtoFromReview(Review review) {
        ReviewDto reviewDto = new ReviewDto();
        reviewDto.setReviewPoint(review.getPoint());
        reviewDto.setReviewText(review.getReviewText());
        reviewDto.setGameId(review.getGameShop().getId());
        reviewDto.setGameName(review.getGameShop().getTitle());
        reviewDto.setUserId(review.getUser().getUserId());
        return reviewDto;
    }
}

