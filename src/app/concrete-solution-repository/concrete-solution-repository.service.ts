/**
 * Created by falazigb on 09-Jul-17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ConcreteSolution} from "../data-model/ConcreteSolution";

@Injectable()
export class ConcreteSolutionRepositoryService {
  constructor(private http:Http)
  {}

  getConcreteSolutionsOfPattern(patternName: string):Promise<ConcreteSolution[]> {
    let url:string=`api/cs/?implementedPatternsList=(^|,)${patternName}($|,)`;
    let url2:string=`api/cs/?uri=${patternName}`;
    console.debug(url);
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        let result:ConcreteSolution[] = [];
        let original:ConcreteSolution[] = response.json().data as ConcreteSolution[];
        for(let i = 0; i < original.length; i++)
        {
          result.push(ConcreteSolution.fromData(original[i]));
        }
        return response.json().data as ConcreteSolution[];})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
