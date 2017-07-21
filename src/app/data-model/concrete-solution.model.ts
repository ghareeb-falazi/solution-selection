import {CapabilityModel} from "./capability.model";
import {RequirementModel} from "./requirement.model";


export class ConcreteSolutionModel {
  uri: string;
  description: string;
  requirements: RequirementModel[];
  capabilities: CapabilityModel[];
  metadata:Map<string, string>;
  implementedPatternUri:string;

  constructor(uri: string, description: string, requirements: RequirementModel[], capabilities: CapabilityModel[],
              metadata:Map<string, string>, implementedPattern:string)
  {
    this.uri = uri;
    this.description = description;
    this.requirements = requirements;
    this.capabilities = capabilities;
    this.metadata = metadata;
    this.implementedPatternUri = implementedPattern;
    //this.implementedPatternsList = this.implementedPatternsUris.join(',');
  }

  static fromData(data:ConcreteSolutionModel):ConcreteSolutionModel{
    let reqs:RequirementModel[] = [];
    let caps:CapabilityModel[] = [];

    for(let i = 0; i < data.capabilities.length; i++){
      caps.push(CapabilityModel.fromData(data.capabilities[i]));
    }

    for(let i = 0; i < data.requirements.length; i++){
      reqs.push(RequirementModel.fromData(data.requirements[i]));
    }

    return new ConcreteSolutionModel(data.uri, data.description, reqs, caps, data.metadata, data.implementedPatternUri);
  }

}
