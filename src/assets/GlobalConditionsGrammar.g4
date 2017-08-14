grammar GlobalConditionsGrammar;

booleanExpression
    : atom=BOOL_CONSTANT #boolConstant
    | cs=(ALL|INITIAL_CAPABILITY|CS) '.' cap=VARIABLE '.' property=VARIABLE #booleanVariable
    | EXISTS_CS '(' cs=CS ')' #existsCS
    | EXISTS_CAP '(' cs=(ANY | INITIAL_CAPABILITY | CS) ',' cap=VARIABLE ')' #existsCap
    | EXISTS_VAL '(' cs=(ANY | INITIAL_CAPABILITY | CS) ',' cap=VARIABLE ',' property=VARIABLE ','
                    value=(SCIENTIFIC_NUMBER | STRING_LITERAL | BOOL_CONSTANT) ')' #existsVal
    | op='(' exp=booleanExpression ')' #unaryBoolOp
    | NOT exp=booleanExpression #unaryBoolOp
    | left=arithmeticExpression op=('<'|'>'|'<='|'>='|'='|'<>') right=arithmeticExpression #arithmeticComparison
    | left=stringValue op=('='|'<>') right=stringValue #stringComparison
    | left=booleanExpression op=AND right=booleanExpression #binaryBoolOp
    | left=booleanExpression op=OR right=booleanExpression #binaryBoolOp
    ;

arithmeticExpression
    : atom=SCIENTIFIC_NUMBER #arithmeticConstant
    | cs=(ALL|INITIAL_CAPABILITY|CS) '.' cap=VARIABLE '.' property=VARIABLE #arithmeticVariable
    | func=(SUM | COUNT | AVG) '(' cap=VARIABLE ',' property=VARIABLE ')' #arithmeticFunc
    | op=('-'|'+') exp=arithmeticExpression #unaryArithmeticOp
    | op='(' exp=arithmeticExpression ')' #unaryArithmeticOp
    | left=arithmeticExpression op=('*'|'/') right=arithmeticExpression #binaryArithmeticOp
    | left=arithmeticExpression op=('+'|'-') right=arithmeticExpression #binaryArithmeticOp
    ;

stringValue
    : atom= STRING_LITERAL #stringAtom
    | cs=(ALL|INITIAL_CAPABILITY|CS) '.' cap=VARIABLE '.' property=VARIABLE #stringVariable
    ;

CS
    :
    ('CS'|'cs')'[' STRING_LITERAL ']'
    ;
EXISTS_CS
    :'EXISTS_CS'|'exists_cs';
EXISTS_CAP
    :'EXISTS_CAP'|'exists_cap';
EXISTS_VAL
    :'EXISTS_VAL'|'exists_val';
AND
    :'AND'|'and';
OR
    :'OR'|'or';
NOT
    :'NOT'|'not';
ANY
    :'ANY'|'any';
ALL
    :'ALL'|'all';
SUM
    :'SUM'|'sum';
COUNT
    :'COUNT'|'count';
AVG
    :'AVG'|'avg';
INITIAL_CAPABILITY
    :'IC'|'ic';
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
