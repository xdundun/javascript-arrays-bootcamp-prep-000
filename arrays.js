var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var foo = [element,...array];
  return foo;
}

function destructivelyAddElementToBeginningOfArray(foo, element) {
  foo.unshift(element);
  return foo;
}

function addElementToEndOfArray(array,element) {
 var foo = [...array,element];
 return foo;
}

function destructivelyAddElementToEndOfArray(foo, element) {
  foo.push(element);
  return foo;
}

function accessElementInArray(array, index) {
  console.log(array[index])

}

function destructivelyRemoveElementFromBeginningOfArray() {

}

function removeElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}

function removeElementFromEndOfArray() {

}
