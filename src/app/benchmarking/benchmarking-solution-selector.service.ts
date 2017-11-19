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

  private static initialPatternNames(solutionLength?: number, solutionPath?: string[]): string[] {
    let patternNames: string[] = null;

    if (!isNullOrUndefined(solutionLength) && !isNullOrUndefined(solutionPath)) {
      console.error('Cannot specify both the number of patterns and the patterns themselves for the solution path!');
      throw new Error();
    } else {
      if (!isNullOrUndefined(solutionPath)) {
        patternNames = solutionPath;
      } else if (!isNullOrUndefined(solutionLength)) {
        patternNames = BenchmarkingSolutionSelectorService.createSolutionPath(solutionLength);
      } else {
        console.error('You must specify the patterns of the solution path or their number');
        throw new Error();
      }

      return patternNames;
    }
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

  public executeBenchmark(repetitions: number, csPerPattern: number, solutionLength ?: number, solutionPath ?: string[]):
  Promise<number[]> {
    return new Promise<number []>((resolve) => {

      let totalAccum = 0;
      let totalPhase1 = 0;
      let totalPhase2 = 0;
      let start;
      const patternNames = BenchmarkingSolutionSelectorService.initialPatternNames(solutionLength, solutionPath);
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

        resolve([totalAccum / repetitions, totalPhase1 / repetitions, totalPhase2 / repetitions]);
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




