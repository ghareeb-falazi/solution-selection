import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {PatternRepositoryService} from "../core/pattern-repository/pattern-repository.service";


/**
 * Created by falazigb on 06-Aug-17.
 */
@Component({
  selector: 'pattern-selector',
  templateUrl: './pattern-selector.component.html'
})

export class PatternSelectorComponent implements OnInit{
  public list1:string[] = [];
  public list2:string[] = [];
  @Output() patternsSelectedEvent:EventEmitter<string[]> = new EventEmitter();
  @Output() patternsUnselectedEvent:EventEmitter<string[]> = new EventEmitter();

  constructor(private patternRepoService:PatternRepositoryService){

  }

  ngOnInit(): void {
    this.patternRepoService.waitForInitialization().then(
      ()=>{
        this.patternRepoService.allPatterns.forEach(pattern=>this.list1.push(pattern.name));
        //this.list1 = this.patternRepoService.allPatterns;
      });

  }

  selectPatterns(patternNames:string[], isSelected:boolean):void{
    for(const patternName of patternNames) {
      if (isSelected && this.list2.indexOf(patternName) < 0) {
        this.list2.push(patternName);
        this.list1.splice(this.list1.indexOf(patternName), 1);
      } else if (!isSelected && this.list2.indexOf(patternName) >= 0) {
        this.list2.splice(this.list2.indexOf(patternName), 1);
        this.list1.push(patternName);
      }
    }
  }

  isPatternSelected(patternName:string):boolean{
    console.debug(`checking if ${patternName} i in list2`);
    console.debug(this.list2);
    console.debug(this.list1);
    return this.list2.indexOf(patternName) >= 0;
  }

  onPatternsMovedRight(event){
    console.debug('onPatternsMovedRight');
    console.debug(event);
    this.patternsSelectedEvent.emit(event.items);
  }

  onPatternsMovedLeft(event){
    console.debug('onPattersnMovedLeft');
    console.debug(event);
    this.patternsUnselectedEvent.emit(event.items);
  }



}
