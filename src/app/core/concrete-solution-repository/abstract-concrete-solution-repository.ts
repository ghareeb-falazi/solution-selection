import {ConcreteSolutionModel} from '../../data-model/concrete-solution.model';

export abstract class AbstractConcreteSolutionRepository {
  /**
   * Gets the set of concrete solutions that implement a given pattern
   * @param {string} patternName
   * @returns {ConcreteSolutionModel[]}
   */
  abstract getConcreteSolutionsOfPattern(patternName: string): ConcreteSolutionModel[];
}
