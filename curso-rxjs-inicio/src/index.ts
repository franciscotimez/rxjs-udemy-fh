import { Observable } from "rxjs";

// const obs$ = Observable.create()

const obs$ = new Observable<string>(subs => {
  subs.next("hola");
  subs.next("mundo");
  subs.complete();
  subs.next("mundo");
});


obs$.subscribe(console.log);
