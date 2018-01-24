import {AbstractConcreteSolutionRepository} from '../core/concrete-solution-repository/abstract-concrete-solution-repository';
import {ConcreteSolutionModel} from '../data-model/concrete-solution.model';
import {RequirementModel} from '../data-model/requirement.model';
import {CapabilityModel} from '../data-model/capability.model';

export class BenchmarkingConcreteSolutionRepository extends AbstractConcreteSolutionRepository {
  private static readonly CAPABILITY_NAME = 'a';
  private static readonly CAPABILITY_PROPERTY_NAME = 'value';
  private static readonly CAPABILITY_PROPERTY_VALUE = '1';
  private static readonly REQUIREMENT = 'ANY.' +
  `${BenchmarkingConcreteSolutionRepository.CAPABILITY_NAME}.` +
    `${BenchmarkingConcreteSolutionRepository.CAPABILITY_PROPERTY_NAME} = ` +
      `${BenchmarkingConcreteSolutionRepository.CAPABILITY_PROPERTY_VALUE}`;
  private concreteSolutions: Map <string, ConcreteSolutionModel[]>;

  /**
   *
   * @param {number} pathIndex
   * @param {string} patternName
   * @param {boolean} isLastPattern
   * @returns {ConcreteSolutionModel}
   */
  private static createConcreteSolutionForPattern(csIndex: number, patternName: string, isLastPattern: boolean): ConcreteSolutionModel {
    const uri = `cs-${csIndex}-${patternName}`;
    const reqs = [new RequirementModel(this.REQUIREMENT)];
    const caps: CapabilityModel[] = [];
    const propertiesAllCS = new Map <string, string> ();
    propertiesAllCS.set('value', `${patternName}`);
    const capAllCS = new CapabilityModel('implements', propertiesAllCS);
    caps.push(capAllCS);

    if (isLastPattern) {
      const propertiesLastCS = new Map <string, string> ();
      propertiesLastCS.set(BenchmarkingConcreteSolutionRepository.CAPABILITY_PROPERTY_NAME,
        BenchmarkingConcreteSolutionRepository.CAPABILITY_PROPERTY_VALUE);
      const capLastCS = new CapabilityModel(BenchmarkingConcreteSolutionRepository.CAPABILITY_NAME, propertiesLastCS);
      caps.push(capLastCS);
    }

    return new ConcreteSolutionModel(uri, '', reqs, caps);
  }

  /**
   *
   * @param {string[]} patternNames
   * @param {number} solutionsPerPattern
   */
  constructor(private patternNames: string[], private solutionsPerPattern: number) {
    super();
    this.initializeConcreteSolutionMap();
  }

  private initializeConcreteSolutionMap() {
    this.concreteSolutions = new Map <string, ConcreteSolutionModel[]>();

    let solutionsOfCurrentPattern: ConcreteSolutionModel[];
    let currentPatternName: string;
    let isLastPattern: boolean;

    for (let i = 0; i < this.patternNames.length; i++) {
      solutionsOfCurrentPattern = [];
      currentPatternName = this.patternNames[i];
      isLastPattern = i === this.patternNames.length - 1;

      for (let j = 0; j < this.solutionsPerPattern; j++) {
        solutionsOfCurrentPattern.push(BenchmarkingConcreteSolutionRepository.createConcreteSolutionForPattern(j,
          currentPatternName, isLastPattern));
      }

      this.concreteSolutions.set(currentPatternName, solutionsOfCurrentPattern);
    }

    // console.debug(this.concreteSolutions);

  }

  /**
   *
   * @param {string} patternName
   * @returns {ConcreteSolutionModel[]}
   */
  getConcreteSolutionsOfPattern(patternName: string): ConcreteSolutionModel[] {
    return this.concreteSolutions.get(patternName);
  }
}
