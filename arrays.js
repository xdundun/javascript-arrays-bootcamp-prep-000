var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var foo = [element,...array];
  return foo;
}

function destructivelyAddElementToBeginningOfArray(foo, element) {
  foo.unshift(element);
  return foo;
}

function addElementToEndOfArray() {
 var foo = [...array,element];
 return foo;
}

function destructivelyAddElementToEndOfArray() {

}

function accessElementInArray(){

}

function destructivelyRemoveElementFromBeginningOfArray() {

}

function removeElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}

function removeElementFromEndOfArray() {

}
