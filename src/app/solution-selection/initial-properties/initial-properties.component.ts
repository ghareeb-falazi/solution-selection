import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CapabilityInterface, CapabilityModel} from '../../data-model/capability.model';
import {InitialPropertyComponent} from 'app/solution-selection/initial-properties/initial-property/initial-component.component';
import {isNullOrUndefined} from 'util';
import {SuggestionsService} from '../../core/suggestions/suggestions.service';

/**
 * A component that represents the set of all initial properties
 */
@Component({
  selector: 'app-caps',
  templateUrl: './initial-properties.component.html'
})

export class InitialPropertiesComponent implements OnInit {
  /**
   * Child components representing initial properties
   */
  @ViewChildren(InitialPropertyComponent)
  capabilityComponents: QueryList<InitialPropertyComponent>;
  /**
   * The set of all initial properties
   * @type {Array}
   */
  capabilities: CapabilityModel[] = [];

  /**
   * The name of the initial capability currently entered by the user
   */
  capNameQuery: string;
  /**
   * The set of suggestions for the current initial property name
   */
  suggestions: any[];

  constructor(private suggestionsService: SuggestionsService) {

  }

  ngOnInit(): void {
    this.suggestionsService.waitForInitialization()
      .then();
  }

  /**
   * Handles the event when the user click on the 'browse' button
   * Loads initial properties from a file.
   * @param event
   */
  myUploader(event): void {

    const reader: FileReader = new FileReader();
    reader.onload = file => {
      const unParsed: CapabilityInterface[] = JSON.parse((file.target as any).result) as CapabilityInterface[];

      for (const cap of unParsed){
        this.addCapabilityWithProperties(CapabilityModel.fromData(cap));
      }

    };
    reader.readAsText(event.files[0]);
  }

  /**
   * Search for suggestions for the currently entered initial property name
   */
  searchForSuggestions(): void {
    this.suggestionsService.getSuggestionsForCapabilityName( this.capNameQuery)
      .then(result => {this.suggestions = result; });
  }

  /**
   * Handles the event when the user clicks on the dropdown arrow
   */
  handleDropdown() {
    // mimic remote call, otherwise the dropdown doesn't show
    this.suggestionsService.getSuggestionsForCapabilityName(null)
      .then(result => {
      setTimeout(()  => {
              this.suggestions = result;
          }, 100);
        });

  }

  /**
   * Handles the event when the user clikcs on the add initial property button
   * @param {string} label
   */
  addCapability(label: string): void {
    if (!isNullOrUndefined(label) && label.length > 0) {
      const capability: CapabilityModel = new CapabilityModel(label, new Map<string, string>());
      this.capabilities.push(capability);

      this.capNameQuery = '';
    }

  }

  /**
   * Adds an initial property read from a JSON file
   * @param {CapabilityModel} capability
   */
  addCapabilityWithProperties(capability: CapabilityModel) {
    this.capabilities.push(capability);
  }

  /**
   * Handles the event raised when clicking on the remove initial property button
   * @param {number} index
   */
  removeCapability(index: number): void {
    this.capabilities.splice(index, 1);
  }

  /**
   * Gets the set of all entered initial properties
   * @returns {CapabilityModel[]}
   */
  getCapabilities(): CapabilityModel[] {
    const result: CapabilityModel[] = [];
    this.capabilityComponents.forEach(cap => result.push(cap.getCapability()));

    return result;
  }


}
