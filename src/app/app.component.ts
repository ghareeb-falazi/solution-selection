import {Component, OnInit} from '@angular/core';
import {ConcreteSolutionRepositoryService} from './concrete-solution-repository/concrete-solution-repository.service';
import {ConcreteSolution} from "./data-model/ConcreteSolution";
import {AggregatorRepositoryService} from "./aggregator-repository/aggregator-repository.service";
import {SolutionSelectorService} from "./solution-selector/solution-selector.service";
import {SolutionPath} from "./data-model/SolutionPath";
import {ExpressionEvaluatorService} from "./expression-evaluator/expression-evaluator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ConcreteSolutionRepositoryService, AggregatorRepositoryService, SolutionSelectorService, ExpressionEvaluatorService]
})
export class AppComponent implements  OnInit{
  ngOnInit(): void {
    this
      .csService.initialize()
      .then(()=>this.aggService.initialize())
      .then(()=>this.isInitialized = true);
  }
  title = 'Solution Selection';
  isInitialized:boolean = false;
  listOfPatterns: string;
  paths: SolutionPath[] = null;

  constructor(private csService: ConcreteSolutionRepositoryService, private aggService:AggregatorRepositoryService,
    private selecService:SolutionSelectorService)
  {}
  search(): void{
    console.debug('select invoked');
    let patterns:string[] = this.listOfPatterns.split(",");
    this.paths = this.selecService.phase1(patterns);
  }
}
