import {CapabilityInterface, CapabilityModel} from "./capability.model";
import {RequirementModel} from "./requirement.model";

export interface ConcreteSolutionInterface {
  uri: string;
  description: string;
  requirements: RequirementModel[];
  capabilities: CapabilityInterface[];
}

export class ConcreteSolutionModel {
  uri: string;
  description: string;
  requirements: RequirementModel[];
  capabilities: CapabilityModel[];

  constructor(uri: string, description: string, requirements: RequirementModel[], capabilities: CapabilityModel[]) {
    this.uri = uri;
    this.description = description;
    this.requirements = requirements;
    this.capabilities = capabilities;
    //this.implementedPatternsList = this.implementedPatternsUris.join(',');
  }

  static fromData(data: ConcreteSolutionInterface): ConcreteSolutionModel {
    let reqs: RequirementModel[] = [];
    let caps: CapabilityModel[] = [];

    for (let i = 0; i < data.capabilities.length; i++) {
      caps.push(CapabilityModel.fromData(data.capabilities[i]));
    }

    for (let i = 0; i < data.requirements.length; i++) {
      reqs.push(RequirementModel.fromData(data.requirements[i]));
    }

    return new ConcreteSolutionModel(data.uri, data.description, reqs, caps);
  }

  getImplementedPattern():string {
    for(const cap of this.capabilities){
      if(cap.name==="implements")
        return cap.properties.get("value");
    }

    return null;
  }
}
