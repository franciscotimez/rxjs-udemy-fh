import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any): void => console.log("[next]:", value),
  error: (err: any): void => console.warn("[error]:", err),
  complete: (): void => console.info("[complete]:")
};


// Crear un contador que emita cada segundo 1,2,3,4,5...
const intervalo$ = new Observable<number>(subs => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    console.log("Intervalo", count);
    subs.next(count);
  }, 1000);

  // Funcion que se ejecuta en el unsubscribe
  return () => {
    clearInterval(interval);
    console.log("Intervalo Destruido");
  };
});

const subscription = intervalo$.subscribe(num => console.log("Num: ", num));

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
