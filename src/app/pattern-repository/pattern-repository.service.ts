import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {PatternModel} from "../data-model/pattern.model";

@Injectable()
export class PatternRepositoryService {
  allPatterns: PatternModel[];
  private initialized: Promise<any>;

  constructor(private http: Http) {
    this.initialized = this.initialize();
  }

  private initialize(): Promise<any> {
    let url: string = 'assets/patterns.json';
    return this.http.get(url)
      .toPromise()
      .then((response) => {
          const result: PatternModel[] = [];
          const originalData: PatternModel[] = response.json() as PatternModel[];
          originalData.forEach(item => result.push(PatternModel.fromData(item)));

          let nextPattern: PatternModel;

          //fill references to next patterns
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
      .catch(this.handleError);

  }

  waitForInitialization(): Promise<any> {
    return this.initialized;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
