import {Injectable} from '@angular/core';
import {BasicSolutionSelector} from '../core/solution-selector/basic-solution-selector';
import {AbstractAggregatorRepository} from '../core/aggregator-repository/abstract-aggregator-repository';
import {AbstractConcreteSolutionRepository} from '../core/concrete-solution-repository/abstract-concrete-solution-repository';
import {BenchmarkingAggregatorRepository} from './benchmarking-aggregator-repository';
import {BenchmarkingConcreteSolutionRepository} from './benchmarking-concrete-solution-repository';
import {isNullOrUndefined} from 'util';
import {UserQueryModel} from '../data-model/user-query.model';
import {ConcreteSolutionPathModel} from '../data-model/concrete-solution-path.model';
import {CapabilityModel} from '../data-model/capability.model';
import {BenchmarkingInputModel} from './benchmarking-input.model';
import {BenchmarkingResultModel} from './benchmarking-result.model';

@Injectable()
export class BenchmarkingSolutionSelectorService extends BasicSolutionSelector {
  private static readonly USER_QUERY = '';
  private static readonly PATTERN_NAME = 'P';
  private aggregatorRepository: AbstractAggregatorRepository;
  private concreteSolutionRepository: AbstractConcreteSolutionRepository;
  private phase1Millis: number;
  private phase2Millis: number;

  private static createSolutionPath(length: number): string[] {
    const result = [];

    for (let i = 0; i < length; i++) {
      result.push(`${BenchmarkingSolutionSelectorService.PATTERN_NAME}${i}`);
    }

    return result;
  }

  private static initialPatternNames(solutionLength: number): string[] {
    let patternNames: string[] = null;

    if (!isNullOrUndefined(solutionLength)) {
      patternNames = BenchmarkingSolutionSelectorService.createSolutionPath(solutionLength);
    } else {
      console.error('You must specify the number of patterns of the solution path.');
      throw new Error();
    }

    return patternNames;
  }

  constructor() {
    super();

    this.aggregatorRepository = new BenchmarkingAggregatorRepository();
  }

  protected getAggregatorRepository(): AbstractAggregatorRepository {
    return this.aggregatorRepository;
  }

  protected getConcreteSolutionRepository(): AbstractConcreteSolutionRepository {
    return this.concreteSolutionRepository;
  }

  private executeSingleCase(input: BenchmarkingInputModel): BenchmarkingResultModel {
    const repetitions = input.numberOfRepetitions;
    const csPerPattern = input.concreteSolutionsPerPattern;
    const solutionLength = input.solutionPathLength;

    let totalAccum = 0;
    let totalPhase1 = 0;
    let totalPhase2 = 0;
    let start;
    const patternNames = BenchmarkingSolutionSelectorService.initialPatternNames(solutionLength);
    this.concreteSolutionRepository = new BenchmarkingConcreteSolutionRepository(patternNames, csPerPattern);

    for (let i = 0; i < repetitions; i++) {
      start = performance.now();
      super.selectConcreteSolutions(patternNames, [],
        new UserQueryModel(BenchmarkingSolutionSelectorService.USER_QUERY));
      totalAccum += performance.now() - start;
      totalPhase1 += this.phase1Millis;
      totalPhase2 += this.phase2Millis;
      // console.debug(`the operation took ${result}`);
    }
    const result: BenchmarkingResultModel = new BenchmarkingResultModel();
    result.phase1AverageTime = totalPhase1 / repetitions;
    result.phase2AverageTime = totalPhase2 / repetitions;
    result.totalAverageTime = totalAccum / repetitions;
    result.solutionPathLength = solutionLength;
    result.concreteSolutionsPerPattern = csPerPattern;
    result.numberOfRepetitions = repetitions;

    return result;
  }

  public executeBenchmark(input: BenchmarkingInputModel): Promise<BenchmarkingResultModel> {
    return Promise.resolve(this.executeSingleCase(input));
  }

  public executeSuite(inputs: BenchmarkingInputModel[]): Promise<BenchmarkingResultModel[]> {
    return Promise.resolve().then(
      () => {
        const result: BenchmarkingResultModel[] = [];

        for (const input of inputs) {
          result.push(this.executeSingleCase(input));
        }

        return result;
      }
    );

  }

  protected phase1(patternPath: string[]): ConcreteSolutionPathModel[] {
    const start = performance.now();
    const result = super.phase1(patternPath);
    this.phase1Millis = performance.now() - start;

    return result;
  }

  protected phase2(solutionPaths: ConcreteSolutionPathModel[], initialProperties: CapabilityModel[],
                   userQuery: UserQueryModel): ConcreteSolutionPathModel[] {
    const start = performance.now();
    const result = super.phase2(solutionPaths, initialProperties, userQuery);
    this.phase2Millis = performance.now() - start;

    return result;
  }
}




