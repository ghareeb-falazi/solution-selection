import {ConcreteSolutionModel} from "./concrete-solution.model";
import {SolutionPathStepModel} from "./solution-path-step.model";
import {AbstractAggregatorModel} from "./abstract-aggregator.model";

/**
 * Created by falazigb on 13-Jul-17.
 */

export class SolutionPathModel {
  private path: SolutionPathStepModel[] = [];

  constructor(public startNode: ConcreteSolutionModel) {

  }

  pushPathStep(step: SolutionPathStepModel): void {
    this.path.push(step);
  }

  popPathStep(): any {
    return this.path.pop();
  }

  getAllConcreteSolutions(): ConcreteSolutionModel[] {
    const result: ConcreteSolutionModel[] = [];
    result.push(this.startNode);

    for (const pathStep of this.path) {
      result.push(pathStep.concreteSolution);
    }

    return result;
  }

  getAllAggregators(): AbstractAggregatorModel[][]{
    const result: AbstractAggregatorModel[][] = [];

    for(const step of this.path){
      result.push(step.aggregators);
    }

    return result;
  }

  getNeighbor(solutionUri: string, isNext: boolean): ConcreteSolutionModel {
    let result: ConcreteSolutionModel = null;

    if (isNext && solutionUri === this.startNode.uri && this.path.length > 0)
      result = this.path[0].concreteSolution;
    else {
      let index = -1;

      for (let i = 0; i < this.path.length; i++) {
        if (solutionUri === this.path[i].concreteSolution.uri) {
          index = i;
          break;
        }
      }

      if (index >= 0) {
        if (!isNext) {
          if (index > 0)
            result = this.path[index - 1].concreteSolution;//return previous
          else
            result = this.startNode;
        }
        else if (index < this.path.length - 1)
          return this.path[index + 1].concreteSolution;//return next
      }
    }

    return result;
  }

  copy(): SolutionPathModel {
    let result: SolutionPathModel = new SolutionPathModel(this.startNode);

    for (let step of this.path) {
      result.path.push(step);
    }

    return result;
  }

  toString(): string {
    let result: string = this.startNode.uri;

    for (let i = 0; i < this.path.length; i++) {
      result += this.path[i].toString();
    }

    return result;
  }
}
