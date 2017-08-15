
import {Component} from "@angular/core";
import * as shape from 'd3-shape';
import {PatternModel} from "./data-model/pattern.model";
import {PatternRepositoryService} from "./pattern-repository/pattern-repository.service";

@Component({
  selector: 'pattern-graph',
  templateUrl: './patterns-graph.component.html'
})

export class PatternsGraphComponent{
  myNodes: any[] = [];
  myLinks: any[] = [];
  curve: any = shape.curveLinear;
  width: number = 700;
  height: number = 500;
  view: any[] = [this.width, this.height];
  // options
  showLegend = false;
  orientation: string = 'LR'; // LR, RL, TB, BT

  static readonly BASE_COLOR: string = 'red';

  constructor(private patternRepoService:PatternRepositoryService) {
    this.patternRepoService.waitForInitialization().then(
      ()=>this.buildGraph(this.patternRepoService.allPatterns)
    )
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
    //console.debug(myNodes);
    //console.debug(myLinks);
    this.myLinks = myLinks;
    this.myNodes = myNodes;

    console.debug('finished buildGraph');

  }



}
