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
import {VariableNotFoundError} from "./variable-not-found.error";
import {RequirementsGrammarLexer} from "./requirements-grammar/RequirementsGrammarLexer";
import {RequirementsGrammarParser} from "./requirements-grammar/RequirementsGrammarParser";
import {LabelCollectorListener} from "./label-collector.listener";
import {ParseTreeWalker} from "antlr4ts/tree";

/**
 * Created by falazigb on 13-Jul-17.
 */

@Injectable()
export class ExpressionEvaluatorService {

  private evaluateGlobalConditionAgainstCapability(gc:GlobalConditionModel, currentSolutionUri:string, context:ContextModel){
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
      const visitor = new MyGlobalConditionsVisitor(context, currentSolutionUri);
      //console.debug('parsing finished!');
      return visitor.visit(result)

    }
    catch (e) {
      if(e instanceof VariableNotFoundError){//this is fine!
        console.debug(e.message + '. Skipping solution!');
        return true;
      }

      console.error(e);
      return false;
    }
  }

  /* For the global condition, none of the capabilities should contradict with it**/
  public isGlobalConditionFulfilled(globalCondition:GlobalConditionModel, context:ContextModel): boolean {
    if (!globalCondition || !globalCondition.expression)
      return true;

    const solutionsUris:string[] = context.getAllConcreteSolutionsUris();

    for (const solutionUri of solutionsUris) {//Check the solutionCapabilities
      if (!this.evaluateGlobalConditionAgainstCapability(globalCondition, solutionUri, context)){
        //console.debug(`Requirement fulfilled by the capability: `);
        //console.debug(context.solutionCapabilities[i]);
        return false;
      }
    }

    //console.debug(`Requirement ${expression.expression} not fulfilled!`);
    return true;
  }

 /* For a requirement, it is enough that one capability fulfills it**/
  public isRequirementFulfilled(expression: RequirementModel, requirementSolutionUri:string, context: ContextModel): boolean {
    //console.debug(`Evaluating requirement: ${expression.expression}...`);
    if (!expression)
      return true;
    const solutionsUris:string[] = context.getAllConcreteSolutionsUris();
    //console.debug('WITHIN isRequirementFulfilled');
    //console.debug(solutionsUris);
    for (const currentSolutionUri of solutionsUris) {//Check the solutionCapabilities
      if (this.evaluateRequirementAgainstSolution(expression, requirementSolutionUri, currentSolutionUri, context)) {
        //console.debug(`Requirement fulfilled by the capability: `);
        //console.debug(context.solutionCapabilities[i]);
        return true;
      }
    }

    //console.debug(`Requirement ${expression.expression} not fulfilled!`);
    return false;
  }

  evaluateRequirementAgainstSolution(expression: RequirementModel, requirementSolutionUri:string,
                                     currentSolutionUri:string, context:ContextModel): boolean {
    try {
// Create the lexer and parser
      let inputStream = new ANTLRInputStream(expression.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;

      let lexer = new RequirementsGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      let tokenStream = new CommonTokenStream(lexer);
      //console.debug(tokenStream);
      let parser = new RequirementsGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);

// Parse the input, where `compilationUnit` is whatever entry point you defined

      let result = parser.booleanExpression();
      const visitor = new MyRequirementsVisitor(context, currentSolutionUri, requirementSolutionUri);
      //console.debug('parsing finished!');
      return visitor.visit(result)

    }
    catch (e) {
      console.debug(e);
      return false;
    }
  }


  getLabelsOfRequirement(requirement:RequirementModel):Map<string, string[]>{
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
      const labelListener:LabelCollectorListener = new LabelCollectorListener();

      const walker:ParseTreeWalker  = ParseTreeWalker.DEFAULT;
      walker.walk(labelListener, root);


      return labelListener.propertiesOfLabels;
    }
    catch (e) {
      console.debug('ExpressionEvaluator.getLabelsOfRequirement() method');
      console.debug(e);
      return null;
    }
  }

}
