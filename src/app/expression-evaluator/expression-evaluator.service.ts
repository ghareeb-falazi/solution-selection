import {ContextModel} from "../data-model/context.model";
import {Injectable} from "@angular/core";
import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {MySyntaxErrorHandler} from "./my-syntax-error-handler";
import {SimpleGrammarLexer} from "./SimpleGrammarLexer";
import {SimpleGrammarParser} from "./SimpleGrammarParser";
import {MyVisitor} from "./my-visitor";
import {RequirementModel} from "../data-model/requirement.model";
import {CapabilityModel} from "../data-model/capability.model";

/**
 * Created by falazigb on 13-Jul-17.
 */

@Injectable()
export class ExpressionEvaluatorService {

  public isGlobalConditionFulilled(): boolean {
    return true;
  }

  public isRequirementFulfilled(expression: RequirementModel, context: ContextModel): boolean {
    if (!expression)
      return true;
    const props: Map<string, string> = context.initialProperties;

    for (let i = 0; i < context.capabilities.length; i++) {//Check the capabilities
      if (this.evaluateRequirementAgainstCapability(expression, context.capabilities[i], props))
        return true;
    }


    return false;
  }

  evaluateRequirementAgainstCapability(expression: RequirementModel, capability: CapabilityModel, initialProps: Map<string, string>): boolean {
    const vars: Map<string, string> = this.buildVariableMapOfCapability(capability, initialProps);
    return this.evaluateRequirement(expression, vars);
  }

  buildVariableMapOfCapability(cap: CapabilityModel, props: Map<string, string>): Map<string, string> {
    const result = new Map<string, string>();
    result.set('name', cap.name.value);

    for (const key of cap.properties.keys()) {
      result.set(key, cap.properties.get(key));
    }
    for (const key of props.keys()) {
      result.set(key, props.get(key));
    }
    return result;
  }

  evaluateRequirement(expression: RequirementModel, variables: Map<string, string>): boolean {

    try {
// Create the lexer and parser
      let inputStream = new ANTLRInputStream(expression.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;

      let lexer = new SimpleGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      let tokenStream = new CommonTokenStream(lexer);
      console.debug(tokenStream);
      let parser = new SimpleGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);

// Parse the input, where `compilationUnit` is whatever entry point you defined

      let result = parser.booleanExpression();
      const visitor = new MyVisitor(variables);
      console.debug('parsing finished!');
      return visitor.visit(result)

    }
    catch (e) {
      console.debug(e.toString());
      return false;
    }


  }
}
