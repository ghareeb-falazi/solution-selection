import {Component, QueryList, ViewChildren} from "@angular/core";
import {CapabilityModel} from "./data-model/capability.model";
import {CapabilityComponent} from "app/capability.component";

/**
 * Created by falazigb on 08-Aug-17.
 */
@Component({
  selector: 'caps',
  templateUrl: './capabilities.component.html'
})

export class CapabilitiesComponent {
  @ViewChildren(CapabilityComponent)
  capabilityComponents:QueryList<CapabilityComponent>;

  capabilities:void[] = [];

  addCapability():void{
    this.capabilities.push(null);
  }

  removeCapability(index:number):void{
    this.capabilities.splice(index, 1);
  }

  getCapabilities():CapabilityModel[]{
    const result:CapabilityModel[] = [];
    this.capabilityComponents.forEach(cap=>result.push(cap.getCapability()));

    return result;
  }




}
