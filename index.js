const Rxjs = require("rxjs");

const a = new Rxjs.Observable((observer) => {
  setTimeout(() => observer.next(1), 3000);
  setTimeout(() => observer.next(2), 12000);
  setTimeout(() => observer.next(3), 19000);
});

const b = new Rxjs.Observable((observer) => {
  setTimeout(() => observer.next(0), 0);
  setTimeout(() => observer.next(2), 4000);
  setTimeout(() => observer.next(4), 7000);
  setTimeout(() => observer.next(5), 14000);
  setTimeout(() => observer.next(7), 21000);
});
const startTime = new Date().getSeconds();
let relativeTime = new Date().getSeconds() - startTime;
let diff, last;
last = relativeTime;

// a.pipe(
//   Rxjs.switchMap((x) =>
//     b.pipe(
//       Rxjs.map((m) => {
//         relativeTime = new Date().getSeconds() - startTime;
//         diff = relativeTime - last;
//         last = relativeTime;
//         return (
//           (relativeTime < 10 ? "0" + relativeTime : relativeTime) +
//           "(+" +
//           diff +
//           "):  x  *  m   =   " +
//           x +
//           "  *  " +
//           m +
//           "  =  " +
//           x * m
//         );
//       })
//     )
//   )
// ).subscribe(console.log);

// a.pipe(
//   Rxjs.mergeMap((x) =>
//     b.pipe(
//       Rxjs.map((m) => {
//         relativeTime = new Date().getSeconds() - startTime;
//         diff = relativeTime - last;
//         last = relativeTime;
//         return (
//           (relativeTime < 10 ? "0" + relativeTime : relativeTime) +
//           "(+" +
//           diff +
//           "):  x  *  m   =   " +
//           x +
//           "  *  " +
//           m +
//           "  =  " +
//           x * m
//         );
//       })
//     )
//   )
// ).subscribe(console.log);

// Rxjs.combineLatest(a, b).subscribe(console.log);

// a.pipe(Rxjs.withLatestFrom(b)).subscribe(console.log);

// a.pipe(Rxjs.tap(console.log)).subscribe((x) => console.log("wow:" + x));

// a.pipe(Rxjs.first()).subscribe(console.log);

// a.pipe(Rxjs.map((x) => "wow:" + x)).subscribe(console.log);

// a.pipe(Rxjs.take(2)).subscribe(console.log);

a.pipe(Rxjs.filter((x) => x > 1)).subscribe(console.log);
