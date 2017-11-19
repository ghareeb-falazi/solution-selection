import {Component, Input, OnInit} from '@angular/core';
import {CapabilityModel} from '../../../data-model/capability.model';
import {SuggestionsService} from '../../../core/suggestions/suggestions.service';

/**
 * A component that represents a single initial property
 */
@Component({
  selector: 'app-capa',
  templateUrl: './initial-property.component.html'
})
export class InitialPropertyComponent implements OnInit {
  /**
   * the name of the property being typed by the user
   */
  propNameQuery: string;
  /**
   * The value in the "value" field
   */
  newValueInput: string;
  /**
   * The set of suggestions for the current property name
   */
  suggestions: any[];
  /**
   * The set of properties for this initial property
   * @type {Array}
   */
  properties: [string, string][] = [];

  /**
   * The model-object created based on this component
   */
  @Input()
  capability: CapabilityModel;

  constructor(private suggestionsService: SuggestionsService) {

  }

  ngOnInit(): void {
    this.suggestionsService.waitForInitialization()
      .then();

    this.properties = Array.from(this.capability.properties.entries());

  }

  /**
   * Search for suggestions for the property name being typed
   */
  searchForSuggestions(): void {
    this.suggestionsService.getSuggestionsForPropertyName(this.propNameQuery, this.capability.name)
      .then(result => {
        this.suggestions = result;
      });
  }

  /**
   * finds the index of a property based on its label
   * @param {string} label
   * @returns {number}
   */
  private findPropertyByLabel(label: string): number {
    let index: number = -1;

    for (let i = 0; i < this.properties.length; i++) {
      if (this.properties[i][0] === label) {
        index = i;
        break;
      }

      return index;
    }
  }

  /**
   * Handles the event when the user clicks on the dropdown arrow
   */
  handleDropdown() {
    // mimic remote call, otherwise the dropdown doesn't show
    this.suggestionsService.getSuggestionsForPropertyName(null, this.capability.name)
      .then(result => {
        setTimeout(() => {
          this.suggestions = result;
        }, 100);
      });

  }

  /**
   * Handles the event when the user clicks on the add property button
   * @param {string} label
   * @param {string} value
   */
  addProperty(label: string, value: string): void {
    if (this.capability.properties.has(label)) {
      console.error(`The property: ${label} already exists in the current capability!`);
    } else {
      this.capability.properties.set(label, value);
      this.properties.push([label, value]);

      this.newValueInput = '';
      this.propNameQuery = '';
    }


  }

  /**
   * Handles the event when the user clicks on the remove property button
   * @param {string} label
   */
  removeProperty(label: string): void {
    if (this.capability.properties.has(label)) {
      this.capability.properties.delete(label);
      const index = this.findPropertyByLabel(label);
      this.properties.splice(index, 1);
    } else {
      console.error(`The label: ${label} is not found in the properties. Nothing is deleted!`);
    }
  }

  /**
   * Returns a capability that represents the current initial property
   * @returns {CapabilityModel}
   */
  getCapability(): CapabilityModel {
    this.capability.properties = new Map(this.properties);
    return this.capability;
  }

}
