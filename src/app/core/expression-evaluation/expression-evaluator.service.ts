import {ContextModel} from '../../data-model/context.model';
import {Injectable} from '@angular/core';
import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {MySyntaxErrorHandler} from './my-syntax-error.handler';

import {MyRequirementsVisitor} from './my-requirements.visitor';
import {RequirementModel} from '../../data-model/requirement.model';
import {UserQueryModel} from '../../data-model/user-query.model';
import {UserQueryGrammarLexer} from './user-query-grammar/UserQueryGrammarLexer';
import {UserQueryGrammarParser} from './user-query-grammar/UserQueryGrammarParser';
import {MyUserQueryVisitor} from './my-user-query.visitor';

import {RequirementsGrammarLexer} from './requirements-grammar/RequirementsGrammarLexer';
import {RequirementsGrammarParser} from './requirements-grammar/RequirementsGrammarParser';
import {LabelCollectorListener} from './label-collector.listener';
import {ParseTreeWalker} from 'antlr4ts/tree';

/**
 * Evaluates boolean expressions in a scope of a context
 */
@Injectable()
export class ExpressionEvaluatorService {


  /**
   * Checks whether a user query evaluates to true (is fulfilled) based on the given context
   * @param {UserQueryModel} userQuery
   * @param {ContextModel} context
   * @returns {boolean}
   */
  public static isUserQueryFulfilled(userQuery: UserQueryModel, context: ContextModel): boolean {
    // If no user query is given, then it is fulfilled
    if (!userQuery || !userQuery.expression) {
      return true;
    }

    try {
      // Create a lexer
      const inputStream = new ANTLRInputStream(userQuery.expression);
      const lexer = new UserQueryGrammarLexer(inputStream);
      // Use a custom error listener that throws an exception when finding an error
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      // Create parser
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new UserQueryGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);

      // create a parse tree (at this point we know syntax errors if present)
      const result = parser.booleanExpression();
      // visit the parse tree and evaluate the expression (interpretation)
      const visitor = new MyUserQueryVisitor(context);

      return visitor.visit(result);
    }catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * Checks whether a concrete solution requirement evaluates to true
   * @param {RequirementModel} expression the requirement to evaluate
   * @param {string} requirementSolutionUri the uri of the concrete solution that the requirement belongs to (useful for
   * evaluating the NEIGHBOR wildcard)
   * @param {ContextModel} context the context to provide a scope for the requirement
   * @returns {boolean}
   */
  public static isRequirementFulfilled(expression: RequirementModel, requirementSolutionUri: string, context: ContextModel): boolean {
    // if no requirement is provided it is considered to be fulfilled
    if (!expression) {
      return true;
    }
    try {
      // Create the lexer and parser
      const inputStream = new ANTLRInputStream(expression.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;
      const lexer = new RequirementsGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new RequirementsGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);
      const result = parser.booleanExpression();

      // visit the resulting parse tree
      const visitor = new MyRequirementsVisitor(context, requirementSolutionUri);

      return visitor.visit(result);
    } catch (e) {
      console.debug(e);
      return false;
    }
  }

  /**
   * Analyzes a given concrete solution requirement and extracts capability names and property names used by it.
   * @param {RequirementModel} requirement
   * @returns {Map<string, string[]>}
   */
  static getLabelsOfRequirement(requirement: RequirementModel): Map<string, string[]> {
    try {
      // Create the lexer and parser
      const inputStream = new ANTLRInputStream(requirement.expression);
      const myErrorListener = MySyntaxErrorHandler.INSTANCE;
      const lexer = new RequirementsGrammarLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(myErrorListener);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new RequirementsGrammarParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(myErrorListener);
      const root = parser.booleanExpression();

      // Travers all nodes of the parse tree and listen to events
      const labelListener: LabelCollectorListener = new LabelCollectorListener();
      ParseTreeWalker.DEFAULT.walk(labelListener, root);

      return labelListener.propertiesOfLabels;
    } catch (e) {
      console.debug(e);
      return null;
    }
  }

}
