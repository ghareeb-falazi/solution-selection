import {AbstractGraphComponent, GraphLink, GraphNode} from "./abstract-graph.component";
import {ConcreteSolutionModel} from "./data-model/concrete-solution.model";
import {BasicAggregatorModel} from "./data-model/basic-aggregator.model";
import {Component} from "@angular/core";
import {ConcreteSolutionRepositoryService} from "./concrete-solution-repository/concrete-solution-repository.service";
import {AggregatorRepositoryService} from "./aggregator-repository/aggregator-repository.service";
import {SolutionPathModel} from "./data-model/solution-path.model";
import {AbstractAggregatorModel} from "./data-model/abstract-aggregator.model";

class ConcreteSolutionGraphNode extends GraphNode {
  static readonly FILL_COLOR: string = '#fff4e6';
  static readonly STROKE_COLOR: string = 'black';
  static readonly HIGHLIGHTED_STROKE_COLOR = 'blue';
  nodeType:string = "CS";
  label: string;

  constructor(id: string, public cs: ConcreteSolutionModel) {
    super(id, ConcreteSolutionGraphNode.FILL_COLOR, ConcreteSolutionGraphNode.STROKE_COLOR, ConcreteSolutionGraphNode.HIGHLIGHTED_STROKE_COLOR);
    this.label = cs.uri;
  }
}

class AggregatorGraphNode extends GraphNode {
  static readonly FILL_COLOR: string = 'white';
  static readonly STROKE_COLOR: string = 'black';
  static readonly  HIGHLIGHTED_STROKE_COLOR = 'blue';
  nodeType:string = "Agg";
  label: string;


  constructor(id: string, public aggregator: BasicAggregatorModel) {
    super(id, AggregatorGraphNode.FILL_COLOR, AggregatorGraphNode.STROKE_COLOR, AggregatorGraphNode.HIGHLIGHTED_STROKE_COLOR);
    this.label = this.aggregator.aggregatorUri;
  }
}


@Component({
  selector: 'solutions-graph',
  templateUrl: './concrete-solution-graph.component.html'
})
export class ConcreteSolutionGraphComponent extends AbstractGraphComponent {

  readonly nodeSide:number = 60;
  static readonly SELECTION_COLOR = '#38e686';

  constructor(private csRepoService: ConcreteSolutionRepositoryService, private aggRepoService: AggregatorRepositoryService) {
    super();


    this.csRepoService.waitForInitialization()
      .then(() => this.aggRepoService.waitForInitialization())
      .then(() => {
        const allNodes: any[] = [];
        allNodes.push(...this.csRepoService.allSolutions);
        allNodes.push(...this.aggRepoService.allAggregators);
        this.buildGraph(allNodes);
      });
  }


  createNode(id: any, item: any): GraphNode {
    if (item instanceof ConcreteSolutionModel) {
      return new ConcreteSolutionGraphNode(id, item);
    } else {
      return new AggregatorGraphNode(id, item);
    }
  }

  createLink(sourceNode: GraphNode, targetNode: GraphNode, sourceItem: any, targetItem: any): GraphLink {
    return new GraphLink(sourceNode.id, targetNode.id);
  }

  isNodeEqualsItem(node: GraphNode, item: any): boolean {
    if (node instanceof ConcreteSolutionGraphNode && item instanceof ConcreteSolutionModel) {
      return (<ConcreteSolutionModel> item).uri === (<ConcreteSolutionGraphNode>node).cs.uri;
    } else if (node instanceof AggregatorGraphNode && item instanceof BasicAggregatorModel) {
      return (<BasicAggregatorModel> item).aggregatorUri === (<AggregatorGraphNode>node).aggregator.aggregatorUri;
    } else return false;

  }


  getNextItems(currentItem: any): any[] {
    if(currentItem instanceof BasicAggregatorModel){//the node is an aggregator node
      const csUri = (<BasicAggregatorModel>currentItem).concreteSolution2Uri;
      return [this.csRepoService.allSolutions.find(sol=>sol.uri.toLowerCase() === csUri.toLowerCase())];
    }else{//the node is a cs node
      const csUri = (<ConcreteSolutionModel>currentItem).uri;
      return this.aggRepoService.getOutgoingAggregators(csUri);
    }
  }


  getPolygonPoints(nodeWidth:number, nodeHeight:number):string{
    //nodeWidth += 10;
    //nodeHeight += 10;
    //'0,' + String(node.Height/2) + ' ' + String(node.width/2) + ',0 ' + String(node.width) + ',' + String(node.height / 2) + ' ' + String(node.width/2) + ',' + String(node.height)
    const max:number = Math.max(nodeWidth, nodeHeight);
    nodeWidth = nodeHeight = max;

    return `0,${nodeHeight/2} ${nodeWidth/2},0 ${nodeWidth},${nodeHeight/2} ${nodeWidth/2},${nodeHeight}`;
  }

  highlightSolutions(solutionUris:string[], isHighlighted:boolean):void{
    const nodes:GraphNode[] = this.myNodes.filter(item=> (item instanceof ConcreteSolutionGraphNode)&& solutionUris.indexOf((<ConcreteSolutionGraphNode>item).cs.uri) >= 0);
    this.highlightNodes(nodes, isHighlighted);

  }

  onNodeDoubleClicked(node:GraphNode){
    //we do nothing in this case
  }

  selectPath(path:SolutionPathModel):void{
    this.resetSelections();

    //Change color of concrete solutions
    const sols:ConcreteSolutionModel[] = path.getAllConcreteSolutions();
    for(const sol of sols){
      for(const node of this.myNodes){
        if(node instanceof ConcreteSolutionGraphNode){
          if((<ConcreteSolutionGraphNode>node).cs.uri === sol.uri){
            node.fillColor = ConcreteSolutionGraphComponent.SELECTION_COLOR;
          }

        }
      }
    }

    //Change color of aggregators
    const aggs:AbstractAggregatorModel[][] = path.getAllAggregators();
    const aggsFlat:AbstractAggregatorModel[] = [];
    aggs.forEach(stepAgg=>aggsFlat.push(...stepAgg));

    for(const agg of aggsFlat){
      for(const node of this.myNodes){
        if(node instanceof AggregatorGraphNode) {
          if ((<AggregatorGraphNode>node).label === agg.aggregatorUri) {
            node.fillColor = ConcreteSolutionGraphComponent.SELECTION_COLOR;
          }
        }
      }
    }

    this.myNodes = [...this.myNodes];
  }

  resetSelections():void{
    for(const node of this.myNodes){
      if(node instanceof AggregatorGraphNode){
        node.fillColor = AggregatorGraphNode.FILL_COLOR;
      }else{
        node.fillColor = ConcreteSolutionGraphNode.FILL_COLOR;
      }
    }

  }
}
