// не ок - в миллисек
"use strict";

var currentDate = new Date();
var addDays;
var d = currentDate.toDateString();
console.log(d);// ок */


function addTwoDays(date){
	
	//return addDays = currentDate.setDate(date).toDateString();// не ф-ция
	
	addDays = currentDate.setDate(date);
	return addDays;
	/*addDays = d.setDate(date);// не ф-ия
	return addDays;*/
	
	//console.log(addDays);
	//var res = addDays.toDateString();// не ф-ция
	//return res;
}
/*addDays.toDateStr = function(){// 
	addDays.toDateString();
}*/

/*addDays.toDateStr = function(){
	return addDays.toDateString();
}*/

//addDays.toDateString();


console.log(addTwoDays(2));// выводит в миллисек !!!

//console.log(currentDate.toDateString());// 
//console.log(addDays.toDateStr());// ошибка не ф-ция