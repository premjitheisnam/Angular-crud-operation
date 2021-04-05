import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

employees: Employee[] = [
  {
    id: 1,
    name: "premjit Heisnam",
    email: "abc@gmail.com",
    phone: 1234567890,
    role: "trainee"
  },
  {
    id: 2,
    name: "xyz",
    email: "xyz@gmail.com",
    phone: 546626,
    role: "trainee"
  },
  {
    id: 3,
    name: "tom",
    email: "tom@gmail.com",
    phone: 54688626,
    role: "trainee"
  }
];

  constructor() { }

  onGet() {
    return this.employees;
  }
}
