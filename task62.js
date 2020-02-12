"use strict";
// ok
var str = "Login1,LOgin2,login3,loGin4";
var arr = [];
var tmp;

tmp = str.toLowerCase();
arr = tmp.split(",");


console.log(arr);//  ["login1", "login2", "login3", "login4"]