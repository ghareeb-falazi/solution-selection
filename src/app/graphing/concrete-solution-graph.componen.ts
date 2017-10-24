import {AbstractGraphComponent, GraphLink, GraphNode} from './abstract-graph.component';
import {ConcreteSolutionModel} from '../data-model/concrete-solution.model';
import {BasicAggregatorModel} from '../data-model/basic-aggregator.model';
import {Component} from '@angular/core';
import {ConcreteSolutionRepositoryService} from '../core/concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from '../core/aggregator-repository/aggregator-repository.service';
import {ConcreteSolutionPathModel} from '../data-model/concrete-solution-path.model';
import {AbstractAggregatorModel} from '../data-model/abstract-aggregator.model';

/**
 * An implementation of graph node suitable for concrete solutions
 */
class ConcreteSolutionGraphNode extends GraphNode {
  static readonly FILL_COLOR = '#fff4e6';
  static readonly STROKE_COLOR = 'black';
  static readonly HIGHLIGHTED_STROKE_COLOR = 'blue';
  nodeType = 'CS';
  label: string;

  constructor(id: string, public cs: ConcreteSolutionModel) {
    super(id, ConcreteSolutionGraphNode.FILL_COLOR, ConcreteSolutionGraphNode.STROKE_COLOR,
      ConcreteSolutionGraphNode.HIGHLIGHTED_STROKE_COLOR);
    this.label = cs.uri;
  }
}

/**
 * An implementation of graph node suitable for aggregators
 */
class AggregatorGraphNode extends GraphNode {
  static readonly FILL_COLOR = 'white';
  static readonly STROKE_COLOR = 'black';
  static readonly  HIGHLIGHTED_STROKE_COLOR = 'blue';
  nodeType = 'Agg';
  label: string;

  constructor(id: string, public aggregator: BasicAggregatorModel) {
    super(id, AggregatorGraphNode.FILL_COLOR, AggregatorGraphNode.STROKE_COLOR, AggregatorGraphNode.HIGHLIGHTED_STROKE_COLOR);
    this.label = this.aggregator.aggregatorUri;
  }
}

/**
 * Represents the graph that shows the Solution Language as a graph
 */
@Component({
  selector: 'app-solutions-graph',
  templateUrl: './concrete-solution-graph.component.html'
})
export class ConcreteSolutionGraphComponent extends AbstractGraphComponent {
  static readonly SELECTION_COLOR = '#38e686';
  /**
   * The length of one side of a node
   * @type {number}
   */
  readonly nodeSide = 60;


  static getConcreteSolutionUriOfNode(node: GraphNode): string {
    return (<ConcreteSolutionGraphNode>node).label;
  }

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
    } else {
      return false;
    }

  }


  getNextItems(currentItem: any): any[] {
    if (currentItem instanceof BasicAggregatorModel) {// the node is an aggregator node
      const csUri = (<BasicAggregatorModel>currentItem).concreteSolution2Uri;
      return [this.csRepoService.allSolutions.find(sol => sol.uri.toLowerCase() === csUri.toLowerCase())];
    }else {// the node is a cs node
      const csUri = (<ConcreteSolutionModel>currentItem).uri;
      return this.aggRepoService.getOutgoingAggregators(csUri);
    }
  }

  /**
   * Helps in drawing the polygon that represents a concrete solution
   * @param {number} nodeWidth
   * @param {number} nodeHeight
   * @returns {string}
   */
  getPolygonPoints(nodeWidth: number, nodeHeight: number): string {
    const max: number = Math.max(nodeWidth, nodeHeight);
    nodeWidth = nodeHeight = max;

    return `0,${nodeHeight / 2} ${nodeWidth / 2},0 ${nodeWidth},${nodeHeight / 2} ${nodeWidth / 2},${nodeHeight}`;
  }

  /**
   * Changes the border color of nodes representing given CSs
   * @param {string[]} solutionUris
   * @param {boolean} isHighlighted
   */
  highlightSolutions(solutionUris: string[], isHighlighted: boolean): void {
    const nodes: GraphNode[] = this.myNodes.filter(
      item => (item instanceof ConcreteSolutionGraphNode) && solutionUris.indexOf((<ConcreteSolutionGraphNode>item).cs.uri) >= 0);
    this.highlightNodes(nodes, isHighlighted);

  }

  /**
   * Changes the opacity of nodes representing given CSs
   * @param {string[]} solutionUris
   * @param {boolean} isHighOpacity
   */
  setSolutionsOpacity(solutionUris: string[], isHighOpacity: boolean): void {
    const newValue: number = isHighOpacity ? GraphNode.highOpacityValue : GraphNode.lowOpacityValue;
    const nodes: GraphNode[] = this.myNodes.filter(
      item => (item instanceof ConcreteSolutionGraphNode) && solutionUris.indexOf((<ConcreteSolutionGraphNode>item).cs.uri) >= 0);
    this.changeNodesOpacity(nodes, newValue, true);
  }


  /**
   * Changes the fill-color of a concrete solution path
   * @param {ConcreteSolutionPathModel} path
   */
  selectPath(path: ConcreteSolutionPathModel): void {
    this.resetSelections();
    // Change color of concrete solutions
    const sols: ConcreteSolutionModel[] = path.getAllConcreteSolutions();
    for (const sol of sols){
      for (const node of this.myNodes){
        if (node instanceof ConcreteSolutionGraphNode) {
          if ((<ConcreteSolutionGraphNode>node).cs.uri === sol.uri) {
            node.fillColor = ConcreteSolutionGraphComponent.SELECTION_COLOR;
          }

        }
      }
    }

    // Change color of aggregators
    const aggs: AbstractAggregatorModel[][] = path.getAllAggregators();
    const aggsFlat: AbstractAggregatorModel[] = [];
    aggs.forEach(stepAgg => aggsFlat.push(...stepAgg));

    for (const agg of aggsFlat){
      for (const node of this.myNodes){
        if (node instanceof AggregatorGraphNode) {
          if ((<AggregatorGraphNode>node).label === agg.aggregatorUri) {
            node.fillColor = ConcreteSolutionGraphComponent.SELECTION_COLOR;
          }
        }
      }
    }

    this.myNodes = [...this.myNodes];
  }

  /**
   * Restores the default fill color of all nodes
   */
  resetSelections(): void {
    for (const node of this.myNodes){
      if (node instanceof AggregatorGraphNode) {
        node.fillColor = AggregatorGraphNode.FILL_COLOR;
      }else {
        node.fillColor = ConcreteSolutionGraphNode.FILL_COLOR;
      }
    }

  }


}
