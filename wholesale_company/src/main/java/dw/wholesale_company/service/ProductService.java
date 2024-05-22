package dw.wholesale_company.service;

import dw.wholesale_company.model.Product;
import dw.wholesale_company.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public List<Product> getProductInventory(){
        List<Product> product = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < product.size(); i++) {
            if (product.get(i).getInventory() < 50){
                productList.add(product.get(i));
            }
        }
        return productList;
    }

    public List<Product> getProductJuice(){
        List<Product> product = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < product.size(); i++) {
            if (product.get(i).getProductName().contains("주스")){
                productList.add(product.get(i));
            }
        }
        return productList;
    }

    public List<Product> getProductName(String str){
        List<Product> product = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < product.size(); i++) {
            if (product.get(i).getProductName().contains(str)){
                productList.add(product.get(i));
            }
        }
        return productList;
    }

    public List<Product> getProductLimit(){
        List<Product> product = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < product.size(); i++) {
            if (product.get(i).getUnitPrice() < 10000 && product.get(i).getUnitPrice() > 5000){
                productList.add(product.get(i));
            }
        }
        return productList;
    }
    public List<Product> getProductLowHighLimit(long rowLimit, long highLimit){
        List<Product> product = productRepository.findAll();
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < product.size(); i++) {
            if (product.get(i).getUnitPrice() >= rowLimit && product.get(i).getUnitPrice() <= highLimit){
                productList.add(product.get(i));
            }
        }
        return productList;
    }


}
