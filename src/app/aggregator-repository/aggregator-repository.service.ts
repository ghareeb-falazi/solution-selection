/**
 * Created by falazigb on 09-Jul-17.
 */
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {toPromise} from "rxjs/operator/toPromise";
import {Aggregator} from "../data-model/Aggregator";

@Injectable()
export class AggregatorRepositoryService {
  constructor(private http:Http)
  {}

  getAggregators(solution1URI: string, solution2URI: string):Promise<Aggregator[]> {
    return this.http.get(`api/agg/?concreteSolution1URI=${solution1URI}&concreteSolution2URI=${solution2URI}`)
      .toPromise()
      .then(response => response.json().data as Aggregator[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
