
// дополнительная перменная для второго числа
// не ок
"use strict"
var a = [6, -3, -3, 4, 5, 6, 7, 7, 9, 8, 10, -3, 10, 8, 6];//6,-3,-3,6,-3,6
var n = a.length;//15
var arr = [];
var k = 0;
var m;
var tmp;


	for (var i = 0; i < a.length; i++){
		for(var j = i + 1; j < a.length; j++){
			
			
			if(a[i] == a[j]){
				
				k++;
				//console.log(k);
				if(k == 1){
					tmp = a[i];
				}
				if(k >= 2){
					arr[i + 1] = a[i];
					arr[i] = tmp;
					k = 0;
				}
					if(j == a.length - 1){
						k = 0;
						
					}
				
				
				
			
			}
		}
	}
for (m = 0; m <= n; m++){
	// для проверки
	
	console.log(arr[m]);// [6, -3, -3, empty × 2, 6, 6, empty × 2, 8, 8]
}		


//var newArr = a.map(condit);
//console.log(newArr);


/*
for (var i = 0; i < a.length; i++){
	for(var j = i + 1; j < a.length; j++){
		//console.log(j);// до 15
		
		if(a[i] == a[j]){
			k++;
			//console.log(k);
			//console.log(j);//
			//arr[i] = a[i];
			if(k >= 2){

				arr[i] = a[j];
				//continue;
			}
			else if(j == a.length){
				k = 0;
				//arr[i] = a[i];
				//console.log(k);
				//console.log(j);
			}
			//console.log(k);
			
		}
	}	
}*/


/*Array98. Дан целочисленный массив размера N. Удалить из массива все элементы, встречающиеся менее трех раз, и вывести размер полученного массива и его содержимое.*/