import "core-js/library";

export interface CapabilityInterface{
  name: string;
  properties: any;
}


export class CapabilityModel{


  constructor(public name:string, public properties:Map<string,string>){
  }

  propertiesAsString():string{
    let result:string = '';

    for(const prop of this.properties.entries()){
      result += `${prop[0]} = ${prop[1]}\t`
    }

    return result;
  }

  static fromData(data:CapabilityInterface):CapabilityModel {
    console.debug(data);
    const copyProp = new Map<string, string>();

    for(let pair of Object.entries(data.properties)){
      copyProp.set(pair[0], pair[1]);
    }

    const result:CapabilityModel =  new CapabilityModel(data.name, copyProp );

    return result;
  }
}
