import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {ConcreteSolutionPathModel} from '../../data-model/concrete-solution-path.model';

@Injectable()
export class SolutionCompositionService {

  constructor(private http: Http) { }
  composeConcreteSolutions(path: ConcreteSolutionPathModel, composerURL: string ): Promise<URL> {
    // const requestURL = composerURL;
    // const selectedCSServiceIds = [];
    // for (const cs of path.getAllConcreteSolutions()) {
    //   selectedCSServiceIds.push(cs.serviceTemplateId);
    // }
    // const json = JSON.stringify(selectedCSServiceIds);
    //
    // const reqOpts = new RequestOptions({headers: new Headers({'Accept': 'application/json'})});
    // console.debug(`requestURL: ${requestURL}`);
    // console.debug(`body: `);
    // console.debug(json);
    // console.debug(`headers: `);
    // console.debug(reqOpts);
    // return this.http.post(requestURL, json, reqOpts)
    //   .toPromise()
    //   .then((response) => {
    //     return new URL(response.json());
    //   })
    //   .catch(err => console.error(err));

    return this.http.get('https://httpbin.org/delay/3')
      .toPromise()
      .then(result => {
        return new URL('http://abc.cba');
      });
  }

}
