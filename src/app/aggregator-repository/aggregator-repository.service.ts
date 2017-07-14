/**
 * Created by falazigb on 09-Jul-17.
 */
import "rxjs/add/operator/toPromise";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AbstractAggregator} from "../data-model/AbstractAggregator";
import {AggregatorCreator} from "../data-model/AggregatorCreator";
import {BasicAggregator} from "../data-model/BasicAggregator";

@Injectable()
export class AggregatorRepositoryService {

  private allAggregators:AbstractAggregator[];

  constructor(private http: Http) {
  }

  initialize():Promise<any> {
    let url:string = 'api/agg';

    return this.http.get(url)
      .toPromise()
      .then((response) => {
          let result: AbstractAggregator[] = [];
          let originalData: AbstractAggregator[] = response.json().data as AbstractAggregator[];
          let creator: AggregatorCreator = new AggregatorCreator();

          for (let i = 0; i < originalData.length; i++) {
            result.push(creator.createNewInstance(originalData[i]));
          }

          this.allAggregators = result;

          return result;
        }
      )
      .catch(this.handleError);
  }

  getAggregators(solution1URI: string, solution2URI: string): AbstractAggregator[] {
    let result:AbstractAggregator[] = [];

    for(let i = 0; i < this.allAggregators.length; i++){
      if((this.allAggregators[i] as BasicAggregator).concreteSolution1URI.toLowerCase() === solution1URI.toLowerCase() &&
        (this.allAggregators[i] as BasicAggregator).concreteSolution2URI.toLowerCase() === solution2URI.toLowerCase())
      {
        result.push(this.allAggregators[i]);
      }
    }

    return result;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
