### Usage:

- Open index.ts
- change `algName` with desirable algorithm and change import path
- change `algInput` with required input (typescript will help you guess)
- run `npm start` and see your output on terminal

```
test in index.ts by importing function and running like this:

 import { algName } from "./5-chapter/algName";

 const t1 = performance.now();
 console.log(algName(algInput));
 const t2 = performance.now();

 console.log(`takes ${(t2 - t1) / 1000} seconds`);
```
