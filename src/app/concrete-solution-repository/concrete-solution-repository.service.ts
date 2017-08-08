/**
 * Created by falazigb on 09-Jul-17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ConcreteSolutionInterface, ConcreteSolutionModel} from "../data-model/concrete-solution.model";
import {getCurrentDebugContext} from "@angular/core/src/view/services";


@Injectable()
export class ConcreteSolutionRepositoryService {
  private allSolutions: ConcreteSolutionModel[];

  constructor(private http: Http) {
  }

  initialize(): Promise<any> {
    if (!this.allSolutions) {
      let url = 'assets/concrete-solutions.json';
      return this.http.get(url)
        .toPromise()
        .then((response) => {
          let result: ConcreteSolutionModel[] = [];
          console.debug(response.json());
          let original: ConcreteSolutionInterface[] = response.json();

          for (let i = 0; i < original.length; i++) {
            result.push(ConcreteSolutionModel.fromData(original[i]));
          }

          console.debug(`ConcreteSolutionRepository was initialized!`);
          this.allSolutions = result;
          return result;
        })
        .catch(this.handleError);
    }
    else return new Promise((resolve) => resolve());
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
