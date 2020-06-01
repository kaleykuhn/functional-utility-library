// Return part of an Array using Slice
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//A1: array
//A2: index to start slice
//A3: index to end slice which is non-inclusive
//R: new array

function returnPartArrSlice(beginSlice, endSlice) {
   let array = inputAnim;
   console.log(array);
   var slicedArr = array.slice(beginSlice, endSlice);
   return slicedArr;
}

// Return part of an array using slice method
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//
//A1: begin splice
//A2: end splice which is not 0 based
//R: removed array items
function removeElemSlice(beginSlice, endSlice) {
   let array = cities;
   console.log(array);
   var slicedArr = array.slice(beginSlice, endSlice);
   return slicedArr;
}
//Combine two arrays using concat method
var first = [1, 2, 3];
var second = [4, 5];
//A1: array
//A2: array
//R : combined array
function concatArr(array1, array2) {
   var conArr = array1.concat(array2);
   console.log(conArr);
   return conArr;
}
// Add Elements to the End of an Array using concat
//var first = [1, 2, 3];
//var second = [4, 5];
//non mutating
// A1: array
// A2: element
// R: array with element added to end
function concatToEndArray(arr1, ele) {
   var conArrEnd = arr1.concat(ele);
   console.log(conArrEnd);
   return conArrEnd;
}
//Use higher order functions to solve complex problem
// We want to return a new array that has only positive integers and we want to square those integers in array at end
// first we use the filter method on the numbers and Number.isInteger to find if that num is an integer and add to new array
//Then we want only the positive numbers left so we filter out anything that isnt 0 or above.
// With that new array then we want to multipy the numbers by themselves to get our return.
// A1: array
// R: new array
var squareList = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
function useHigherOrderFunc(arr) {
   let allInt = arr.filter((num) => {
      if (Number.isInteger(num) === true) {
         return true;
      } else {
         return false;
      }
   });
   console.log(allInt);
   let allIntPos = allInt.filter((num) => {
      if (num >= 0) {
         return true;
      } else {
         return false;
      }
   });
   console.log(allIntPos);
   let squareList = allIntPos.map((num) => {
      return num * num;
   });
   console.log(squareList);
   return squareList;
}

// Use reduce Method to analyze Data
// A1: array
// R : number
function reduceMethAnaData(arr) {
   let newArr = arr
      .filter((num) => num < 0)
      .reduce((arrSub, num) => arrSub - num);
   return newArr;
}
//Sort an Array Alphabetically
//A: callback function alphabetical Order is used for array sort
//R: The elements return in alphabetical order
var letterArr = ["a", "d", "c", "a", "z", "g"];
function SortArrAlpha(array) {
   console.log(array);
   return array.sort();
   //return array.sort(function (a, b) {
   //return a === b ? 0 : a < b ? -1 : 1;

   //});
}
//Split a string into an Array Using the split Method
//A1: The string is split and made into seperate strings with the \W character expression to define where to split the string
//R: Returns an array with string in it with each word seperate
function SpltStrArr(str) {
   return str.split(/\W/);
}

//Combine an Array into a string using join method
//A1: string use the \W to define seperation
//R: string as a sentence without punctuation
function sentensify(str) {
   var sepStr = str.split(/\W/).join(" ");
   console.log(sepString);
   return sepStr;
}
//
function convStrUrlSlug(name) {
   return name.toLowerCase().trim().split(/\s+/).join("-");
}
// Use the every() method to check that every element in the array meets a criteria
//A1: array
// this functions criteria is for positive numbers in an array
// can be used many other criteria with this method
// R: the function returns true or false boolean value
function everyMethCheckPos(arr) {
   console.log(arr);
   return arr.every((value) => value > 0);
}
// Use the some method to check that any element in an array   meet a criteria
//A1: array scans this to see if it meets criteria

function someMethCheckNeg(arr) {
   console.log(arr);
   return arr.some((value) => value < 0);
}

//function SpltStrInArr(str) {

///}
/*var name = "Kaley";
var spltStr = name.split("");
console.log(spltStr);
for (i = 0; i < name.length; i++) {
   console.log("forloop ", name);
}
*/
//var eArr = [];
//var arr = [
// [1, 2],
//[3, 4],
//[5, 6],
//];
//for (var i = 0; i < arr.length; i++) {
//console.log(arr[i]);
//for (var j = 0; j < arr[i].length; j++) {
// console.log("secondLoop", arr[i][j]);

//}
//}
//function reduceMethod(objlist, name) {
//var averageRating =
/// objlist.filter((film))
//}

//function
