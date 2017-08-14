export class PatternModel {
  public nextPatterns:PatternModel[];

  constructor(public name: string, public url: string, public imageUrl: string, public next: string[]) {
  }

  static fromData(data: PatternModel):PatternModel {
    const nextPatterns:string[] = [];
    data.next.forEach(pattern=>nextPatterns.push(pattern));

    return new PatternModel(data.name, data.url, data.imageUrl, nextPatterns);
  }
}
