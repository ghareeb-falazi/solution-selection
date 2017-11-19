import {BooleanExpressionModel} from '../../data-model/boolean-expression.model';
import {ConcreteSolutionPathModel} from '../../data-model/concrete-solution-path.model';
import {ExpressionEvaluatorService} from '../expression-evaluation/expression-evaluator.service';
import {ConcreteSolutionRepositoryService} from '../concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from '../aggregator-repository/aggregator-repository.service';
import {ConcreteSolutionModel} from '../../data-model/concrete-solution.model';
import {AbstractAggregatorModel} from '../../data-model/abstract-aggregator.model';
import {ConcreteSolutionPathStepModel} from 'app/data-model/concrete-solution-path-step.model';
import {Injectable} from '@angular/core';
import {ContextModel} from '../../data-model/context.model';
import {CapabilityModel} from '../../data-model/capability.model';
import {UserQueryModel} from '../../data-model/user-query.model';
import {BasicSolutionSelector} from "./basic-solution-selector";
import {AbstractAggregatorRepository} from "../aggregator-repository/abstract-aggregator-repository";
import {AbstractConcreteSolutionRepository} from "../concrete-solution-repository/abstract-concrete-solution-repository";

/**
 * A service that implements the mapping algorithm
 */
@Injectable()
export class SolutionSelectorService extends BasicSolutionSelector{
  /**
   * Initializes a new instance of the service
   * @param {ConcreteSolutionRepositoryService} concreteSolutionRepository
   * @param {AggregatorRepositoryService} aggregatorsRepository
   */
  constructor(private concreteSolutionRepository: ConcreteSolutionRepositoryService,
              private aggregatorsRepository: AggregatorRepositoryService) {
    super();
  }

  protected getAggregatorRepository(): AbstractAggregatorRepository {
    return this.aggregatorsRepository;
  }

  protected getConcreteSolutionRepository(): AbstractConcreteSolutionRepository {
    return this.concreteSolutionRepository;
  }
}
