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
