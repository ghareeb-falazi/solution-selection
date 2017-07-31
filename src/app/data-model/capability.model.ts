import {LabelModel} from "./label.model";


export class CapabilityModel{

  constructor(public name:LabelModel, public properties:Map<string,string>){
  }

  static fromData(data:CapabilityModel):CapabilityModel {
    const copyProp = new Map<string, string>();

    for(const key of data.properties.keys()){
      copyProp.set(key, data.properties.get(key));
    }

    const result:CapabilityModel =  new CapabilityModel(LabelModel.fromData(data.name), copyProp );

    return result;
  }
}
