import {Injectable} from "@angular/core";
import {ConcreteSolutionRepositoryService} from "../concrete-solution-repository/concrete-solution-repository.service";
import {ExpressionEvaluatorService} from "../expression-evaluation/expression-evaluator.service";
import {RequirementModel} from "../../data-model/requirement.model";
import {CapabilityModel} from "../../data-model/capability.model";
import {isNullOrUndefined} from "util";

/**
 * A service that provides suggestions for capability names and their properties based on existing capabilities and
 * requirements.
 */
@Injectable()
export class SuggestionsService {
  /**
   * Stores already known capability names and their properties
   */
  private labels: Map<string, string[]>;
  /**
   * Used to indicate that service initialization is done
   */
  private initialized: Promise<any>;

  /**
   * Initializes a new instance of the service
   * @param {ConcreteSolutionRepositoryService} repoService
   */
  constructor(private repoService: ConcreteSolutionRepositoryService) {
    this.initialized = this.initialize();
  }

  /**
   * Fills the set of known capability names and their properties
   * @returns {Promise<any>} a Promise that gets resolved when initialization is done.
   */
  private initialize(): Promise<any> {
    return this.repoService.waitForInitialization()
      .then(() => {
        if (!this.labels) {
          return this.repoService.getAllRequirements();
        }
      })
      .then(requirements => this.fillSuggestionsOfRequirements(requirements))
      .then(() => this.repoService.getAllCapabilities())
      .then(capabilities => {
        this.fillSuggestionsOfCapabilities(capabilities);
        console.debug('SuggestionsService is initialized!')
      });
  }

  /**
   * Returns a Promise that gets resolved when the initialization process is done.
   * @returns {Promise<any>} a Promise that gets resolved when the initialization process is done.
   */
  waitForInitialization(): Promise<any> {
    return this.initialized;
  }

  /**
   * Generates suggestions by analyzing existing requirements looking for capability names and property names.
   * @param {RequirementModel[]} requirements the set of requirements to analyze.
   */
  private fillSuggestionsOfRequirements(requirements: RequirementModel[]) {
    this.labels = new Map();
    let currentLabels: Map<string, string[]>;
    let expression: string = '';

    requirements.map(item => expression += item.expression + " AND ");
    expression += "TRUE";
    //Create one big expression in order to run the analysis only once
    currentLabels = ExpressionEvaluatorService.getLabelsOfRequirement(new RequirementModel(expression));

    for (const entry of currentLabels.entries()) {
      if (!this.labels.has(entry[0])) {//the capability name is new
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

  /**
   * Uses the existing capabilities to generate suggestions
   * @param {CapabilityModel[]} capabilities
   */
  private fillSuggestionsOfCapabilities(capabilities: CapabilityModel[]) {
    let currentPropsNames: string[];
    for (const cap of capabilities) {
      if (!this.labels.has(cap.name)) {//the capability is new, add it and all of its properties
        currentPropsNames = [];
        currentPropsNames.push(...cap.properties.keys());
        this.labels.set(cap.name, currentPropsNames);
      }
      else {//capability is existing
        currentPropsNames = this.labels.get(cap.name);
        for (const propName of cap.properties.keys()) {
          if (currentPropsNames.indexOf(propName) < 0) {//the property is new, add it!
            currentPropsNames.push(propName);
          }
        }
      }
    }

  }

  /**
   * Gets suggestions for a capability name based on a partially provided name
   * @param {string} query partial capability name
   * @returns {Promise<string[]>} suggestions for capability names
   */
  getSuggestionsForCapabilityName(query: string): Promise<string[]> {
    return new Promise<string[]>(resolve => {
      const allCapNames: string[] = [];
      allCapNames.push(...this.labels.keys());
      const result: string[] = SuggestionsService.filterNames(allCapNames, query);
      resolve(result);
    });
  }

  /**
   * Gets suggestions for property names that correspond to a given capability name and a partial property name
   * @param {string} query partial property name
   * @param {string} capabilityName name of the capability
   * @returns {Promise<string[]>}
   */
  getSuggestionsForPropertyName(query: string, capabilityName: string): Promise<string[]> {
    return new Promise<string[]>(resolve => {
      const allPropNames: string[] = this.labels.get(capabilityName);
      let result: string[];
      if (isNullOrUndefined(allPropNames) || allPropNames.length === 0)
        result = [];
      else
        result = SuggestionsService.filterNames(allPropNames, query);
      resolve(result);
    });
  }

  /**
   * Filters out names that do not begin with the given query. Sorts the results alphabetically
   * @param {string[]} allNames
   * @param {string} query
   * @returns {string[]}
   */
  private static filterNames(allNames: string[], query: string): string[] {
    let result: string[];
    if (query) {
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
