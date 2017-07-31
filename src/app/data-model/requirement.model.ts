import {BooleanExpressionModel} from "./boolean-expression.model";

export class RequirementModel extends BooleanExpressionModel{
  constructor(expression:string){
    super(expression);
  }

  static fromData(data: RequirementModel):RequirementModel {
    return new RequirementModel(data.expression);
  }
}
