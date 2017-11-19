import {BenchmarkInputModel} from './benchmark-input.model';

export class BenchmarkingResultModel extends BenchmarkInputModel {
  totalAverageTime: number;
  phase1AverageTime: number;
  phase2AverageTime: number;
}
