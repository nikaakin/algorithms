import {
  LinkedList,
  LinkedListNode,
  Queue,
  Stack,
} from "@/version-1/data-structures";
import {
  binary_search,
  binary_search_alt,
  bubble_sort,
  quick_sort,
  two_crystal_balls,
} from "@/version-1/algorithms";

const t1 = performance.now();

console.log(quick_sort([1, 3, 4, 2, 21, 1]));

const t2 = performance.now();
console.log(`takes ${(t2 - t1) / 1000} seconds`);
