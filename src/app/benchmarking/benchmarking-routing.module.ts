import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BenchmarkingComponent} from './benchmarking.component';

const routes: Routes = [
  { path: '', component: BenchmarkingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenchmarkingRoutingModule { }
