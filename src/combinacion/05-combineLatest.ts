import { fromEvent, combineLatest, from, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//   {
//     keyup: keyup$.pipe(map(ev => ev.type)),
//     click: click$.pipe(map(ev => ev.type))
//   }
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    map(ev => ev.target['value'])
  );

combineLatest([
  getInputStream(input1),
  getInputStream(input2),
]).subscribe(console.log);
