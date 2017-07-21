
import {ConcreteSolutionModel} from "./concrete-solution.model";
import {SolutionPathStepModel} from "./solution-path-step.model";
/**
 * Created by falazigb on 13-Jul-17.
 */

export class SolutionPathModel{
  private path: SolutionPathStepModel[] = [];

  constructor(public startNode:ConcreteSolutionModel){

  }

  pushPathStep(step:SolutionPathStepModel):void{
    this.path.push(step);
  }

  popPathStep():any{
    return this.path.pop();
  }

  getAllConcreteSolutions():ConcreteSolutionModel[]{
    const result:ConcreteSolutionModel[] = [];
    result.push(this.startNode);

    for(const pathStep of this.path){
      result.push(pathStep.concreteSolution);
    }

    return result;
  }

  copy():SolutionPathModel{
    let result:SolutionPathModel = new SolutionPathModel(this.startNode);

    for(let step of this.path){
      result.path.push(step);
    }

    return result;
  }
  toString():string{
    let result: string = this.startNode.uri;

    for(let i = 0; i < this.path.length; i++){
      result += this.path[i].toString();
    }

    return result;
  }
}
