import {ContextModel} from "../data-model/context.model";
import {Injectable} from "@angular/core";
import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {MySyntaxErrorHandler} from "./my-syntax-error.handler";

import {MyRequirementsVisitor} from "./my-requirements.visitor";
import {RequirementModel} from "../data-model/requirement.model";
import {GlobalConditionModel} from "../data-model/global-condition.model";
import {GlobalConditionsGrammarLexer} from "./global-conditions-grammar/GlobalConditionsGrammarLexer";
import {GlobalConditionsGrammarParser} from "./global-conditions-grammar/GlobalConditionsGrammarParser";
import {MyGlobalConditionsVisitor} from "./my-global-conditions.visitor";

import {RequirementsGrammarLexer} from "./requirements-grammar/RequirementsGrammarLexer";
import {RequirementsGrammarParser} from "./requirements-grammar/RequirementsGrammarParser";
import {LabelCollectorListener} from "./label-collector.listener";
import {ParseTreeWalker} from "antlr4ts/tree";

/**
 * Created by falazigb on 13-Jul-17.
 */

@Injectable()
export class ExpressionEvaluatorService {


  /* For the global condition, none of the capabilities should contradict with it**/
  public static isGlobalConditionFulfilled(globalCondition: GlobalConditionModel, context: ContextModel): boolean {
    if (!globalCondition || !globalCondition.expression)
      return true;


    try {
      let inputStream = new ANTLRInputStream(globalCondition.expression);
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
      const visitor = new MyGlobalConditionsVisitor(context);
      //console.debug('parsing finished!');
      return visitor.visit(result)

    }
    catch (e) {
      console.error(e);
      return false;
    }
  }

  /* For a requirement, it is enough that one capability fulfills it**/
  public static isRequirementFulfilled(expression: RequirementModel, requirementSolutionUri: string, context: ContextModel): boolean {
    //console.debug(`Evaluating requirement: ${expression.expression}...`);
    if (!expression)
      return true;
    try {
      // Create the lexer and parser
      let inputStream = new ANTLRInputStream(expression.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;
      let lexer = new RequirementsGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new RequirementsGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);

      // Parse the input, where `compilationUnit` is whatever entry point you defined

      let result = parser.booleanExpression();
      const visitor = new MyRequirementsVisitor(context, requirementSolutionUri);

      return visitor.visit(result)
    }
    catch (e) {
      console.debug(e);
      return false;
    }
  }


  static getLabelsOfRequirement(requirement: RequirementModel): Map<string, string[]> {
    try {
// Create the lexer and parser
      let inputStream = new ANTLRInputStream(requirement.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;

      const lexer = new RequirementsGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      const tokenStream = new CommonTokenStream(lexer);
      //console.debug(tokenStream);
      const parser = new RequirementsGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);
      const root = parser.booleanExpression();
      const labelListener: LabelCollectorListener = new LabelCollectorListener();
      ParseTreeWalker.DEFAULT.walk(labelListener, root);

      return labelListener.propertiesOfLabels;
    }
    catch (e) {
      console.debug('ExpressionEvaluator.getLabelsOfRequirement() method');
      console.debug(e);
      return null;
    }
  }

}
