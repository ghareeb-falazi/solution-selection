
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SolutionSelectionModule} from './solution-selection/solution-selection.module';


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
