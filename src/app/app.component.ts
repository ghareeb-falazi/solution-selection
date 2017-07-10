import { Component } from '@angular/core';
import {ConcreteSolutionRepositoryService} from './concrete-solution-repository/concrete-solution-repository.service';
import {ConcreteSolution} from "./data-model/ConcreteSolution";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ConcreteSolutionRepositoryService]
})
export class AppComponent {
  title = 'app works!!';
  patternName: string;
  concreteSolutions: ConcreteSolution[] = null;
  constructor(private csService: ConcreteSolutionRepositoryService)
  {}
  search(): void{
    console.debug('search invoked');
    this.csService.getConcreteSolutionsOfPattern(this.patternName)
      .then(solutions => this.concreteSolutions = solutions);

  }
}
