import { from, queueScheduler, scheduled } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

const numeros$ = scheduled<number | string>([1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1'], queueScheduler);

console.log("Antes");
numeros$.pipe(
  distinctUntilChanged() // === Elimina los distintos y elimina los repetidos ya emitidos
).subscribe(console.log);
console.log("Despues");

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'X'
  },
  {
    nombre: 'Zero'
  },
  {
    nombre: 'Zero'
  },
  {
    nombre: 'Dr. Willy'
  },
  {
    nombre: 'X'
  },
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'Zero'
  },
];
console.log("Antes");
from(personajes).pipe(
  distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre)
).subscribe(console.log);
console.log("Despues");
