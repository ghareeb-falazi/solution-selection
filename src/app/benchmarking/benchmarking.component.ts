import { Component } from '@angular/core';
import {BenchmarkingSolutionSelectorService} from './benchmarking-solution-selector.service';

@Component({
  templateUrl: './benchmarking.component.html',
  styleUrls: ['./benchmarking.component.css']
})
export class BenchmarkingComponent {
  phase1 = 0;
  phase2 = 0;
  executionTime = 0;
  patternsCount = 1;
  csPerPattern = 1;
  isExecuting = false;
  repetitions = 1;

  constructor(private service: BenchmarkingSolutionSelectorService) {

  }

  /**
   * Handles the event when the user click on the 'browse' button
   * Loads initial properties from a file.
   * @param event
   */
  myUploader(event): void {

    const reader: FileReader = new FileReader();
    reader.onload = file => {
      const unParsed: CapabilityInterface[] = (file.target as any).result)

      for (const cap of unParsed){
        this.addCapabilityWithProperties(CapabilityModel.fromData(cap));
      }

    };
    reader.readAsText(event.files[0]);
  }

  executeBenchmark(): void {
    this.service.executeBenchmark(this.repetitions, this.csPerPattern, this.patternsCount).then(result => {

        this.executionTime = Math.round(result[0]);
        this.phase1 = Math.round(result[1]);
        this.phase2 = Math.round(result[2]);
        this.isExecuting = false;
      });

    this.isExecuting = true;
  }

}
