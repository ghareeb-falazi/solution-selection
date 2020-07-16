import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'solution-selection', pathMatch: 'full'},
  { path: 'benchmarking', loadChildren: () => import('app/benchmarking/benchmarking.module').then(m => m.BenchmarkingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
