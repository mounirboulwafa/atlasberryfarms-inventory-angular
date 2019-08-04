import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EmployeesComponent } from './components/employee/employees/employees.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewEmployeeComponent } from './components/employee/new-employee/new-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsEmployeeComponent } from './components/employee/details-employee/details-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'employees', component: EmployeesComponent },
  {
    path: 'employees/new-employee',
    component: NewEmployeeComponent
  },
  {
    path: 'employees/edit-employee/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'employees/details-employee/:id',
    component: DetailsEmployeeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EquipmentsComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    DetailsEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
