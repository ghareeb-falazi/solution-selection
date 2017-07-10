import {Label} from "./Label";
import {Capability} from "./Capability";

export class Context{
  initialProperties:Label[];
  capabilities:Capability[];

  constructor(initialProperties:Label[], capabilities:Capability[])
  {
    this.initialProperties = initialProperties;
    this.capabilities = capabilities;
  }

  static fromData(data:Context):Context {
    let initProps:Label[] = [];
    let caps:Capability[] = [];

    for(let i = 0; i <data.initialProperties.length;i++)
    {
      initProps.push(Label.fromData(data.initialProperties[i]));
    }

    for(let i = 0; i <data.capabilities.length;i++)
    {
      caps.push(Capability.fromData(data.capabilities[i]));
    }

    return new Context(initProps, caps);
  }

}
