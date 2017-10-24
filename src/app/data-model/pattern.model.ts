/**
 * A simple representation of a pattern in a pattern language
 */
export class PatternModel {
  /**
   * The set of patterns that come 'next' in the Pattern Language
   */
  public nextPatterns: PatternModel[];
  /**
   * Parses a JSON-deserialized pattern
   * @param {PatternModel} data JSON-deserialized object
   * @returns {PatternModel} a parsed concrete implementation of the given JSON-deserialized object
   */
  static fromData(data: PatternModel): PatternModel {
    const nextPatterns: string[] = [];
    data.next.forEach(pattern => nextPatterns.push(pattern));

    return new PatternModel(data.name, data.url, data.imageUrl, nextPatterns);
  }
  /**
   * Initializes a new instance of the PatternModel class
   * @param {string} name the name of the pattern
   * @param {string} url the url for the webpage that holds full description of the pattern
   * @param {string} imageUrl a url for the pattern icon
   * @param {string[]} next the set of patterns that come 'next' in the Pattern Language
   */
  constructor(public name: string, public url: string, public imageUrl: string, public next: string[]) {
  }


}
