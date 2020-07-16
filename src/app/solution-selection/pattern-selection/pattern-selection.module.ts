import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatternSelectorComponent} from './pattern-selector.component';
import {PickListModule} from 'primeng/picklist';

@NgModule({
  imports: [
    CommonModule,
    PickListModule
  ],
  declarations: [PatternSelectorComponent],
  exports: [PatternSelectorComponent]
})
export class PatternSelectionModule { }
