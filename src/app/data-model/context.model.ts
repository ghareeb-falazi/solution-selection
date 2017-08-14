import {CapabilityModel} from "./capability.model";
import {SolutionPathModel} from "./solution-path.model";
import {ConcreteSolutionModel} from "./concrete-solution.model";


export class ContextModel {
  static readonly INITIAL_CAPABILITIES_KEY: string = 'IC';

  private allCapabilities: Map<string, CapabilityModel[]>;//quick access

  constructor(private initialCapabilities: CapabilityModel[], private solutionPath: SolutionPathModel) {
    this.allCapabilities = new Map();
    this.allCapabilities.set(ContextModel.INITIAL_CAPABILITIES_KEY, this.initialCapabilities);
    this.solutionPath.getAllConcreteSolutions().forEach((solution) => this.allCapabilities.set(solution.uri, solution.capabilities));
  }

  getAllCapabilities(): Map<string, CapabilityModel[]> {
    return this.allCapabilities;
  }

  getCapabilitiesOfSolution(solutionUri):CapabilityModel[]{
    if(solutionUri.toUpperCase() === ContextModel.INITIAL_CAPABILITIES_KEY)
      solutionUri = solutionUri.toUpperCase();

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
    let result: string[] = [ContextModel.INITIAL_CAPABILITIES_KEY];
    this.solutionPath.getAllConcreteSolutions().forEach(solution => result.push(solution.uri));

    return result;
  }


}
