import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProjectEmployeeDto } from 'src/app/models/dtos/projectEmployeeDto';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [MessageService]
})
export class ProjectListComponent implements OnInit {

  projects: ProjectEmployeeDto[] = [];
  offLineMsg: string = "Offline";
  isOffline: boolean = true;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(){
    this.isLoading = true;
    this.projectService.getProjects().subscribe(data => {
      this.projects = data as ProjectEmployeeDto[];
      this.isOffline = !(this.projects.length > 0);
      this.isLoading = false;
    }, err=>{
      this.showError("Error", err.message);
      console.log(err);
      this.isLoading = false;
    });
  
    this.router.navigate(['projects'], {
      state: {param: this.projects}
    });
  }

  noImplementation(){
    this.showBusy("No implementation", "There is no implementation for this button");
  }

  showSuccess(summaryArg: string, detailArg: string){
    this.messageService.add({key: 't1', severity: 'success', summary: summaryArg, detail: detailArg});
  }

  showError(summaryArg: string, detailArg: string){
    this.messageService.add({key: 't1', severity: 'error', summary: summaryArg, detail: detailArg});
  }

  showBusy(summaryArg: string, detailArg: string){
    this.messageService.add({key: 't1', severity: 'warn', summary: summaryArg, detail: detailArg});
  }

}
