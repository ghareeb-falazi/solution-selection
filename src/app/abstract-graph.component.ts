import * as shape from 'd3-shape';
import {Output, EventEmitter} from "@angular/core";

export class GraphNode {
  isHighlighted: boolean = false;
  readonly normalStrokeColor: string;

  constructor(public id: string, public fillColor: string, public strokeColor: string, public readonly highlightedStrokeColor) {
    this.normalStrokeColor = strokeColor;
  }


}

export class GraphLink {
  strokeColor: string = 'black';

  constructor(public source: string, public target: string) {

  }
}

export abstract class AbstractGraphComponent {
  myNodes: GraphNode[] = [];
  myLinks: GraphLink[] = [];
  curve: any = shape.curveLinear;
  width: number = 730;
  height: number = 300;
  view: any[] = [this.width, this.height];
  // options
  showLegend = false;
  orientation: string = 'LR'; // LR, RL, TB, BT
  arrowHeadColor: string = 'black';
  @Output() onNodeDoubleClickedEvent = new EventEmitter<GraphNode>();


  abstract createNode(id: any, item: any): GraphNode;

  abstract createLink(sourceNode: GraphNode, targetNode: GraphNode, sourceItem: any, targetItem: any): GraphLink;

  abstract isNodeEqualsItem(node: GraphNode, item: any): boolean;

  abstract getNextItems(currentItem: any): any[];

  /**
   * Called when a node is double clicked, right before the event is raised
   * @param {GraphNode} node the node that was double-clicked
   */
  abstract onNodeDoubleClicked(node: GraphNode): void;

  buildGraph(items: any[]) {
    const myNodes: GraphNode[] = [];
    const myLinks: GraphLink[] = [];

    let currentNode: GraphNode;
    let currentLink: GraphLink;
    let counter = 0;

    for (const item of items) {
      currentNode = this.createNode(counter.toString(), item);
      myNodes.push(currentNode);
      counter++;
    }

    for (const item of items) {
      const startNode: GraphNode = myNodes.find(param => this.isNodeEqualsItem(param, item));

      for (const nextItem of this.getNextItems(item)) {
        const endNode: GraphNode = myNodes.find(param => this.isNodeEqualsItem(param, nextItem));
        currentLink = this.createLink(startNode, endNode, item, nextItem);

        myLinks.push(currentLink);
      }
    }
    console.debug(myNodes);
    console.debug(myLinks);

    this.myLinks = myLinks;
    this.myNodes = myNodes;

    console.debug('finished buildGraph');

  }


  applyDimensions(): void {
    this.view = [this.width, this.height];
  }

  onDoubleClick(node: GraphNode) {
    //node here is a gui-internal copy of the node in the myNodes list
    //we should get a reference to the one in the myNodes list instead!
    const myNode: GraphNode = this.myNodes.find(item => item.id === node.id);
    this.onNodeDoubleClicked(myNode);
    this.onNodeDoubleClickedEvent.emit(myNode);
  }

  /**
   * Highlights/De-highlights the specified nodes only if the highlight state is changed
   * @param {GraphNode} nodes the nodes to highlight/de-highlight
   * @param {boolean} newValue the new highlight value
   */
  public highlightNodes(nodes: GraphNode[], newValue: boolean): void {
    let anyChange: boolean = false;

    for (const node of nodes) {
      if (newValue != node.isHighlighted) {//only if there's a need to highlight
        anyChange = true;
        if (newValue) {
          node.strokeColor = node.highlightedStrokeColor;
        } else {
          node.strokeColor = node.normalStrokeColor;
        }

        node.isHighlighted = newValue;
      }
    }

    if(anyChange)
      this.myNodes = [...this.myNodes];//otherwise the change is not bound
  }
}
