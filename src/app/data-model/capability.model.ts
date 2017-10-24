import 'core-js/library';

/**
 * An interface to describe JSON-deserialized capability objects
 */
export interface CapabilityInterface {
  name: string;
  properties: any;
}

/**
 * Represents a concrete solution capability
 */
export class CapabilityModel {
  /**
   * Parses a JSON-deserialized capability
   * @param {CapabilityInterface} data JSON-deserialized object
   * @returns {CapabilityInterface} a parsed concrete implementation of the given JSON-deserialized object
   */
  static fromData(data: CapabilityInterface): CapabilityModel {
    const copyProp = new Map<string, string>();

    for (const pair of Object.entries(data.properties)){
      copyProp.set(pair[0], pair[1]);
    }

    return new CapabilityModel(data.name, copyProp);
  }
  /**
   * Initializes a new instance of the CapabilityModel class
   * @param {string} name the programmatic name of the capability
   * @param {Map<string, string>} properties key-value pairs representing the properties of the capability
   */
  constructor(public name: string, public properties: Map<string, string>) {
  }

  /**
   * Creates a string-representation of the properties of this capability
   * @returns {string} a string-representation of the properties of this capability
   */
  propertiesAsString(): string {
    let result = '';

    for (const prop of this.properties.entries()){
      result += `${prop[0]} = ${prop[1]}\t`;
    }

    return result;
  }


}
