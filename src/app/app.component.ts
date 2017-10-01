import {Component, OnInit, ViewChild} from '@angular/core';
import {ConcreteSolutionRepositoryService} from './core/concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from "./core/aggregator-repository/aggregator-repository.service";
import {SolutionSelectorService} from "./core/solution-selector/solution-selector.service";
import {SolutionPathModel} from "./data-model/solution-path.model";
import {CapabilityModel} from "./data-model/capability.model";
import {GlobalConditionModel} from "./data-model/global-condition.model";
import {PatternSelectorComponent} from "./pattern-selection/pattern-selector.component";
import {InitialPropertiesComponent} from "./initial-properties/initial-properties.component";
import {PatternRepositoryService} from "./core/pattern-repository/pattern-repository.service";
import {GraphNode} from "./graphing/abstract-graph.component";
import {ConcreteSolutionGraphComponent} from "./graphing/concrete-solution-graph.componen";
import {PatternsGraphComponent} from "./graphing/patterns-graph.component";
import {ConcreteSolutionModel} from "./data-model/concrete-solution.model";
import {SelectItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'

  ]

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

  @ViewChild(InitialPropertiesComponent)
  private initialCapabilities: InitialPropertiesComponent;

  @ViewChild(ConcreteSolutionGraphComponent)
  private csGraphComponent: ConcreteSolutionGraphComponent;

  @ViewChild(PatternsGraphComponent)
  private patternGraphComponent: PatternsGraphComponent;

  title = 'Solution Selection';
  isInitialized: boolean = false;//Used for UI
  globalConditionExpression: string;
  paths: SelectItem[] = null;
  _selectedPath: SolutionPathModel;
  display:boolean = false;
  selectedConcreteSolution:ConcreteSolutionModel = null;

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

  /**
   * Ensures consistency between the views when a pattern is chosen
   * @param {string[]} patternNames
   * @param {boolean} isHighlighted
   */
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

  mouseOnPattern(node:GraphNode){
    const patternName:string = this.patternGraphComponent.getPatternNameOfNode(node);
    const solutions:ConcreteSolutionModel[] = this.csService.getConcreteSolutionsOfPattern(patternName);
    const uris:string[] = solutions.map(item=>item.uri);
    this.csGraphComponent.setSolutionsOpacity(uris, false);
  }

  mouseOutPattern(node:GraphNode){
    const patternName:string = this.patternGraphComponent.getPatternNameOfNode(node);
    const solutions:ConcreteSolutionModel[] = this.csService.getConcreteSolutionsOfPattern(patternName);
    const uris:string[] = solutions.map(item=>item.uri);
    this.csGraphComponent.setSolutionsOpacity(uris, true);
  }

  /**
   * This event originates from the PatternSelectorComponent
   * @param {string[]} patternNames list of patterns that have been selected.
   */
  patternsSelected(patternNames:string[]){
    this.highlightPatterns(patternNames, true);
  }

  patternsUnselected(patternNames:string[]){
    this.highlightPatterns(patternNames, false);
  }

  concreteSolutionDoubleClicked(node:GraphNode){
    const uri = this.csGraphComponent.getConcreteSolutionUriOfNode(node);
    this.selectedConcreteSolution = this.csService.getConcreteSolutionByUri(uri);
    this.display = true;
  }
}
