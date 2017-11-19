import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenchmarkingComponent } from './benchmarking.component';
import {BenchmarkingRoutingModule} from './benchmarking-routing.module';
import {FormsModule} from '@angular/forms';
import {ButtonModule, FileUploadModule, SpinnerModule, TabViewModule} from 'primeng/primeng';
import {BenchmarkingSolutionSelectorService} from './benchmarking-solution-selector.service';
import {PapaParseModule} from 'ngx-papaparse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SpinnerModule,
    TabViewModule,
    FileUploadModule,
    BenchmarkingRoutingModule,
    PapaParseModule
  ],
  declarations: [BenchmarkingComponent],
  providers: [BenchmarkingSolutionSelectorService]
})
export class BenchmarkingModule { }
