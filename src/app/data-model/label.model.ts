
export class LabelModel{
  value: string;

  constructor(value:string){
    this.value = value;
  }

  static fromData(data:LabelModel):LabelModel{
    return new LabelModel(data.value);
  }

  isCompatible(otherLabel: LabelModel):boolean{
    return this.value.toLowerCase() === otherLabel.value.toLowerCase();
  }
}
