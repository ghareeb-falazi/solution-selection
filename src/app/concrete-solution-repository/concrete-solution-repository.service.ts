/**
 * Created by falazigb on 09-Jul-17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ConcreteSolutionModel} from "../data-model/concrete-solution.model";

@Injectable()
export class ConcreteSolutionRepositoryService {
  private allSolutions:ConcreteSolutionModel[];

  constructor(private http: Http) {
  }

  initialize():Promise<any>{
    let url = `api/cs`;
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        let result: ConcreteSolutionModel[] = [];
        let original: ConcreteSolutionModel[] = response.json().data as ConcreteSolutionModel[];
        for (let i = 0; i < original.length; i++) {
          result.push(ConcreteSolutionModel.fromData(original[i]));
        }

        this.allSolutions = result;
        return result;
      })
      .catch(this.handleError);
  }

  getConcreteSolutionsOfPattern(patternName: string): ConcreteSolutionModel[] {
    let result:ConcreteSolutionModel[] = [];

    for(let i = 0; i < this.allSolutions.length; i++){
      if(this.allSolutions[i].implementedPatternUri.toLowerCase() === patternName.toLowerCase()){
        result.push(this.allSolutions[i]);
      }
    }

    return result;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
