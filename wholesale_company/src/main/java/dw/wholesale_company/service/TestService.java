package dw.wholesale_company.service;

import dw.wholesale_company.model.Customer;
import dw.wholesale_company.model.Employee;
import dw.wholesale_company.model.Order;
import dw.wholesale_company.repository.CustomerRepository;
import dw.wholesale_company.repository.EmployeeRepository;
import dw.wholesale_company.repository.OrderRepository;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.util.*;

@Service
@Transactional
public class TestService {
    EmployeeRepository employeeRepository;
    CustomerRepository customerRepository;
    OrderRepository orderRepository;

    public TestService(EmployeeRepository employeeRepository, CustomerRepository customerRepository, OrderRepository orderRepository) {
        this.employeeRepository = employeeRepository;
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }

    //1. 도시이름(city)을 매개변수로 받아 그 도시출신의 사원 정보를 보이시오.
    public List<Employee> getEmployeeByCity(String city) {
        List<Employee> employee = employeeRepository.findAll();
        List<Employee> employeeList = new ArrayList<>();

        for (int i = 0; i < employee.size(); i++) {
            if (employee.get(i).getCity().equals(city)){
                employeeList.add(employee.get(i));
            }
        }
        return employeeList;
    }

    //2. 주문번호를 매개변수(orderId)로 받아 주문한 고객의 정보를 보이시오.
    public List<Customer> getCustomerByOrderId(String id) {
        List<Customer> customer = customerRepository.findAll();
        List<Customer> customerList = new ArrayList<>();

        for (int i = 0; i < customer.size(); i++) {
            if (customer.get(i).getCustomerId().equalsIgnoreCase(id)){
                customerList.add(customer.get(i));
            }
        }
        return customerList;
    }

    //3. 주문년도(orderYear)를 매개변수로 받아 그 해의 주문건수(int)를 보이시오.
    public int getOrderNumByOrderYear(@PathVariable int orderYear) {
        int a = 0;
        List<Order> order = orderRepository.findAll();

        for (int i = 0; i < order.size(); i++) {
            int b = order.get(i).getOrderDate().getYear();
            if (b == orderYear){
                a++;
            }
        }
        return a;
    }



    //4. 직위(position)와 나이대(year)를 매개변수로 받아 해당정보에 맞는 사원들의 정보를 보이시오.
    // 예를 들어 20대는 매개변수 year=20 이고 나이가 20살이상 30살미만을 의미함.
    // 나이계산은 (올해 - 태어난해)로 계산.
    public List<Employee> getEmployeeByPositionAndYear(String position, int year) {
        List<Employee> employee = employeeRepository.findAll();
        List<Employee> employeeList = new ArrayList<>();

        for (int i = 0; i < employee.size(); i++) {
            if (employee.get(i).getPosition().equals(position)){
                int age = 2024 - employee.get(i).getBirthDate().getYear();
                if(age >= 20 && age < 30){
                    employeeList.add(employee.get(i));
                }else if(age >= 30 && age < 40){
                    employeeList.add(employee.get(i));
                }else if(age >= 40 && age < 50){
                    employeeList.add(employee.get(i));
                }
            }
        }

        return employeeList;
    }
}
