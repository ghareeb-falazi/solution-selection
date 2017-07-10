
export class Label{
  value: string;

  constructor(value:string){
    this.value = value;
  }

  static fromData(data:Label):Label{
    return new Label(data.value);
  }

  isCompatible(otherLabel: Label):boolean{
    return this.value === otherLabel.value;
  }
}
