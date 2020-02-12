// !!! // 1) если правильные ввели индексы - ок, 2) Если нет -  NaN

"use strict"
var arr = [0, 1, 2, 5, 10];//5
var n = arr.length;
var first; 
var second;

function sumSliceArray(arr, first, second){
	if(typeof first == "number" || !isNaN(first) || 0 <= first ||  first < n - 1){
			first = first;
	}
	if(typeof second == "number" || !isNaN(second) || 0 < second || second <= n - 1){
			second = second;
	}
	
	return arr[first] + arr[second];
	
}
 
try {
	//sumSliceArray (arr, first, second);
	console.log(sumSliceArray(arr, 25, 3));// если правильные ввели индексы - ок, Если нет -  NaN
} catch (error){
	//console.dir(error); // ПОКАЗЫВАЕТ
	console.log(error.name); 
	console.log(error.message); 
} finally{
		console.log("finally");
}

