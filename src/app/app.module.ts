import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EquipmentsComponent } from './equipments/equipments.component';
import { CollaborateursComponent } from './components/collaborateurs/collaborateurs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewCollaborateurComponent } from './components/new-collaborateur/new-collaborateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsCollaborateurComponent } from './components/details-collaborateur/details-collaborateur.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'collaborateurs', component: CollaborateursComponent },
  {
    path: 'collaborateurs/new-collaborateur',
    component: NewCollaborateurComponent
  },
  {
    path: 'collaborateurs/details-collaborateur/:id',
    component: DetailsCollaborateurComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EquipmentsComponent,
    CollaborateursComponent,
    NewCollaborateurComponent,
    DetailsCollaborateurComponent
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
