import {BooleanExpression} from "../data-model/BooleanExpression";
import {Context} from "../data-model/Context";
import {Injectable} from "@angular/core";
/**
 * Created by falazigb on 13-Jul-17.
 */

@Injectable()
export class ExpressionEvaluatorService{
  /** A simple implementation that considers boolean expressions as mere Labels*/
  isExpressionFulfilled(expression:BooleanExpression, context: Context):boolean{
    for(let i = 0; i < context.capabilities.length; i++){//Check the capabilities
      if(context.capabilities[i].label.isCompatible(expression.expression))
        return true;
    }

    for(let i = 0; i < context.initialProperties.length; i++){//Check the initial properties
      if(context.initialProperties[i].isCompatible(expression.expression))
        return true;
    }

    return false;
  }
}
