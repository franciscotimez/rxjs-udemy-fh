import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// Ignora la nueva suscripcion hasta que se complete la anterior, mantiene una subscripcion activa.
click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log);
