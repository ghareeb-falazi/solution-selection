import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConcreteSolutionGraphComponent} from './concrete-solution-graph.componen';
import {PatternsGraphComponent} from './patterns-graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';


@NgModule({
  imports: [
    CommonModule,
    NgxGraphModule
  ],
  declarations: [ConcreteSolutionGraphComponent, PatternsGraphComponent],
  exports: [ConcreteSolutionGraphComponent, PatternsGraphComponent]
})
export class GraphingModule { }
