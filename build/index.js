"use strict";
exports.__esModule = true;
var maxSubarraySum_1 = require("./5-chapter/maxSubarraySum");
var t1 = performance.now();
console.log((0, maxSubarraySum_1.maxSubarraySum)([-1, 0, 1, 5, 1, 7, 2], 7));
var t2 = performance.now();
console.log("takes ".concat((t2 - t1) / 1000, " seconds"));
