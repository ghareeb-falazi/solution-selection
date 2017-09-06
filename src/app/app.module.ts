import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  ButtonModule, PickListModule, AccordionModule, AutoCompleteModule, PanelModule,
  ListboxModule, InputTextareaModule, FileUploadModule, DialogModule
} from 'primeng/primeng';
import {NgxChartsDagModule} from '@swimlane/ngx-charts-dag';

import {PatternSelectorComponent} from "./pattern-selector.component";
import {CapabilityComponent} from "./capability.component";
import {CapabilitiesComponent} from "./capabilities.component";
import {PatternsGraphComponent} from "./patterns-graph.component";
import {ConcreteSolutionGraphComponent} from "./concrete-solution-graph.componen";


@NgModule({
  declarations: [
    AppComponent,
    PatternSelectorComponent,
    CapabilityComponent,
    CapabilitiesComponent,
    PatternsGraphComponent,
    ConcreteSolutionGraphComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    AccordionModule,
    PickListModule,
    AutoCompleteModule,
    NgxChartsDagModule,
    PanelModule,
    ListboxModule,
    InputTextareaModule,
    FileUploadModule,
    DialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
