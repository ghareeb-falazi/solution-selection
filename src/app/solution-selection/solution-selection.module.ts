import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AccordionModule, PanelModule,
  ListboxModule, InputTextareaModule, DialogModule, InputTextModule, GrowlModule, ButtonModule
} from 'primeng/primeng';
import {CoreModule} from '../core/core.module';
import {InitialPropertiesModule} from './initial-properties/initial-properties.module';
import {GraphingModule} from './graphing/graphing.module';
import {PatternSelectionModule} from './pattern-selection/pattern-selection.module';
import {SolutionSelectionComponent} from './solution-selection.component';
import {SolutionSelectionRoutingModule} from './solution-selection-routing.module';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    AccordionModule,
    ButtonModule,
    PanelModule,
    ListboxModule,
    InputTextareaModule,
    DialogModule,
    InitialPropertiesModule,
    GraphingModule,
    PatternSelectionModule,
    GrowlModule,
    SolutionSelectionRoutingModule
  ],
  declarations: [SolutionSelectionComponent]
})
export class SolutionSelectionModule { }
