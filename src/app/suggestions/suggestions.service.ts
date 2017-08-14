import {Injectable} from "@angular/core";
import {ConcreteSolutionRepositoryService} from "../concrete-solution-repository/concrete-solution-repository.service";
import {ExpressionEvaluatorService} from "../expression-evaluator/expression-evaluator.service";
import {RequirementModel} from "../data-model/requirement.model";
import {CapabilityModel} from "../data-model/capability.model";

@Injectable()
export class SuggestionsService{
  private labels:Map<string, string[]>;
  private initialized:Promise<any>;

  constructor(private repoService:ConcreteSolutionRepositoryService, private evalService:ExpressionEvaluatorService){
    this.initialized = this.initialize();
  }
  private initialize():Promise<any>{
    return this.repoService.waitForInitialization()
      .then(()=>
      {
        if(!this.labels){
          return this.repoService.getAllRequirements();
        }
      })
      .then(requirements=>this.fillSuggestionsOfRequirements(requirements))
      .then(()=>this.repoService.getAllCapabilities())
      .then(capabilities=>{this.fillSuggestionsOfCapabilities(capabilities);
      console.debug('SuggestionsService is initialized!')});
  }
  waitForInitialization():Promise<any>{
    return this.initialized;
  }

  fillSuggestionsOfRequirements(requirements:RequirementModel[]){
    this.labels = new Map();
    let currentLabels:Map<string, string[]>;

    for(const req of requirements){
      currentLabels = this.evalService.getLabelsOfRequirement(req);
      for(const entry of currentLabels.entries()){
        if(!this.labels.has(entry[0])){//the capability name is new
          this.labels.set(entry[0], entry[1]);
        }
        else {//the capability name is existing, check if there are new properties
          const existingProps: string[] = this.labels.get(entry[0]);
          for (const prop of entry[1]) {
            if (existingProps.indexOf(prop) < 0) {//this property is new, add it!
              existingProps.push(prop);
            }
          }
        }
      }

    }
  }

  fillSuggestionsOfCapabilities(capabilities:CapabilityModel[]){
    let currentPropsNames:string[];
    for(const cap of capabilities){
      if(!this.labels.has(cap.name)){//the capability is new, add it and all of its properties
        currentPropsNames = [];
        currentPropsNames.push(...cap.properties.keys());
        this.labels.set(cap.name, currentPropsNames);
      }
      else{//capability is existing
        currentPropsNames = this.labels.get(cap.name);
        for(const propName of cap.properties.keys()){
          if(currentPropsNames.indexOf(propName) < 0){//the property is new, add it!
            currentPropsNames.push(propName);
          }
        }
      }
    }

  }
  getSuggestionsForCapabilityName(query: string): Promise<string[]> {
    return new Promise<string[]>(resolve =>
    {
      const allCapNames:string[] = [];
      allCapNames.push(...this.labels.keys());
      const result:string[] = SuggestionsService.filterNames(allCapNames, query);
      resolve(result);
    });
  }

  getSuggestionsForPropertyName(query: string, capabilityName:string): Promise<string[]>{
    return new Promise<string[]>(resolve =>
    {
      const allPropNames:string[] = [];
      allPropNames.push(...this.labels.get(capabilityName));
      const result:string[] = SuggestionsService.filterNames(allPropNames, query);
      resolve(result);
    });
  }

  static filterNames(allNames:string[], query:string):string[]{
    let result:string[];
    if(query) {
      result = [];

      for (const name of allNames) {
        if (name.indexOf(query) >= 0) {
          result.push(name);
        }
      }
    }
    else {
      result = allNames;
    }

    return result.sort();
  }
}
