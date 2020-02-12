"use strict";
// ок


function deleteEvenNumbers(arr) {
   // Ваш код
   return arr.filter(condition);
   
   /*return function (){
	   condition.call(arr);
	   console.log(1);
   }*/
    
}

function condition(value){

	   return value % 2 == 1;
}
    

var arr = [1, 2, 3, 4, 5];

var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]

/*
Задание №7. Встроенные типы объектов
Напишите функцию deleteEvenNumbers(array), которая принимает массив array, удаляет из массива array четные числа и возвращает его.*/