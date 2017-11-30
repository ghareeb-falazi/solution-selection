import {Component} from '@angular/core';
import {BenchmarkingSolutionSelectorService} from './benchmarking-solution-selector.service';
import {PapaParseService} from 'ngx-papaparse';
import {BenchmarkingInputModel} from './benchmarking-input.model';
import {isNullOrUndefined} from 'util';
import {saveAs} from 'file-saver/FileSaver';
import {isNumeric} from 'rxjs/util/isNumeric';


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
  inputSuite: BenchmarkingInputModel[] = null;
  inputCSVFileName: string = null;
  benchType = 0;

  constructor(private service: BenchmarkingSolutionSelectorService, private papa: PapaParseService) {

  }

  /**
   * Handles the event when the user click on the 'browse' button
   * Loads initial properties from a file.
   * @param event
   */
  myUploader(event): void {
    const COL_SOLUTIONS_PER_PATTERN = 0;
    const COL_PATTERNS_PER_PATH = 1;
    const COL_REPETITIONS = 2;
    this.papa.parse(event.files[0], {
      complete: (results, file) => {
        this.inputCSVFileName = event.files[0].name;
        const result: BenchmarkingInputModel[] = [];
        let currentInputModel: BenchmarkingInputModel = null;

        for (let i = 1; i < results.data.length; i++) { // Skipping csv header
          if (isNumeric(results.data[i][COL_SOLUTIONS_PER_PATTERN]) && isNumeric(results.data[i][COL_PATTERNS_PER_PATH]) &&
            results.data[i][COL_REPETITIONS]) {
            currentInputModel = new BenchmarkingInputModel();
            currentInputModel.concreteSolutionsPerPattern = results.data[i][COL_SOLUTIONS_PER_PATTERN];
            currentInputModel.solutionPathLength = results.data[i][COL_PATTERNS_PER_PATH];
            currentInputModel.numberOfRepetitions = results.data[i][COL_REPETITIONS];

            result.push(currentInputModel);
          }
        }

        this.inputSuite = result;
        console.log(this.inputSuite);
      },
      dynamicTyping: true
    });
  }

  handleChange(e): void {
    this.benchType = e.index;
  }

  handleExecuteClick(): void {
    if (this.benchType === 1) {
      if (!isNullOrUndefined(this.inputSuite)) {
        this.executeSuit();
      } else {
        console.error('No suite file is specified');
      }
    } else if (this.benchType === 0) {
      this.executeBenchmark();
    }
  }

  executeSuit(): void {

    this.service.executeSuite(this.inputSuite).then(result => {
      const csv = this.papa.unparse(result);
      const blob = new Blob([csv], {type: 'text/plain'});
      const filename = 'benchmark-result.csv';
      saveAs(blob, filename);
      this.isExecuting = false;
    });

    this.isExecuting = true;
  }

  executeBenchmark(): void {
    const input = new BenchmarkingInputModel();
    input.numberOfRepetitions = this.repetitions;
    input.concreteSolutionsPerPattern = this.csPerPattern;
    input.solutionPathLength = this.patternsCount;

    this.service.executeBenchmark(input).then(result => {

      this.executionTime = Math.round(result.totalAverageTime);
      this.phase1 = Math.round(result.phase1AverageTime);
      this.phase2 = Math.round(result.phase2AverageTime);

      this.isExecuting = false;
    });

    this.isExecuting = true;
  }

}
