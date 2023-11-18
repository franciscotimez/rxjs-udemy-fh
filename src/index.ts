import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value: any): void => console.log("[next]:", value),
  error: (err: any): void => console.warn("[error]:", err),
  complete: (): void => console.info("[complete]:")
};

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => {
    subs.next(Math.random())
  }, 5000)

  return () => clearInterval(intervalID)
})

// const subs1 = intervalo$.subscribe(rnd => console.log("subs1", rnd))
// const subs2 = intervalo$.subscribe(rnd => console.log("subs2", rnd))

// Subject
// 1 - Casteo Multiple
// 2 - Es un Observer
// 3 - Next, Error y Complete
// 
const subject$ = new Subject()
intervalo$.subscribe(subject$)

const subs1 = subject$.subscribe(rnd => console.log("subs1", rnd))
const subs2 = subject$.subscribe(rnd => console.log("subs2", rnd))