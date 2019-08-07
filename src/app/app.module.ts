import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { EmployeesComponent } from './components/employee/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { NewEmployeeComponent } from './components/employee/new-employee/new-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsEmployeeComponent } from './components/employee/details-employee/details-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { VehiclesComponent } from './components/parc-auto/vehicles/vehicles.component';
import { NewVehicleComponent } from './components/parc-auto/new-vehicle/new-vehicle.component';
import { AffectationsComponent } from './components/affectation/affectations/affectations.component';
import { NewAffectationComponent } from './compenents/affectation/new-affectation/new-affectation.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

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
  },
  {
    path: 'parc-auto/vehicles',
    component: VehiclesComponent
  },
  {
    path: 'parc-auto/vehicles/new-vehicle',
    component: NewVehicleComponent
  },
  {
    path: 'affectations',
    component: AffectationsComponent
  },
  {
    path: 'affectations/new-affectation',
    component: NewAffectationComponent
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
    EditEmployeeComponent,
    VehiclesComponent,
    NewVehicleComponent,
    AffectationsComponent,
    NewAffectationComponent
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
