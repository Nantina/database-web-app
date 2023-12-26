// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { CasesComponent } from './cases/cases.component';
import { VictimComponent } from './victim/victim.component';
import { ClueComponent } from './clue/clue.component';
import { CaseDetailsComponent } from './case-details/case-details.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'cases', component: CasesComponent },
  { path: 'victim', component: VictimComponent}, 
  { path: 'clue', component: ClueComponent},
  { path: 'cases/case-details', component: CaseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
