import {ContextModel} from "../data-model/context.model";
import {Injectable} from "@angular/core";
import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {MySyntaxErrorHandler} from "./my-syntax-error-handler";
import {SimpleGrammarLexer} from "./requirements-grammar/SimpleGrammarLexer";
import {SimpleGrammarParser} from "./requirements-grammar/SimpleGrammarParser";
import {MyRequirementsVisitor} from "./my-requirements-visitor";
import {RequirementModel} from "../data-model/requirement.model";
import {CapabilityModel} from "../data-model/capability.model";
import {GlobalConditionModel} from "../data-model/global-condition.model";
import {GlobalConditionsGrammarLexer} from "./global-conditions-grammar/GlobalConditionsGrammarLexer";
import {GlobalConditionsGrammarParser} from "./global-conditions-grammar/GlobalConditionsGrammarParser";
import {MyGlobalConditionsVisitor} from "./my-global-conditions-visitor";

/**
 * Created by falazigb on 13-Jul-17.
 */

@Injectable()
export class ExpressionEvaluatorService {

  private evaluateGlobalConditionAgainstCapability(gc:GlobalConditionModel, capability:CapabilityModel, context:ContextModel){
    try {
// Create the lexer and parser
      let inputStream = new ANTLRInputStream(gc.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;

      let lexer = new GlobalConditionsGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      let tokenStream = new CommonTokenStream(lexer);
      //console.debug(tokenStream);
      let parser = new GlobalConditionsGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);

// Parse the input, where `compilationUnit` is whatever entry point you defined

      let result = parser.booleanExpression();
      const visitor = new MyGlobalConditionsVisitor(context, capability);
      //console.debug('parsing finished!');
      return visitor.visit(result)

    }
    catch (e) {
      console.error(e.toString());
      return false;
    }
  }

  /* For the global condition, none of the capabilities should contradict with it**/
  public isGlobalConditionFulilled(globalCondition:GlobalConditionModel, context:ContextModel): boolean {
    if (!globalCondition || !globalCondition.expression)
      return true;

    const capabilities:CapabilityModel[] = context.getAllCapabilities();

    for (const capability of capabilities) {//Check the solutionCapabilities
      if (!this.evaluateGlobalConditionAgainstCapability(globalCondition, capability, context)){
        //console.debug(`Requirement fulfilled by the capability: `);
        //console.debug(context.solutionCapabilities[i]);
        return false;
      }
    }

    //console.debug(`Requirement ${expression.expression} not fulfilled!`);
    return true;
  }

 /* For a requirement, it is enough that one capability fulfills it**/
  public isRequirementFulfilled(expression: RequirementModel, context: ContextModel): boolean {
    //console.debug(`Evaluating requirement: ${expression.expression}...`);
    if (!expression)
      return true;
    const capabilities:CapabilityModel[] = context.getAllCapabilities();

    for (const capability of capabilities) {//Check the solutionCapabilities
      if (this.evaluateRequirementAgainstCapability(expression, capability)) {
        //console.debug(`Requirement fulfilled by the capability: `);
        //console.debug(context.solutionCapabilities[i]);
        return true;
      }
    }

    //console.debug(`Requirement ${expression.expression} not fulfilled!`);
    return false;
  }

  evaluateRequirementAgainstCapability(expression: RequirementModel, capability: CapabilityModel): boolean {
    const vars: Map<string, string> = this.buildVariablesMap(capability);

    return this.evaluateRequirement(expression, vars);
  }

  buildVariablesMap(cap: CapabilityModel): Map<string, string> {
    const result = new Map<string, string>();

    for (const key of cap.properties.keys()) {
      result.set(key, cap.properties.get(key));
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
      //console.debug(tokenStream);
      let parser = new SimpleGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);

// Parse the input, where `compilationUnit` is whatever entry point you defined

      let result = parser.booleanExpression();
      const visitor = new MyRequirementsVisitor(variables);
      //console.debug('parsing finished!');
      return visitor.visit(result)

    }
    catch (e) {
      console.debug(e.toString());
      return false;
    }


  }
}
