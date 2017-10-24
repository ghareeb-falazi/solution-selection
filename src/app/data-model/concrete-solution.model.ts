import {CapabilityInterface, CapabilityModel} from './capability.model';
import {RequirementModel} from './requirement.model';

/**
 * An interface to describe JSON-deserialized concrete solution objects
 */
export interface ConcreteSolutionInterface {
  uri: string;
  description: string;
  requirements: RequirementModel[];
  capabilities: CapabilityInterface[];
}

/**
 * Represents a concrete solution (uris for the actual artifacts are omitted)
 */
export class ConcreteSolutionModel {
  uri: string;
  description: string;
  requirements: RequirementModel[];
  capabilities: CapabilityModel[];
  /**
   * Parses a JSON-deserialized concrete solution
   * @param {ConcreteSolutionInterface} data JSON-deserialized object
   * @returns {ConcreteSolutionInterface} a parsed concrete implementation of the given JSON-deserialized object
   */
  static fromData(data: ConcreteSolutionInterface): ConcreteSolutionModel {
    const reqs: RequirementModel[] = [];
    const caps: CapabilityModel[] = [];

    for (let i = 0; i < data.capabilities.length; i++) {
      caps.push(CapabilityModel.fromData(data.capabilities[i]));
    }

    for (let i = 0; i < data.requirements.length; i++) {
      reqs.push(RequirementModel.fromData(data.requirements[i]));
    }

    return new ConcreteSolutionModel(data.uri, data.description, reqs, caps);
  }
  constructor(uri: string, description: string, requirements: RequirementModel[], capabilities: CapabilityModel[]) {
    this.uri = uri;
    this.description = description;
    this.requirements = requirements;
    this.capabilities = capabilities;
    // this.implementedPatternsList = this.implementedPatternsUris.join(',');
  }



  /**
   * Gets the name of the pattern that this concrete solution implements
   * @returns {string} the pattern that this concrete solution implements
   */
  getImplementedPattern(): string {
    for (const cap of this.capabilities){
      if (cap.name === 'implements') {
        return cap.properties.get('value');
      }
    }

    return null;
  }
}
