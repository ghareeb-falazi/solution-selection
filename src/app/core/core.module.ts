import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConcreteSolutionRepositoryService} from './concrete-solution-repository/concrete-solution-repository.service';
import {AggregatorRepositoryService} from './aggregator-repository/aggregator-repository.service';
import {PatternRepositoryService} from './pattern-repository/pattern-repository.service';
import {SolutionSelectorService} from './solution-selector/solution-selector.service';
import {SuggestionsService} from './suggestions/suggestions.service';

/**
 * Provides access to application-wide singleton services.
 * ExpressionEvaluatorService is kept private as it is only needed by other services.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ConcreteSolutionRepositoryService, AggregatorRepositoryService,
    PatternRepositoryService, SolutionSelectorService, SuggestionsService]
})
export class CoreModule { }
