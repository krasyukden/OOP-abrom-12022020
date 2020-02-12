"use strict";
var arr = [];
var lastArr = [];
while(true){
	var tmp = prompt("Введите строку", "'end' for end");
	if(tmp == "end"){
		break;
	}
	var tmpAlone = [];	
tmpAlone = tmp.split("");// массив
	for(var j = 0; j < tmpAlone.length; j++){
		var newArr = tmpAlone.map(
				function (value){
					return Number(value);
				}

		)
	lastArr.push(newArr[j]);	
	}

	
		
};


console.log(tmpAlone);//["f", "d", "v", "5"]// последний элем
console.log(lastArr);// [1, NaN, 2, NaN]

console.log(newArr);


/*for(var j = 0; j < tmpAlone.length; j++){
	parseInt(tmpAlone[j]);*/
/*if(typeof parseInt(tmpAlone[j]) == "number" && !isNaN){
		console.log(tmpAlone[j]);*/
		//console.log(tmpAlone[j]);
		//tmpAlone.join(" ");
	


