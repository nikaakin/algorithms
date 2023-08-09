### Usage:

- Open index.ts
- change `algName` with desirable algorithm and change import path
- change `algInput` with required input (typescript will help you guess)
- change `algPath` with path of the desired algorithm
- run `npm start` and see your output on terminal

#### test in index.ts by importing function and running like this:

```
 import { algName } from "@/algPath";

 const t1 = performance.now();
 console.log(algName(algInput));
 const t2 = performance.now();

 console.log(`takes ${(t2 - t1) / 1000} seconds`);
```

### tests:

- Test cases for each algorithm are in `tests` folder. Import test cases in `index.test.ts`.
- Run `npm test` to run tests.

```
import { demo } from "@/tests";

demo();
```

- alternatively, you can run `npm run test:watch` to run tests in watch mode.
