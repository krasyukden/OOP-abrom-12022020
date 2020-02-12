"use strict";// как вычислить число в строке?? - task63a
var arr = [];
while(true){
	var tmp = prompt("Введите строку", "'end' for end");
	var tmpAlone = tmp.split("");// массив
	console.log(tmpAlone);
	var tmpNum = [];
	//tmpNum = parseInt(tmpAlone);
	//console.log(tmpNum);
	
	/*for(var i = 0; i < tmpAlone.length; i++){
		tmpNum [i] = parseInt(tmpAlone[i]);
		//console.log(tmpNum [i]);
		
		if(tmpNum[i] % 2 == 0 || tmpNum[i] % 2 == 1){
			function add(value){
				return "Number" + value + "_обр";
			}
		var arr1 = tmpNum.map(add);	*/
			
			
			//tmpAlone.join(" ");
			//typeof tmpNum[i] === "number" && !isNaN(tmpNum[i])// не раб
			/*function addNumber(value){
			return "Number" + value;
			}
		var arrPlusNumber = tmpAlone.map(addNumber);*/
		//var arrPlusNumber = tmpNum.map(addNumber);
			
			//console.log(arrPlusNumber[i]);
			
	//}
	//console.log(arrPlusNumber);
	for(var i = 0; i < tmpNum.length; i++){
			//console.log(tmpNum[i]);// проверка
	}
			
	arr.push(tmp);
	if(tmp == "end"){
		arr.pop();
		break;
	}
};

//var number = parseInt(arr);// 1
function add(value){
	
	return value + "_обр";
}
var arr1 = arr.map(add);
var arr2 = arr1.join(" ");// из мас в строку

console.log(arr);
console.log(arr2);

/*function newNumber (value){
		console.log(arrPlusNumber[i]);
	}
	arrPlusNumber.forEach(newNumber);*/
	
	//var res = arrPlusNumber.join("");
	//console.log(res);

//var number;
/*
function newNumber (value){
	if(arr[i] % 2 == 0 || arr[i] % 2 == 1){
			function addNumber(value){
			return "Number" + value;
			}
		var arrPlusNumber = tmpAlone.map(addNumber);
}
var arrPlusNumber = tmpAlone.map(addNumber);

arr1.forEach(newNumber);
*/

//console.log(number);

/*if(typeof tmpNum == "number"){
		console.log(1);
		
	}*/
	/*if(number in tmpNum){// не раб
		console.log(2);
	}*/
	
	/*
function num(value){
	if(parseInt(arr){
		console.log(1);
	}
}
arr.forEach(num);
*/