package net.javaguides.springboot;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Shankar");
//		employee.setLastName("Chimnani");
//		employee.setEmailId("chimnanishankar4@gmail.com");
//		employee.setMiddleName("Jaipal");
//		employee.setMobileNumber("7507060439");
//		employee.setDateOfBirth("02-010-2022");
//		employee.setAadhaarCardNumber("988810348078");
//		employee.setPanCardNumber("BKCPC750P");
//		employee.setGender("Male");
//		employee.setMaritalStatus("Single");
//		employee.setSpousesName("Dayal");
//		employee.setSpousesEmployer("Ankit");
//		employeeRepository.save(employee);

//		Employee employee1 = new Employee();
//		employee1.setFirstName("John");
//		employee1.setLastName("Cena");
//		employee1.setEmailId("cena@gmail.com");
//		employeeRepository.save(employee1);
	}
}
