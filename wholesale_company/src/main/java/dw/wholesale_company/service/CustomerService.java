package dw.wholesale_company.service;

import dw.wholesale_company.model.Customer;
import dw.wholesale_company.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    public List<Customer> getCustomerAvg(){
        List<Customer> customers = customerRepository.findAll();
        List<Customer> customerList = new ArrayList<>();
        double avg = 0;
        int sum = 0;
        for (int i = 0; i < customers.size(); i++) {
            sum += (int) customers.get(i).getMileage();
        }
        avg = (double) sum /customers.size();

        for (int i = 0; i < customers.size(); i++) {
            if (customers.get(i).getMileage() > avg){
                customerList.add(customers.get(i));
            }
        }

        return customerList;
    }
}
