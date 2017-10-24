import {RecognitionException, Recognizer, ANTLRErrorListener} from 'antlr4ts';
import {MyParsingError} from './my-parsing.error';

export class MySyntaxErrorHandler implements ANTLRErrorListener<any> {
  /**
   * Provides a default instance of {@link ConsoleErrorListener}.
   */
  static readonly INSTANCE: MySyntaxErrorHandler = new MySyntaxErrorHandler();


  syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException): void {
    throw new MyParsingError(e, msg);
  }
}
