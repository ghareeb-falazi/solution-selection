lexer grammar CommonTokens;

AND
    :A N D;
OR
    :O R;
NOT
    :N O T;

CS
    :
    C S '[' STRING_LITERAL ']'
    ;
INITIAL_CAPABILITY
    :I C;
ANY
    :A N Y;
ALL
    :A L L;
EXISTS_CS
    :E X I S T S '_' C S;
EXISTS_CAP
    :E X I S T S '_' C A P;
EXISTS_VAL
    :E X I S T S '_' V A L;
SUM
    :S U M;
COUNT
    :C O U N T;
AVG
    :A V G;

BOOL_CONSTANT
    :TRUE|FALSE;
TRUE
    :T R U E;
FALSE
    :F A L S E;
VARIABLE
  : VALID_VAR_START VALID_VAR_CHAR*
  ;

STRING_LITERAL
   : '\'' .*? '\'';
DOT
    :'.';
COMMA
    :',';
LPAR
    :'(';
RPAR
    :')';
LBRAC
    :'[';
RBRAC
    :']';
SUM_MINUS
    :'+'|'-';
MULT_DIV
    :'*'|'/';
SCIENTIFIC_NUMBER
  : NUMBER ( E SIGN? NUMBER )?
  ; //The integer part gets its sign from the signedAtom rule


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
fragment
NUMBER
  : ('0'..'9')+ ('.' ('0'..'9')+)?
  ;
fragment A:('a'|'A');
fragment B:('b'|'B');
fragment C:('c'|'C');
fragment D:('d'|'D');
fragment E:('e'|'E');
fragment F:('f'|'F');
fragment G:('g'|'G');
fragment H:('h'|'H');
fragment I:('i'|'I');
fragment J:('j'|'J');
fragment K:('k'|'K');
fragment L:('l'|'L');
fragment M:('m'|'M');
fragment N:('n'|'N');
fragment O:('o'|'O');
fragment P:('p'|'P');
fragment Q:('q'|'Q');
fragment R:('r'|'R');
fragment S:('s'|'S');
fragment T:('t'|'T');
fragment U:('u'|'U');
fragment V:('v'|'V');
fragment W:('w'|'W');
fragment X:('x'|'X');
fragment Y:('y'|'Y');
fragment Z:('z'|'Z');
fragment
SIGN
   :
   (  '+'
   |  '-')
   ;

WS
   :[ \t\n\r]+ ->skip;
