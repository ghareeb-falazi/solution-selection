
import {ConcreteSolution} from "./ConcreteSolution";
import {SolutionPathStep} from "./SolutionPathStep";
/**
 * Created by falazigb on 13-Jul-17.
 */

export class SolutionPath{
  private path: SolutionPathStep[] = [];

  constructor(public startNode:ConcreteSolution){

  }

  pushPathStep(step:SolutionPathStep):void{
    this.path.push(step);
  }

  popPathStep():any{
    return this.path.pop();
  }

  copy():SolutionPath{
    let result:SolutionPath = new SolutionPath(this.startNode);

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
