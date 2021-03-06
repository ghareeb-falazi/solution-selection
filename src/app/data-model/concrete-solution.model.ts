import {CapabilityInterface, CapabilityModel} from './capability.model';
import {RequirementModel} from './requirement.model';

/**
 * An interface to describe JSON-deserialized concrete solution objects
 */
export interface ConcreteSolutionInterface {
  uri: string;
  visualName: string;
  description: string;
  requirements: RequirementModel[];
  capabilities: CapabilityInterface[];
}

/**
 * Represents a concrete solution (uris for the actual artifacts are omitted)
 */
export class ConcreteSolutionModel implements  ConcreteSolutionInterface {
  uri: string;
  visualName: string;
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

    return new ConcreteSolutionModel(data.uri, data.visualName, data.description, reqs, caps);
  }
  constructor(uri: string, visualName: string, description: string, requirements: RequirementModel[], capabilities: CapabilityModel[]) {
    this.uri = uri;
    this.visualName = visualName;
    this.description = description;
    this.requirements = requirements;
    this.capabilities = capabilities;
  }

  public toString(): string {
    return this.uri;
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
