import {Component, OnInit} from '@angular/core';
import {ConcreteSolutionRepositoryService} from './concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from "./aggregator-repository/aggregator-repository.service";
import {SolutionSelectorService} from "./solution-selector/solution-selector.service";
import {SolutionPathModel} from "./data-model/solution-path.model";
import {ExpressionEvaluatorService} from "./expression-evaluator/expression-evaluator.service";
import {LabelModel} from "./data-model/label.model";
import {RequirementTokenizerFactory} from "./expression-evaluator/lexer/requirement-tokenizer-factory.helper";
import {ArithmeticParser} from "./expression-evaluator/parser/arithmetic-parser.helper";
import {Expression} from "./expression-evaluator/common/expression.helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'

  ],
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
  paths: SolutionPathModel[] = null;

  constructor(private csService: ConcreteSolutionRepositoryService, private aggService:AggregatorRepositoryService,
    private selecService:SolutionSelectorService)
  {}
  search(): void{
    console.debug('select invoked');
    const patterns:string[] = this.listOfPatterns.split(",");
    this.paths = this.selecService.selectConcreteSolutions(patterns, [new LabelModel('access to azure')], null);


    const tokFactory:RequirementTokenizerFactory = new RequirementTokenizerFactory();
    const lexer = tokFactory.getLexerForString(this.listOfPatterns);
    const arithParser:ArithmeticParser = new ArithmeticParser(lexer);
    const root: Expression = arithParser.parse();
    console.debug(root.toString() + ' = ' + root.evaluate());
  }
}
