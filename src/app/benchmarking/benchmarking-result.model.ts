import {BenchmarkingInputModel} from './benchmarking-input.model';


export class BenchmarkingResultModel extends BenchmarkingInputModel {
  totalAverageTime: number;
  phase1AverageTime: number;
  phase2AverageTime: number;
}
