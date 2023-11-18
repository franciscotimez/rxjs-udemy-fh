import { asyncScheduler, range } from "rxjs";

const src1$ = range(2, 5, asyncScheduler)

console.log("Inicio");
src1$.subscribe(console.log)
console.log("Fin");
