import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { EmployeeComponent } from "../components/employee/employee.component";

@Injectable()
export class CanDeactivateNewCreditCardGuard implements CanDeactivate<EmployeeComponent>{
    canDeactivate(component: EmployeeComponent): boolean {
        
        return true;
    }

}