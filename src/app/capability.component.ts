import {Component, Input} from "@angular/core";
import {CapabilityModel} from "./data-model/capability.model";
/**
 * Created by falazigb on 06-Aug-17.
 */
@Component({
  selector: 'capa',
  templateUrl: './capability.component.html'
})

export class CapabilityComponent {
  properties: [string, string][] = [];

  findLabel(label: string): number {
    let counter = 0;
    let index = -1;
    for (let entry of this.properties) {
      if (entry[0] === label) {
        index = counter;
        break;
      }
      counter++;
    }

    return index;
  }

  addProperty(label: string, value: string): void {
    let index: number = this.findLabel(label);

    if (index >= 0)
      console.error(`The label: ${label} already exists in the current capability!`);
    else
      this.properties.push([label, value]);

  }

  removeProperty(label: string): void {
    let counter = 0;
    let index:number = this.findLabel(label);

    if (index >= 0) {
      this.properties.splice(index, 1);
    }
    else {
      console.error(`The label: ${label} is not found in the properties. Nothing is deleted!`);
    }
  }

  getCapability():CapabilityModel{
    return new CapabilityModel(new Map<string, string>(this.properties));
  }

}
