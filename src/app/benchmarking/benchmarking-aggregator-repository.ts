import {AbstractAggregatorRepository} from '../core/aggregator-repository/abstract-aggregator-repository';
import {AbstractAggregatorModel} from '../data-model/abstract-aggregator.model';
import {BasicAggregatorModel} from '../data-model/basic-aggregator.model';

export class BenchmarkingAggregatorRepository extends AbstractAggregatorRepository {

  theAggregator = [new BasicAggregatorModel('', '', 'agg')];

  getSuitableAggregators(solution1URI: string, solution2URI: string): AbstractAggregatorModel[] {
    return this.worstCaseAggregator(solution1URI, solution2URI);
  }

  private worstCaseAggregator(solution1URI: string, solution2URI: string): AbstractAggregatorModel[] {
     const aggUri = `agg-${solution1URI}-${solution2URI}`;
     return [new BasicAggregatorModel(solution1URI, solution2URI, aggUri)];

    // return this.theAggregator;
  }

  private worstCaseEquivalentAggregator(solution1URI: string, solution2URI: string): AbstractAggregatorModel[] {
    if (solution1URI.split('-')[1] === solution2URI.split('-')[1]) {// the path index is the same
      return this.worstCaseAggregator(solution1URI, solution2URI);
    } else {
      return [];
    }
  }
}
