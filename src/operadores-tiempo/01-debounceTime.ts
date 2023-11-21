import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(3000)
).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  // tap(console.log),
  debounceTime(1000),
  map(event => ((event?.target) as unknown as { value: string; }).value),
  distinctUntilChanged()
).subscribe(console.log);
