package dw.wholesale_company.controller;

import dw.wholesale_company.model.Customer;
import dw.wholesale_company.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomer() {
        return new ResponseEntity<>(customerService.getAllCustomer(), HttpStatus.OK);
    }

    @GetMapping("/customers/avg")
    public ResponseEntity<List<Customer>> getCustomerAvg(){
        return new ResponseEntity<>(customerService.getCustomerAvg(), HttpStatus.OK);
    }
}
