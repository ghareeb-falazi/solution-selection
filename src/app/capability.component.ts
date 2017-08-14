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
  @Input()
  name: string;
  properties: [string, string][] = [];

  propNameQuery: string;
  suggestions: any[];

  constructor(private suggestionsService: SuggestionsService) {

  }

  ngOnInit(): void {
    this.suggestionsService.waitForInitialization()
      .then();

  }

  searchForSuggestions(): void {
    this.suggestionsService.getSuggestionsForPropertyName(this.propNameQuery, this.name)
      .then(result => {
        this.suggestions = result;
      });
  }

  handleDropdown() {
    //mimic remote call, otherwise the dropdown doesn't show
    this.suggestionsService.getSuggestionsForPropertyName(null, this.name)
      .then(result => {
        setTimeout(() => {
          this.suggestions = result;
        }, 100);
      });

  }


  findProperty(label: string): number {
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
    let index: number = this.findProperty(label);

    if (index >= 0)
      console.error(`The property: ${label} already exists in the current capability!`);
    else
      this.properties.push([label, value]);

  }

  removeProperty(label: string): void {
    let index: number = this.findProperty(label);

    if (index >= 0) {
      this.properties.splice(index, 1);
    }
    else {
      console.error(`The label: ${label} is not found in the properties. Nothing is deleted!`);
    }
  }

  getCapability(): CapabilityModel {
    return new CapabilityModel(this.name, new Map<string, string>(this.properties));
  }

}
