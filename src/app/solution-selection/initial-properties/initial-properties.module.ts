import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitialPropertiesComponent} from './initial-properties.component';
import {InitialPropertyComponent} from './initial-property/initial-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FileUploadModule,
    AutoCompleteModule,
    AccordionModule
  ],
  declarations: [InitialPropertiesComponent, InitialPropertyComponent],
  exports: [InitialPropertiesComponent, InitialPropertyComponent]
})
export class InitialPropertiesModule { }
