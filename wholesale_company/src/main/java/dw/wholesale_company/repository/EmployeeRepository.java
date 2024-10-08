package dw.wholesale_company.repository;

import dw.wholesale_company.model.Employee;
import dw.wholesale_company.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, String> {

}
