import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ButtonModule, PickListModule, AccordionModule} from 'primeng/primeng';


import {PatternSelectorComponent} from "./pattern-selector.component";
import {CapabilityComponent} from "./capability.component";
import {CapabilitiesComponent} from "./capabilities.component";


@NgModule({
  declarations: [
    AppComponent,
    PatternSelectorComponent,
    CapabilityComponent,
    CapabilitiesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    AccordionModule,
    PickListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
