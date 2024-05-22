package dw.wholesale_company.service;

import dw.wholesale_company.model.Department;
import dw.wholesale_company.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    DepartmentRepository departmentRepository;

    public List<Department> getAllDepartment() {
        return departmentRepository.findAll();
    }
}
