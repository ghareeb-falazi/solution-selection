export enum TokenType {
  /*Common Tokens*/
  ID,
  START_PARENTHESIS,
  END_PARENTHESIS,
  INVALID,

    /*Arithmetic Tokens*/
  PLUS,
  MINUS,
  MULTIPLICATION,
  DIV,
  MOD,
  NUM_LITERAL,

    /*Boolean Tokens*/
  EQUAL,
  NOT_EQUAL,
  GREATER_THAN,
  LESS_THAN,
  GREATER_OR_EQUAL,
  LESS_OR_EQUAL,
  AND,
  OR,
  NOT,

    /*String Tokens*/
  STRING_LITERAL
}
