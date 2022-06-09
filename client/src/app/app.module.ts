import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMainHomeComponent } from './components/nav/nav-main-home/nav-main-home.component';
import { NavFooterHomeComponent } from './components/nav/nav-footer-home/nav-footer-home.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http'
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CanActivateGuard } from './router-guards/can-activate.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { BadgeModule} from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CalendarModule } from 'primeng/calendar';

export function tokenGetter(){
  return localStorage.getItem("token"); 
}

@NgModule({
  declarations: [
    AppComponent,
    NavMainHomeComponent,
    NavFooterHomeComponent,
    ProjectListComponent,
    EmployeeComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    TooltipModule,
    ToastModule,
    RippleModule,
    HttpClientModule,
    ConfirmPopupModule,
    AppRoutingModule,
    BadgeModule,
    CardModule,
    SplitButtonModule,
    DropdownModule,
    PasswordModule,
    CalendarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: [],
        authScheme: "Bearer " 
      }
    })
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
