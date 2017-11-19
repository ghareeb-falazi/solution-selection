import {RequirementsGrammarListener} from './requirements-grammar/RequirementsGrammarListener';
import {
  ArithmeticVariableContext, BoolVariableContext, FArithmeticVariableContext, FBoolVariableContext,
  FStringVariableContext, MvvContext,
  StringVariableContext
} from './requirements-grammar/RequirementsGrammarParser';

/**
 * Event listener that collects capability names and property names of a requirement parse tree.
 * Only certain parts of the tree can contain capability names, and for those only a method is provided.
 */
export class LabelCollectorListener implements RequirementsGrammarListener {

  /**
   * Maps collected capability names to their collected property names
   * @type {Map<any, any>}
   */
  propertiesOfLabels: Map<string, string[]> = new Map();

  enterStringVariable(ctx: StringVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text)) {// the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);
    }

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0) {// the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
    }
  }

  enterBoolVariable(ctx: BoolVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text)) {// the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);
    }

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0) {// the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
    }
  }

  enterArithmeticVariable(ctx: ArithmeticVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text)) {// the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);
    }

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0) {// the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
    }
  }

  enterMvv(ctx: MvvContext): void {
    if (!this.propertiesOfLabels.has(ctx._capability.text)) {// the capability is new
      this.propertiesOfLabels.set(ctx._capability.text, []);
    }

    if (this.propertiesOfLabels.get(ctx._capability.text).indexOf(ctx._property.text) < 0) {// the property is new
      this.propertiesOfLabels.get(ctx._capability.text).push(ctx._property.text);
    }
  }

  enterFStringVariable(ctx: FStringVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text)) {// the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);
    }

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0) {// the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
    }
  }

  enterFBoolVariable(ctx: FBoolVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text)) {// the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);
    }

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0) {// the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
    }
  }


    enterFArithmeticVariable(ctx: FArithmeticVariableContext): void {
      if (!this.propertiesOfLabels.has(ctx._cap.text)) {// the capability is new
        this.propertiesOfLabels.set(ctx._cap.text, []);
      }

      if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0) {// the property is new
        this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
      }
    }


  // This is just to have a common property with the ParseTreeListener interface, otherwise it will not compile, should
  // be fixed in future releases of ANTLR4TS
  visitTerminal = () => {};



}

