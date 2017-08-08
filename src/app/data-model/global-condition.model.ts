import {BooleanExpressionModel} from "./boolean-expression.model";
/**
 * Created by falazigb on 04-Aug-17.
 */

export class GlobalConditionModel extends BooleanExpressionModel{
  constructor(expression:string){
    super(expression);
  }

  static fromData(data: GlobalConditionModel):GlobalConditionModel {
    return new GlobalConditionModel(data.expression);
  }
}
