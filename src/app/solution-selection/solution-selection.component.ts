import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ConcreteSolutionRepositoryService} from '../core/concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from '../core/aggregator-repository/aggregator-repository.service';
import {SolutionSelectorService} from '../core/solution-selector/solution-selector.service';
import {ConcreteSolutionPathModel} from '../data-model/concrete-solution-path.model';
import {CapabilityModel} from '../data-model/capability.model';
import {UserQueryModel} from '../data-model/user-query.model';
import {PatternSelectorComponent} from './pattern-selection/pattern-selector.component';
import {InitialPropertiesComponent} from './initial-properties/initial-properties.component';
import {PatternRepositoryService} from '../core/pattern-repository/pattern-repository.service';
import {GraphNode} from './graphing/abstract-graph.component';
import {ConcreteSolutionGraphComponent} from './graphing/concrete-solution-graph.componen';
import {PatternsGraphComponent} from './graphing/patterns-graph.component';
import {ConcreteSolutionModel} from '../data-model/concrete-solution.model';
import {SolutionCompositionService} from '../core/solution-composition/solution-composition.service';
import {isNullOrUndefined} from 'util';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { Message, MessageService, SelectItem } from 'primeng';

/**
 * The solution selection component
 */
@Component({
  templateUrl: './solution-selection.component.html',
  styleUrls: ['./solution-selection.component.css'
  ]

})
export class SolutionSelectionComponent implements OnInit, OnDestroy {
  // http%3A%2F%2Flocalhost%3A4200%2Fmock
  private routeSubscription: Subscription;
  private postSubscription: Subscription;
  private readonly TARGET_ID_PARAM_NAME = 'targetid';
  private readonly SOURCE_URL_PARAM_NAME = 'sourceurl';
  private readonly AUTO_REDIRECT_PARAM_NAME = 'redirect';
  targetServiceTemplate: string;
  private automaticallyRedirectToComposedSolution = false; // the value can be also passed as a query param 'redirect'
  private composerURL: string;
  /**
   * The url of the resource that represents the composite concrete solution.
   */
  compositeConcreteSolutionURL: URL;
  /**
   * Indicates whether the selected concrete solution path is being composed into a composite solution.
   */
  isComposingSolution: boolean;

  /**
   * The pattern selector child component
   */
  @ViewChild(PatternSelectorComponent)
  private patternSelector: PatternSelectorComponent;

  /**
   * The initial properties child component
   */
  @ViewChild(InitialPropertiesComponent)
  private initialProperties: InitialPropertiesComponent;

  /**
   * The concrete solution graph child component
   */
  @ViewChild(ConcreteSolutionGraphComponent)
  private csGraphComponent: ConcreteSolutionGraphComponent;

  /**
   * The patterns graph component
   */
  @ViewChild(PatternsGraphComponent)
  private patternGraphComponent: PatternsGraphComponent;


  /**
   * Indicates whether services have been initialized or not (some visula elements are not shown until services
   * are initialized)
   * @type {boolean}
   */
  isInitialized = false; // Used for UI
  /**
   * The expression that represnents the user query
   */
  userQueryExpression: string;
  /**
   * The set of paths that represent the result of the last execution of the mapping algorithm
   * @type {any}
   */
  paths: SelectItem[] = null;
  /**
   * The currently selected concrete solution path
   */
  _selectedPath: ConcreteSolutionPathModel;
  /**
   * Indicates whether the panel that describes the currently selected concrete solution is shown or hidden.
   * @type {boolean}
   */
  display = false;
  /**
   * Indicates the currently selected concrete solution
   * @type {any}
   */
  selectedConcreteSolution: ConcreteSolutionModel = null;

  set selectedPath(path: ConcreteSolutionPathModel) {
    this._selectedPath = path;
    this.csGraphComponent.selectPath(path);
  }

  get selectedPath(): ConcreteSolutionPathModel {
    return this._selectedPath;
  }

  get isComposerKnown(): boolean {
    return !isNullOrUndefined(this.composerURL) && this.composerURL.length > 0;
  }

  constructor(private csService: ConcreteSolutionRepositoryService,
              private aggService: AggregatorRepositoryService,
              private selectService: SolutionSelectorService,
              private patternService: PatternRepositoryService,
              private compositionService: SolutionCompositionService,
              private route: ActivatedRoute,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
    // initialize all services
    Promise.all([
      this.csService.waitForInitialization(),
      this.aggService.waitForInitialization(),
      this.patternService.waitForInitialization()])
      .then(() => this.isInitialized = true)
      .then(() => { // subscribe to query parameters
        this.routeSubscription = this.route.queryParamMap.subscribe(
          params => {
            this.composerURL = params.get(this.SOURCE_URL_PARAM_NAME);

            if (params.get(this.AUTO_REDIRECT_PARAM_NAME)) {
              this.automaticallyRedirectToComposedSolution = params.get(this.AUTO_REDIRECT_PARAM_NAME).toLocaleLowerCase() === 'true';
            }
          }
        )
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }


  /**
   * Executes the mapping algorithm
   */
  search(): void {
    const patterns: string[] = this.patternSelector.list2;
    const globalCondition: UserQueryModel = new UserQueryModel(this.userQueryExpression);
    const initialCaps: CapabilityModel[] = this.initialProperties.getCapabilities();
    if (patterns) {
      const myPaths: ConcreteSolutionPathModel[] = this.selectService.selectConcreteSolutions(patterns, initialCaps, globalCondition);
      this.paths = [];
      myPaths.forEach(p => this.paths.push({label: p.toString(), value: p}));
    }

  }

  /**
   * Ensures consistency between the views when a pattern is chosen
   * @param {string[]} patternNames
   * @param {boolean} isHighlighted
   */
  private highlightPatterns(patternNames: string[], isHighlighted: boolean): void {
    const solutions: ConcreteSolutionModel[] = [];
    const solutionUris: string[] = [];

    for (const patternName of patternNames) {
      solutions.push(...this.csService.getConcreteSolutionsOfPattern(patternName));
    }

    solutions.forEach(sol => solutionUris.push(sol.uri));

    this.csGraphComponent.highlightSolutions(solutionUris, isHighlighted);
    this.patternGraphComponent.highlightPatterns(patternNames, isHighlighted);
    this.patternSelector.selectPatterns(patternNames, isHighlighted);
  }

  /**
   * this event originates from the PatternsGraphComponent
   * @param {GraphNode} node
   */
  patternDoubleClicked(node: GraphNode) {
    const patternName: string = PatternsGraphComponent.getPatternNameOfNode(node);
    this.highlightPatterns([patternName], node.isHighlighted);
  }

  mouseOnPattern(node: GraphNode) {
    const patternName: string = PatternsGraphComponent.getPatternNameOfNode(node);
    const solutions: ConcreteSolutionModel[] = this.csService.getConcreteSolutionsOfPattern(patternName);
    const uris: string[] = solutions.map(item => item.uri);
    this.csGraphComponent.setSolutionsOpacity(uris, false);
  }

  mouseOutPattern(node: GraphNode) {
    const patternName: string = PatternsGraphComponent.getPatternNameOfNode(node);
    const solutions: ConcreteSolutionModel[] = this.csService.getConcreteSolutionsOfPattern(patternName);
    const uris: string[] = solutions.map(item => item.uri);
    this.csGraphComponent.setSolutionsOpacity(uris, true);
  }

  /**
   * This event originates from the PatternSelectorComponent
   * @param {string[]} patternNames list of patterns that have been selected.
   */
  patternsSelected(patternNames: string[]) {
    this.highlightPatterns(patternNames, true);
  }

  patternsUnselected(patternNames: string[]) {
    this.highlightPatterns(patternNames, false);
  }

  concreteSolutionDoubleClicked(node: GraphNode) {
    const uri = ConcreteSolutionGraphComponent.getConcreteSolutionUriOfNode(node);
    this.selectedConcreteSolution = this.csService.getConcreteSolutionByUri(uri);
    this.display = true;
  }

  /** Composition **/

  /**
   * Composes the selected concrete solution path
   */
  compose(): void {
    const paramsMap: Map<string, string> = new Map<string, string>();

    if (!isNullOrUndefined(this.targetServiceTemplate)) {
      paramsMap.set(this.TARGET_ID_PARAM_NAME, this.targetServiceTemplate);
    }

    this.showMessage('The selected concrete solution path is being composed into a single composite solution.',
      'Composing Solutions');
    this.postSubscription = this.compositionService.composeConcreteSolutions(this.selectedPath, this.composerURL,
      paramsMap)
      .subscribe(result => {
        this.postSubscription.unsubscribe();

        if (this.automaticallyRedirectToComposedSolution) {
          // this redirects the whole page
          window.location.href = result.toString();
        } else {
          // this shows a hyperlink on the page
          this.compositeConcreteSolutionURL = result;
          this.clearMessages();
        }
      });


  }

  showMessage(message: string, title: string) {
    this.messageService.add({severity: 'info', summary: title, detail: message});
  }

  clearMessages() {
    this.messageService.clear();
  }

  // generateTargetId(sourceServiceTemplateId: string): string {
  //   const regex = new RegExp(/(\S+)\s*\((\d+)\)/);
  //   const array = regex.exec(this.sourceServiceTemplate);
  //
  //   if (!isNullOrUndefined(array)) {
  //     const oldNumber: number = Number.parseInt(array[2]);
  //
  //     return `${array[1]} (${oldNumber + 1})`;
  //   } else {
  //     return this.sourceServiceTemplate + ' (1)';
  //   }
  // }
}
