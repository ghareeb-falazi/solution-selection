import {Component, OnInit} from "@angular/core";
import {ConcreteSolutionRepositoryService} from "./concrete-solution-repository/concrete-solution-repository.service";
/**
 * Created by falazigb on 06-Aug-17.
 */
@Component({
  selector: 'pattern-selector',
  templateUrl: './pattern-selector.component.html',
  providers:[ConcreteSolutionRepositoryService]
})

export class PatternSelectorComponent implements OnInit{
  public list1:string[] = [];
  public list2:string[] = [];

  constructor(private concreteSolutionService:ConcreteSolutionRepositoryService){

  }

  ngOnInit(): void {
    this.concreteSolutionService.initialize().then(
      param=>{this.list1 = this.concreteSolutionService.getAllImplementedPatterns();});

  }



}
