import * as shape from 'd3-shape';
import { Output, EventEmitter, Directive } from '@angular/core';
import {isNullOrUndefined} from 'util';

/**
 * Basic graph node
 */
export class GraphNode {
  static readonly highOpacityValue = 1.0;
  static readonly lowOpacityValue = 0.5;
  isHighlighted = false;
  opacity = 1.0;
  readonly normalStrokeColor: string;


  constructor(public id: string, public fillColor: string, public strokeColor: string, public readonly highlightedStrokeColor, public width: number, public height: number) {
    this.normalStrokeColor = strokeColor;
  }
}

/**
 * Basic graph link
 */
export class GraphLink {
  strokeColor = 'black';

  /**
   * Initializes a new instance of this class
   * @param {string} source start node of the link (used by template)
   * @param {string} target end node of the link (used by template)
   */
  constructor(public source: string, public target: string) {

  }
}

/**
 * Abstract graph
 */
@Directive()
export abstract class AbstractGraphComponent {
  /**
   * Nodes of the graph
   * @type {Array}
   */
  myNodes: GraphNode[] = [];
  /**
   * Links of the graph
   * @type {Array}
   */
  myLinks: GraphLink[] = [];
  /**
   * The curvature shape of the links of the graph
   */
  curve: any = shape.curveLinear;
  /**
   * The width of the canvas the graph is fit into
   * @type {number}
   */
  width = 730;
  /**
   * The height of the canvas the graph is fit into
   * @type {number}
   */
  height = 300;
  /**
   * The dimensions of the canvas the graph is fit into
   * @type {[number , number]}
   */
  view: any[] = [this.width, this.height];

  layout = 'dagre';
  /**
   * Whether a legend should be shown when hovering over a node
   * @type {boolean}
   */
  showLegend = false;
  /**
   * The color of links arrow heads
   * @type {string}
   */
  arrowHeadColor = 'black';
  /**
   * An event that is triggered when a node is double-clicked
   * @type {EventEmitter<GraphNode>}
   */
  @Output() onNodeDoubleClickedEvent = new EventEmitter<GraphNode>();
  /**
   * An event that is triggered when the mouse pointer enters the area over a node
   * @type {EventEmitter<GraphNode>}
   */
  @Output() onMouseOverNodeEvent = new EventEmitter<GraphNode>();
  /**
   * An event that is triggered when the mouse pointer leaves the area over a node
   * @type {EventEmitter<GraphNode>}
   */
  @Output() onMouseOutNodeEvent = new EventEmitter<GraphNode>();

  /**
   * Called when a node is double clicked, right before the event is raised
   * @param {GraphNode} node the node that was double-clicked
   */
  onNodeDoubleClicked?: (node: GraphNode) => void;

  /**
   * optional to implement
   */
  onMouseOver?: (node: GraphNode) => void;

  /**
   * optional to implement
   */
  onMouseOut?: (node: GraphNode) => void;
  /**
   * Instantiates a node based on an id and a tag.
   * @param id
   * @param item
   * @returns {GraphNode}
   */
  abstract createNode(id: any, item: any): GraphNode;

  /**
   * Instantiates a link based on two nodes and two tags
   * @param {GraphNode} sourceNode
   * @param {GraphNode} targetNode
   * @param sourceItem
   * @param targetItem
   * @returns {GraphLink}
   */
  abstract createLink(sourceNode: GraphNode, targetNode: GraphNode, sourceItem: any, targetItem: any): GraphLink;

  /**
   * Checks whether a node represents a given item
   * @param {GraphNode} node
   * @param item
   * @returns {boolean}
   */
  abstract isNodeEqualsItem(node: GraphNode, item: any): boolean;

  /**
   * Gets the items that are represented by nodes that come after the node that represents a given item
   * @param currentItem
   * @returns {any[]}
   */
  abstract getNextItems(currentItem: any): any[];




  /**
   * Creates a graph based on a set of items
   * @param {any[]} items
   */
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

    this.myLinks = myLinks;
    this.myNodes = myNodes;
  }


  /**
   * Change the dimensions of the graph
   */
  applyDimensions(): void {
    this.view = [this.width, this.height];
  }

  /**
   * Handles the event the graph raises when a node is double-clicked
   * Handles the event the graph raises when a node is double-clicked
   * @param {GraphNode} node
   */
  handleDoubleClick(node: GraphNode) {
    // node here is a gui-internal copy of the node in the myNodes list
    // we should get a reference to the one in the myNodes list instead!
    const myNode: GraphNode = this.myNodes.find(item => item.id === node.id);

    if (!isNullOrUndefined(this.onNodeDoubleClicked)) {
      this.onNodeDoubleClicked(myNode);
    }
    this.onNodeDoubleClickedEvent.emit(myNode);
  }

  handleMouseOver(node: GraphNode) {
    if (!isNullOrUndefined(this.onMouseOver)) {
      this.onMouseOver(node);
    }

    const myNode: GraphNode = this.myNodes.find(item => item.id === node.id);
    this.onMouseOverNodeEvent.emit(myNode);
  }

  handleMouseOut(node: GraphNode) {
    if (!isNullOrUndefined(this.onMouseOut)) {
      this.onMouseOut(node);
    }

    const myNode: GraphNode = this.myNodes.find(item => item.id === node.id);
    this.onMouseOutNodeEvent.emit(myNode);
  }

  public changeNodesOpacity(nodes: GraphNode[], value: number, refreshNodes: boolean): void {
    let anyChanges = false;

    for (const node of nodes) {
      if (value !== node.opacity) {// only if there's a need to highlight
        anyChanges = true;
        node.opacity = value;
      }
    }

    if (anyChanges && refreshNodes) {
      this.myNodes = [...this.myNodes]; // otherwise the change is not bound
    }

  }

  /**
   * Highlights/De-highlights the specified nodes only if the highlight state is changed
   * @param {GraphNode} nodes the nodes to highlight/de-highlight
   * @param {boolean} newValue the new highlight value
   */
  public highlightNodes(nodes: GraphNode[], newValue: boolean): void {
    let anyChange = false;

    for (const node of nodes) {
      if (newValue !== node.isHighlighted) {// only if there's a need to highlight
        anyChange = true;
        if (newValue) {
          node.strokeColor = node.highlightedStrokeColor;
        } else {
          node.strokeColor = node.normalStrokeColor;
        }

        node.isHighlighted = newValue;
      }
    }

    if (anyChange) {
      this.myNodes = [...this.myNodes]; // otherwise the change is not bound
    }
  }
}
