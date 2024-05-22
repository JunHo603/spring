package secendP.gameshop.model;

import jakarta.persistence.*;

@Entity
@Table(name = "games")
public class GameShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="title", length=100)
    private String title;
    @Column(name="genre", length=100)
    private String genre;
    @Column(name="price")
    private int price;
    @Column(name="image", length=65535)
    private String image;
    @Column(name="text", length=65535)
    private String text;

    public GameShop(){

    }

    public GameShop(long id, String title, String genre, int price, String image, String text) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.price = price;
        this.image = image;
        this.text = text;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getGenre() {
        return genre;
    }

    public int getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    public String getText() {
        return text;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setText(String text) {
        this.text = text;
    }
}
