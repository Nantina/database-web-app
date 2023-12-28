
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { VictimComponent } from './victim/victim.component';
import { ClueComponent } from './clue/clue.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { SuspectComponent } from './suspect/suspect.component';
import { WitnessComponent } from './witness/witness.component';
import { PolicemanComponent } from './policeman/policeman.component';



const routes: Routes = [
  { path: 'cases', component: CasesComponent },
  { path: 'victim', component: VictimComponent}, 
  { path: 'clues', component: ClueComponent},
  { path: 'cases/case-details', component: CaseDetailsComponent},
  { path: 'suspects', component: SuspectComponent},
  { path: 'witnesses', component: WitnessComponent},
  { path: 'policemen', component: PolicemanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
