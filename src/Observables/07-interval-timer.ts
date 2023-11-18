import { interval, timer } from "rxjs";

const observer = {
  next: val => console.log("next", val),
  complete: () => console.log("Completado")
}

const hoyEn10seg = new Date(); // ahora
hoyEn10seg.setSeconds(hoyEn10seg.getSeconds() + 10)

const interval$ = interval(1000)

// const timer$ = timer(2000)
// const timer$ = timer(2000,1000)
const timer$ = timer(hoyEn10seg)

console.log("Inicio");
// interval$.subSscribe(observer)
timer$.subscribe(observer)
console.log("Fin");

