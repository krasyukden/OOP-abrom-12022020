"use strict";
// ok
var arr = ["Джаз", "Блюз"];
arr.push("Рок-н-Ролл");
console.log(arr);
arr[arr.length - 2] = "Классика";
console.log(arr);
var d = arr.shift();
console.log(d);
arr.unshift("Рэп", "Регги");
console.log(arr);
