import {Capability} from "./Capability";
import {Requirement} from "./Requirement";


export class ConcreteSolution {
  uri: string;
  description: string;
  requirements: Requirement[];
  capabilities: Capability[];
  metadata:Map<string, string>;
  implementedPatternUri:string;

  constructor(uri: string, description: string, requirements: Requirement[], capabilities: Capability[],
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

  static fromData(data:ConcreteSolution):ConcreteSolution{
    let reqs:Requirement[] = [];
    let caps:Capability[] = [];

    for(let i = 0; i < data.capabilities.length; i++){
      caps.push(Capability.fromData(data.capabilities[i]));
    }

    for(let i = 0; i < data.requirements.length; i++){
      reqs.push(Requirement.fromData(data.requirements[i]));
    }

    return new ConcreteSolution(data.uri, data.description, reqs, caps, data.metadata, data.implementedPatternUri);
  }

}
