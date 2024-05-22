package dw.wholesale_company.controller;

import dw.wholesale_company.model.Product;
import dw.wholesale_company.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProduct() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/product/inventory")
    public ResponseEntity<List<Product>> getProductInventory(){
        return new ResponseEntity<>(productService.getProductInventory(), HttpStatus.OK);
    }

    @GetMapping("/product/juice")
    public ResponseEntity<List<Product>> getProductJuice(){
        return new ResponseEntity<>(productService.getProductJuice(), HttpStatus.OK);
    }

    @GetMapping("/product/name/{str}")
    public ResponseEntity<List<Product>> getProductName(@PathVariable String str){
        return new ResponseEntity<>(productService.getProductName(str), HttpStatus.OK);
    }

    @GetMapping("/product/limit")
    public ResponseEntity<List<Product>> getProductLimit(){
        return new ResponseEntity<>(productService.getProductLimit(), HttpStatus.OK);
    }

    @GetMapping("/product/limit/{rowLimit},{highLimit}") // @RequestBody = /product/limit?lowLimit=5000&highLimit=9000 ? 옆에 컨트롤러 매개변수와 무조건 같아야함
    public ResponseEntity<List<Product>> getProductLowHighLimit(@PathVariable long rowLimit, @PathVariable long highLimit){
        return new ResponseEntity<>(productService.getProductLowHighLimit(rowLimit, highLimit), HttpStatus.OK);
    }
}
