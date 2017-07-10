import {Label} from "./Label";


export class Capability{
  label: Label;

  constructor(label:Label){
    this.label = label;
  }

  static fromData(data:Capability):Capability {
    return new Capability(Label.fromData(data.label));
  }
}
