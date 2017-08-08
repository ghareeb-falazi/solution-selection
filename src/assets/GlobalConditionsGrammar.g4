grammar GlobalConditionsGrammar;

booleanExpression
    : atom=BOOL_CONSTANT #boolAtom
    | atom=VARIABLE #boolAtom
    | func=('exists_value' | 'EXISTS_VALUE') '(' variable=VARIABLE ',' value=(BOOL_CONSTANT|SCIENTIFIC_NUMBER|STRING_LITERAL)')' #booleanFunc
    | op='(' exp=booleanExpression ')' #unaryBoolOp
    | op=('not'|'NOT')exp=booleanExpression #unaryBoolOp
    | left=arithmeticExpression op=('<'|'>'|'<='|'>='|'='|'<>') right=arithmeticExpression #arithmeticComparison
    | left=stringValue op=('='|'<>') right=stringValue #stringComparison
    | left=booleanExpression op=('AND' | 'and') right=booleanExpression #binaryBoolOp
    | left=booleanExpression op=('OR'|'or') right=booleanExpression #binaryBoolOp
    ;

arithmeticExpression
    : atom=VARIABLE #arithmeticAtom
    | atom=SCIENTIFIC_NUMBER #arithmeticAtom
    | func=('sum' | 'SUM' | 'count' | 'COUNT' | 'avg' | 'AVG') '(' variable=VARIABLE ')' #arithmeticFunc
    | op=('-'|'+') exp=arithmeticExpression #unaryArithmeticOp
    | op='(' exp=arithmeticExpression ')' #unaryArithmeticOp
    | left=arithmeticExpression op=('*'|'/') right=arithmeticExpression #binaryArithmeticOp
    | left=arithmeticExpression op=('+'|'-') right=arithmeticExpression #binaryArithmeticOp
    ;

stringValue
    : atom= STRING_LITERAL #stringAtom
    | atom= VARIABLE #stringAtom
    ;


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
