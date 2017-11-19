import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolutionSelectionComponent} from './solution-selection.component';

const routes: Routes = [
  { path: 'solution-selection', component: SolutionSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionSelectionRoutingModule { }
