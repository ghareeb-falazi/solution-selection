import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PatternRepositoryService} from '../core/pattern-repository/pattern-repository.service';


/**
 * The component used to pick patterns for the solution path from a list of all potential patterns
 */
@Component({
  selector: 'app-pattern-selector',
  templateUrl: './pattern-selector.component.html'
})

export class PatternSelectorComponent implements OnInit {
  /**
   * The list of all not-yet-selected pattern names
   * @type {Array}
   */
  public list1: string[] = [];
  /**
   * The list of all selected pattern names
   * @type {Array}
   */
  public list2: string[] = [];
  @Output() patternsSelectedEvent: EventEmitter<string[]> = new EventEmitter();
  @Output() patternsUnselectedEvent: EventEmitter<string[]> = new EventEmitter();

  constructor(private patternRepoService: PatternRepositoryService) {

  }

  ngOnInit(): void {
    this.patternRepoService.waitForInitialization().then(
      () => {
        this.patternRepoService.allPatterns.forEach(pattern => this.list1.push(pattern.name));
        // this.list1 = this.patternRepoService.allPatterns;
      });

  }

  selectPatterns(patternNames: string[], isSelected: boolean): void {
    for (const patternName of patternNames) {
      if (isSelected && this.list2.indexOf(patternName) < 0) {
        this.list2.push(patternName);
        this.list1.splice(this.list1.indexOf(patternName), 1);
      } else if (!isSelected && this.list2.indexOf(patternName) >= 0) {
        this.list2.splice(this.list2.indexOf(patternName), 1);
        this.list1.push(patternName);
      }
    }
  }


  onPatternsMovedRight(event) {;
    this.patternsSelectedEvent.emit(event.items);
  }

  onPatternsMovedLeft(event) {
    this.patternsUnselectedEvent.emit(event.items);
  }



}
