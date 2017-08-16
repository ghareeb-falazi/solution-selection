import {Component, OnInit, ViewChild} from '@angular/core';
import {ConcreteSolutionRepositoryService} from './concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from "./aggregator-repository/aggregator-repository.service";
import {SolutionSelectorService} from "./solution-selector/solution-selector.service";
import {SolutionPathModel} from "./data-model/solution-path.model";
import {CapabilityModel} from "./data-model/capability.model";
import {GlobalConditionModel} from "./data-model/global-condition.model";
import {PatternSelectorComponent} from "./pattern-selector.component";
import {ExpressionEvaluatorService} from "./expression-evaluator/expression-evaluator.service";
import {CapabilitiesComponent} from "./capabilities.component";
import {PatternRepositoryService} from "./pattern-repository/pattern-repository.service";
import {GraphNode} from "./abstract-graph.component";
import {ConcreteSolutionGraphComponent} from "./concrete-solution-graph.componen";
import {PatternsGraphComponent} from "./patterns-graph.component";
import {ConcreteSolutionModel} from "./data-model/concrete-solution.model";
import {SelectItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'

  ],
  providers: [ConcreteSolutionRepositoryService, AggregatorRepositoryService, SolutionSelectorService, ExpressionEvaluatorService, PatternRepositoryService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this
      .csService.waitForInitialization()
      .then(() => this.aggService.waitForInitialization())
      .then(() => this.patternService.waitForInitialization())
      .then(() => {
        this.isInitialized = true;
      });
  }


  @ViewChild(PatternSelectorComponent)
  private patternSelector: PatternSelectorComponent;

  @ViewChild(CapabilitiesComponent)
  private initialCapabilities: CapabilitiesComponent;

  @ViewChild(ConcreteSolutionGraphComponent)
  private csGraphComponent: ConcreteSolutionGraphComponent;

  @ViewChild(PatternsGraphComponent)
  private patternGraphComponent: PatternsGraphComponent;

  title = 'Solution Selection';
  isInitialized: boolean = false;//Used for UI
  globalConditionExpression: string;
  paths: SelectItem[] = null;
  _selectedPath: SolutionPathModel;

  set selectedPath(path: SolutionPathModel){
    this._selectedPath = path;
    //console.debug('selectedPath is called ' + path);
    this.csGraphComponent.selectPath(path);
  }
  get selectedPath():SolutionPathModel{
    return this._selectedPath;
  }

  constructor(private csService: ConcreteSolutionRepositoryService, private aggService: AggregatorRepositoryService,
              private selectService: SolutionSelectorService, private patternService: PatternRepositoryService) {
  }

  search(): void {
    const patterns: string[] = this.patternSelector.list2;
    const globalCondition: GlobalConditionModel = new GlobalConditionModel(this.globalConditionExpression);
    const initialCaps: CapabilityModel[] = this.initialCapabilities.getCapabilities();
    if (patterns) {
      const myPaths:SolutionPathModel[] =this.selectService.selectConcreteSolutions(patterns, initialCaps, globalCondition);
      this.paths = [];
      myPaths.forEach(p=>this.paths.push({label:p.toString(),value:p}));
    }

  }

  //Ensures consistency between the views when a pattern is chosen
  private highlightPatterns(patternNames:string[], isHighlighted:boolean):void{
    const solutions:ConcreteSolutionModel[] = [];
    const solutionUris:string[] = [];
    for(const patternName of patternNames){
      solutions.push(...this.csService.getConcreteSolutionsOfPattern(patternName));
    }

    solutions.forEach(sol=>solutionUris.push(sol.uri));

    this.csGraphComponent.highlightSolutions(solutionUris, isHighlighted);
    this.patternGraphComponent.highlightPatterns(patternNames, isHighlighted);
    this.patternSelector.selectPatterns(patternNames, isHighlighted);

  }

  //this event originates from the PatternsGraphComponent
  patternDoubleClicked(node: GraphNode) {
    const patternName:string = this.patternGraphComponent.getPatternNameOfNode(node);
    this.highlightPatterns([patternName], node.isHighlighted);
  }

  //this event originates from the PatternSelectorComponent
  patternsSelected(patternNames:string[]){
    this.highlightPatterns(patternNames, true);
  }

  patternsUnselected(patternNames:string[]){
    this.highlightPatterns(patternNames, false);
  }
}
