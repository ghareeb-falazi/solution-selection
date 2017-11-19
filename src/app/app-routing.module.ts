import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'solution-selection', pathMatch: 'full'},
  { path: 'benchmarking', loadChildren: 'app/benchmarking/benchmarking.module#BenchmarkingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
