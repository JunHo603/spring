package dw.wholesale_company.service;

import dw.wholesale_company.model.Customer;
import dw.wholesale_company.model.Order;
import dw.wholesale_company.repository.CustomerRepository;
import dw.wholesale_company.repository.OrderRepository;
import org.hibernate.boot.model.relational.Database;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class OrderService {

    OrderRepository orderRepository;
    CustomerRepository customerRepository;

    public OrderService(OrderRepository orderRepository, CustomerRepository customerRepository) {
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
    }

    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    public List<Order> getOrderDate(){
        List<Order> order = orderRepository.findAll();
        List<Order> orderDateList = new ArrayList<>();
        LocalDateTime localDateTime = LocalDateTime.of(2021,5,1,0,0,0,0);
        for (int i = 0; i < order.size(); i++) {
            if (order.get(i).getOrderDate().compareTo(localDateTime) > 0){
                orderDateList.add(order.get(i));
            }
        }
        return orderDateList;
    }

    public List<Order> getOrderCustomer(LocalDate date) {
        List<Order> order = orderRepository.findAll();
        List<Order> orderList = new ArrayList<>();

        List<Customer> customers = customerRepository.findAll();
        List<Customer> customerList = new ArrayList<>();
        LocalDateTime localDateTime = date.atStartOfDay();
        System.out.println(localDateTime);
        System.out.println(date);
        for (int i = 0; i < order.size(); i++) {
            if (order.get(i).getOrderDate().compareTo(localDateTime) > 0){
                orderList.add(order.get(i));
            }
        }
        System.out.println(orderList.size());
        System.out.println(customers.size());
//        for (int i = 0; i < orderList.size(); i++) {
//            int i1 = orderList.size();
//            if (orderList.get(i).getCustomer().equals(customers.get(i1).getCustomerId())){
//                customerList.add(customers.get(i));
//            }
//        }

        return orderList;
    }


}
