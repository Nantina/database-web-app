import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CasesComponent } from './cases/cases.component';
import { SuspectComponent } from './suspect/suspect.component';
import { WitnessComponent } from './witness/witness.component';
import { ClueComponent } from './clue/clue.component';
import { PolicemanComponent } from './policeman/policeman.component';
import { MedicalExaminerComponent } from './medical-examiner/medical-examiner.component';
import { VictimComponent } from './victim/victim.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { InsertCaseDialogComponent } from './insert-case-dialog/insert-case-dialog.component';

const routes: Routes = [
  // { path: '/', component: HeaderComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'victim', component: VictimComponent}, 
  { path: 'clue', component: ClueComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CasesComponent,
    SuspectComponent,
    WitnessComponent,
    ClueComponent,
    PolicemanComponent,
    MedicalExaminerComponent,
    VictimComponent,
    HomeComponent,
    FooterComponent,
    InsertCaseDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule {}