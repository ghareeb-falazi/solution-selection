import {LabelModel} from "./label.model";


export class CapabilityModel{
  label: LabelModel;

  constructor(label:LabelModel){
    this.label = label;
  }

  static fromData(data:CapabilityModel):CapabilityModel {
    return new CapabilityModel(LabelModel.fromData(data.label));
  }
}
