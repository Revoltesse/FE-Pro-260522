var x = 6;
var y = 14;
var z = 4;

var result = x += y - x++ * z;
document.write(result + "<br/>");

/*
1) інкремент х++ = 6, 
2) множення на z (маємо 24), 
3) відняття у -24 (маємо -10),
4) додавання до х: 6+(-10) = -4 -результат)
*/


var x = 6;
var y = 14;
var z = 4;

var result2 = z = --x - y * 5;
document.write(result2 + "<br/>");

/*
1) декремент х = 5,
2) множення у*5 (70),
3) віднімання - 5-70 = -65
*/


var x = 6;
var y = 14;
var z = 4;

var result3 = y /= x + 5 % z;
document.write(result3 + "<br/>");

/*
1) залишок від ділення 5%/4=1,
2) додавання х+1 (6+1),
3) ділення у/7 = 2
*/

var x = 6;
var y = 14;
var z = 4;

var result4 = z - x++ + y * 5;
document.write(result4 + "<br/>");

/*
1) інкремент х=6,
2) множення у*5 = 70,
3) віднімання z - 6 = -2,
4) додавання -2 + 70 = 68,
*/

var x = 6;
var y = 14;
var z = 4;

var result5 = x = y - x++ * z;
document.write(result5 + "<br/>");

/*
1) інкремент х = 6,
2) множення 6*4 = 24,
3) віднімання у - 24 = -10
*/