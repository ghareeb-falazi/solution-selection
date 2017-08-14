import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {CapabilityModel} from "./data-model/capability.model";
import {CapabilityComponent} from "app/capability.component";
import {isNullOrUndefined} from "util";
import {SuggestionsService} from "./suggestions/suggestions.service";

/**
 * Created by falazigb on 08-Aug-17.
 */
@Component({
  selector: 'caps',
  templateUrl: './capabilities.component.html',
  providers: [SuggestionsService]
})

export class CapabilitiesComponent implements OnInit{
  ngOnInit(): void {
    this.suggestionsService.waitForInitialization()
      .then();
  }

  @ViewChildren(CapabilityComponent)
  capabilityComponents:QueryList<CapabilityComponent>;
  capabilities:string[] = [];

  capNameQuery:string;
  suggestions:any[];

  constructor(private suggestionsService:SuggestionsService){

  }

  searchForSuggestions():void{
    this.suggestionsService.getSuggestionsForCapabilityName( this.capNameQuery)
      .then(result=>{this.suggestions = result;});
  }

  handleDropdown(){
    //mimic remote call, otherwise the dropdown doesn't show
    this.suggestionsService.getSuggestionsForCapabilityName(null)
      .then(result => {
      setTimeout(()  => {
              this.suggestions = result;
          },100);
        });

  }
  addCapability(label:string):void{
    if(!isNullOrUndefined(label) && label.length > 0)
      this.capabilities.push(label);
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
