/**
 * Created by falazigb on 09-Jul-17.
 */
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AbstractAggregatorModel} from '../../data-model/abstract-aggregator.model';
import {AggregatorCreatorModel} from '../../data-model/aggregator-creator.model';
import {BasicAggregatorModel} from '../../data-model/basic-aggregator.model';
import {AbstractAggregatorRepository} from "./abstract-aggregator-repository";

/**
 * A service that provides access to the aggregator repository
 */
@Injectable()
export class AggregatorRepositoryService extends AbstractAggregatorRepository {
  /**
   * Local cache of aggregators
   */
  allAggregators: AbstractAggregatorModel[];
  /**
   * Used to indicate that service initialization is done
   */
  private initialized: Promise<any>;

  /**
   * Handles errors that might occur while initializing the service
   * @param error the error to handle
   * @returns {Promise<any>}
   */
  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   * Initializes a new instances of the service
   * @param {Http} http Angular service for http connections
   */
  constructor(private http: Http) {
    super();
    this.initialized = this.initialize();
  }
  /**
   * A simple implementation that reads the aggregators stored in a local JSON file
   * @returns {Promise<any>} a Promise that gets resolved when initialization is done.
   */
  private initialize(): Promise<any> {
    const url = 'assets/aggregators.json';

    return this.http.get(url)
      .toPromise()
      .then((response) => {
          const result: AbstractAggregatorModel[] = [];
          const originalData: AbstractAggregatorModel[] = response.json() as AbstractAggregatorModel[];
          const creator: AggregatorCreatorModel = new AggregatorCreatorModel();

          for (let i = 0; i < originalData.length; i++) {
            result.push(creator.createNewInstance(originalData[i]));
          }

          this.allAggregators = result;
          console.debug('AggregatorRepositoryService is initialized!');

          return result;
        }
      )
      .catch(AggregatorRepositoryService.handleError);
  }

  /**
   * Returns a Promise that gets resolved when the initialization process is done.
   * @returns {Promise<any>} a Promise that gets resolved when the initialization process is done.
   */
  waitForInitialization(): Promise<any> {
    return this.initialized;
  }

  /**
   * Gets the set of aggregators that are able to aggregate the two given concrete solutions.
   * @param {string} solution1URI
   * @param {string} solution2URI
   * @returns {AbstractAggregatorModel[]}
   */
  getSuitableAggregators(solution1URI: string, solution2URI: string): AbstractAggregatorModel[] {
    const result: AbstractAggregatorModel[] = [];

    for (let i = 0; i < this.allAggregators.length; i++) {
      if (this.allAggregators[i].canAggregate(solution1URI, solution2URI)) {
        result.push(this.allAggregators[i]);
      }
    }

    return result;
  }

  /**
   * (Used for visualization purposes) Gets the set of aggregators that cap aggregate the give concrete solution as a
   * first-hand operand.
   * @param {string} startSolutionURI
   * @returns {AbstractAggregatorModel[]}
   */
  getOutgoingAggregators(startSolutionURI: string): AbstractAggregatorModel[] {
    return this.allAggregators.filter(item =>
      (item as BasicAggregatorModel).concreteSolution1Uri.toLowerCase() === startSolutionURI.toLowerCase());
  }


}
