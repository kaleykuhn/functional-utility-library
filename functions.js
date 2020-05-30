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
