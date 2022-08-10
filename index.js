const Rxjs = require("rxjs");

const a = new Rxjs.Observable((observer) => {
  setTimeout(() => observer.next(1), 4000);
  setTimeout(() => observer.next(2), 10000);
  setTimeout(() => observer.next(3), 17000);
});

const b = new Rxjs.Observable((observer) => {
  setTimeout(() => observer.next(0), 1000);
  setTimeout(() => observer.next(2), 5000);
  setTimeout(() => observer.next(4), 8000);
  setTimeout(() => observer.next(5), 15000);
  setTimeout(() => observer.next(7), 22000);
});

a.pipe(Rxjs.switchMap((x) => b.pipe(Rxjs.map((m) => x * m)))).subscribe(
  console.log
);

/* a.pipe(Rxjs.mergeMap((x) => b.pipe(Rxjs.map((m) => x * m)))).subscribe(
  console.log
); */

//Rxjs.combineLatest(a, b).subscribe(console.log);

//a.pipe(Rxjs.withLatestFrom(b)).subscribe(console.log);

//a.pipe(Rxjs.tap(console.log)).subscribe((x) => console.log("wow:" + x));

//a.pipe(Rxjs.first()).subscribe(console.log);

//a.pipe(Rxjs.map((x) => "wow:" + x)).subscribe(console.log);

//a.pipe(Rxjs.take(2)).subscribe(console.log);

//a.pipe(Rxjs.filter((x) => x > 1)).subscribe(console.log);
