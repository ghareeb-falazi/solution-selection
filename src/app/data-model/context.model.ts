import {LabelModel} from "./label.model";
import {CapabilityModel} from "./capability.model";

export class ContextModel{
  initialProperties:LabelModel[];
  capabilities:CapabilityModel[];

  constructor(initialProperties:LabelModel[], capabilities:CapabilityModel[])
  {
    this.initialProperties = initialProperties;
    this.capabilities = capabilities;
  }

  static fromData(data:ContextModel):ContextModel {
    let initProps:LabelModel[] = [];
    let caps:CapabilityModel[] = [];

    for(let i = 0; i <data.initialProperties.length;i++)
    {
      initProps.push(LabelModel.fromData(data.initialProperties[i]));
    }

    for(let i = 0; i <data.capabilities.length;i++)
    {
      caps.push(CapabilityModel.fromData(data.capabilities[i]));
    }

    return new ContextModel(initProps, caps);
  }

}
