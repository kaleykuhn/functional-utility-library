// Return part of an Array using Slice
//A1: array
//A2: index to start slice
//A3: index to end slice
//R: new array

function returnPartArrSlice(arr, beginSlice, endSlice) {
   slicedArr = arr.slice(beginSlice, endSlice);
   return slicedArr;
}
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//Remove part of an array using splice
//A1: begin splice
//A2: end splice which is not 0 based
//R: removed array items
function removeElemSplice(beginSplice, endSplice) {
   let array = cities;
   console.log(array);
   var splicedArr = array.splice(beginSplice, endSplice);
   return splicedArr;
}
