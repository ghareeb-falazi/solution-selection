import {CapabilityModel} from "./capability.model";
import {SolutionPathModel} from "./solution-path.model";
import {ConcreteSolutionModel} from "./concrete-solution.model";


export class ContextModel {
  private static readonly INITIAL_CAPABILITIES_KEY: string = 'IC';

  private allCapabilities: Map<string, CapabilityModel[]>;//quick access

  constructor(private initialCapabilities: CapabilityModel[], private solutionPath: SolutionPathModel) {
    this.allCapabilities = new Map();
    let index:number = 0;
    for(const ic of initialCapabilities){
      this.allCapabilities.set(`${ContextModel.INITIAL_CAPABILITIES_KEY}_${index}`, [ic]);
      index++;
    }
    this.solutionPath.getAllConcreteSolutions().forEach((solution) => this.allCapabilities.set(solution.uri, solution.capabilities));
  }

  getAllCapabilities(): Map<string, CapabilityModel[]> {
    return this.allCapabilities;
  }

  getCapabilitiesOfSolution(solutionUri):CapabilityModel[]{
    const all = this.getAllCapabilities();

    if(all.has(solutionUri))
      return all.get(solutionUri);

    return null;
  }
  getNextSolution(solutionUri: string): ConcreteSolutionModel {
    return this.solutionPath.getNeighbor(solutionUri, true);
  }

  getPreviousSolution(solutionUri: string): ConcreteSolutionModel {
    return this.solutionPath.getNeighbor(solutionUri, false);
  }

  getAllConcreteSolutionsUris(): string[] {
    let result: string[] = [];
    this.allCapabilities.forEach((val,key)=>{result.push(key);});
    console.debug(result);
    return result;
  }


}
