import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SolutionSelectionModule} from './solution-selection/solution-selection.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, SpinnerModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CoreModule,
    SolutionSelectionModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
