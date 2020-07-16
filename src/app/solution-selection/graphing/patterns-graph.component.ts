
import {Component} from '@angular/core';
import {PatternModel} from '../../data-model/pattern.model';
import {PatternRepositoryService} from '../../core/pattern-repository/pattern-repository.service';
import {AbstractGraphComponent, GraphLink, GraphNode} from './abstract-graph.component';

/**
 * An implementation of graph node suitable for patterns
 */
class PatternGraphNode extends GraphNode {
  static readonly FILL_COLOR = '#edebec';
  static readonly STROKE_COLOR = 'black';
  static readonly HIGHLIGHTED_STROKE_COLOR = 'blue';
  static readonly WIDTH = 160;
  static readonly HEIGHT = 80;

  constructor(id: string, public label: string, public imageUrl: string ) {
    super(id,
      PatternGraphNode.FILL_COLOR,
      PatternGraphNode.STROKE_COLOR,
      PatternGraphNode.HIGHLIGHTED_STROKE_COLOR,
      PatternGraphNode.WIDTH,
      PatternGraphNode.HEIGHT);
  }

}

/**
 * Represents the graph that shows the Pattern Language as a graph
 */
@Component({
  selector: 'app-pattern-graph',
  templateUrl: './patterns-graph.component.html'
})
export class PatternsGraphComponent extends  AbstractGraphComponent {


  static getPatternNameOfNode(node: GraphNode): string {
    return (<PatternGraphNode>node).label;
  }
  constructor(private patternRepoService: PatternRepositoryService) {
    super();
    this.height = 350;
    this.applyDimensions();

    this.patternRepoService.waitForInitialization().then(
      () => this.buildGraph(this.patternRepoService.allPatterns)
    );
  }

  createNode(id: any, item: any): GraphNode {
    const pattern: PatternModel = <PatternModel>item;

    return new PatternGraphNode(id, pattern.name, pattern.imageUrl);
  }

  createLink(sourceNode: GraphNode, targetNode: GraphNode, sourceItem: any, targetItem: any): GraphLink {
    return new GraphLink(sourceNode.id, targetNode.id);
  }

  isNodeEqualsItem(node: GraphNode, item: any): boolean {
    const pattern: PatternModel = <PatternModel>item;
    const myNode: PatternGraphNode = <PatternGraphNode> node;

    return pattern.name === myNode.label;
  }

  getNextItems(currentItem: any): any[] {
    const pattern: PatternModel = <PatternModel>currentItem;

    return pattern.nextPatterns;
  }

  onNodeDoubleClicked = (node: GraphNode) => {
    this.highlightNodes([node], !node.isHighlighted);
  }

  onMouseOver= (node: GraphNode) => {
    this.changeNodesOpacity([node], GraphNode.lowOpacityValue, false);
  }

  onMouseOut = (node: GraphNode) => {
    this.changeNodesOpacity([node], GraphNode.highOpacityValue, false);
  }

  /**
   * Changes the border color of the nodes representing the given patterns
   * @param {string[]} patternNames
   * @param {boolean} isHighlighted
   */
  highlightPatterns(patternNames: string[], isHighlighted: boolean): void {
    const nodes: GraphNode[] = this.myNodes.filter(item => patternNames.indexOf((<PatternGraphNode>item).label) >= 0);
    this.highlightNodes(nodes, isHighlighted);
  }




}
