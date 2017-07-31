import {CapabilityModel} from "./capability.model";


export class ContextModel{
  initialProperties:Map<string, string>;
  capabilities:CapabilityModel[];

  constructor(initialProperties:Map<string, string>, capabilities:CapabilityModel[])
  {
    this.initialProperties = initialProperties;
    this.capabilities = capabilities;
  }

  static fromData(data:ContextModel):ContextModel {
    let initProps:Map<string, string> = new Map<string, string>();
    let caps:CapabilityModel[] = [];

    for(let prop of data.initialProperties.keys())
    {
      initProps.set(prop, data.initialProperties.get(prop));
    }

    for(let i = 0; i <data.capabilities.length;i++)
    {
      caps.push(CapabilityModel.fromData(data.capabilities[i]));
    }

    return new ContextModel(initProps, caps);
  }

}
