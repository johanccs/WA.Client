import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
import { NewEmployeeDto } from 'src/app/models/dtos/newEmployeeDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:5001/api/v1';

  constructor(private http: HttpClient) { }

  public getToken(){
    return localStorage.getItem('token');
  }

  public registerEmployee(employeeDto: NewEmployeeDto){
    const url = `${this.apiUrl}/employee`;

    return this.http.post(url, employeeDto);
  }
}
