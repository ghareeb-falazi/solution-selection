grammar RequirementsGrammar;
import CommonTokens;

booleanExpression
    : atom=BOOL_CONSTANT #boolConstant
    | CS DOT cap=VARIABLE DOT property=VARIABLE #boolVariable
    | multiValueVariable #boolMVV
    | EXISTS_CS LPAR cs=CS RPAR #existsCS
    | EXISTS_CAP LPAR cs=(ANY | CS) COMMA cap=VARIABLE RPAR #existsCap
    | EXISTS_VAL LPAR cs=(ANY | CS) COMMA cap=VARIABLE COMMA property=VARIABLE COMMA
                    value=(SCIENTIFIC_NUMBER | STRING_LITERAL | BOOL_CONSTANT) RPAR #existsVal
    | op='(' exp=booleanExpression ')' #unaryBoolOp
    | NOT exp=booleanExpression #unaryBoolOp
    | left=multiValueVariable op=('<>'|'>='|'>'|'<='|'<'|'=') right=arithmeticExpression #leftMVVArithComp
    | left=arithmeticExpression op=('<>'|'>='|'>'|'<='|'<'|'=') right=multiValueVariable #rightMVVArithComp
    | left=arithmeticExpression op=('<>'|'>='|'>'|'<='|'<'|'=') right=arithmeticExpression #arithmeticComparison
    | left=multiValueVariable op=('<>'|'=') right=stringValue#leftMVVStringComp
    | left=stringValue op=('<>'|'=') right=multiValueVariable#rightMVVStringComp
    | left=stringValue op=('<>'|'=') right=stringValue#stringComparison
    | left=booleanExpression op=AND right=booleanExpression #binaryBoolOp
    | left=booleanExpression op=OR right=booleanExpression #binaryBoolOp
    ;

arithmeticExpression
    : atom=SCIENTIFIC_NUMBER #arithmeticConstant
    | CS DOT cap=VARIABLE DOT property=VARIABLE #arithmeticVariable
    | func=(SUM | COUNT | AVG) LPAR cap=VARIABLE DOT property=VARIABLE RPAR #arithmeticFunc
    | op=SUM_MINUS exp=arithmeticExpression #unaryArithmeticOp
    | op=LPAR exp=arithmeticExpression RPAR #unaryArithmeticOp
    | left=arithmeticExpression op=MULT_DIV right=arithmeticExpression #binaryArithmeticOp
    | left=arithmeticExpression op=SUM_MINUS right=arithmeticExpression #binaryArithmeticOp
    ;

stringValue
    : atom= STRING_LITERAL #stringAtom
    | CS DOT cap=VARIABLE DOT property=VARIABLE #stringVariable
    ;

multiValueVariable
    :accessor=(ANY|ALL|NEIGHBOR) DOT capability=VARIABLE DOT property=VARIABLE #mvv
    |accessor=(ANY|ALL|NEIGHBOR) LBRAC fBooleanExpression RBRAC DOT capability=VARIABLE DOT property=VARIABLE #mvv
    ;

fBooleanExpression
    : atom=BOOL_CONSTANT #fBoolConstant
    | cap=VARIABLE DOT property=VARIABLE #fBoolVariable
    | op=LPAR exp=fBooleanExpression RPAR #fUnaryBoolOp
    | NOT exp=fBooleanExpression #fUnaryBoolOp
    | left=fArithmeticExpression op=('<>'|'>='|'>'|'<='|'<'|'=') right=fArithmeticExpression #fArithmeticComparison
    | left=fStringValue op=('<>'|'=') right=fStringValue #fStringComparison
    | left=fBooleanExpression op=AND right=fBooleanExpression #fBinaryBoolOp
    | left=fBooleanExpression op=OR right=fBooleanExpression #fBinaryBoolOp
    ;

fArithmeticExpression
    : atom=SCIENTIFIC_NUMBER #fArithmeticConstant
    | cap=VARIABLE DOT property=VARIABLE #fArithmeticVariable
    | op=SUM_MINUS exp=fArithmeticExpression #fUnaryArithmeticOp
    | op=LPAR exp=fArithmeticExpression RPAR #fUnaryArithmeticOp
    | left=fArithmeticExpression op=MULT_DIV right=fArithmeticExpression #fBinaryArithmeticOp
    | left=fArithmeticExpression op=SUM_MINUS right=fArithmeticExpression #fBinaryArithmeticOp
    ;

fStringValue
    : atom= STRING_LITERAL #fStringAtom
    | cap=VARIABLE DOT property=VARIABLE #fStringVariable
    ;


NEIGHBOR
    :N E I G H B O R;
