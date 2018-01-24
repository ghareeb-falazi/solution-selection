import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PatternModel} from '../../data-model/pattern.model';

/**
 * A service that provides access to the pattern repository
 */
@Injectable()
export class PatternRepositoryService {
  /**
   * Local cache of patterns
   */
  allPatterns: PatternModel[];
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
  constructor(private http: HttpClient) {
    this.initialized = this.initialize();
  }

  /**
   * A simple implementation that reads the patterns stored in a local JSON file
   * @returns {Promise<any>} a Promise that gets resolved when initialization is done.
   */
  private initialize(): Promise<any> {
    const url = 'assets/patterns.json';

    return this.http.get(url)
      .toPromise()
      .then((response) => {
          const result: PatternModel[] = [];
          const originalData: PatternModel[] = response as PatternModel[];
          originalData.forEach(item => result.push(PatternModel.fromData(item)));

          let nextPattern: PatternModel;

          // fill references to next patterns
          for (const pattern of result) {
            pattern.nextPatterns = [];

            for (const nextPatternName of pattern.next) {
              nextPattern = result.find(item => item.name === nextPatternName);
              pattern.nextPatterns.push(nextPattern);
            }
          }

          this.allPatterns = result;
          console.debug('PatternRepositoryService is initialized');

          return result;
        }
      )
      .catch(PatternRepositoryService.handleError);

  }

  /**
   * Returns a Promise that gets resolved when the initialization process is done.
   * @returns {Promise<any>} a Promise that gets resolved when the initialization process is done.
   */
  waitForInitialization(): Promise<any> {
    return this.initialized;
  }


}
