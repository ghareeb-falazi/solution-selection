/**
 * Created by falazigb on 09-Jul-17.
 */
import "rxjs/add/operator/toPromise";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AbstractAggregatorModel} from "../data-model/abstract-aggregator.model";
import {AggregatorCreatorModel} from "../data-model/aggregator-creator.model";
import {BasicAggregatorModel} from "../data-model/basic-aggregator.model";

@Injectable()
export class AggregatorRepositoryService {

  private allAggregators:AbstractAggregatorModel[];

  constructor(private http: Http) {
  }

  initialize():Promise<any> {
    let url:string = 'api/agg';

    return this.http.get(url)
      .toPromise()
      .then((response) => {
          let result: AbstractAggregatorModel[] = [];
          let originalData: AbstractAggregatorModel[] = response.json().data as AbstractAggregatorModel[];
          let creator: AggregatorCreatorModel = new AggregatorCreatorModel();

          for (let i = 0; i < originalData.length; i++) {
            result.push(creator.createNewInstance(originalData[i]));
          }

          this.allAggregators = result;

          return result;
        }
      )
      .catch(this.handleError);
  }

  getAggregators(solution1URI: string, solution2URI: string): AbstractAggregatorModel[] {
    let result:AbstractAggregatorModel[] = [];

    for(let i = 0; i < this.allAggregators.length; i++){
      if((this.allAggregators[i] as BasicAggregatorModel).concreteSolution1URI.toLowerCase() === solution1URI.toLowerCase() &&
        (this.allAggregators[i] as BasicAggregatorModel).concreteSolution2URI.toLowerCase() === solution2URI.toLowerCase())
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
