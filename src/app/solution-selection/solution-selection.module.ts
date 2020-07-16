import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CoreModule} from '../core/core.module';
import {InitialPropertiesModule} from './initial-properties/initial-properties.module';
import {GraphingModule} from './graphing/graphing.module';
import {PatternSelectionModule} from './pattern-selection/pattern-selection.module';
import {SolutionSelectionComponent} from './solution-selection.component';
import {SolutionSelectionRoutingModule} from './solution-selection-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng';

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
    ToastModule,
    SolutionSelectionRoutingModule
  ],
  declarations: [SolutionSelectionComponent],
  providers: [MessageService]
})
export class SolutionSelectionModule { }
