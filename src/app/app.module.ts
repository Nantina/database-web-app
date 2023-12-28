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
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { InsertCaseDialogComponent } from './insert-case-dialog/insert-case-dialog.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { InsertClueComponent } from './insert-clue/insert-clue.component';
import { InsertPolicemanComponent } from './insert-policeman/insert-policeman.component';
import { InsertVictimComponent } from './insert-victim/insert-victim.component';
import { InsertWitnessComponent } from './insert-witness/insert-witness.component';
import { InsertSuspectComponent } from './insert-suspect/insert-suspect.component';

const routes: Routes = [
  // { path: '/', component: HeaderComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'victims', component: VictimComponent}, 
  { path: 'clues', component: ClueComponent},
  { path: 'suspects', component: SuspectComponent},
  { path: 'witnesses', component: WitnessComponent},
  { path: 'policemen', component: PolicemanComponent}
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
    FooterComponent,
    InsertCaseDialogComponent,
    CaseDetailsComponent,
    InsertClueComponent,
    InsertPolicemanComponent,
    InsertVictimComponent,
    InsertWitnessComponent,
    InsertSuspectComponent
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