import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConcreteSolutionGraphComponent} from "./concrete-solution-graph.componen";
import {PatternsGraphComponent} from "./patterns-graph.component";
import {NgxChartsDagModule} from "@swimlane/ngx-charts-dag";

@NgModule({
  imports: [
    CommonModule,
    NgxChartsDagModule
  ],
  declarations: [ConcreteSolutionGraphComponent,PatternsGraphComponent],
  exports:[ConcreteSolutionGraphComponent,PatternsGraphComponent]
})
export class GraphingModule { }
