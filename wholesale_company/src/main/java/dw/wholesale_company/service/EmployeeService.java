package dw.wholesale_company.service;

import dw.wholesale_company.model.Employee;
import dw.wholesale_company.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    public List<Employee> getEmployeePosition(){
        List<Employee> employee = employeeRepository.findAll();
        List<Employee> employeeList = new ArrayList<>();
        for (int i = 0; i < employee.size(); i++) {
            if (employee.get(i).getPosition().equals("사원")){
                employeeList.add(employee.get(i));
            }
        }
        return employeeList;
    }
}
