"use strict";
// ок
// Ваш код
var arr = [5, 1, 4, 2, 3];


//console.log(arr);// раб
arr.sortDesc = function(){ // Добавил метод !!!
		arr.sort().reverse();
};



arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1] // sortDesc: ƒ] - в конце!!!




/*Расширьте тип объектов Array методом sortDesc(), который сортирует массив по убыванию.*/





/*arr = {
	display: function(){
		console.log(arr);
	}
}*/