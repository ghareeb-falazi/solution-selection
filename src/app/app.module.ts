import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  ButtonModule, AccordionModule, PanelModule,
  ListboxModule, InputTextareaModule, DialogModule, InputTextModule, GrowlModule
} from 'primeng/primeng';
import {CoreModule} from './core/core.module';
import {InitialPropertiesModule} from './initial-properties/initial-properties.module';
import {GraphingModule} from './graphing/graphing.module';
import {PatternSelectionModule} from './pattern-selection/pattern-selection.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    ListboxModule,
    InputTextareaModule,
    DialogModule,
    InitialPropertiesModule,
    GraphingModule,
    PatternSelectionModule,
    InputTextModule,
    GrowlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
