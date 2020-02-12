"use strict";
// ok не до конца - одна строка в массиве
function matrixToArray(matrix) {
   // Ваш код
   
   //return arr.reduce(reducer);// 1,2,3,4,5,6,7,8,9 !!!!!
   return arr.reduce(reducer).split();// ["1,2,3,4,5,6,7,8,9"] !!!!!
    /*return function(){
	   reducer.call(arr);
   };*/
   
}
//matrixToArray: matrixToArray;


function reducer(accumulator, currentValue) {
	return accumulator + "," + currentValue;
}




var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
//var arr = arr.split(); 
//var arr = parseInt(arr);

var newArr = arr.map(
	function(value){
		return Number(value)
	}
)

console.log(arr); // должно - [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(newArr); // NaN

/*Напишите функцию matrixToArray(matrix), которая принимает двумерный массив (матрицу) matrix, разворачивает двумерный массив в одномерный и возвращает его. Данное задание необходимо решить при помощи аккумулирующих методов.*/