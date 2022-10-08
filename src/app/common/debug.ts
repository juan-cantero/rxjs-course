import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export enum RxJsLogginLevel {
  TRACE,
  DEBUG,
  INFO,
  ERROR,
}

let rxjsLoggingLevel = RxJsLogginLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLogginLevel) {
  rxjsLoggingLevel = level;
}

export const debug =
  (level: number, message: string) => (source: Observable<any>) =>
    source.pipe(
      tap((val) => {
        if (level >= rxjsLoggingLevel) {
          console.log(message + " : ", val);
        }
      })
    );
