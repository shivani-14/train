package com.training.org;

import java.util.ArrayList;
import java.util.List;

public class Employee {
	private int empId;
	private String name;
	private double salary;
	private Address address;
	private List<String> technologies;
	private List<Project> projects;
	
	public Employee() {
		System.out.println("Default constructor is called");
		empId=0;
		name="";
		salary=0;
		address=new Address();
		technologies=new ArrayList<String>();
		projects=new ArrayList<Project>();
	}


	public Employee(int empId, String name, double salary, Address address, List<String> technologies,
			List<Project> projects) {
		super();
		this.empId = empId;
		this.name = name;
		this.salary = salary;
		this.address = address;
		this.technologies = technologies;
		this.projects = projects;
	}




	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	public List<String> getTechnologies() {
		return technologies;
	}

	public void setTechnologies(List<String> technologies) {
		this.technologies = technologies;
	}

	public List<Project> getProjects() {
		return projects;
	}


	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}




	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", name=" + name + ", salary=" + salary + ", address=" + address
				+ ", technologies=" + technologies + ", projects=" + projects + "]";
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	
	
}
