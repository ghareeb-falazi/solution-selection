import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConcreteSolutionPathModel} from '../../data-model/concrete-solution-path.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SolutionCompositionService {
  private readonly PATH_PARAM_NAME = 'cspath';
  constructor(private http: HttpClient) { }
  composeConcreteSolutions(path: ConcreteSolutionPathModel, composerURL: string, parameters: Map<String, any> ): Observable<URL> {
    const requestURL = composerURL;
    const selectedCSServiceIds = [];

    for (const cs of path.getAllConcreteSolutions()) {
      selectedCSServiceIds.push(cs.uri);
    }

    parameters.set(this.PATH_PARAM_NAME, selectedCSServiceIds);
    const json = JSON.stringify(this.strMapToObj(parameters));

    const reqHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // console.debug(`requestURL: ${requestURL}`);
    // console.debug(`body: `);
    // console.debug(parameters);
    // console.debug(`headers: `);
    // console.debug(reqHeaders);
    return this.http.post(requestURL, json,
      { headers: reqHeaders, observe: 'response', responseType: 'text' }).map(
      response => {
        return new URL(response.headers.get('Location'));
      }
    );
  }

  strMapToObj(strMap): Object {
    const obj = Object.create(null);
    for (const [k, v] of strMap) {
      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
    return obj;
  }

}
