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
import {PatternModel} from "./data-model/pattern.model";
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
      .then(() => this.buildGraph(this.patternService.allPatterns))
      .then(()=>{
      this.communicationService.nodes = this.nodes;
      this.communicationService.links = this.links;
      this.isInitialized = true;
    });
  }



buildGraph(patterns: PatternModel[]) {
  const myNodes:any = [];
  const myLinks:any = [];

  let currentNode: any;
  let currentLink: any;
  let counter = 0;

  for (const pattern of patterns) {
    currentNode = {
      id: counter.toString(),
      label: pattern.name,
      color: 'red'
    };
    myNodes.push(currentNode);
    counter++;
  }

  for (const pattern of patterns) {
    const startNode=myNodes.find(param=>param.label === pattern.name);

    for (const nextPattern of pattern.nextPatterns) {
      const endNode=myNodes.find(param=>param.label === nextPattern.name);
      currentLink = {
        source: startNode.id,
        target: endNode.id,
        label: 'next'
      };

      myLinks.push(currentLink);
    }
  }
  console.debug(myNodes);
  console.debug(myLinks);
  this.links = myLinks;
  this.nodes = myNodes;

  console.debug('finished buildGraph');

}

  @ViewChild(PatternSelectorComponent)
  private patternSelector: PatternSelectorComponent;

  @ViewChild(CapabilitiesComponent)
  private initialCapabilities: CapabilitiesComponent;

  title = 'Solution Selection';
  isInitialized: boolean = false;//Used for UI
  globalConditionExpression: string;
  paths: SolutionPathModel[] = null;
  links:any[];
  nodes:any[];

  constructor(private csService: ConcreteSolutionRepositoryService, private aggService: AggregatorRepositoryService,
              private selecService: SolutionSelectorService, private patternService:PatternRepositoryService,
              private communicationService:CommunicationService) {
  }

  search(): void {
    console.debug('select invoked');
    const patterns: string[] = this.patternSelector.list2;
    console.debug(this.globalConditionExpression);
    const globalCondition: GlobalConditionModel = new GlobalConditionModel(this.globalConditionExpression);
    const initialCaps: CapabilityModel[] = this.initialCapabilities.getCapabilities();
    console.debug(initialCaps);
    if (patterns)
      this.paths = this.selecService.selectConcreteSolutions(patterns, initialCaps, globalCondition);


  }
}
