"use strict";
//  ок
var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
var i = 0;

function arr1(value){
	 arrLength[i] = "<li>" + value + "</li>";
	 return arrLength[i];
}

console.log(arr.map(arr1));

/*
for (var i = 0; i < arr.length; i++) {
   arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]*/
//Перепишите данный код, заменив цикл for на метод map().
