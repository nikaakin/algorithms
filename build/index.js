"use strict";
exports.__esModule = true;
var stringSearch_1 = require("./5th-chapter/stringSearch");
var t1 = performance.now();
console.log((0, stringSearch_1.stringSearch)("newaaaanewpoqpe qnewpqekqpwo n ew new", "new"));
var t2 = performance.now();
console.log("takes ".concat((t2 - t1) / 1000, " seconds"));
