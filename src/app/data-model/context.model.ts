import {CapabilityModel} from './capability.model';
import {ConcreteSolutionPathModel} from './concrete-solution-path.model';
import {ConcreteSolutionModel} from './concrete-solution.model';

/**
 * Represents an ordered set of concrete solution capabilities grouped by the solutions they belong to.
 * It is used as the scope of 'variables' that all conditional statements can use.
 */
export class ContextModel {
  /**
   * The base key-name for each of the initial properties (A full key would be e.g., IC_1)
   * @type {string}
   */
  private static readonly INITIAL_CAPABILITIES_KEY = 'IC';

  /**
   * Holds key-value pairs of capability sets. Used to get the set of capabilities that belong to a certain concrete
   * solution efficiently
   */
  private allCapabilities: Map<string, CapabilityModel[]>; // quick access

  /**
   * Initializes a new instance of the ContextModel class.
   * It initializes the map of capabilities too.
   * @param {CapabilityModel[]} initialProperties the initial properties provided by the user
   * @param {ConcreteSolutionPathModel} concreteSolutionPath the concrete solution path to build the context for.
   */
  constructor(private initialProperties: CapabilityModel[], private concreteSolutionPath: ConcreteSolutionPathModel) {
    this.allCapabilities = new Map();
    let index = 0;
    for (const ic of initialProperties){
      this.allCapabilities.set(`${ContextModel.INITIAL_CAPABILITIES_KEY}_${index}`, [ic]);
      index++;
    }
    this.concreteSolutionPath.getAllConcreteSolutions().forEach(
      (solution) => this.allCapabilities.set(solution.uri, solution.capabilities));
  }

  /**
   * Returns the capabilities map
   * @returns {Map<string, CapabilityModel[]>}
   */
  getAllCapabilities(): Map<string, CapabilityModel[]> {
    return this.allCapabilities;
  }

  /**
   * Gets the set of capabilities that belong to a certain concrete solution
   * @param solutionUri the Uri of the concrete solution
   * @returns {CapabilityModel[]} the set of capabilities for the given concrete solution
   */
  getCapabilitiesOfSolution(solutionUri): CapabilityModel[] {
    const all = this.getAllCapabilities();

    if (all.has(solutionUri)) {
      return all.get(solutionUri);
    }

    return null;
  }

  /**
   * Gets the concrete solution that comes next in the concrete solution path.
   * @param {string} solutionUri the Uri of the concrete solution to get its successor
   * @returns {ConcreteSolutionModel} the concrete solution that comes after a specific concrete solution in the
   * concrete solution path.
   */
  getNextSolution(solutionUri: string): ConcreteSolutionModel {
    return this.concreteSolutionPath.getNeighbor(solutionUri, true);
  }

  /**
   * Gets the concrete solution that comes before a given one in the concrete solution path.
   * @param {string} solutionUri the Uri of the concrete solution to get its predecessor
   * @returns {ConcreteSolutionModel} the concrete solution that comes before a specific concrete solution in the
   * concrete solution path.
   */
  getPreviousSolution(solutionUri: string): ConcreteSolutionModel {
    return this.concreteSolutionPath.getNeighbor(solutionUri, false);
  }

  /**
   * Gets the set of all Uris of concrete solutions stored in the context.
   * @returns {string[]}
   */
  getAllConcreteSolutionsUris(): string[] {
    const result: string[] = [];
    this.allCapabilities.forEach((val, key) => {result.push(key); });

    return result;
  }


}
