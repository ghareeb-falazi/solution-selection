/**
 * Created by falazigb on 09-Jul-17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ConcreteSolutionInterface, ConcreteSolutionModel} from "../../data-model/concrete-solution.model";
import {RequirementModel} from "../../data-model/requirement.model";
import {CapabilityModel} from "../../data-model/capability.model";

/**
 * A service that provides access to the concrete solution repository
 */
@Injectable()
export class ConcreteSolutionRepositoryService {
  /**
   * Local cache of concrete solutions
   */
  allSolutions: ConcreteSolutionModel[];
  /**
   * Used to indicate that service initialization is done
   */
  private initialized: Promise<any>;

  /**
   * Initializes a new instances of the service
   * @param {Http} http Angular service for http connections
   */
  constructor(private http: Http) {
    this.initialized = this.initialize();
  }

  /**
   * A simple implementation that reads the concrete solutions stored in a local JSON file
   * @returns {Promise<any>} a Promise that gets resolved when initialization is done.
   */
  private initialize(): Promise<any> {
    const url = 'assets/concrete-solutions.json';
    return this.http.get(url)
      .toPromise()
      .then((response) => {

        const result: ConcreteSolutionModel[] = [];
        const original: ConcreteSolutionInterface[] = response.json();

        for (let i = 0; i < original.length; i++) {
          result.push(ConcreteSolutionModel.fromData(original[i]));
        }

        this.allSolutions = result;
        console.debug(`ConcreteSolutionRepository is initialized`);

        return result;
      })
      .catch(ConcreteSolutionRepositoryService.handleError);
  }

  /**
   * Returns a Promise that gets resolved when the initialization process is done.
   * @returns {Promise<any>} a Promise that gets resolved when the initialization process is done.
   */
  waitForInitialization(): Promise<any> {
    return this.initialized;
  }

  /**
   * Gets the set of concrete solutions that implement a given pattern
   * @param {string} patternName
   * @returns {ConcreteSolutionModel[]}
   */
  getConcreteSolutionsOfPattern(patternName: string): ConcreteSolutionModel[] {
    return this.allSolutions.filter(solution =>{
      return solution.getImplementedPattern().toLowerCase() === patternName.toLowerCase()
    });

  }

  /**
   * Gets a concrete solution based on its uri
   * @param {string} csUri
   * @returns {ConcreteSolutionModel}
   */
  getConcreteSolutionByUri(csUri: string): ConcreteSolutionModel {
    let result: ConcreteSolutionModel = null;

    for (const sol of this.allSolutions) {
      if (sol.uri === csUri) {
        result = sol;
        break;
      }
    }

    return result;
  }


  /**
   * Gets a set of all capabilities of concrete solutions
   * @returns {Promise<CapabilityModel[]>}
   */
  getAllCapabilities(): Promise<CapabilityModel[]> {
    const result: CapabilityModel[] = [];

    for (const sol of this.allSolutions) {
      result.push(...sol.capabilities);
    }

    return new Promise<CapabilityModel[]>(resolve => resolve(result));
  }

  /**
   * Gets a set of all requirements of concrete solutions
   * @returns {Promise<RequirementModel[]>}
   */
  getAllRequirements(): Promise<RequirementModel[]> {
    const result: RequirementModel[] = [];

    for (const sol of this.allSolutions) {
      result.push(...sol.requirements);
    }

    return new Promise<RequirementModel[]>(resolve => resolve(result));
  }

  /**
   * Handles errors that might occur while initializing the service
   * @param error the error to handle
   * @returns {Promise<any>}
   */
  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
