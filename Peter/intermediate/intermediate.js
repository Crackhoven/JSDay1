const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]; //generate Array
console.log(cars); //show contents of Array in console
console.log(cars.sort()); //sorts contents of Array alphabetically
/* l1-3 work */
//Excercise 2 Array 1
const fruit = ["apple", "banana", "kiwi"];
console.log(fruit);
fruit.push("orange"); //adds element at end of Array
console.log(fruit);
fruit.pop(); //removes last element of Array
console.log(fruit);
//Excercise 2 Array 2
const animals = ["monkey", "horse", "dog"];
console.log(animals);
console.log(animals.sort());
console.log(animals.unshift("cat")); //adds new element at the beginning of Array and returns new length in console
console.log(animals);
//Excercise 3
var fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon".split("/"); //Creates Array removing the /
console.log(fruits.join("\n")); //ouput content of array with a linebreak (\n) after every element
