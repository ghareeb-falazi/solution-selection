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
import {CommunicationService} from "./communication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'

  ],
  providers: [ConcreteSolutionRepositoryService, AggregatorRepositoryService, SolutionSelectorService, ExpressionEvaluatorService, PatternRepositoryService, CommunicationService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this
      .csService.waitForInitialization()
      .then(() => this.aggService.waitForInitialization())
      .then(()=> this.patternService.waitForInitialization())
      .then(()=>{
      this.isInitialized = true;
    });
  }





  @ViewChild(PatternSelectorComponent)
  private patternSelector: PatternSelectorComponent;

  @ViewChild(CapabilitiesComponent)
  private initialCapabilities: CapabilitiesComponent;

  title = 'Solution Selection';
  isInitialized: boolean = false;//Used for UI
  globalConditionExpression: string;
  paths: SolutionPathModel[] = null;

  constructor(private csService: ConcreteSolutionRepositoryService, private aggService: AggregatorRepositoryService,
              private selectService: SolutionSelectorService, private patternService:PatternRepositoryService) {
  }

  search(): void {
    console.debug('select invoked');
    const patterns: string[] = this.patternSelector.list2;
    console.debug(this.globalConditionExpression);
    const globalCondition: GlobalConditionModel = new GlobalConditionModel(this.globalConditionExpression);
    const initialCaps: CapabilityModel[] = this.initialCapabilities.getCapabilities();
    console.debug(initialCaps);
    if (patterns)
      this.paths = this.selectService.selectConcreteSolutions(patterns, initialCaps, globalCondition);


  }
}
