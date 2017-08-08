import {CapabilityModel} from "./capability.model";


export class ContextModel{
  initialCapabilities:CapabilityModel[];
  solutionCapabilities:CapabilityModel[];

  constructor(initialProperties:CapabilityModel[], capabilities:CapabilityModel[])
  {
    this.initialCapabilities = initialProperties;
    this.solutionCapabilities = capabilities;
  }

  getAllCapabilities():CapabilityModel[]{
    const result:CapabilityModel[] = [];
    result.push(...this.initialCapabilities);
    result.push(...this.solutionCapabilities);

    return result;

  }





}
