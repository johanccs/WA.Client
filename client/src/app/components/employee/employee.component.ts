import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { NewEmployeeDto } from 'src/app/models/dtos/newEmployeeDto';
import { Employee} from 'src/app/models/employee';
import { JobTitle } from 'src/app/models/jobTitle';
import { EmployeeService } from 'src/app/services/Employee/employee.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [MessageService]
})
export class EmployeeComponent implements OnInit {

  jobTitles: JobTitle[] = [];
  selectedJobTitle: JobTitle;
  newEmployee: NewEmployeeDto;
  buttonCaption: string = 'Submit';

  constructor(private empService: EmployeeService, private messageService: MessageService)
  { 
    this.jobTitles.push(new JobTitle(1, "Developer"));
    this.jobTitles.push(new JobTitle(2, "DBA"));
    this.jobTitles.push(new JobTitle(3, "Tester"));
    this.jobTitles.push(new JobTitle(4, "Business Analyst"));
  }

  ngOnInit(): void
  {
    this.newEmployee = new NewEmployeeDto('', '', 0, '');
  }

  submit(){
    this.buttonCaption = 'Please wait..';
    
    this.empService.registerEmployee(this.newEmployee).subscribe(data=> {
        const emp = data as Employee;
        this.showSuccess("Employee Added", `New employee id - ${emp.id}`);
    });
  }
    

  showSuccess(summaryArg: string, detailArg: string){
    this.messageService.add({key: 't1', severity: 'success', summary: summaryArg, detail: detailArg});
  }

  showError(summaryArg: string, detailArg: string){
    this.messageService.add({key: 't1', severity: 'error', summary: summaryArg, detail: detailArg});
  }

  showBusy(){
    this.messageService.add({key: 't1', severity: 'warn', summary: 'Is  Busy', detail: 'Signing in. Please wait...'});
  }
}
