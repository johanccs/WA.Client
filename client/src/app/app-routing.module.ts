import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

import { CanActivateGuard } from './router-guards/can-activate.guard';
import { CanDeactivateNewCreditCardGuard } from './router-guards/can-deactivate-new-credit-card-guard';

const routes: Routes = [
  {
    path: 'projects', component: ProjectListComponent
  },
  {
    path: 'employees', component: EmployeeComponent
  },
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: '**', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
