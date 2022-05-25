//Excercise 1
//sum variables
var a = 7;
var b = 14;
var c = "21";
var d = "36";
var e = 42;
var sum_e1;
sum_e1 = a + b + Number(c) + Number(d) + e;
console.log(sum_e1);
//multiply variables
var f = "1";
var g = 15;
var h = 8;
var i = "1";
var mul_e1;
mul_e1 = Number(f) * g * h * Number(i);
console.log(mul_e1);
//divide results
document.write(sum_e1 / mul_e1);
document.write("<hr>");
//==============================
//Excercise 2
document.write("The Multi Array <br>");
var mul_array = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 25, 7],
  [21, 4, 6, 17],
  [3, 5, 26, 3],
];
document.write(mul_array.join("<br>"));
// "The Output" 11, 25, 17, 27 and 0 in the console. 1 per line
console.log(mul_array[1][1]);
console.log(mul_array[4][2]);
console.log(mul_array[5][3]);
console.log(mul_array[2][3]);
console.log(mul_array[2][1]);
console.log("=================================");
// "The Output" 11, 25, 17, 27 and 0 in the console. All in one line
console.log(
  mul_array[1][1],
  mul_array[4][2],
  mul_array[5][3],
  mul_array[2][3],
  mul_array[2][1]
);
