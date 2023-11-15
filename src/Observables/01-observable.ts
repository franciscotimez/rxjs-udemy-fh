import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: function (value: any): void {
    console.log("seguiente[next]:", value);
  },
  error: function (err: any): void {
    console.log("error[obs]:", err);
  },
  complete: function (): void {
    console.log("Complete[obs]:");
  }
};
// const obs$ = Observable.create()

const obs$ = new Observable<string>(subs => {
  subs.next("hola");

  // Forzar error
  // const a = undefined
  // a.nombre = "fran"

  subs.next("mundo");
  subs.complete();
  subs.next("mundo");
});


obs$.subscribe(observer);

// obs$.subscribe(
//   valor => { console.log("next: ", valor); },
//   error => { console.log("error: ", error); },
//   () => { console.log("complete: "); },
// );
