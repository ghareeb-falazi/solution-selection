import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {CapabilityInterface, CapabilityModel} from "../data-model/capability.model";
import {InitialPropertyComponent} from "app/initial-properties/initial-property/initial-component.component";
import {isNullOrUndefined} from "util";
import {SuggestionsService} from "../core/suggestions/suggestions.service";

/**
 * Created by falazigb on 08-Aug-17.
 */
@Component({
  selector: 'caps',
  templateUrl: './initial-properties.component.html'
})

export class InitialPropertiesComponent implements OnInit{
  ngOnInit(): void {
    this.suggestionsService.waitForInitialization()
      .then();
  }

  @ViewChildren(InitialPropertyComponent)
  capabilityComponents:QueryList<InitialPropertyComponent>;
  capabilities:CapabilityModel[] = [];

  capNameQuery:string;
  suggestions:any[];

  constructor(private suggestionsService:SuggestionsService){

  }

  myUploader(event):void{
    //console.debug(event.files[0]);
    const reader:FileReader = new FileReader();
    reader.onload = file => {
      const unParsed:CapabilityInterface[] = JSON.parse((file.target as any).result) as CapabilityInterface[];
      console.debug(unParsed);

      for(const cap of unParsed){
        this.addCapabilityWithProperties(CapabilityModel.fromData(cap));
      }

    };
    reader.readAsText(event.files[0]);
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
    if(!isNullOrUndefined(label) && label.length > 0) {
      const capability:CapabilityModel = new CapabilityModel(label, new Map<string, string>());
      this.capabilities.push(capability);

      this.capNameQuery = '';
    }

  }

  addCapabilityWithProperties(capability:CapabilityModel){
    this.capabilities.push(capability);
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
