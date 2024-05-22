package dw.wholesale_company.controller;

import dw.wholesale_company.model.Customer;
import dw.wholesale_company.model.Order;
import dw.wholesale_company.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrder() {
        return new ResponseEntity<>(orderService.getAllOrder(), HttpStatus.OK);
    }

    @GetMapping("/orders/date")
    public ResponseEntity<List<Order>> getOrderDate(){
        return new ResponseEntity<>(orderService.getOrderDate(), HttpStatus.OK);
    }

    @GetMapping("/orders/customer/{date}")
    public ResponseEntity<List<Order>> getOrderCustomer(@PathVariable LocalDate date){
        return new ResponseEntity<>(orderService.getOrderCustomer(date), HttpStatus.OK);
    }
}
