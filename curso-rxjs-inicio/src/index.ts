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
