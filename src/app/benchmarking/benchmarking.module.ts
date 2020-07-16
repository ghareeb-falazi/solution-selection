import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenchmarkingComponent } from './benchmarking.component';
import {BenchmarkingRoutingModule} from './benchmarking-routing.module';
import {FormsModule} from '@angular/forms';
import {BenchmarkingSolutionSelectorService} from './benchmarking-solution-selector.service';
import { Papa } from 'ngx-papaparse';
import { ButtonModule } from 'primeng/button';
import { SpinnerModule } from 'primeng/spinner';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SpinnerModule,
    TabViewModule,
    FileUploadModule,
    BenchmarkingRoutingModule
  ],
  declarations: [BenchmarkingComponent],
  providers: [BenchmarkingSolutionSelectorService, Papa]
})
export class BenchmarkingModule { }
