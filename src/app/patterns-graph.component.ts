
import {ChangeDetectorRef, Component} from "@angular/core";
import {PatternModel} from "./data-model/pattern.model";
import {PatternRepositoryService} from "./pattern-repository/pattern-repository.service";
import {AbstractGraphComponent, GraphLink, GraphNode} from "./abstract-graph.component";

class PatternGraphNode extends GraphNode{
  static readonly FILL_COLOR: string = '#edebec';
  static readonly STROKE_COLOR: string = 'black';
  static readonly  HIGHLIGHTED_STROKE_COLOR = 'blue';

  constructor(id: string, public label: string, public imageUrl:string ){
    super(id, PatternGraphNode.FILL_COLOR, PatternGraphNode.STROKE_COLOR, PatternGraphNode.HIGHLIGHTED_STROKE_COLOR);
  }

}


@Component({
  selector: 'pattern-graph',
  templateUrl: './patterns-graph.component.html'
})

export class PatternsGraphComponent extends  AbstractGraphComponent{

  constructor(private patternRepoService:PatternRepositoryService) {
    super();
    this.height=350;
    this.applyDimensions();

    this.patternRepoService.waitForInitialization().then(
      ()=>this.buildGraph(this.patternRepoService.allPatterns)
    )
  }

  createNode(id:any, item: any): GraphNode {
    const pattern:PatternModel = <PatternModel>item;

    return new PatternGraphNode(id, pattern.name, pattern.imageUrl);
  }

  createLink(sourceNode: GraphNode, targetNode: GraphNode, sourceItem: any, targetItem: any): GraphLink {
    return new GraphLink(sourceNode.id, targetNode.id);
  }

  isNodeEqualsItem(node: GraphNode, item: any): boolean {
    const pattern:PatternModel = <PatternModel>item;
    const myNode:PatternGraphNode = <PatternGraphNode> node;

    return pattern.name === myNode.label;
  }

  getNextItems(currentItem: any): any[] {
    const pattern:PatternModel = <PatternModel>currentItem;

    return pattern.nextPatterns;
  }

  onNodeDoubleClicked=(node:GraphNode)=>{
    this.highlightNodes([node], !node.isHighlighted);
  }

  onMouseOver= (node:GraphNode)=> {
    this.changeNodesOpacity([node], GraphNode.lowOpacityValue, false);
  };

  onMouseOut= (node:GraphNode)=> {
    console.debug('inside onMouseOut');
    this.changeNodesOpacity([node], GraphNode.highOpacityValue, false);
  };


  highlightPatterns(patternNames:string[], isHighlighted: boolean):void{
    const nodes:GraphNode[] = this.myNodes.filter(item=> patternNames.indexOf((<PatternGraphNode>item).label) >= 0);
    this.highlightNodes(nodes, isHighlighted);

  }


  getPatternNameOfNode(node:GraphNode):string{
    return (<PatternGraphNode>node).label;
  }


}
