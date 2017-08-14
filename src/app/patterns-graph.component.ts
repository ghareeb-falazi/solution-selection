
import {Component,  OnInit} from "@angular/core";
import * as shape from 'd3-shape';
import {CommunicationService} from "./communication.service";

@Component({
  selector: 'pattern-graph',
  templateUrl: './patterns-graph.component.html'
})

export class PatternsGraphComponent{
  myNodes: any[];
  myLinks: any[];
  curve: any = shape.curveLinear;
  width: number = 700;
  height: number = 300;
  view: any[] = [this.width, this.height];



  // options
  showLegend = false;
  orientation: string = 'LR'; // LR, RL, TB, BT

  static readonly BASE_COLOR: string = 'red';

  constructor(private commService:CommunicationService) {

    this.myNodes = this.commService.nodes;
    this.myLinks = this.commService.links;
  }



}
