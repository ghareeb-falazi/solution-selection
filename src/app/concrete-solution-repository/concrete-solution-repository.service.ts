/**
 * Created by falazigb on 09-Jul-17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ConcreteSolutionInterface, ConcreteSolutionModel} from "../data-model/concrete-solution.model";
import {getCurrentDebugContext} from "@angular/core/src/view/services";
import {isNullOrUndefined} from "util";
import {RequirementModel} from "../data-model/requirement.model";
import {CapabilityModel} from "../data-model/capability.model";


@Injectable()
export class ConcreteSolutionRepositoryService {
  private allSolutions: ConcreteSolutionModel[];
  private initialized:Promise<any>;

  constructor(private http: Http) {
    this.initialized = this.initialize();
  }

  private initialize():Promise<any>{
    //console.debug('ConcreteSolutionRepositoryService.waitForInitialization() is called, value for allSolutions:');
    //console.debug(this.allSolutions);
      let url = 'assets/concrete-solutions.json';
      return this.http.get(url)
        .toPromise()
        .then((response) => {

          let result: ConcreteSolutionModel[] = [];
          //console.debug(response.json());
          //console.debug('this was initial!');
          let original: ConcreteSolutionInterface[] = response.json();

          for (let i = 0; i < original.length; i++) {
            result.push(ConcreteSolutionModel.fromData(original[i]));
          }
          //console.debug(result);
          this.allSolutions = result;
          console.debug(`ConcreteSolutionRepository is initialized`);

          return result;
        })
        .catch(this.handleError);
  }

  waitForInitialization(): Promise<any> {
    return this.initialized;
  }

  getConcreteSolutionsOfPattern(patternName: string): ConcreteSolutionModel[] {
    let result: ConcreteSolutionModel[] = [];

    for (let i = 0; i < this.allSolutions.length; i++) {
      if (this.allSolutions[i].getImplementedPattern().toLowerCase() === patternName.toLowerCase()) {
        result.push(this.allSolutions[i]);
      }
    }

    return result;
  }

  getAllImplementedPatterns(): string[] {
    const result: string[] = [];
    let currentPattern: string;

    for (const solution of this.allSolutions) {
      currentPattern = solution.getImplementedPattern();

      if (currentPattern && result.filter(param => param === currentPattern).length === 0)
        result.push(currentPattern);
    }

    return result;
  }

  getAllCapabilities(): Promise<CapabilityModel[]> {
    const result: CapabilityModel[] = [];

    for (const sol of this.allSolutions) {
      result.push(...sol.capabilities);
    }

    return new Promise<CapabilityModel[]>(resolve => resolve(result));
  }

  getAllPropertyNamesOfCapability(capabilityName: string): Promise<string[]> {
    const result: string[] = [];

    for (const sol of this.allSolutions) {
      for (const cap of sol.capabilities) {
        if (cap.name===capabilityName) {
          for (const propKey of cap.properties.keys()) {
              if (result.indexOf(propKey) < 0)
                result.push(propKey);
          }
        }
      }
    }

    return new Promise<string[]>(resolve => resolve(result));
  }

  getAllRequirements():Promise<RequirementModel[]>{
    const result:RequirementModel[] = [];

    for(const sol of this.allSolutions){
      result.push(...sol.requirements);
    }

    return new Promise<RequirementModel[]>(resolve=>resolve(result));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
