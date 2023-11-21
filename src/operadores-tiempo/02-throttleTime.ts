import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, distinctUntilChanged, map } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(3000)
);//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent(input, 'keyup');

input$.pipe(
  throttleTime(400, asyncScheduler, {
    leading: false,
    trailing: true
  }),
  map(event => ((event?.target) as unknown as { value: string; }).value),
  distinctUntilChanged()
).subscribe(console.log);
