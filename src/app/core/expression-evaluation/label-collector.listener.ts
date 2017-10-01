import {RequirementsGrammarListener} from "./requirements-grammar/RequirementsGrammarListener";
import {
  ArithmeticVariableContext, BoolVariableContext, FArithmeticVariableContext, FBoolVariableContext,
  FStringVariableContext, MvvContext,
  StringVariableContext
} from "./requirements-grammar/RequirementsGrammarParser";


export class LabelCollectorListener implements RequirementsGrammarListener {
  propertiesOfLabels: Map<string, string[]> = new Map();

  enterStringVariable(ctx: StringVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text))//the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
  }

  enterBoolVariable(ctx: BoolVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text))//the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
  }

  enterArithmeticVariable(ctx: ArithmeticVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text))//the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
  }

  enterMvv(ctx: MvvContext): void {
    if (!this.propertiesOfLabels.has(ctx._capability.text))//the capability is new
      this.propertiesOfLabels.set(ctx._capability.text, []);

    if (this.propertiesOfLabels.get(ctx._capability.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._capability.text).push(ctx._property.text);
  }

  enterFStringVariable(ctx: FStringVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text))//the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
  }

  enterFBoolVariable(ctx: FBoolVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text))//the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
  }

  enterFArithmeticVariable(ctx: FArithmeticVariableContext): void {
    if (!this.propertiesOfLabels.has(ctx._cap.text))//the capability is new
      this.propertiesOfLabels.set(ctx._cap.text, []);

    if (this.propertiesOfLabels.get(ctx._cap.text).indexOf(ctx._property.text) < 0)//the property is new
      this.propertiesOfLabels.get(ctx._cap.text).push(ctx._property.text);
  }

}
