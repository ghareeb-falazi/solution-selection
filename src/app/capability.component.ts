import {Component, Input, OnInit} from "@angular/core";
import {CapabilityModel} from "./data-model/capability.model";
import {SuggestionsService} from "./suggestions/suggestions.service";

/**
 * Created by falazigb on 06-Aug-17.
 */
@Component({
  selector: 'capa',
  templateUrl: './capability.component.html'
})

export class CapabilityComponent implements OnInit {
  propNameQuery: string;
  newValueInput: string;
  suggestions: any[];
  properties:[string, string][] = [];

  @Input()
  capability: CapabilityModel;

  constructor(private suggestionsService: SuggestionsService) {

  }

  ngOnInit(): void {
    this.suggestionsService.waitForInitialization()
      .then();

    this.properties = Array.from(this.capability.properties.entries());

  }

  searchForSuggestions(): void {
    console.debug(`inside search for suggestions ${this.propNameQuery},${this.capability.name}`);
    this.suggestionsService.getSuggestionsForPropertyName(this.propNameQuery, this.capability.name)
      .then(result => {
        this.suggestions = result;
      });
  }

  private findPropertyByLabel(label:string):number{
    let index:number = -1;

    for(let i = 0; i < this.properties.length; i++){
      if(this.properties[i][0] === label){
        index = i;
        break;
      }

      return index;
    }
  }

  handleDropdown() {
    //mimic remote call, otherwise the dropdown doesn't show
    this.suggestionsService.getSuggestionsForPropertyName(null, this.capability.name)
      .then(result => {
        setTimeout(() => {
          this.suggestions = result;
        }, 100);
      });

  }



  addProperty(label: string, value: string): void {
    if (this.capability.properties.has(label))
      console.error(`The property: ${label} already exists in the current capability!`);
    else {
      this.capability.properties.set(label, value);
      this.properties.push([label, value]);

      this.newValueInput = '';
      this.propNameQuery = '';
    }


  }

  removeProperty(label: string): void {
    if (this.capability.properties.has(label)){
      this.capability.properties.delete(label);
      const index = this.findPropertyByLabel(label);
      this.properties.splice(index, 1);
    }
    else {
      console.error(`The label: ${label} is not found in the properties. Nothing is deleted!`);
    }
  }

  getCapability(): CapabilityModel {
    this.capability.properties = new Map(this.properties);
    return this.capability;
  }

}
