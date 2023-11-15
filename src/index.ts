import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: function (value: any): void {
    console.log("[next]:", value);
  },
  error: function (err: any): void {
    console.warn("[error]:", err);
  },
  complete: function (): void {
    console.info("[complete]:");
  }
};
