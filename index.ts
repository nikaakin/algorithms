import { stringSearch } from "./5th-chapter/stringSearch";

const t1 = performance.now();
console.log(stringSearch("newaaaanewpoqpe qnewpqekqpwo n ew new", "new"));
const t2 = performance.now();

console.log(`takes ${(t2 - t1) / 1000} seconds`);
