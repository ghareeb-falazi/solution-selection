grammar RequirementsGrammar;

booleanExpression
    : atom=BOOL_CONSTANT #boolConstant
    | cs=(ANY | INITIAL_CAPABILITY | PREVIOUS | NEXT | CS ) '.' capability=VARIABLE '.' property=VARIABLE #boolVariable
    | op='(' exp=booleanExpression ')' #unaryBoolOp
    | op=NOT exp=booleanExpression #unaryBoolOp
    | left=arithmeticExpression op=('<'|'>'|'<='|'>='|'='|'<>') right=arithmeticExpression #arithmeticComparison
    | left=stringValue op=('='|'<>') right=stringValue #stringComparison
    | left=booleanExpression op=AND right=booleanExpression #binaryBoolOp
    | left=booleanExpression op=OR right=booleanExpression #binaryBoolOp
    ;

arithmeticExpression
    : atom=SCIENTIFIC_NUMBER #arithmeticConstant
    | cs=(ANY | INITIAL_CAPABILITY | PREVIOUS | NEXT | CS) '.' capability=VARIABLE '.' property=VARIABLE #arithmeticVariable
    | op='(' exp=arithmeticExpression ')' #unaryArithmeticOp
    | op=('-'|'+') exp=arithmeticExpression #unaryArithmeticOp
    | left=arithmeticExpression op=('*'|'/') right=arithmeticExpression #binaryArithmeticOp
    | left=arithmeticExpression op=('+'|'-') right=arithmeticExpression #binaryArithmeticOp
    ;

stringValue
    : atom= STRING_LITERAL #stringConstant
    | cs=(ANY | INITIAL_CAPABILITY | PREVIOUS | NEXT | CS) '.' capability=VARIABLE '.' property=VARIABLE #stringVariable
    ;

CS
    :('CS'|'cs')'[' STRING_LITERAL ']';
AND
    :'AND'|'and';
OR
    :'OR'|'or';
NOT
    :'NOT'|'not';
ANY
    :'ANY'|'any';
INITIAL_CAPABILITY
    :'IC'|'ic';
PREVIOUS
    :'PREV'|'prev';
NEXT
    :'NEXT'|'next';
BOOL_CONSTANT
    :TRUE|FALSE;
TRUE
    :'TRUE'|'True'|'true';
FALSE
    :'FALSE'|'False'|'false';
VARIABLE
  : VALID_VAR_START VALID_VAR_CHAR*
  ;

fragment
VALID_VAR_START
  : ('a'..'z')
  | ('A'..'Z')
  | '_'
  ;

fragment
VALID_VAR_CHAR
  : VALID_VAR_START
  | ('0'..'9')
  ;

SCIENTIFIC_NUMBER
  : NUMBER ( E SIGN? NUMBER )?
  ; //The integer part gets its sign from the signedAtom rule

fragment
NUMBER
  : ('0'..'9')+ ('.' ('0'..'9')+)?
  ;

fragment
E
   : 'E'
   | 'e'
   ;

fragment
SIGN
   :
   (  '+'
   |  '-')
   ;
STRING_LITERAL
   : '\'' .*? '\'';
WS
   :[ \t\n\r]+ ->skip;
