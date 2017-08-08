
export interface CapabilityInterface{
  properties: [string,string][];
}


export class CapabilityModel{

  constructor(public properties:Map<string,string>){
  }


  static fromData(data:CapabilityInterface):CapabilityModel {
    const copyProp = new Map<string, string>();

    for(let pair of data.properties){
      copyProp.set(pair[0], pair[1]);
    }

    const result:CapabilityModel =  new CapabilityModel( copyProp );

    return result;
  }
}
